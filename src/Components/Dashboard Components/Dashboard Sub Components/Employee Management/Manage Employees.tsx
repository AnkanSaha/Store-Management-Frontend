// This component is used to manage employees

// import all essential components & libraries
import Footer from "../../../Most Used Components/Footer"; // import Footer component
// import Variables & Context
import { AppName } from "../../../../Global/Global variables"; // import App Name

// import Functional Components
import { Update_Document_Title } from "../../../../Functions/Most Used Functions"; // import Functions

export default function Manage_Employees() {
  // Update Document Title with logic
  Update_Document_Title({ TitleName: `Manage Employees - ${AppName}` }); // Update Document Title

  return (
    <>
      <div className="table-compact z-30 overflow-x-auto shadow-md sm:rounded-lg ml-[12.25rem] fixed top-[5.5rem] w-[85%]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Employee Name
              </th>
              <th scope="col" className="px-6 py-3">
                Employee Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Employee Status
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Joining
              </th>
              <th scope="col" className="px-6 py-3">
                Take Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Ankan Saha
              </th>
              <td className="px-6 py-4">ankansahaofficial@gmail.com</td>
              <td className="px-6 py-4">7063355213</td>
              <td className="px-6 py-4">₹ 10,000</td>
              <td className="px-6 py-4">Owner</td>
              <td className="px-6 py-4">Active</td>
              <td className="px-6 py-4">12/12/2020</td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
} // End of Manage_Employees
