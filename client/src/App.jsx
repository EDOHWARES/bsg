import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
import QuizPage from "./pages/Quiz/QuizPage";

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/auth/signup', '/etest/test', '/etest/dashboard', '/etest/leaderboard'];
  return (
    <>
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Header />}
      <main className="px-2 md:px-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="etest/*" element={<QuizPage />} />
      </Routes>
      </main>
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
