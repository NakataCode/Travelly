import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";
import { BlogData } from "../interfaces/blogData";

function Blog() {
  const { id } = useParams<string>();
  const [blog, setBlog] = useState<BlogData | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        const docRef = doc(db, "blogs", id);
        const blogDoc = await getDoc(docRef);
        if (blogDoc.exists()) {
          setBlog(blogDoc.data() as BlogData);
        } else {
          console.log("No such document!");
        }
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  //Add a comments option for the blog, but specifically on each individual blog page!
  return (
    <div>
      <div className="pt-3 text-2xl text-white font-bold px-2 z-[-10]">
        <Link
          className="rounded px-2 absolute hover:bg-blue-400 transition-colors duration-300"
          to="/userHome"
        >
          Go Back
        </Link>
      </div>
      <div className="flex flex-col justify-center items-start m-auto mt-28 text-left w-3/4 lg:w-1/2 text-white font-bold">
        <Carousel
          showThumbs={false}
          showStatus={false}
          dynamicHeight={true}
          className="w-full mb-5"
        >
          {blog.imageUrls.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt=""
                className=" max-w-7xl h-[22rem] object-cover rounded-lg"
              />
            </div>
          ))}
        </Carousel>
        <h1 className="text-3xl pt-4">{blog.title}</h1>
        <p className="text-xl">{blog.country}</p>
        <p className="text-2xl font-light py-4">{blog.description}</p>

        <p className="font-light">Price Range: {blog.priceRange}</p>
        <p className="font-light">Posted by: {blog.userEmail}</p>
        <p className="block font-sans text-sm leading-relaxed antialiased ">
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
      </div>
    </div>
  );
}

export default Blog;
