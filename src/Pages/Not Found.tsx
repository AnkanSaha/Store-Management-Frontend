import { useNavigate } from "react-router-dom"; // import {useNavigate} from 'react-router-dom';
import Navbar from "../Components/Most Used Components/Navbar";

import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors"; 

// The NotFound function is a component that displays a 404 page with a button
// that redirects the user to the home page.

// The following code handles the 404 page for the website
// It is used when a user navigates to a page that does not exist
// The NotFound function returns the 404 page
// The NotFound function uses the navigate hook to return the user to the home page
// The NotFound function uses the Navbar component to display the navbar at the top of the page

function NotFound() {
  const primary = purple[500]; // #f44336

  let navigate = useNavigate(); // using the navigate hook

  return (
    <>
    <Navbar />
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
