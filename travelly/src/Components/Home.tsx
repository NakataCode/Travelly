import { useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Navbar from "./Navbar";

const Home = () => {
  const exploreSectionRef = useRef<HTMLHeadingElement>(null);
  const missionSectionRef = useRef<HTMLHeadingElement>(null);

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
          <h1 className="text-center text-6xl p-2">
            Have you been{" "}
            <span className="bg-blue-400 rounded-xl pb-1 px-2">travelling</span>{" "}
            recently?
          </h1>
          <h1 className="text-center text-6xl p-2 pb-10">
            Share you experiences here
          </h1>
          <p className="text-lg">
            There is always inspiration from travelling so we suggest you to
            travell!
            <br /> The diversity will help you feel better and give you power to
            bot only <br />
            continue with your daily life but inspire you to travell more.{" "}
            <br />
            Here are some ideas that can inspire you:
          </p>
          <div className="relative z-10">
            <button
              className="bg-blue-400 rounded-lg py-2 px-12 my-16 mx-20"
              onClick={scrollToExploreSection}
            >
              Explore
            </button>
            <button
              className="bg-blue-400 rounded-lg py-2 px-10 mx-20"
              onClick={scrollToMissionSection}
            >
              Search for
            </button>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center mt-4em mb-12">
          <div className="relative">
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-white animate-gradient-x animate-pulsate w-72 h-72 md:w-96 md:h-96 lg:w-[45rem] lg:h-[45rem]">
              <div className="absolute inset-0 blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-white animate-gradient-x"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Travelly
                </h1>
                <hr className=" w-full  underline " />
                <p className="text-xl md:text-2xl mb-6">
                  Our mission is to help you see the world with other eyes
                </p>
                <Link
                  to="/signup"
                  className="text-sm md:text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                >
                  Write your first blog
                </Link>
              </div>
            </div>
            <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white  rounded-full animate-expand-circle w-80 h-80 md:w-104 md:h-104 lg:w-[49rem] lg:h-[49rem]"></div>
            <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white border-dashed rounded-full animate-expand-circle delay-500 w-88 h-88 md:w-112 md:h-112 lg:w-[53rem] lg:h-[53rem]"></div>
            <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white  rounded-full animate-expand-circle delay-1000 w-96 h-96 md:w-120 md:h-120 lg:w-[57rem] lg:h-[57rem]"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-1/2 text-left">
          <h2 ref={exploreSectionRef} className="text-3xl font-bold mb-4">
            <span className="bg-blue-400 rounded-xl pb-1 px-2">Explore</span>{" "}
            the world
          </h2>
          <p className="text-xl">
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

      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            className="rounded-md w-full h-auto md:w-3/4 mx-auto"
            src="../images/japanStreet.jpeg"
            alt="Traveling"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4">
            Find{" "}
            <span className="bg-blue-400 rounded-xl pb-1 px-2">new things</span>{" "}
            every day!
          </h2>
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            odio quos officiis temporibus adipisci veniam reprehenderit maxime
            ex voluptatibus deleniti. Veritatis, voluptas eius recusandae
            eligendi dignissimos cumque vel explicabo nemo. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Ullam reiciendis obcaecati
            asperiores, recusandae vero voluptatum omnis! Repellat accusantium
            necessitatibus deserunt libero eveniet porro facere cupiditate
            nesciunt adipisci est, nisi delectus.
          </p>
        </div>
      </div>
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2 ">
            <h2
              ref={missionSectionRef}
              className="max-w-md text-4xl font-bold text-center md:text-left"
            >
              What is our{" "}
              <span className="bg-blue-400 rounded-xl pb-1 px-2">mission?</span>
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left text-xl">
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
