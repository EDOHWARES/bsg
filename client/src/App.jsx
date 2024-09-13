import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/auth/signup', '/'];
  return (
    <>
      <main className="px-2 md:px-10">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
      </main>
      {/* {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />} */}
    </>
  );
}

export default App;
