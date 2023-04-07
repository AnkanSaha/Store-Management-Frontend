// This is the signup page for the app

// import React & React Hooks
import { useContext } from "react"; // useContext Hook

// import Components
import Navbar from "../../Components/Most Used Components/Navbar"; // Navbar Component
import Footer from "../../Components/Most Used Components/Footer"; // Footer Component
import Connection from "../../Components/Most Used Components/Connection"; // Connection Component

// import Functions
import {
  Update_Document_Title,
  Internet_Connection_Status,
} from "../../Functions/Most Used Functions"; // Update Document Title Function and Internet Connection Status Function

// import Contexts & Variables
import { AppName } from "../../Global/Global variables"; // App Name Variable
import { GlobalContext } from "../../Context/Context API"; // Global Context

export default function Signup_Page() {
  // using Contexts
  const { InternetStatus }: any = useContext(GlobalContext); // Global Context

  // using Functions
  Internet_Connection_Status(); // Internet Connection Status Function
  Update_Document_Title({ TitleName: `Signup - ${AppName}` }); // Update Document Title Function

  return (
    <>
      {InternetStatus === "Online" ? (
        <>
          <Navbar AppName="Signup" />
          <Footer />
        </>
      ) : InternetStatus === "Offline" ? (
        <>
          <Navbar AppName="Signup" />
          <Footer />
          <Connection />
        </>
      ) : null}
    </>
  );
}
