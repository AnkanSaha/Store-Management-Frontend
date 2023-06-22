import React from "react"; // import React
import { useParams, useNavigate } from "react-router-dom"; // import react router dom packages
import JWT_Decode from "../../../../Functions/JWT/Decode"; // import JWT_Decode function

// import components
import Navbar from "../../../Most Used Components/Navbar"; // import Navbar
import Loading from "../../../Most Used Components/Loading"; // import loading
import { Alert } from "../../../Most Used Components/Alert"; // import Alert
import Footer from "../../../Most Used Components/Footer"; // import footer
import Dashboard_No_Data_Found from "../Basic Components/Dashboard No Data Found"; // import Dashboard_No_Data_Found

// import Context API & variables
import { AppName } from "../../../../Global/Global variables"; // import common variables
import { GlobalContext } from "../../../../Context/Context API"; // import global context

// import Functions
import {
  Update_Document_Title,
  HTTP_GET,
  Internet_Connection_Status
} from "../../../../Functions/Most Used Functions";
import { UpdateEmployee } from "../../../../Functions/Store Management/Employee Management Function";
import { Connection_Fail } from "../../../Most Used Components/Connection Fail";

export default function Edit_Employee_Details() {
  Internet_Connection_Status(); // Internet Connection Status
  const ParameterData = useParams(); // getting data from parameter
  const Navigator = useNavigate(); // Creating instance of Navigator

  // using Context API
  let { AuthDetails, UpdateAlert, AlertMessage, InternetStatus }: any =
    React.useContext(GlobalContext);

    // Decode Auth Details
    const Decoded_AuthDetails : any = JWT_Decode(AuthDetails.Data.AccountDetails); // decode JWT token
  // All States
  const [isLoading, setIsLodaing] = React.useState<boolean>(true);
  const [EmployeeData, setEmployeeData] = React.useState<any>({});

  const [NewEmployeeData, setNewEmployeeData] = React.useState<any>({
    OwnerEmailForBody: Decoded_AuthDetails.Email,
    User_idForBody: Decoded_AuthDetails.User_id,
    EmployeeName: "",
    EmployeeEmail: ParameterData.Email,
    EmployeeMonthlySalary: "",
    EmployeePhoneNumber: ParameterData.Phone,
    EmployeeDateOfJoining: "",
    EmployeeRole: "",
  });

  Update_Document_Title({
    TitleName: `Edit ${ParameterData.Phone} Details`,
  }); // Update Document Title
  // End of Update Document Title with logic

  // useEffect
  React.useEffect(() => {
    UpdateAlert({}); // Update Alert Message
    setIsLodaing(true); // Set Loading Text to true
    HTTP_GET({
      PostPath: `/get/employee/get?User_idForQuery=${Decoded_AuthDetails.User_id}&OwnerEmailForQuery=${Decoded_AuthDetails.Email}`,
    }).then((Response) => {
      setIsLodaing(false); // Set Loading Text to false
      if (Response.Status === "Employee Found") {
        let Filtered_employee_Data = Response.Data.filter(
          (Employee: any) =>
            Number(Employee.EmployeePhoneNumber) === Number(ParameterData.Phone) &&
            Employee.EmployeeEmail === ParameterData.Email
        );
        setEmployeeData(Filtered_employee_Data); // set Employee Data
      } else if (Response.Status === "No Employee Found") {
        UpdateAlert(Response); // Update Alert
      }
    });
  }, []); // End of useEffect

  // function on press
  const GoBack = (event: any) => {
    event.preventDefault();
    setEmployeeData({}); // Clearing Employee Data
    Navigator(`/dashboard`);
  };

  // Update Employee Data on Change
  const updateEmployeeDataonChange = (element: any) => {
    setNewEmployeeData({
      ...NewEmployeeData,
      [element.target.name]: element.target.value,
    });
  };

  // Update All Data in Server
  const SaveDataToServer = async (event: any) => {
    event.preventDefault();
    setIsLodaing(true);
    let AfterResult = await UpdateEmployee({
      UpdateEmployeeData: NewEmployeeData,
    });
    if (AfterResult === false) {
      console.log("Failed to validate");
      setIsLodaing(false);
    } else if (AfterResult.Status) {
      setIsLodaing(false);
      UpdateAlert(AfterResult);
    }
  };
  return (
    <>
      {isLoading === false ? (
        <>
          {AlertMessage.Status === "No Employee Found" ? (
            <Alert
              Title={AlertMessage.Status}
              Message={AlertMessage.Message}
              ButtonText="ok"
              ButtonFunc={() => {
                Navigator("/dashboard");
              }}
            />
          ) : AlertMessage.Status === "Accont Not Found" ? (
            <Alert
              Title={AlertMessage.Status}
              Message={AlertMessage.Message}
              ButtonText="ok"
              ButtonFunc={() => {
                Navigator("/dashboard");
              }}
            />
          ) : AlertMessage.Status === "No Store Found" ? (
            <Alert
              Title={AlertMessage.Status}
              Message={AlertMessage.Message}
              ButtonText="ok"
              ButtonFunc={() => {
                Navigator("/dashboard");
              }}
            />
          ) : null}

          {AlertMessage.Status === "Employee Updated" ? (
            <Alert
              Title={AlertMessage.Status}
              Message={AlertMessage.Message}
              ButtonText="Manage Employee"
              ButtonFunc={() => {
                Navigator("/dashboard");
              }}
            />
          ) : AlertMessage.Status === "No Employee Found" ? (
            <Alert
              Title={AlertMessage.Status}
              Message={AlertMessage.Message}
              ButtonText="ok"
              ButtonFunc={() => {
                Navigator("/dashboard");
              }}
            />
          ) : AlertMessage.Status === "Accont Not Found" ? (
            <Alert
              Title={AlertMessage.Status}
              Message={AlertMessage.Message}
              ButtonText="ok"
              ButtonFunc={() => {
                Navigator("/dashboard");
              }}
            />
          ) : null}
          {EmployeeData.length !== 0 ? (
            <>
            {InternetStatus === "Offline" ? <Connection_Fail /> : null}
              <Navbar AppName={`${AppName} (${ParameterData.Phone})`} />

              <form className="mt-[6.25rem] mx-20">
                <h1 className="text-center my-10 font-semibold text-2xl">
                  Edit {ParameterData.Email}'s data
                </h1>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    value={NewEmployeeData.EmployeeEmail}
                    disabled
                    name="EmployeeEmail"
                    onChange={updateEmployeeDataonChange}
                    id="EmployeeEmail"
                    className="block bg-slate-50 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="EmployeeEmail"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Employee Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="EmployeePhoneNumber"
                    disabled
                    id="EmployeePhoneNumber"
                    onChange={updateEmployeeDataonChange}
                    value={NewEmployeeData.EmployeePhoneNumber}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="EmployeePhoneNumber"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Employee Phone Number
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="EmployeeName"
                    id="EmployeeName"
                    onChange={updateEmployeeDataonChange}
                    value={NewEmployeeData.EmployeeName}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="EmployeeName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Employee name
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="EmployeeRole"
                      onChange={updateEmployeeDataonChange}
                      id="EmployeeRole"
                      value={NewEmployeeData.EmployeeRole}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="EmployeeRole"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Employee Role
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="EmployeeMonthlySalary"
                      onChange={updateEmployeeDataonChange}
                      id="EmployeeMonthlySalary"
                      value={NewEmployeeData.EmployeeMonthlySalary}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="EmployeeMonthlySalary"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Employee Monthly Salary
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="date"
                      name="EmployeeDateOfJoining"
                      onChange={updateEmployeeDataonChange}
                      id="EmployeeDateOfJoining"
                      value={NewEmployeeData.EmployeeDateOfJoining}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="EmployeeDateOfJoining"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Employee Date of Joining
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={SaveDataToServer}
                  className="text-white ml-[26.5rem] mt-5 bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save Changes
                </button>
                <button
                  className="ml-10 bg-red-800 px-10 py-2 text-white rounded-full"
                  onClick={GoBack}
                >
                  Go Back
                </button>
              </form>
              <Footer FooterStyle="static"/>
            </>
          ) : (
            <>
              <Dashboard_No_Data_Found
                Message=" No Employee Found with this Phone Number."
                Height="10rem"
              />
            </>
          )}
        </>
      ) : (
        <Loading
          Title="loading Data"
          Description="Please wait, while we loading your data from server"
        />
      )}
    </>
  );
}
