// import External Libraries and Components
import { Link } from "react-router-dom"; // import Link from react-router-dom

// import Variables
import { AppName } from "../../Global/Global variables"; // import AppName from Non Changable variables

// import Components

function Upper_First_Section() {
  return (
    <>
      <div className="ml-[5.25rem] mt-[5.25rem]">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
          {AppName} is the best way to manage your store.
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here you can manage your store, add products, add customers, add
          orders and more. You can also manage your employees and You can also
          manage your store's inventory and much more.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-[27.25rem]"
        >
          Create Account
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
      </div>
      <br />
      <br />
      <hr />
      <hr />
    </>
  );
}

export default Upper_First_Section; // Export Upper First Section
