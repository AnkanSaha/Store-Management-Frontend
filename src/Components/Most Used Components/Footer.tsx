// Import Essential Modules
import { Link } from "react-router-dom"; // Import Link from React Router
import { memo } from "react"; // Import React Memo
// import icons

// import Variables
import { AppName } from "../../Global/Global variables"; // Import Variables

// type for Typescript props
type Properties = {
  FooterStyle: string;
}; // Type for Props

function Footer({ FooterStyle }: Properties) {
  return (
    <>
      <footer
        className={`bg-white rounded-lg shadow m-4 dark:bg-gray-800 ${FooterStyle}`}
      >
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              {AppName}™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to="/services" className="mr-4 hover:underline md:mr-6 ">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Privacy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/About" className="mr-4 hover:underline md:mr-6">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/FAQ" className="mr-4 hover:underline md:mr-6">
              FAQ
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

Footer.defaultProps = {
  FooterStyle: "fixed bottom-0 w-[100%]",
}; // Set Default Props

export default memo(Footer); // Export Footer
