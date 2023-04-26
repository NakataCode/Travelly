import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import app from "../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password and confirm password do not match.");
      return;
    }

    try {
      const auth = getAuth(app);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsSignedUp(true);
    } catch (error: any) {
      console.error(error);
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already taken, try another one.");
      } else {
        setError("An error occurred while signing up. Please try again later.");
      }
    }
  };

  const clearError = () => {
    setError("");
  };

  if (isSignedUp) {
    return <Navigate to="/userHome" replace={true} />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black bg-signUp-In bg-center bg-cover bg-no-repeat">
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline z-10"
      >
        Back
      </Link>
      <div className="w-full max-w-md  backdrop-blur-lg backdrop-saturate-200 bg-opacity-0 bg-white rounded-lg border border-opacity-30 border-gray-300 p-8">
        <form onSubmit={handleSubmit}>
          {error && (
            <p className="text-center p-4 font-bold text-red-500 mb-2">
              {error}
            </p>
          )}

          <div className="mb-4">
            <label
              className="block text-white font-bold mb-2 float-left bg-blue-500 rounded-xl py-1 px-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
                clearError();
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white font-bold mb-2 float-right bg-blue-500 rounded-xl py-1 px-2"
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
            <label
              className="block text-white font-bold mb-2 float-left bg-blue-500 rounded-xl py-1 px-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          <div className="flex flex-col items-center space-x-2 justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-40 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link
              to="/signin"
              className="text-blue-300 hover:text-blue-600 font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Already have an account? Sign in.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
