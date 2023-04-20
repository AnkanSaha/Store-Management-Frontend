// import Essential React Components
import { useContext } from "react"; // import {useContext} from 'react';
import { useNavigate } from "react-router-dom"; // import {useNavigate} from 'react-router-dom';
import Navbar from "../../Components/Most Used Components/Navbar";

import { Heading, Button } from "@chakra-ui/react";
import { TiArrowBackOutline } from "react-icons/ti";

// The NotFound function is a component that displays a 404 page with a button
// that redirects the user to the home page.

// The following code handles the 404 page for the website
// It is used when a user navigates to a page that does not exist
// The NotFound function returns the 404 page
// The NotFound function uses the navigate hook to return the user to the home page
// The NotFound function uses the Navbar component to display the navbar at the top of the page

// import Variables & Context
import { GlobalContext } from "../../Context/Context API"; // import Global Context
import { AppName } from "../../Global/Global variables"; // import App Name
// import Components
import { Connection_Fail } from "../../Components/Most Used Components/Connection Fail"; // import Connection from "../Components/Most Used Components/Connection";

import {
  Internet_Connection_Status,
  Update_Document_Title,
} from "../../Functions/Most Used Functions"; // import Internet Connection Status

// interface
interface props {
  PageTitle:string;
  MainMessage:string;
  ComponentTitle:string;
}

function NotFound({MainMessage, PageTitle, ComponentTitle}:props) {
  // using Context API
  const { InternetStatus }: any = useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  Internet_Connection_Status(); // Internet Connection Status

  Update_Document_Title({ TitleName: `${PageTitle} - ${AppName}` }); // Update Document Title

  let navigate = useNavigate(); // using the navigate hook

  return (
    <>
      {InternetStatus === "Offline" ? <Connection_Fail /> : null}
      <Navbar AppName={ComponentTitle} />
      <Heading className="mt-[16.25rem] text-center">
        {MainMessage}
      </Heading>
      <Button
        onClick={() => {
          navigate("/");
        }}
        className="ml-[38.5rem]"
        style={{ marginTop: 40 }}
        leftIcon={<TiArrowBackOutline />}
      >
        Go Home
      </Button>
    </>
  );
}

NotFound.defaultProps = {
  PageTitle: "404",
  MainMessage: "404 - Page Not Found",
  ComponentTitle:"404"
}

export default NotFound;
