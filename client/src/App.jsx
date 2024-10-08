import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Room from "./pages/Room/Room";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import News from "./pages/News/News";
import Blogs from "./pages/Blogs/Blogs";
import Error from "./pages/ErrorPage/Error";
import { Footer } from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/room', '/room/test', '/room/dashboard', '/room/leaderboard'];
  return (
    <section>
    <ToastContainer />
      <main className="px-2 md:px-10">
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/*" element={<Room />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />}  />
        <Route path="/news" element={<News />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </main>
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </section>
  );
}

export default App;
