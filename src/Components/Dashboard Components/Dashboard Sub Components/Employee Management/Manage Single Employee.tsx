// This file is too long to be displayed in the browser.

// import essential components & libraries
import { useParams, useNavigate } from "react-router-dom"; // import useSearchParams for getting the search params
import { useState, useEffect, useContext } from "react"; // import useState for state management

// import Functional Components
import Navbar from "../../../Most Used Components/Navbar"; // import Navbar Component
import Loading from "../../../Most Used Components/Loading"; // import Loading Component
import Dashboard_No_Data_Found from "../Dashboard No Data Found"; // import Dashboard No Data Found Component

import { Button } from "@chakra-ui/react"; // import Button Component
import { Alert } from "../../../Most Used Components/Alert"; // import Alert Component
import { AiOutlineRollback } from "react-icons/ai"; // import AiOutlineRollback Icon
import {RiDeleteBin2Line} from 'react-icons/ri'; // import RiDeleteBin2Line Icon
//import Context
import { GlobalContext } from "../../../../Context/Context API"; // import Global Context

// import Functions
import { HTTP_POST } from "../../../../Functions/Most Used Functions"; // import HTTP_POST Function
import { Update_Document_Title } from "../../../../Functions/Most Used Functions"; // import Functions

// function for Manage Single Employee
export default function Manage_Single_Employee() {
  let Navigate = useNavigate(); // Navigate
  // Context
  const { AuthDetails, UpdateAlert, AlertMessage }: any =
    useContext(GlobalContext); // Global Context

  let ParameterData: any = useParams(); // get the search params

  // state management
  let [LoadingState, setLoadingState] = useState<boolean>(true); // state for loading
  let [EmployeeData, setEmployeeData] = useState<any>([]); // Employee Data

  Update_Document_Title({
    TitleName: `Control Panel for ${ParameterData.Phone}`,
  }); // Update Document Title
  // End of Update Document Title with logic

  // useEffect
  useEffect(() => {
    setLoadingState(true); // Set Loading Text to true
    HTTP_POST({
      PostPath: "/post/employee/get",
      SendData: {
        User_id: AuthDetails.Data.AccountDetails.User_id,
        OwnerEmail: AuthDetails.Data.AccountDetails.Email,
      },
    }).then((Response) => {
      setLoadingState(false); // Set Loading Text to false
      if (Response.Status === "Employee Found") {
        let Filtered_employee_Data = Response.Employee.filter(
          (Employee: any) =>
            Employee.EmployeePhoneNumber === ParameterData.Phone &&
            Employee.EmployeeEmail === ParameterData.Email
        );
        setEmployeeData(Filtered_employee_Data); // set Employee Data
      } else if (Response.Status === "No Employee Found") {
        UpdateAlert(Response); // Update Alert
      }
    });
  }, []); // End of useEffect

  return (
    <>
      {LoadingState === true ? (
        <Loading
          Title={`Loading ${ParameterData.Phone}'s Details`}
          Description={`Please wait while we are loading the details of ${ParameterData.Email} for you. This may take a few seconds.`}
        />
      ) : (
        <>
          <Navbar />
          {EmployeeData.length !== 0 ? (
            <>
              {AlertMessage.Status === "No Employee Found" ? (
                <Alert
                  Title={AlertMessage.Status}
                  Message={AlertMessage.Message}
                  ButtonText="ok"
                />
              ) : null}

              <div className="bg-white shadow-2xl rounded-2xl p-4 mt-[8.5rem] mx-60 space-y-6 px-5">
                <h1 className="text-center">
                  <span className="text-2xl font-bold">
                    Employee Details for {ParameterData.Phone}
                  </span>
                </h1>
                <h2 className="text-lg font-medium">
                  Name :{" "}
                  <span className="ml-10">{EmployeeData[0].EmployeeName}</span>
                </h2>
                <h2 className="text-lg font-medium">
                  Email :{" "}
                  <span className="ml-10">{EmployeeData[0].EmployeeEmail}</span>
                </h2>
                <h2 className="text-lg font-medium">
                  Phone Number :{" "}
                  <span className="ml-10">
                    {EmployeeData[0].EmployeePhoneNumber}
                  </span>
                </h2>
                <h2 className="text-lg font-medium">
                  Employee Role :{" "}
                  <span className="ml-10">{EmployeeData[0].EmployeeRole}</span>
                </h2>
                <h2 className="text-lg font-medium">
                  Employee Salary :{" "}
                  <span className="ml-10">
                    {EmployeeData[0].EmployeeMonthlySalary}
                  </span>
                </h2>
                <h2 className="text-lg font-medium">
                  Date of Joining :{" "}
                  <span className="ml-10">
                    {EmployeeData[0].EmployeeDateOfJoining}
                  </span>
                </h2>
              </div>
              <Button
                leftIcon={<AiOutlineRollback />}
                onClick={() => {
                  Navigate("/dashboard");
                }}
                className="ml-[27.25rem] mt-5"
                variant="solid"
                colorScheme="linkedin"
              >
                Go Back
              </Button>
              <Button
                leftIcon={<RiDeleteBin2Line />}
                onClick={() => {
                  Navigate("/dashboard");
                }}
                className="ml-[7.25rem] mt-5 rounded-3xl"
                variant="solid"
                colorScheme="red"
              >
               Delete Record
              </Button>
            </>
          ) : (
            <Dashboard_No_Data_Found
              Message=" No Employee Found with this Phone Number."
              Height="10rem"
            />
          )}
        </>
      )}
    </>
  );
}
