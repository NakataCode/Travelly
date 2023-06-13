import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Blog from "./Components/Blog";
import ContactUs from "./Components/ContactUs";
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
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
