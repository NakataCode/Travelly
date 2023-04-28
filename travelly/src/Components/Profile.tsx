import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import KUTE from "kute.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGoHome = () => {
    return navigate("/");
  };

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="text-white text-left p-6 bg-profile-circle bg-center bg-cover bg-no-repeat min-h-screen">
      <div className="fixed top-0 left-0 text-md">
        <button
          type="button"
          onClick={() => handleGoHome()}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4 "
        >
          Go back
        </button>
      </div>

      <div className="flex flex-col items-center justify-center h-full min-h-screen">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-24 rounded-lg flex flex-col items-center border border-white border-opacity-25">
          <h2 className="text-white text-center text-2xl font-bold mb-12 mt-4">
            User email: {user?.email}
          </h2>
          <button
            onClick={handleSignOut}
            className="text-md bg-red-500 hover:bg-red-700 text-white text-center font-bold py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
