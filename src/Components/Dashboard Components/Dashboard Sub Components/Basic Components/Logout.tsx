/* This code is importing necessary libraries and functions for the LogoutComponent React component. It
imports the useContext hook and the GlobalContext from the Context API, as well as the
Delete_Cache_Data function from the cache Storage module. It also defines an interface for the
component's props, which includes a UserName string. */
// import important react library
import { useContext } from "react"; // context API

// import context API
import { GlobalContext } from "../../../../Context/Context API"; // import Global Context
interface Props {
  UserName: string;
}

// import functions
import { Delete_Cache_Data } from "../../../../Functions/Cache/cache Storage"; // Delete Cache Data Function

/* This code exports a React functional component called `LogoutComponent` that displays a modal asking
the user if they want to log out. It takes in a prop called `UserName` which is a string
representing the name of the user currently logged in. It uses the `useContext` hook to access the
`GlobalContext` from the Context API, which contains functions to update the sidebar option and
authentication details. The component also imports a function called `Delete_Cache_Data` from a
cache storage module to delete cached authentication data. The `HardLogout` function is called when
the user clicks the "hard logout" button, which deletes the cached authentication data and updates
the sidebar option and authentication details. The component also has a default prop for `UserName`
set to "User". */
export default function LogoutComponent({ UserName }: Props) {
  // using Context API
  const { UpdateSidebarOption, UpdateAuthDetails }: any =
    useContext(GlobalContext); // using context API

  const HardLogout = async () => {
    let Result = await Delete_Cache_Data({ DataPath: "AuthData" }); // Delete Cache Data
    if (Result === true) {
      UpdateSidebarOption("dashboard"); // set sidebar option to dashboard
      UpdateAuthDetails({}); // update auth details to empty object
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <>
      <div className="ml-[13rem]">
        <h1 className="text-5xl font-extrabold dark:text-white ml-[19.25rem] mt-[-15rem]">
          {" "}
          Logout section{" "}
        </h1>
        <div
          id="popup-modal"
          className="ml-[14.25rem] mt-[5.75rem] right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-cyan-200 rounded-lg shadow dark:bg-gray-700">
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Hey {UserName}, Are you sure you want to logout?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  onClick={() => {
                    UpdateSidebarOption("dashboard"); // set sidebar option to dashboard
                    UpdateAuthDetails({}); // update auth details to empty object
                  }}
                  type="button"
                  className="text-white bg-green-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Soft Logout
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  onClick={HardLogout}
                  className="text-white bg-red-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Hard Logout
                </button>
                <button
                  data-modal-hide="popup-modal"
                  onClick={() => {
                    UpdateSidebarOption("dashboard"); // set sidebar option to dashboard
                  }}
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Default Props
LogoutComponent.defaultProps = {
  UserName: "User",
}; // Default Props
