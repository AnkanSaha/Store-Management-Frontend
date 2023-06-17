// This file is too long to be displayed in the browser.

// import essential components & libraries
import { useParams, useNavigate } from "react-router-dom"; // import useSearchParams for getting the search params
import { useState, useEffect, useContext } from "react"; // import useState for state management
import JWT_Decode from "../../../../Functions/JWT/Decode"; // import JWT_Decode function

// import Functional Components
import Navbar from "../../../Most Used Components/Navbar"; // import Navbar Component
import { Connection_Fail } from "../../../Most Used Components/Connection Fail"; // import Connection Fail Component
import Loading from "../../../Most Used Components/Loading"; // import Loading Component
import Dashboard_No_Data_Found from "../Basic Components/Dashboard No Data Found"; // import Dashboard No Data Found Component
import Footer from "../../../Most Used Components/Footer"; // import Footer component

/* These lines of code are importing various components and icons from different libraries and files. */
import { Button } from "@chakra-ui/react"; // import Button Component
import { Alert } from "../../../Most Used Components/Alert"; // import Alert Component
import { AiOutlineRollback } from "react-icons/ai"; // import AiOutlineRollback Icon
import { RiDeleteBin2Line } from "react-icons/ri"; // import RiDeleteBin2Line Icon
import { RxUpdate } from "react-icons/rx"; // import GrDocumentUpdate
//import Context
import { GlobalContext } from "../../../../Context/Context API"; // import Global Context

// import Functions
import {
  HTTP_GET,
  HTTP_DELETE,
  Internet_Connection_Status,
} from "../../../../Functions/Most Used Functions"; // import HTTP_POST Function
import { Update_Document_Title } from "../../../../Functions/Most Used Functions"; // import Functions

// function for Manage Single Employee
export default function Manage_Single_Employee() {
  Internet_Connection_Status(); // Internet Connection Status
  let Navigate = useNavigate(); // Navigate
  // Context
  const { AuthDetails, UpdateAlert, AlertMessage, InternetStatus }: any =
    useContext(GlobalContext); // Global Context

  // Decode AuthDetails Token
  const Decoded_AuthDetails : any = JWT_Decode(AuthDetails.Data.AccountDetails) // decode JWT token

  let ParameterData: any = useParams(); // get the search params

  // state management
  let [LoadingState, setLoadingState] = useState<boolean>(true); // state for loading
  let [EmployeeData, setEmployeeData] = useState<any>([]); // Employee Data
  let [isDeleting, setIsDeleting] = useState<boolean>(false); // is Deleting

  Update_Document_Title({
    TitleName: `Control Panel for ${ParameterData.Phone}`,
  }); // Update Document Title
  // End of Update Document Title with logic

  // useEffect
  useEffect(() => {
    UpdateAlert({}); // Update Alert Message
    setLoadingState(true); // Set Loading Text to true
    HTTP_GET({
      PostPath: `/get/employee/get?User_idForQuery=${Decoded_AuthDetails.User_id}&OwnerEmailForQuery=${Decoded_AuthDetails.Email}`,
    }).then((Response) => {
      setLoadingState(false); // Set Loading Text to false
      if (Response.Status === "Employee Found") {
        let Filtered_employee_Data = Response.Data.filter(
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

  async function DeleteRecord() {
    setIsDeleting(true); // set is Deleting to true
    let Result = await HTTP_DELETE({
      PostPath: `/delete/employee/delete?User_idForQuery=${Decoded_AuthDetails.User_id}&OwnerEmailForQuery=${Decoded_AuthDetails.Email}&EmployeeEmail=${ParameterData.Email}&EmployeeMobileNumber=${ParameterData.Phone}`,
    });
    setIsDeleting(false); // set is Deleting to true
    if (Result.Status === "Employee Deleted") {
      Navigate(-1);
    } else {
      UpdateAlert(Result);
    }
  }

  const SendUIinEdit = () => {
    Navigate(
      `/dashboard/employee/${ParameterData.Email}/${ParameterData.Phone}/edit`
    );
  };

  return (
    <>
      {LoadingState === true ? (
        <Loading
          Title={`Loading ${ParameterData.Phone}'s Details`}
          Description={`Please wait while we are loading the details of ${ParameterData.Email} for you. This may take a few seconds.`}
        />
      ) : isDeleting === true ? (
        <>
          <Loading
            Title="Deleting Employee"
            Description="Please wait while we are deleting the employee. This may take a few seconds."
          />
        </>
      ) : (
        <>
             {InternetStatus === "Offline" ? <Connection_Fail /> : null}
          <Navbar />
          {EmployeeData.length !== 0 ? (
            <>
              {AlertMessage.Status === "No Employee Found" ? (
                <Alert
                  Title={AlertMessage.Status}
                  Message={AlertMessage.Message}
                  ButtonText="ok"
                />
              ) : AlertMessage.Status === "Accont Not Found" ? (
                <Alert
                  Title={AlertMessage.Status}
                  Message={AlertMessage.Message}
                  ButtonText="ok"
                />
              ) : AlertMessage.Status === "No Store Found" ? (
                <Alert
                  Title={AlertMessage.Status}
                  Message={AlertMessage.Message}
                  ButtonText="ok"
                />
              ) : null}

              <div className="bg-white shadow-2xl rounded-2xl p-4 mt-[6.5rem] mx-60 space-y-6 px-5">
                <h1 className="text-center">
                  <span className="text-2xl font-bold">
                    Employee Details for {ParameterData.Phone}
                  </span>
                </h1>
                <h2 className="text-lg font-medium">
                  <strong>Name</strong> :{" "}
                  <span className="ml-10">{EmployeeData[0].EmployeeName}</span>
                </h2>
                <h2 className="text-lg font-medium">
                  <strong>Email</strong> :{" "}
                  <span className="ml-10"><i>{EmployeeData[0].EmployeeEmail}</i></span>
                </h2>
                <h2 className="text-lg font-medium">
                  <strong>Phone Number</strong> :{" "}
                  <span className="ml-10">
                    {EmployeeData[0].EmployeePhoneNumber}
                  </span>
                </h2>
                <h2 className="text-lg font-medium">
                  <strong>Employee Role</strong> :{" "}
                  <span className="ml-10">{EmployeeData[0].EmployeeRole}</span>
                </h2>
                <h2 className="text-lg font-medium">
                  <strong>Employee Salary</strong> :{" "}
                  <span className="ml-10">
                    {EmployeeData[0].EmployeeMonthlySalary}
                  </span>
                </h2>
                <h2 className="text-lg font-medium">
                  <strong>Date of Joining</strong> :{" "}
                  <span className="ml-10">
                    {EmployeeData[0].EmployeeDateOfJoining}
                  </span>
                </h2>
              </div>
              <Button
                leftIcon={<AiOutlineRollback />}
                onClick={() => {
                  Navigate(-1);
                }}
                className="ml-[23.25rem] mt-5"
                variant="solid"
                colorScheme="linkedin"
              >
                Go Back
              </Button>
              <Button
                leftIcon={<RiDeleteBin2Line />}
                onClick={DeleteRecord}
                className="ml-[7.25rem] mt-5 rounded-3xl"
                variant="solid"
                colorScheme="red"
              >
                Delete Record
              </Button>
              <Button
                leftIcon={<RxUpdate />}
                onClick={SendUIinEdit}
                className="ml-[7.25rem] mt-5 rounded-3xl"
                variant="solid"
                colorScheme="green"
              >
                Update Record
              </Button>
              <Footer FooterStyle="static" />
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
