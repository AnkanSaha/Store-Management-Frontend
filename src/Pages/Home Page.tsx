import React from "react";

// import Components
import Navbar from "../Components/Most Used Components/Navbar";

// import Functions
import { Update_Document_Title } from "../Functions/Most Used Functions"; // import Functions

function HomePage() {
  Update_Document_Title({ TitleName: "Home - Store Manager" }); // Update Document Title
  return (
    <>
      <Navbar />
    </>
  );
}
export default HomePage;
