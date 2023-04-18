// This is the login page for the application

// import React & React Hooks
import { useContext } from "react"; // useContext Hook

// import Components
import Navbar from "../../Components/Most Used Components/Navbar"; // Navbar Component
import Footer from "../../Components/Most Used Components/Footer"; // Footer Component
import { Connection_Fail } from "../../Components/Most Used Components/Connection Fail"; // Connection Component
import Loading from "../../Components/Most Used Components/Loading"; // Loading Component
import Login_Form_Section from "../../Components/Authentication/Login/Login Form Section"; // Login Form Section Component
// import Functions
import {
  Update_Document_Title,
  Internet_Connection_Status,
} from "../../Functions/Most Used Functions"; // Update Document Title Function and Internet Connection Status Function

// import Contexts & Variables
import { AppName } from "../../Global/Global variables"; // App Name Variable
import { GlobalContext } from "../../Context/Context API"; // Global Context

export default function Login_Page() {
  // using Contexts
  const { InternetStatus, LoadingStatus }: any = useContext(GlobalContext); // Global Context

  // using Functions
  Internet_Connection_Status(); // Internet Connection Status Function
  Update_Document_Title({ TitleName: `Login - ${AppName}` }); // Update Document Title Function

  return (
    <>
      {InternetStatus === "Offline" ? <Connection_Fail /> : null}
      {LoadingStatus === true ? (
        <>
          <Loading
            Title="Verifying your details"
            Description=" Please wait while we verify your details. This may take a while. do not refresh the page."
          />
        </>
      ) : LoadingStatus === false ? (
        <>
          <Navbar AppName="Login" />
          <Login_Form_Section />
          <Footer FooterStyle="static" />
        </>
      ) : null}
    </>
  );
}
