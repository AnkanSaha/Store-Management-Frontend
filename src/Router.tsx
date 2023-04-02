import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import all pages
import HomePage from "./Pages/Home Page"; // import HomePage from "./Pages/Home Page";
import NotFound from "./Pages/Not Found"; // import NotFound from "./Pages/Not Found";

// Function declaration for the Router component
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}
