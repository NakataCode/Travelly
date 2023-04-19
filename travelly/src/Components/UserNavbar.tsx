import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div>
      <nav className="relative container mx-auto p-5">
        <div className="flex items-center justify-between">
          <div className="pt-2 text-2xl text-white font-bold ">
            <p>Travelly</p>
          </div>
          <div className="flex space-x-6 pt-2 text-xl text-white">
            <Link to="/createBlog">Create Blog</Link>
            <span>/</span>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      </nav>
      <hr className=" w-full underline" />
    </div>
  );
};

export default UserNavbar;
