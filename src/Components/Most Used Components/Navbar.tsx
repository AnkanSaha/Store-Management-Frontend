import React, { memo } from "react"; // Import Essential Modules

// import React Logo from variable
import { AppLogo } from "../../Non Changable variables"; // Import Essential Modules

// import Router Module
import { Link } from "react-router-dom"; // Import Essential Modules

// import Variables For Details

// define types for typescript
type Proper = {
  AppName: String;
};

function Navbar({ AppName }: Proper) {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={AppLogo} alt="main logo" className="h-8 mr-3" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {AppName}
            </span>
          </Link>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="mega-menu-full"
            className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services{" "}
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  style={{ paddingLeft: 12, paddingRight: 12 }}
                  className="block py-4 bg-green-700 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Login To Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="mega-menu-full-dropdown"
          className=" hidden mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <Link
                  to="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  to="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  AppName: "Store Manager",
}; // Default Props

export default memo(Navbar);
