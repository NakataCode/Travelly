import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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
    <div>
      <nav
        className={`${
          scrolling
            ? "bg-white text-black fixed top-0 left-0 right-0 transition-colors duration-500"
            : ""
        } container mx-auto p-5 z-50 w-full transition-colors duration-300`}
      >
        <div className="flex items-center justify-between">
          <div className="pt-2 text-3xl font-bold">
            <Link
              className={`rounded px-2 hover:bg-blue-400 ${
                scrolling ? "text-black" : "text-white"
              } transition-colors duration-300`}
              to="/"
            >
              Travelly
            </Link>
          </div>
          <div className="flex space-x-6 pt-2 text-lg relative z-10 font-bold">
            <div
              className={`space-x-6  ${
                scrolling ? "text-black" : "text-white"
              } transition-colors duration-300`}
            >
              <span>/</span>
              <Link
                className={`rounded px-2 hover:bg-blue-400 ${
                  scrolling ? "text-black" : "text-white"
                } transition-colors duration-300`}
                to="/about"
              >
                About
              </Link>
              <span>/</span>
              <Link
                className={`rounded px-2 hover:bg-blue-400 ${
                  scrolling ? "text-black" : "text-white"
                } transition-colors duration-300`}
                to="/contactUs"
              >
                Contact us
              </Link>
              <span>/</span>
              {loggedIn ? (
                <>
                  <Link
                    className={`rounded px-2 hover:bg-blue-400 ${
                      scrolling ? "text-black" : "text-white"
                    } transition-colors duration-300`}
                    to="/createBlog"
                  >
                    Create blog
                  </Link>
                  <span>/</span>
                  <Link
                    className={`rounded px-2 hover:bg-blue-400 ${
                      scrolling ? "text-black" : "text-white"
                    } transition-colors duration-300`}
                    to="/profile"
                  >
                    Profile
                  </Link>
                  <span>/</span>
                  <Link
                    className={`rounded px-2 hover:bg-blue-400 ${
                      scrolling ? "text-black" : "text-white"
                    } transition-colors duration-300`}
                    to="/userHome"
                  >
                    Travel blogs
                  </Link>
                  <span>/</span>
                </>
              ) : (
                <>
                  <Link
                    className={`rounded px-2 hover:bg-blue-400 ${
                      scrolling ? "text-black" : "text-white"
                    } transition-colors duration-300`}
                    to="/signup"
                  >
                    Sign up
                  </Link>
                  <span>/</span>
                  <Link
                    className={`rounded px-2 hover:bg-blue-400 ${
                      scrolling ? "text-black" : "text-white"
                    } transition-colors duration-300`}
                    to="/signin"
                  >
                    Sign in
                  </Link>
                  <span>/</span>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <hr className="w-full underline" />
    </div>
  );
};

export default Navbar;
