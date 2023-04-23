import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "../index.css";
import Navbar from "./Navbar";

const Home = () => {
  const exploreSectionRef = useRef<HTMLHeadingElement>(null);
  const missionSectionRef = useRef<HTMLHeadingElement>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const scrollToExploreSection = () => {
    if (exploreSectionRef.current) {
      exploreSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMissionSection = () => {
    if (missionSectionRef.current) {
      missionSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  return (
    <div className="text-white ">
      <Navbar />
      <div>
        <svg className="absolute top-0 left-0 w-full h-full">
          <line
            x1="90%"
            y1="9%"
            x2="60%"
            y2="85%"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="10%"
            y1="9%"
            x2="40%"
            y2="85%"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="">
        <div className="text-center mt-12">
          <h1 className="text-center text-xl sm:text-3xl xl:text-6xl p-2">
            Have you been{" "}
            <span className="bg-blue-400 rounded-xl pb-1 px-2">travelling</span>{" "}
            recently?
          </h1>
          <h1 className="text-center text-xl sm:text-3xl xl:text-6xl p-2 pb-10">
            Share you experiences here
          </h1>
          <p className="text-sm md:text-md lg:text-lg mb-12 mx-auto md:w-full max-w-[10rem] md:max-w-max">
            There is always inspiration from travelling so we suggest you to
            travell!
            <br /> The diversity will help you feel better and give you power to
            bot only <br />
            continue with your daily life but inspire you to travell more.{" "}
            <br />
            Here are some ideas that can inspire you:
          </p>
          <div className="relative flex justify-center flex-col items-center space-y-4 lg:space-y-0 lg:flex-row">
            <button
              className="bg-blue-400 rounded-lg py-2 px-4 sm:px-8 lg:px-12 mx-2 lg:mx-20"
              onClick={scrollToExploreSection}
            >
              Explore
            </button>
            <button
              className="bg-blue-400 rounded-lg py-2 px-4 sm:px-8 lg:px-10 mx-2 lg:mx-20"
              onClick={scrollToMissionSection}
            >
              Search for
            </button>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center mt-[-13rem] md:mt-0 mb-[-14rem] md:mb-[-12rem] lg:mb-8">
          <div className="relative">
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-white animate-gradient-x animate-pulsate w-72 h-72 md:w-96 md:h-96 lg:w-[45rem] lg:h-[45rem]">
              <div className="absolute inset-0 blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-white animate-gradient-x"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-4">
                  Travelly
                </h1>
                <hr className=" w-full  underline" />
                <p className="text-xl lg:text-2xl mb-6">
                  Our mission is to help you see the world with other eyes
                </p>
                <div className="inline-block">
                  <Link
                    to={loggedIn ? "/createBlog" : "/signup"}
                    className="text-xs md:text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 sm:px-4 md:px-5 lg:px-6 rounded cursor-pointer whitespace-nowrap"
                    style={{ maxWidth: "95%" }}
                  >
                    Write your first blog
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full animate-expand-circle w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[49rem] lg:h-[49rem]"></div>
            <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white border-dashed rounded-full animate-expand-circle delay-500  w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] lg:w-[53rem] lg:h-[53rem]"></div>
            <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full animate-expand-circle delay-1000 w-96 h-96 md:w-[36rem] md:h-[36rem] lg:w-[57rem] lg:h-[57rem]"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:mb-20">
        <div className="w-full md:w-1/2 text-left">
          <h2
            ref={exploreSectionRef}
            className="text-2xl lg:text-3xl font-bold mb-4"
          >
            <span className="bg-blue-400 rounded-xl pb-1 px-2">Explore</span>{" "}
            the world
          </h2>
          <p className="text-md lg:text-xl">
            Join our community and share your experiences with other travelers.
            Discover new places, make new friends, and embark on unforgettable
            adventures. Get inspired by the stories of fellow travelers and
            learn from their experiences. From off-the-beaten-path destinations
            to popular tourist spots, we've got you covered.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            className="rounded-md w-full h-auto md:w-3/4 mx-auto"
            src="../images/japan.jpg"
            alt="mountain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center mb-[-2rem] md:mb-6">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            className="rounded-md w-full h-auto md:w-3/4 mx-auto"
            src="../images/japanStreet.jpeg"
            alt="Traveling"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Find{" "}
            <span className="bg-blue-400 rounded-xl pb-1 px-2">new things</span>{" "}
            every day!
          </h2>
          <p className="text-md lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            odio quos officiis temporibus adipisci veniam reprehenderit maxime
            ex voluptatibus deleniti. Veritatis, voluptas eius recusandae
            eligendi dignissimos cumque vel explicabo nemo. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First card */}
          <div className="bg-blue-400 p-4 rounded-lg">
            <div className="mb-4 flex justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-center">Exploration</h3>
            <hr className="w-full  underline" />
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              nemo eaque earum, culpa saepe ducimus excepturi officia cumque
              adipisci ipsa harum facere sit deleniti ea blanditiis quibusdam
              perferendis distinctio.
            </p>
          </div>
          {/* Second card */}
          <div className="bg-blue-400 p-4 rounded-lg">
            <div className="mb-4 flex justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z"
                  fill="currentColor"
                />
                <path
                  d="M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-center">Inspiration</h3>
            <hr className="w-full  underline" />
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              nemo eaque earum, culpa saepe ducimus excepturi officia cumque
              adipisci ipsa harum facere sit deleniti ea blanditiis quibusdam
              perferendis distinctio.
            </p>
          </div>
          {/* Third card */}
          <div className="bg-blue-400 p-4 rounded-lg">
            <div className="mb-4 flex justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.85327 8C6.85327 5.23858 9.09185 3 11.8533 3C14.6147 3 16.8533 5.23858 16.8533 8C16.8533 10.7614 14.6147 13 11.8533 13C9.09185 13 6.85327 10.7614 6.85327 8ZM11.8533 11C10.1964 11 8.85327 9.65685 8.85327 8C8.85327 6.34315 10.1964 5 11.8533 5C13.5101 5 14.8533 6.34315 14.8533 8C14.8533 9.65685 13.5101 11 11.8533 11Z"
                  fill="currentColor"
                />
                <path
                  d="M5 12.1294C6.25216 14.2031 8.4189 15.6624 10.9414 15.9486V18H8.85327V20H14.8533V18H12.9414V15.9266C16.8449 15.3958 19.8532 12.0492 19.8532 8.00001C19.8532 6.43638 19.4046 4.97752 18.6291 3.74512L16.9253 4.79326C17.513 5.72084 17.8532 6.82069 17.8532 8.00001C17.8532 11.3137 15.167 14 11.8532 14C9.66611 14 7.75231 12.8298 6.70381 11.0813L5 12.1294Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-center">Adventure</h3>
            <hr className="w-full  underline" />
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              nemo eaque earum, culpa saepe ducimus excepturi officia cumque
              adipisci ipsa harum facere sit deleniti ea blanditiis quibusdam
              perferendis distinctio.
            </p>
          </div>
          {/* Fourth card */}
          <div className="bg-blue-400 p-4 rounded-lg">
            <div className="mb-4 flex justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 10L3 18H13L8 10Z" fill="currentColor" />
                <path
                  d="M10.5286 10.7543L13.5 6L21 18H15.0572L10.5286 10.7543Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-center">Nature</h3>
            <hr className="w-full  underline" />
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              nemo eaque earum, culpa saepe ducimus excepturi officia cumque
              adipisci ipsa harum facere sit deleniti ea blanditiis quibusdam
              perferendis distinctio.
            </p>
          </div>
          {/* Fifth card */}
          <div className="bg-blue-400 p-4 rounded-lg">
            <div className="mb-4 flex justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.12132 9.87868L10.2044 11.9617L10.2106 11.9555L11.6631 13.408L11.6693 13.4142L13.7907 15.5355C15.7433 17.4882 18.9091 17.4882 20.8617 15.5355C22.8144 13.5829 22.8144 10.4171 20.8617 8.46447C18.9091 6.51184 15.7433 6.51184 13.7907 8.46447L13.0773 9.17786L14.4915 10.5921L15.2049 9.87868C16.3764 8.70711 18.2759 8.70711 19.4475 9.87868C20.6191 11.0503 20.6191 12.9497 19.4475 14.1213C18.2759 15.2929 16.3764 15.2929 15.2049 14.1213L13.1326 12.0491L13.1263 12.0554L9.53553 8.46447C7.58291 6.51184 4.41709 6.51184 2.46447 8.46447C0.511845 10.4171 0.511845 13.5829 2.46447 15.5355C4.41709 17.4882 7.58291 17.4882 9.53553 15.5355L10.2488 14.8222L8.83463 13.408L8.12132 14.1213C6.94975 15.2929 5.05025 15.2929 3.87868 14.1213C2.70711 12.9497 2.70711 11.0503 3.87868 9.87868C5.05025 8.70711 6.94975 8.70711 8.12132 9.87868Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-center">Day & Night</h3>
            <hr className="w-full  underline" />
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              nemo eaque earum, culpa saepe ducimus excepturi officia cumque
              adipisci ipsa harum facere sit deleniti ea blanditiis quibusdam
              perferendis distinctio.
            </p>
          </div>
          {/* Sixth card */}
          <div className="bg-blue-400 p-4 rounded-lg">
            <div className="mb-4 flex justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14ZM10.4649 10C9.77325 8.8044 8.48056 8 7 8C5.13616 8 3.57006 9.27477 3.12602 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H3.12602C3.57006 14.7252 5.13616 16 7 16C9.20914 16 11 14.2091 11 12H13C13 14.2091 14.7909 16 17 16C18.8638 16 20.4299 14.7252 20.874 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H20.874C20.4299 9.27477 18.8638 8 17 8C15.5194 8 14.2267 8.8044 13.5351 10H10.4649ZM15 12C15 13.1046 15.8954 14 17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-2 text-center">Art</h3>
            <hr className="w-full  underline" />
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              nemo eaque earum, culpa saepe ducimus excepturi officia cumque
              adipisci ipsa harum facere sit deleniti ea blanditiis quibusdam
              perferendis distinctio.
            </p>
          </div>
        </div>
      </div>
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-20 md:space-y-0 md:flex-row">
          <div className="flex flex-col items-center space-y-8 md:w-1/2 ">
            <h2
              ref={missionSectionRef}
              className="max-w-md text-2xl md:text-4xl font-bold text-center md:text-left"
            >
              What is our{" "}
              <span className="bg-blue-400 rounded-xl pb-1 px-2">mission?</span>
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left md:text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              tempore quisquam necessitatibus illum libero ullam fugiat nemo
              nulla! Reprehenderit, temporibus! Ut, natus quae. Voluptatibus
              fugiat numquam et earum, aspernatur dolore!
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-300">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Culture of the country
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Culture of the country
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto repudiandae a atque doloremque impedit sequi.
                  Recusandae reprehenderit architecto nisi. Voluptatum tempore
                  dolorum voluptatem blanditiis excepturi iusto eum quibusdam
                  reprehenderit ratione!
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-300">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Traditional Food & Drinks
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Traditional Food & Drinks
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  magnam. Aperiam doloremque, architecto aliquid rem magni
                  incidunt saepe quod sed recusandae mollitia repellendus
                  suscipit officiis omnis magnam assumenda adipisci nobis!
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-300">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Best places to visit
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Best places to visit
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  error ullam, esse necessitatibus, repellat voluptatibus sunt
                  perferendis laboriosam fuga officia earum eos ipsa. Iure, at
                  culpa. Sit illum nesciunt odit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-400 py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-white text-xl">
            &copy; {new Date().getFullYear()} Travelly
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
