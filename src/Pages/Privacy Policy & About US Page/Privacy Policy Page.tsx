// This is a page that will be rendered at /privacy-policy & used as a link in the footer component

// import Essential Packages
import { useContext } from "react"; // import UseContext from 'react';

// import Variables & Context
import { GlobalContext } from "../../Context/Context API"; // import Global Context
import { AppName } from "../../Global/Global variables"; // import App Name

// import Essential React components
import Navbar from "../../Components/Most Used Components/Navbar"; // import Navbar from "../Components/Most Used Components/Navbar";
import Footer from "../../Components/Most Used Components/Footer"; // import Footer from "../Components/Most Used Components/Footer";
import Privacy_Content from "../../Components/Privacy Policy & About US Page Components/Privacy Content"; // import Privacy Content from "../Components/Privacy Policy & About US Page Components/Privacy Content";
import { Connection_Fail } from "../../Components/Most Used Components/Connection & Alert"; // import Connection from "../Components/Most Used Components/Connection";

// import Functions
import {
  Internet_Connection_Status,
  Update_Document_Title,
} from "../../Functions/Most Used Functions"; // import Internet Connection Status from "../Functions/Most Used Functions";

export default function PrivacyPolicy() {
  // using Context API
  const { InternetStatus }: any = useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  Internet_Connection_Status(); // Internet Connection Status

  Update_Document_Title({ TitleName: `Privacy Policy - ${AppName}` }); // Update Document Title

  return (
    <>
      {InternetStatus === "Offline" ? <Connection_Fail /> : null}
      <Navbar AppName="Privacy Policy" />
      <h1 className="text-4xl font-bold ml-[23.25rem] mt-[5rem]">
        Privacy Policy for {AppName}
      </h1>
      <Privacy_Content />
      <Footer FooterStyle="static" />
    </>
  );
}
