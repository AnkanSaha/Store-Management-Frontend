// This is a component that will be used in the login Page Component

// import React
import { useState, useContext, useEffect } from "react"; // import useState hook

// import context API
import { GlobalContext } from "../../../Context/Context API"; // import global Context API

// import React router dom
import { Link, useNavigate } from "react-router-dom"; // import Link component

// import UI Components
import { Button } from "@chakra-ui/react";
import { Alert } from "../../Most Used Components/Alert"; // Importing Alert Component
// import Functions
import Login_Function from "../../../Functions/Authentication/Login Function"; // import Login Function
import { Return_Cache_Data } from "../../../Functions/Cache/cache Storage"; // Store Cache Data Function

export default function Login_Form_Section() {
  // Using React Hooks
  let Navigate: any = useNavigate(); //Using UseNavigate Hook
  // using context API
  let { UpdateAlert, AlertMessage, UpdateLoading, UpdateAuthDetails }: any =
    useContext(GlobalContext); // using context api

  // state for store login data
  let [LoginData, setLoginData] = useState({
    Email: "",
    Password: "",
    RememberMe: false,
  });

  // handle login data
  let Name: string; // store the name of the input field
  let Value: string; // store the value of the input field

  const HandleData = (ChangedData: any) => {
    Name = ChangedData.target.name;
    Value = ChangedData.target.value;
    setLoginData({ ...LoginData, [Name]: Value });
  };

  // handle checked data
  let CheckedStatus: boolean; // store the checked status of the input field
  const handleChecked = (CheckedElement: any) => {
    CheckedStatus = CheckedElement.target.checked;
    setLoginData({ ...LoginData, [CheckedElement.target.name]: CheckedStatus });
  };

  // fetch data from cache
  useEffect(() => {
    Return_Cache_Data({ DataPath: "AuthData" }).then((CacheData) => {
      if (CacheData === false) {
        console.log("No Data Found");
        UpdateLoading(false); // update loading state to false
      } else {
        UpdateAuthDetails(CacheData); // update the login Status
        UpdateAlert(CacheData); // Updating Success Status
      }
    });
  }, []);

  // Handle Submit
  const SubmitData = async () => {
    UpdateLoading(true); // update loading state
    let LoginStatus = await Login_Function({ LoginData: LoginData }); // function for Login
    if (LoginStatus?.Status === false) {
      UpdateAlert({}); // Clearing all data from this state
      UpdateLoading(false); // update loading state
    } else if (LoginStatus.Status === "Success") {
      UpdateLoading(false); // update loading state
      UpdateAlert(LoginStatus); // Updating Success Status
      UpdateAuthDetails(LoginStatus); // update the login Status
    } else if (LoginStatus.Status === "Failed") {
      UpdateLoading(false); // update loading state
      UpdateAlert(LoginStatus); // Updating Filed Status
    }
  };

  // function when alert close button clicked
  let Alert_Close_Button_Func_For_Clear_State_When_Error_or_Failed = () => {
    UpdateAlert({});
  }; // function for clear alert state when error or failed
  let Alert_Close_Button_Func_For_Navigate_TO_Dashboard_When_Success = () => {
    Navigate("/dashboard");
    UpdateAlert({});
  }; // function for navigate to dashboard when success

  return (
    <>
      {AlertMessage.Status === "Failed" ? (
        <Alert
          Title={AlertMessage.Status}
          Message={AlertMessage.Message}
          ButtonFunc={
            Alert_Close_Button_Func_For_Clear_State_When_Error_or_Failed
          }
          ButtonText="Understood"
        />
      ) : AlertMessage.Status === "Success" ? (
        <Alert
          Title={AlertMessage.Status}
          Message={AlertMessage.Message}
          ButtonFunc={
            Alert_Close_Button_Func_For_Navigate_TO_Dashboard_When_Success
          }
          ButtonText="Go to Dashboard"
        />
      ) : null}

      <h1 className="mb-4 mt-[6.25rem] text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {" "}
        Welcome{" "}
        <mark className="px-2 text-white bg-cyan-600 rounded dark:bg-blue-500">
          back
        </mark>{" "}
        again !
      </h1>
      <div id="loginContent" className="mx-28 mt-[5.5rem]">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            onChange={HandleData}
            id="email"
            name="Email"
            value={LoginData.Email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your email address here"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            onChange={HandleData}
            id="password"
            name="Password"
            value={LoginData.Password}
            placeholder="enter your password here"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              onChange={handleChecked}
              name="RememberMe"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={SubmitData}
          style={{ marginTop: 15, marginLeft: 480 }}
        >
          Login now
        </Button>
        <Link to="/signup">
          <p className="text-center text-blue-800 mt-7">
            {" "}
            Don't have an account? click here{" "}
          </p>
        </Link>
        <Link to="/user/system/forgot/lost-password">
          <p className="text-center text-blue-800 mt-5">
            {" "}
            Forgot Password? click here{" "}
          </p>
        </Link>
      </div>
    </>
  );
}
