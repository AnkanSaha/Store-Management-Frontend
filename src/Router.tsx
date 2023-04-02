import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import all pages
import HomePage from "./Pages/Home Page";

// Function declaration for the Router component
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}
