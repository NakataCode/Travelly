import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { CloseIcon, HamburgerIcon } from "./Hamburger";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrolling ? "fixed" : "relative"
      } top-0 left-0 right-0 z-50 transition-all duration-300"
      } ${scrolling ? "bg-black" : ""}`}
    >
      <nav className="container mx-auto p-4 w-full ">
        <div className="flex items-center justify-between">
          <div className="pt-2 text-3xl font-bold">
            <Link
              className={`rounded px-2 hover:bg-blue-400 transition-colors duration-300`}
              to="/"
            >
              Travelly
            </Link>
          </div>
          <button
            className={`lg:hidden block p-2 rounded-md focus:outline-none`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full lg:static lg:w-auto lg:flex space-x-6 pt-2 text-lg z-10 font-bold lg:bg-transparent bg-${
              scrolling ? "black" : "black"
            } transition-all duration-300`}
          >
            <div className="grid grid-cols-1 gap-y-2 lg:flex lg:space-x-8 lg:gap-y-0 pt-4 lg:pt-4 text-xl lg:text-lg relative z-10 font-bold mt-[-0.8rem]">
              <div className="transition-colors duration-300 px-36 lg:px-0">
                <span className={`${menuOpen ? "hidden" : ""} cursor-default`}>
                  /
                </span>
                <Link
                  className={`block lg:inline-block rounded mx-2 px-4 hover:bg-blue-400 transition-colors duration-300 text-center my-4 lg:my-0`}
                  to="/about"
                >
                  About
                </Link>
                <span className={`${menuOpen ? "hidden" : ""} cursor-default`}>
                  /
                </span>
                <Link
                  className={`block lg:inline-block rounded mx-2 px-4 hover:bg-blue-400 transition-colors duration-300 text-center my-4 lg:my-0`}
                  to="/contactUs"
                >
                  Contact us
                </Link>
                <span className={`${menuOpen ? "hidden" : ""} cursor-default`}>
                  /
                </span>
                {loggedIn ? (
                  <>
                    <Link
                      className={`block lg:inline-block rounded mx-2 px-4 hover:bg-blue-400 transition-colors duration-300 text-center my-4 lg:my-0`}
                      to="/createBlog"
                    >
                      Create blog
                    </Link>
                    <span
                      className={`${menuOpen ? "hidden" : ""} cursor-default`}
                    >
                      /
                    </span>
                    <Link
                      className={`block lg:inline-block rounded mx-2 px-4 hover:bg-blue-400 transition-colors duration-300 text-center my-4 lg:my-0`}
                      to="/profile"
                    >
                      Profile
                    </Link>
                    <span
                      className={`${menuOpen ? "hidden" : ""} cursor-default`}
                    >
                      /
                    </span>
                    <Link
                      className={`block lg:inline-block rounded mx-2 px-4 hover:bg-blue-400 transition-colors duration-300 text-center my-4 lg:my-0`}
                      to="/userHome"
                    >
                      Travel blogs
                    </Link>
                    <span
                      className={`${menuOpen ? "hidden" : ""} cursor-default`}
                    >
                      /
                    </span>
                  </>
                ) : (
                  <>
                    <Link
                      className={`block lg:inline-block rounded mx-2 px-4 hover:bg-blue-400 transition-colors duration-300 text-center my-4 lg:my-0`}
                      to="/signup"
                    >
                      Sign up
                    </Link>
                    <span
                      className={`${menuOpen ? "hidden" : ""} cursor-default`}
                    >
                      /
                    </span>
                    <Link
                      className={`block lg:inline-block rounded mx-2 px-4 hover:bg-blue-400 transition-colors duration-300 text-center my-4 lg:my-0`}
                      to="/signin"
                    >
                      Sign in
                    </Link>
                    <span
                      className={`${menuOpen ? "hidden" : ""} cursor-default`}
                    >
                      /
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr className="w-full underline " />
    </div>
  );
};

export default Navbar;
