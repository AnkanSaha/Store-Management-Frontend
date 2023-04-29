// This component is used to manage employees

// import all essential components & libraries
import { useState, useEffect, useContext } from "react"; // import { useState } from react
import { useNavigate } from "react-router-dom"; // import useNavigate

import Footer from "../../../Most Used Components/Footer"; // import Footer component
// import Variables & Context
import { AppName } from "../../../../Global/Global variables"; // import App Name
import Dashboard_No_Data_Found from "../Dashboard No Data Found";

// import Functional Components
import { Update_Document_Title } from "../../../../Functions/Most Used Functions"; // import Functions
import { HTTP_POST } from "../../../../Functions/Most Used Functions"; // import HTTP_POST Function
import { Alert } from "../../../Most Used Components/Alert"; // import Alert Component

//import Context
import { GlobalContext } from "../../../../Context/Context API"; // import Global Context

export default function Manage_Employees() {
  let Navigate = useNavigate(); // Navigate
  // Context
  const { AuthDetails, UpdateAlert, AlertMessage }: any =
    useContext(GlobalContext); // Global Context
  // Update Document Title with logic
  Update_Document_Title({ TitleName: `Manage Employees - ${AppName}` }); // Update Document Title
  // End of Update Document Title with logic

  // States
  let [LoadingText, setLoadingText] = useState(true); // Loading Text
  let [EmployeeData, setEmployeeData] = useState([]); // Employee Data

  // useEffect
  useEffect(() => {
    setLoadingText(true); // Set Loading Text to true
    HTTP_POST({
      PostPath: "/post/employee/get",
      SendData: {
        User_id: AuthDetails.AccountDetails.User_id,
        OwnerEmail: AuthDetails.AccountDetails.Email,
      },
    }).then((Response) => {
      setLoadingText(false); // Set Loading Text to false
      if (Response.Status === "Employee Found") {
        setEmployeeData(Response.Employee);
      } else if (Response.Status === "No Employee Found") {
        UpdateAlert(Response); // Update Alert
      }
    });
  }, []); // End of useEffect

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
              <div className="z-30 overflow-x-auto shadow-md sm:rounded-lg ml-[12.25rem] fixed top-[5.5rem] w-[85%]">
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
                    {EmployeeData.map((Employee: any, index:number) => {
                      return (
                        <>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
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
                                onClick={()=>{Navigate(`/dashboard/employee/${Employee.EmployeeEmail}/${Employee.EmployeePhoneNumber}`)}}
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
              </div>
              <Footer />
            </>
          ) : (
            <Dashboard_No_Data_Found Message="No Employee Details Found" />
          )}
        </>
      )}
    </>
  );
} // End of Manage_Employees
