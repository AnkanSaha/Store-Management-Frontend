import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import All the required components

// import all pages
import HomePage from "../Pages/Home Page"; // import HomePage from "./Pages/Home Page";
import NotFound from "../Pages/Not Found Page"; // import NotFound from "./Pages/Not Found";
import PrivacyPolicy from "../Pages/Privacy Policy Page"; // import PrivacyPolicy from "./Pages/Privacy Policy";
import AboutUs from "../Pages/About Us Page"; // import AboutUs from "./Pages/Aout Us Page";

// Function declaration for the Router component
// This function returns a Router component with a Routes component that contains a Route component that renders the HomePage component when the path is '/' and a Route component that renders the NotFound component when the path is '*'.
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/Privacy" element={<PrivacyPolicy/>} />
        <Route path="/About" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}