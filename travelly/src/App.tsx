import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlog from "./Components/CreateBlog";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import UserHome from "./Components/UserHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/userHome" element={<UserHome />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
