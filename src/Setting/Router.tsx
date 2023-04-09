// Function declaration for the Router component
// This function returns a Router component with a Routes component that contains a Route component that renders the HomePage component when the path is '/' and a Route component that renders the NotFound component when the path is '*'.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import All the required components

// import all pages
import HomePage from "../Pages/Home/Home Page"; // import HomePage from "./Pages/Home Page";
import NotFound from "../Pages/Home/Not Found Page"; // import NotFound from "./Pages/Not Found";
import PrivacyPolicy from "../Pages/Privacy Policy & About US Page/Privacy Policy Page"; // import PrivacyPolicy from "./Pages/Privacy Policy";
import AboutUs from "../Pages/Privacy Policy & About US Page/About Us Page"; // import AboutUs from "./Pages/Aout Us Page";
import Signup_Page from "../Pages/Auth/Signup Page"; // import Signup_Page from "./Pages/Auth/Signup Page";
import Signup_Terms_and_Conditions_Section from "../Components/Auth/Signup Terms & Conditions Section"; // import Signup_Terms_and_Conditions_Section from "./Components/Auth/Signup Terms & Conditions Section";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/signup" element={<Signup_Page />} />
        <Route
          path="/signup/process/terms-andconditions"
          element={<Signup_Terms_and_Conditions_Section />}
        />
      </Routes>
    </Router>
  );
} // AppRouter is a function that returns a Router component with a Routes component that contains a Route component that renders the HomePage component when the path is '/' and a Route component that renders the NotFound component when the path is '*'.