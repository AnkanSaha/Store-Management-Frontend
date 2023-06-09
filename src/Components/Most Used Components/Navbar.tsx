import { memo, useEffect, useState, useContext } from "react"; // Import Essential Modules

// import React Logo from variable
import { AppLogo } from "../../Global/Global variables"; // Import Essential Modules

// import Router Module
import { Link, useLocation } from "react-router-dom"; // Import Essential Modules

// define type of Properties for the Navbar Component
interface Properties {
  AppName: String;
}

// import Global Variables
import { Navbar_Services_Options } from "../../Global/Global Array Variables"; // import Navbar Services Options
import { GlobalContext } from "../../Context/Context API"; // import global Context API

function Navbar({ AppName }: Properties) {
  // use context
  const { UpdateSidebarOption }: any = useContext(GlobalContext); // use setSidebarOption from Global Context

  // function for toggle the navbar down
  const Opener = (ID: String) => {
    document.getElementById(`${ID}`)?.classList.toggle("hidden");
  };

  // state for PathName and Path
  let [PathName, SetPathName] = useState("Login Now"); // define variables
  let [Path, SetPath] = useState("/login"); // define variables
  let [NavButtonShow, setNavButtonShow] = useState("inline-flex");

  // logic for changing path name
  let Location = useLocation();

  useEffect(() => {
    if (Location.pathname === "/") {
      SetPath("/login"); // set path
      SetPathName("Dashboard"); // set path name
    } else if (Location.pathname === "/login") {
      SetPathName("Create Account"); // set path name
      SetPath("/signup"); // set path
    } else if (Location.pathname === "/signup") {
      SetPathName("Login now"); // set path name
      SetPath("/login"); // set path
    } else if (Location.pathname === "/dashboard") {
      SetPathName("Login now"); // set path name
      setNavButtonShow("hidden"); // Set NavbarButton Show & Hidden
      SetPath("/login"); // set path
    }
  }, [Location.pathname]);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 fixed top-0 w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={AppLogo} alt="mainlogo" className="h-8 mr-3" />
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
                  onClick={() => {
                    Opener("mega-menu-full-dropdown");
                  }}
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className={`flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 ${NavButtonShow}`}
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
                  to="/Contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to={Path}
                  className={`items-center justify-center px-3 py-1 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ${NavButtonShow}`}
                >
                  {PathName}
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="mega-menu-full-dropdown"
          className=" hidden mt-1 border-gray-200 shadow-xl z-50 bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 rounded-lg"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              {Navbar_Services_Options.map((item, index) => {
                if (index + 1 <= Navbar_Services_Options.length / 2) {
                  return (
                    <li key={index}>
                      <Link
                        to={item.OptionPath}
                        className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          UpdateSidebarOption(item.OptionValue);
                        }}
                      >
                        <div className="font-semibold">{item.Title}</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {item.Description}
                        </span>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
            <ul>
              {Navbar_Services_Options.map((item, index) => {
                if (index >= Navbar_Services_Options.length / 2) {
                  return (
                    <li key={index}>
                      <Link
                        to={item.OptionPath}
                        className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          UpdateSidebarOption(item.OptionValue);
                        }}
                      >
                        <div className="font-semibold">{item.Title}</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {item.Description}
                        </span>
                      </Link>
                    </li>
                  );
                }
              })}
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
