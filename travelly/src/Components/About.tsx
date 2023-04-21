import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Back
      </Link>
      <div>
        <h1 className="text-2xl text-center text-white">About</h1>
      </div>
    </div>
  );
};

export default About;
