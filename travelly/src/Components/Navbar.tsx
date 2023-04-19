import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="relative container mx-auto p-5">
        <div className="flex items-center justify-between">
          <div className="pt-2 text-2xl">
            <p>Travelly</p>
          </div>
          <div className="flex space-x-6 pt-2 text-xl relative z-10">
            <Link to="/signup">Sign up</Link>
            <span>/</span>
            <Link to="/signin">Sign in</Link>
          </div>
        </div>
      </nav>
      <hr className=" w-full underline" />
    </div>
  );
};

export default Navbar;
