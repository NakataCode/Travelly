import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { backgroundPosition } from "kute.js";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* <div className="min-h-screen flex justify-center items-center bg-globe-one bg-no-repeat bg-cover bg-fixed">
        <div className="absolute top-0 left-0 right-0">
          <div className="z-10 pt-6 text-3xl text-white font-bold px-2 md:px-12">
            <Link
              className="rounded px-2 absolute hover:bg-blue-400 transition-colors duration-300"
              to="/"
            >
              Tr
              <span>
                <FaGlobe className="inline-block text-2xl p-1 mx-[-2px]" />
              </span>
              velly
            </Link>
          </div>
          <div className="container mx-auto px-4 py-16 mt-12 bg-slate-200 bg-opacity-30 rounded-full">
            <h1 className="text-white text-[9rem] text-center font-bold mb-4 b-2 drop-shadow-2xl">
              About Us
            </h1>
            <p className="text-white font-bold text-xl text-center mt-4 drop-shadow-2xl">
              What we do, what we stand for, our purpose,
              <br /> our doings and your trust
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center mt-64">
        <div className="container mx-auto px-4 mt-12 lg:mt-[-10rem]">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="w-full lg:w-5/12 text-white my-12">
              <h2 className="text-4xl font-bold mb-16">
                Discover{" "}
                <span className="bg-blue-500 rounded-xl py-0 px-2">
                  unforgettable
                </span>{" "}
                travel experiences.
              </h2>
              <p className="mt-4 text-lg font-bold mb-16">
                Our passionate team at Travelly strives to create unique travel
                experiences for our customers. We are dedicated to providing
                top-notch service and ensuring that your journey is
                unforgettable.
                <span className="bg-blue-500 rounded-xl py-0 px-2">
                  Trust us
                </span>{" "}
                to make your dream vacation a reality.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <Parallax pages={4}>
        <ParallaxLayer
          speed={1}
          factor={2}
          style={{
            backgroundImage: "url(/images/globe-2.jpeg)",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-white text-6xl flex justify-center items-center h-screen">
            Welcome!
          </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <h2 className="text-white text-6xl flex justify-center items-center h-screen">
            Developer test offset text!
          </h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default About;
