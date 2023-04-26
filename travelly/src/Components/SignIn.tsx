import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/userHome" replace={true} />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black bg-sign-In bg-center bg-cover bg-no-repeat">
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Back
      </Link>
      <div className="w-full max-w-md backdrop-blur-lg backdrop-saturate-200 bg-opacity-0 bg-white rounded-lg border border-opacity-30 border-gray-300 p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white font-bold mb-4 float-left bg-blue-500 rounded-xl py-1 px-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white font-bold mb-4 float-right bg-blue-500 rounded-xl py-1 px-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-white font-bold" htmlFor="show-password">
              <input
                className="mr-2 leading-tight"
                id="show-password"
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              Show Password
            </label>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-40 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              to="/signup"
              className="text-blue-300 hover:text-blue-600 font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Don't have an account yet? Sign up.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
