// This component is used to manage employees
import { CSVLink } from "react-csv"; // import CSVLink
// import all essential components & libraries
import { useState, useEffect, useContext } from "react"; // import { useState } from react
import { useNavigate } from "react-router-dom"; // import useNavigate

// import Variables & Context
import { AppName } from "../../../../Global/Global variables"; // import App Name
import Dashboard_No_Data_Found from "../Basic Components/Dashboard No Data Found";

// import Functional Components
import { Update_Document_Title } from "../../../../Functions/Most Used Functions"; // import Functions
import { HTTP_GET } from "../../../../Functions/Most Used Functions"; // import HTTP_POST Function
import { Alert } from "../../../Most Used Components/Alert"; // import Alert Component

//import Context
import { GlobalContext } from "../../../../Context/Context API"; // import Global Context

// types & interfaces
type props = {
  ShopName: string;
};

export default function Manage_Employees({ ShopName }: props) {
  let Navigate = useNavigate(); // Navigate
  // Context
  const { AuthDetails, UpdateAlert, AlertMessage }: any =
    useContext(GlobalContext); // Global Context
  // Update Document Title with logic
  Update_Document_Title({ TitleName: `Manage Employees - ${ShopName}` }); // Update Document Title
  // End of Update Document Title with logic

  // States
  let [LoadingText, setLoadingText] = useState(true); // Loading Text
  let [EmployeeData, setEmployeeData] = useState([]); // Employee Data

  // useEffect
  useEffect(() => {
    setLoadingText(true); // Set Loading Text to true
    HTTP_GET({
      PostPath: `/get/employee/get?User_id=${AuthDetails.Data.AccountDetails.User_id}&OwnerEmail=${AuthDetails.Data.AccountDetails.Email}`,
    }).then((Response) => {
      setLoadingText(false); // Set Loading Text to false
      if (Response.Status === "Employee Found") {
        setEmployeeData(Response.Data);
      } else if (Response.Status === "No Employee Found") {
        UpdateAlert(Response); // Update Alert
      }
    });
  }, []); // End of useEffect

  // Creating a Variable To make Spreeadsheet
  let SpreadsheetData: any[] = EmployeeData;

  return (
    <>
      {LoadingText === true ? (
        <Dashboard_No_Data_Found Message=" Loading Employees Details..." />
      ) : (
        <>
          {EmployeeData.length !== 0 ? (
            <>
              {AlertMessage.Status === "No Employee Found" ? (
                <Alert
                  Title={AlertMessage.Status}
                  Message={AlertMessage.Message}
                  ButtonText="ok"
                />
              ) : null}
              <div className="pb-5 overflow-x-auto shadow-md sm:rounded-lg ml-[12.25rem] absolute top-[5.5rem] w-[85%]">
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
                        Date of Joining
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Take Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {EmployeeData.map((Employee: any, index: number) => {
                      return (
                        <>
                          <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            key={index}
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {Employee.EmployeeName}
                            </th>
                            <td className="px-6 py-4">
                              {Employee.EmployeeEmail}
                            </td>
                            <td className="px-6 py-4">
                              {Employee.EmployeePhoneNumber}
                            </td>
                            <td className="px-6 py-4">
                              ₹ {Employee.EmployeeMonthlySalary}
                            </td>
                            <td className="px-6 py-4">
                              {Employee.EmployeeRole}
                            </td>
                            <td className="px-6 py-4">
                              {Employee.EmployeeDateOfJoining}
                            </td>
                            <td className="px-6 py-4">
                              <button
                                type="button"
                                onClick={() => {
                                  Navigate(
                                    `/dashboard/employee/${Employee.EmployeeEmail}/${Employee.EmployeePhoneNumber}`
                                  );
                                }}
                                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
                <CSVLink
                  filename={`Employee Details For ${AuthDetails.Data.AccountDetails.Name} (${AuthDetails.Data.AccountDetails.ShopName}).csv`}
                  className="btn bg-green-500 ml-[25.25rem] fixed bottom-[3.25rem] shadow-xl shadow-black"
                  target="_blank"
                  data={SpreadsheetData}
                >
                  Download CSV Sheet
                </CSVLink>
              </div>
            </>
          ) : (
            <Dashboard_No_Data_Found Message="No Employee Details Found" />
          )}
        </>
      )}
    </>
  );
} // End of Manage_Employees

// default props for Manage_Employees
Manage_Employees.defaultProps = {
  ShopName: AppName,
}; // End of default props for Manage_Employees
