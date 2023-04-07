// import Essential React Components
import { useContext } from "react"; // import {useContext} from 'react';
import { useNavigate } from "react-router-dom"; // import {useNavigate} from 'react-router-dom';
import Navbar from "../../Components/Most Used Components/Navbar";

import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

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
import { Connection_Fail } from "../../Components/Most Used Components/Connection"; // import Connection from "../Components/Most Used Components/Connection";

import {
  Internet_Connection_Status,
  Update_Document_Title,
} from "../../Functions/Most Used Functions"; // import Internet Connection Status

function NotFound() {
  const primary = purple[500]; // #f44336

  // using Context API
  const { InternetStatus }: any = useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  Internet_Connection_Status(); // Internet Connection Status

  Update_Document_Title({ TitleName: `404 - ${AppName}` }); // Update Document Title

  let navigate = useNavigate(); // using the navigate hook

  return (
    <>
      {InternetStatus === "Offline" ? <Connection_Fail /> : null}
      <Navbar AppName="Not Found" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: primary,
        }}
      >
        <Typography variant="h1" style={{ color: "white" }}>
          404
        </Typography>
        <Typography variant="h6" style={{ color: "white" }}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
          variant="contained"
          style={{ marginTop: 25 }}
        >
          Back Home
        </Button>
      </Box>
    </>
  );
}

export default NotFound;
