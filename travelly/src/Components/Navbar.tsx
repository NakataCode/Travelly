import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="relative container mx-auto p-5">
        <div className="flex items-center justify-between">
          <div className="pt-2 text-3xl font-bold">
            <p>Travelly</p>
          </div>
          <div className="flex space-x-6 pt-2 text-xl relative z-10">
            <span>/</span>

            <Link to="/about">About</Link>
            <span>/</span>
            <Link to="/contactUs">Contact us</Link>
            <span>/</span>
            <Link to="/signup">Sign up</Link>
            <span>/</span>
            <Link to="/signin">Sign in</Link>
            <span>/</span>
          </div>
        </div>
      </nav>
      <hr className=" w-full underline" />
    </div>
  );
};

export default Navbar;
