// import Essential Packages
import { useContext } from "react"; // import UseContext from 'react';

// import Components
import Navbar from "../../Components/Most Used Components/Navbar"; // import Navbar
import Footer from "../../Components/Most Used Components/Footer"; // import Footer
import Upper_First_Section from "../../Components/Home/Upper First Section"; // import Upper First Section
import Upper_Second_Section from "../../Components/Home/Upper Second Section"; // import Upper Second Section
import Features from "../../Components/Home/Features"; // import Features Section
import Connection from "../../Components/Most Used Components/Connection"; // import Connection
import Hero_Comp from "../../Components/Home/Hero Comp"; // import Hero Comp

// import Functions
import {
  Update_Document_Title,
  Internet_Connection_Status,
} from "../../Functions/Most Used Functions"; // import Functions

// import Variables & Context
import { AppName } from "../../Global/Global variables"; // import App Name
import { GlobalContext } from "../../Context/Context API"; // import Global Context


function HomePage() {
  // using Context API
  const { InternetStatus }: any = useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  Internet_Connection_Status(); // Internet Connection Status

  Update_Document_Title({ TitleName: `Home - ${AppName}` }); // Update Document Title
  return (
    <>
      {InternetStatus === "Online" ? (
        <>
          <Navbar AppName={AppName} />
          <Upper_First_Section />
          <Upper_Second_Section />
          <Hero_Comp />
          <Features />
          <Footer FooterStyle="static" />
        </>
      ) : InternetStatus === "Offline" ? (
        <>
          <Navbar AppName="No Internet" />
          <Upper_First_Section />
          <Upper_Second_Section />
          <Hero_Comp />
          <Features />
          <Footer FooterStyle="static" />
          <Connection />
        </>
      ) : null}
    </>
  );
}
export default HomePage;
