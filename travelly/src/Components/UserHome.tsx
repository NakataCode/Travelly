import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import KUTE from "kute.js";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { auth, db, storage } from "../firebase";
import { BlogData } from "../interfaces/blogData";
import Navbar from "./Navbar";

const userHome = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogData | null>(null);
  const [updatedBlogData, setUpdatedBlogData] = useState<Partial<BlogData>>({});
  const [updatedImages, setUpdatedImages] = useState<File[]>([]);
  const [updatedPriceRange, setUpdatedPriceRange] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [blogsUpdated, setBlogsUpdated] = useState(false);
  const [updatingBlog, setUpdatingBlog] = useState(false);
  const [activeBlogId, setActiveBlogId] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const imageFiles = Array.from(event.target.files);
      setUpdatedImages(imageFiles);

      const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
      setUpdatedBlogData((prev) => ({ ...prev, imageUrls }));
    } else {
      console.log("No files selected");
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
      const blogQuery = query(blogCollection, orderBy("createdAt", "desc"));
      const blogsSnapshot = await getDocs(blogQuery);
      const blogsData: Partial<BlogData>[] = blogsSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
        } as Partial<BlogData>;
      });

      setBlogs(blogsData as BlogData[]);
    };
    fetchBlogs();
  }, [blogsUpdated, updatingBlog]);

  useEffect(() => {
    if (auth.currentUser) {
      setCurrentUserEmail(auth.currentUser.email || "");
    }
  }, [auth.currentUser]);

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
    handleOptionsButtonClick(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedBlogData({
      ...updatedBlogData,
      [event.target.name]: event.target.value,
    });
  };
  const handleOptionsButtonClick = (blogId: string | null) => {
    if (blogId === activeBlogId) {
      setActiveBlogId(null);
    } else {
      setActiveBlogId(blogId);
    }
  };

  const uploadAndUpdateImages = async (
    updatedImages: File[],
    blogId: string
  ) => {
    const imageUrls: string[] = [];

    for (const image of updatedImages) {
      const storageRef = ref(storage, `blog_images/${blogId}/${image.name}`);
      try {
        await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(storageRef);
        imageUrls.push(imageUrl);
      } catch (error) {
        console.error("Failed to upload image:", image.name, error);
      }
    }

    console.log("Uploaded image URLs:", imageUrls);
    return imageUrls;
  };

  const handleConfirmChanges = async () => {
    if (!editingBlog || !editingBlog.id) return;

    const finalBlogData: BlogData = {
      title: updatedBlogData.title || editingBlog.title,
      description: updatedBlogData.description || editingBlog.description,
      country: updatedBlogData.country || editingBlog.country,
      priceRange: updatedPriceRange || editingBlog.priceRange,
      imageUrls: [],
      createdAt: editingBlog.createdAt,
      userEmail: editingBlog.userEmail,
      id: editingBlog.id,
    };

    const newImageUrls =
      updatedImages.length > 0
        ? await uploadAndUpdateImages(updatedImages, editingBlog.id)
        : editingBlog.imageUrls;

    finalBlogData.imageUrls = newImageUrls;

    await updateDoc(doc(db, "blogs", editingBlog.id), { ...finalBlogData });

    setBlogs(
      blogs.map((blog) => (blog.id === editingBlog.id ? finalBlogData : blog))
    );
    setUpdatingBlog(false);
    setBlogsUpdated(!blogsUpdated);

    setEditMode(false);
    setEditingBlog(null);
    setUpdatedImages([]);
    setUpdatedPriceRange("");
  };

  const handleDiscardChanges = () => {
    setUpdatingBlog(false);
    setBlogsUpdated(!blogsUpdated);

    setEditMode(false);
    setEditingBlog(null);
    setUpdatedImages([]);
    setUpdatedPriceRange("");
    setUpdatedBlogData({});
  };

  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();

    return () => {
      tween.stop();
    };
  }, []);

  return (
    <div className="text-white relative">
      <Navbar />
      <div className="bg-center bg-cover bg-fixed pt-20 ">
        <div className="mt-72 fixed inset-0 z-[-1] flex items-center justify-center">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="1300"
            height="1000"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(469.3861944769063 297.1543404854216)">
              <path
                id="blob1"
                d="M129.4 -188.4C144.8 -141.3 118.6 -78.8 117.3 -29.1C116.1 20.6 139.9 57.6 135.5 90.5C131.1 123.5 98.6 152.4 49.9 195.4C1.3 238.4 -63.5 295.4 -106.3 283.5C-149 271.6 -169.8 190.8 -170.1 128.2C-170.3 65.7 -150.2 21.4 -154.7 -40.2C-159.3 -101.8 -188.6 -180.8 -166.9 -226.8C-145.3 -272.8 -72.6 -285.9 -7.8 -276.6C57 -267.3 114 -235.5 129.4 -188.4"
                fill="#1a78eb"
              ></path>
            </g>
            <g
              transform="translate(431.89094927070846 359.61294402405747)"
              className="hidden"
            >
              <path
                id="blob2"
                d="M95.1 -160.2C110.5 -100.4 101.4 -58.3 133.4 -4.6C165.5 49.1 238.6 114.6 232.5 142.7C226.3 170.7 140.9 161.5 77.5 162.8C14.1 164.1 -27.1 176 -74.9 172.9C-122.7 169.8 -177 151.6 -192 115.7C-207 79.7 -182.8 25.9 -159.9 -15C-137 -55.9 -115.4 -83.9 -89 -141.7C-62.6 -199.6 -31.3 -287.3 4.3 -292.4C39.9 -297.5 79.7 -220 95.1 -160.2"
                fill="#1a78eb"
              ></path>
            </g>
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full mx-auto max-w-6xl rounded-xl bg-clip-border shadow-lg justify-items-center">
          {blogs.map((blog) => (
            <div key={blog.id} className="">
              <div className="relative flex w-full max-w-[34rem] flex-col rounded-xl bg-white bg-opacity-10 backdrop-blur-md p-2 border border-white border-opacity-25">
                {blog.userEmail === currentUserEmail && !editMode && (
                  <button
                    onClick={() =>
                      handleOptionsButtonClick(blog.id ? blog.id : "")
                    }
                    className="cursor-pointer z-10 absolute right-1 top-1 bg-white rounded-full w-6 h-6 flex items-center justify-center text-black"
                  >
                    &#8230;
                  </button>
                )}
                {blog.userEmail === currentUserEmail &&
                  activeBlogId === blog.id && (
                    <div className="absolute right-2 top-12 w-32 bg-white rounded-lg shadow-lg p-2 z-10">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="w-full text-left block text-black p-1 hover:bg-gray-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="w-full text-left block text-black p-1 hover:bg-gray-200"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  dynamicHeight={true}
                  className="w-full"
                >
                  {(blog.imageUrls && blog.imageUrls.length > 0
                    ? blog.imageUrls
                    : ["default-image-url"]
                  ).map((url, index) => (
                    <div
                      key={index}
                      className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
                    >
                      {editMode && editingBlog && editingBlog.id === blog.id ? (
                        <>
                          <input
                            type="file"
                            multiple
                            onChange={handleImageChange}
                            accept="image/*"
                            className="block w-full p-2 border border-gray-300 rounded mb-4 m-auto max-w-3xl"
                          />
                          <img
                            src={updatedBlogData.imageUrls?.[0] || url}
                            alt="blog"
                            className="w-32 h-[22rem] object-cover"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={url}
                            alt="blog"
                            className="w-32 h-[22rem] object-cover"
                          />
                          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                          <button
                            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                          >
                            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6"
                              >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                              </svg>
                            </span>
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </Carousel>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    {editMode && editingBlog && editingBlog.id === blog.id ? (
                      <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={updatedBlogData.title}
                        onChange={handleChange}
                        className="block w-full p-2 border text-black border-gray-300 rounded mb-4 m-auto max-w-3xl"
                      />
                    ) : (
                      <>
                        <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                          {blog.title}
                        </h5>
                        <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="-mt-0.5 h-5 w-5 text-yellow-400"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          5.0
                        </p>
                      </>
                    )}
                  </div>
                  {editMode && editingBlog && editingBlog.id === blog.id ? (
                    <input
                      type="text"
                      name="country"
                      value={updatedBlogData.country}
                      onChange={handleChange}
                      className="block w-full p-2 border text-black border-gray-300 rounded mb-4 m-auto max-w-3xl"
                    />
                  ) : (
                    <h3 className="block font-sans text-md font-medium leading-snug tracking-normal text-blue-gray-900 antialiased mb-2 mt-[-0.7rem]">
                      {blog.country}
                    </h3>
                  )}
                  {editMode && editingBlog && editingBlog.id === blog.id ? (
                    <input
                      type="text"
                      name="description"
                      value={updatedBlogData.description}
                      onChange={handleChange}
                      className="block w-full p-2 border text-black border-gray-300 rounded mb-4 m-auto max-w-3xl"
                    />
                  ) : (
                    <p className="block font-sans text-base font-light leading-relaxed text-white  antialiased">
                      {blog.description}
                    </p>
                  )}
                  {editMode && editingBlog && editingBlog.id === blog.id ? (
                    <input
                      type="text"
                      name="priceRange"
                      value={updatedPriceRange}
                      onChange={handlePriceRangeChange}
                      placeholder="Price Range"
                      className="block w-full p-2 border text-black border-gray-300 rounded mb-4 m-auto max-w-3xl"
                    />
                  ) : (
                    <p className="block font-sans text-base font-light leading-relaxed text-white antialiased">
                      Price range: {blog.priceRange}
                    </p>
                  )}

                  <p className="block font-sans text-base font-light leading-relaxed text-white antialiased">
                    Posted:{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    }).format(new Date(blog.createdAt))}
                  </p>
                  <h3 className="block font-sans text-md font-medium leading-snug tracking-normal text-blue-gray-900 antialiased mt-2">
                    Created by: {blog.userEmail}
                  </h3>
                  <div className="flex justify-center mt-8  flex-wrap items-center gap-3">
                    <span
                      data-tooltip-target="wifi"
                      className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-white transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>

                    <span
                      data-tooltip-target="bedrooms"
                      className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-white transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                      </svg>
                    </span>

                    <span
                      data-tooltip-target="fire"
                      className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-white  transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>

                {!editMode && (
                  <Link
                    to={`/blog/${blog.id}`}
                    className="mx-auto my-2 block select-none rounded-lg bg-blue-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Visit Blog
                  </Link>
                )}
                {blog.userEmail === currentUserEmail &&
                  editMode &&
                  editingBlog &&
                  editingBlog.id === blog.id && (
                    <div className="p-6 pt-3 flex flex-row items-center">
                      <button
                        className="mx-2 block w-full select-none rounded-lg bg-green-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-green-500 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        onClick={handleConfirmChanges}
                      >
                        Confirm
                      </button>
                      <button
                        className="mx-2 block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500 transition-all hover:shadow-lg hover:shadow-red-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        onClick={handleDiscardChanges}
                      >
                        Discard
                      </button>
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default userHome;
