import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Category from "./pages/Category";

import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";

import PrivateRoute from "./component/PrivateRoute";
import Blog_data from "./pages/blog/Blog_data";
import Gallery from "./pages/gallery/Gallery";
import Blog from "./pages/blog/Blog";
import ContactNav from "./pages/ContactNav";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/Blog" element={<Blog_data />} /> */}
        <Route path="/contact/:contactId" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route
          path="/category/:categoryName/:listingId"
          element={<Listing />}
        />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/contactnav" element={<ContactNav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
