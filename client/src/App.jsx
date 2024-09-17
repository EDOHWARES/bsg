import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import News from "./pages/News/News";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  // const location = useLocation();
  // const hideHeaderFooterRoutes = ['/auth/signup', '/'];
  return (
    <>
      <main className="px-2 md:px-10">
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />}  />
        <Route path="/news" element={<News />} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
      </main>
      {/* {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />} */}
    </>
  );
}

export default App;
