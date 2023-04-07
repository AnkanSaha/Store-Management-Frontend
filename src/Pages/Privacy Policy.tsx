// This is a page that will be rendered at /privacy-policy & used as a link in the footer component

// import Essential Packages
import { useContext } from "react"; // import UseContext from 'react';

// import Variables & Context
import { AppName } from "../Non Changable variables"; // import {AppName} from "../Non Changable variables";
import { GlobalContext } from "../Context/Context API"; // import Global Context

// import Essential React components
import Navbar from "../Components/Most Used Components/Navbar"; // import Navbar from "../Components/Most Used Components/Navbar";
import Footer from "../Components/Most Used Components/Footer"; // import Footer from "../Components/Most Used Components/Footer";
import Privacy_Content from "../Components/Privacy Policy & About US Page Components/Privacy Content"; // import Privacy Content from "../Components/Privacy Policy & About US Page Components/Privacy Content";
import Connection from "../Components/Most Used Components/Connection"; // import Connection from "../Components/Most Used Components/Connection";

export default function PrivacyPolicy() {
  // using Context API
  const { InternetStatus }: any =
    useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  return (
    <>
      {InternetStatus === "Online" ? (
        <>
          <Navbar AppName={AppName} />
          <h1 className="text-4xl font-bold ml-[23.25rem] mt-[5rem]">
            Privacy Policy for Store Manager
          </h1>
          <Privacy_Content />
          <Footer FooterStyle="static" />
        </>
      ) : InternetStatus === "Offline" ? (
        <>
          <Navbar AppName="No Internet" />
          <h1 className="text-4xl font-bold ml-[23.25rem] mt-[5rem]">
            Privacy Policy for Store Manager
          </h1>
          <Privacy_Content />
          <Footer FooterStyle="static" />
          <Connection />
        </>
      ) : null}
    </>
  );
}
