import "../index.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="text-white">
      <Navbar />
      <div className="h-screen flex items-center justify-center mt-[-4em]">
        <div className="relative">
          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-white animate-gradient-x animate-pulsate w-72 h-72 md:w-96 md:h-96 lg:w-[45rem] lg:h-[45rem]">
            <div className="absolute inset-0 blur-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-white animate-gradient-x"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Travelly
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Our mission is to help you see the world with other eyes
              </p>
              <button className="text-sm md:text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Write your first blog
              </button>
            </div>
          </div>
          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full animate-expand-circle w-80 h-80 md:w-104 md:h-104 lg:w-[49rem] lg:h-[49rem]"></div>
          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full animate-expand-circle delay-500 w-88 h-88 md:w-112 md:h-112 lg:w-[53rem] lg:h-[53rem]"></div>
          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full animate-expand-circle delay-1000 w-96 h-96 md:w-120 md:h-120 lg:w-[57rem] lg:h-[57rem]"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4">Explore the world</h2>
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
            src="https://via.placeholder.com/400"
            alt="Traveling"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
