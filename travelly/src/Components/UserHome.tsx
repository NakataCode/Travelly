import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { auth, db, storage } from "../firebase";
import { BlogData } from "../interfaces/blogData";
import Navbar from "./Navbar";

const UserHome = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogData | null>(null);
  const [updatedBlogData, setUpdatedBlogData] = useState<Partial<BlogData>>({});
  const [updatedImages, setUpdatedImages] = useState<File[]>([]);
  const [updatedPriceRange, setUpdatedPriceRange] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUpdatedImages(Array.from(event.target.files));
    }
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatedPriceRange(event.target.value);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, "blogs");
      const blogsSnapshot = await getDocs(blogCollection);
      const blogsData: Partial<BlogData>[] = blogsSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
        } as Partial<BlogData>;
      });

      setBlogs(
        blogsData.filter((blog) => {
          return (
            blog.title &&
            blog.description &&
            blog.imageUrls &&
            blog.priceRange &&
            blog.country &&
            blog.createdAt
          );
        }) as BlogData[]
      );
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (auth.currentUser) {
      setCurrentUserEmail(auth.currentUser.email || "");
    }
  }, []);

  const handleDeleteBlog = async (blogId: string | undefined) => {
    if (blogId) {
      await deleteDoc(doc(db, "blogs", blogId));
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
    }
  };

  const handleEdit = (blog: BlogData) => {
    setEditMode(true);
    setEditingBlog(blog);
    setUpdatedBlogData({ ...blog });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedBlogData({
      ...updatedBlogData,
      [event.target.name]: event.target.value,
    });
  };

  const uploadAndUpdateImages = async (
    updatedImages: File[],
    blogId: string
  ) => {
    const imageUrls: string[] = [];

    for (const image of updatedImages) {
      const storageRef = ref(storage, `blog_images/${blogId}/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);
      imageUrls.push(imageUrl);
    }

    return imageUrls;
  };

  const handleConfirmChanges = async () => {
    if (!editingBlog || !editingBlog.id) return;

    const imageUrls = await uploadAndUpdateImages(
      updatedImages,
      editingBlog.id
    );

    await updateDoc(doc(db, "blogs", editingBlog.id), {
      ...updatedBlogData,
      imageUrls,
      priceRange: updatedPriceRange,
    });

    setBlogs(
      blogs.map((blog) =>
        blog.id === editingBlog.id
          ? {
              ...editingBlog,
              ...updatedBlogData,
              imageUrls,
              priceRange: updatedPriceRange,
            }
          : blog
      )
    );
    setEditMode(false);
    setEditingBlog(null);
    setUpdatedImages([]);
    setUpdatedPriceRange("");
  };

  const handleDiscardChanges = () => {
    setEditMode(false);
    setEditingBlog(null);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-black pt-20 ">
        <div className="mx-auto max-w-4xl">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`border border-white rounded-lg overflow-hidden mb-8 ${
                editMode && editingBlog?.id === blog.id ? "bg-black" : ""
              }`}
            >
              {!editMode || editingBlog?.id !== blog.id ? (
                <>
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    dynamicHeight={true}
                    className="w-full"
                  >
                    {blog.imageUrls.map((url, index) => (
                      <div key={index}>
                        <img
                          src={url}
                          alt={`${blog.title}-${index}`}
                          className="w-full object-cover h-64"
                        />
                      </div>
                    ))}
                  </Carousel>
                  <h2 className="text-white text-2xl font-bold p-4">
                    {blog.title}
                  </h2>
                  <p className="text-white p-4 font-bold">{blog.description}</p>
                  <div className="flex justify-center"></div>
                  <p className="text-white p-4 font-bold">
                    Price Range: {blog.priceRange}
                  </p>
                  <p className="text-white p-4 font-bold">
                    Country: {blog.country}
                  </p>
                  <p className="text-white p-4 font-bold">
                    Created At: {blog.createdAt}
                  </p>
                  <p className="text-white font-bold p-4">
                    Created By: {blog.userEmail}
                  </p>

                  {blog.userEmail === currentUserEmail && (
                    <>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 m-4"
                        onClick={() => handleEdit(blog)}
                      >
                        Edit
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
                        onClick={() => handleDeleteBlog(blog.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="p-4">
                    <input
                      type="text"
                      name="title"
                      value={updatedBlogData.title}
                      onChange={handleChange}
                      className="block w-full p-2 border border-gray-300 rounded mb-4 m-auto max-w-3xl"
                    />
                    <input
                      type="text"
                      name="description"
                      value={updatedBlogData.description}
                      onChange={handleChange}
                      className="block w-full p-2 border border-gray-300 rounded mb-4 m-auto max-w-3xl"
                    />
                    <input
                      type="file"
                      multiple
                      onChange={handleImageChange}
                      className="block w-full p-2 border border-gray-300 rounded mb-4 m-auto max-w-3xl"
                    />
                    <input
                      type="text"
                      name="priceRange"
                      value={updatedPriceRange}
                      onChange={handlePriceRangeChange}
                      placeholder="Price Range"
                      className="block w-full p-2 border border-gray-300 rounded mb-4 m-auto max-w-3xl"
                    />
                    <div className="flex justify-center space-x-24">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
                        onClick={handleConfirmChanges}
                      >
                        Confirm Changes
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
                        onClick={handleDiscardChanges}
                      >
                        Discard Changes
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
