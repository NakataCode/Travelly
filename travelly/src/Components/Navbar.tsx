import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="relative container mx-auto p-5">
        <div className="flex items-center justify-between">
          <div className="pt-2 text-xl">
            <p>Travelly</p>
          </div>
          <div className="flex space-x-6 pt-2 text-xl">
            <Link to="/signup">Sign up</Link>
            <span>/</span>
            <Link to="/signin">Sign in</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
