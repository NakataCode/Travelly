import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addBlog } from "../features/blogSlice";
import { auth, db, storage } from "../firebase";
import { BlogData } from "../interfaces/blogData";

function CreateBlog() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [priceRange, setPriceRange] = useState("cheap");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceRange(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const blogData: BlogData = {
      title,
      description,
      imageUrls: [],
      priceRange,
      country,
      createdAt: new Date().toISOString(),
      userEmail: auth.currentUser?.email || "",
    };

    const blogCollection = collection(db, "blogs");

    try {
      const imageUrls: string[] = [];
      for (const image of images) {
        const storageRef = ref(storage, `blog_images/${image.name}`);
        await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(storageRef);
        imageUrls.push(imageUrl);
      }

      const blog = { ...blogData, imageUrls };
      await addDoc(blogCollection, blog);

      dispatch(addBlog(blog));

      setTitle("");
      setDescription("");
      setImages([]);
      setPriceRange("");
      setCountry("");
    } catch (error) {
      console.error(error);
    }

    navigate("/userHome");
  };

  const handleGoHome = () => {
    return navigate("/");
  };

  return (
    <div className="text-white">
      <button
        type="button"
        onClick={() => handleGoHome()}
        className="fixed top-0 left-0 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
      >
        Go back
      </button>
      <div className="flex justify-center items-center h-screen bg-create-Blog bg-center bg-cover bg-fixed">
        <div className="w-full max-w-lg backdrop-blur-lg backdrop-saturate-200 bg-opacity-0 bg-white rounded-lg border border-opacity-30 border-gray-300 p-8">
          <form
            onSubmit={handleSubmit}
            className=" bg-opacity-90 px-8 pt-6 pb-8 w-full"
          >
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-white font-bold mb-2"
              >
                Title:
              </label>

              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleTitleChange}
                className="border border-gray-500 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-white font-bold mb-2"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
                className="border border-gray-500 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="images"
                className="block text-white font-bold mb-2"
              >
                Images:
              </label>
              <input
                type="file"
                id="images"
                name="images"
                onChange={handleImageChange}
                multiple
                className="text-white"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="priceRange"
                className="block text-white font-bold mb-2"
              >
                Price Range:
              </label>
              <select
                id="priceRange"
                name="priceRange"
                onChange={handlePriceRangeChange}
                className="border border-gray-500 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="cheap">Cheap</option>
                <option value="middle">Middle</option>
                <option value="expensive">Expensive</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-white font-bold mb-2"
              >
                Country:
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={handleCountryChange}
                className="border border-gray-500 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300 focus:outline-none focus:shadow-outline"
              >
                Create Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
