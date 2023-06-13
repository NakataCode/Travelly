import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  //testing how the data is being displayed for now:
  return (
    <div>
      <h1 className="text-white">{blog.title}</h1>
      <p className="text-white">{blog.description}</p>
      <p className="text-white">{blog.createdAt}</p>
      <p className="text-white">{blog.priceRange}</p>
      <p className="text-white">{blog.userEmail}</p>
      <p className="text-white">{blog.country}</p>
      {blog.imageUrls.map((url, index) => (
        <img key={index} src={url} alt="" />
      ))}
    </div>
  );
}

export default Blog;
