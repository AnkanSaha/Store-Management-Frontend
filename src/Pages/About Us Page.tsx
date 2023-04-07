// This page is used to render the about us page.

// import Essential Packages
import { useContext } from "react"; // import UseContext from 'react';

// import Variables & Context
import { GlobalContext } from "../Context/Context API"; // import Global Context

// import Components
import Navbar from "../Components/Most Used Components/Navbar"; // import Navbar from '../Components/Most Used Components/Navbar';
import Footer from "../Components/Most Used Components/Footer"; // import Footer from '../Components/Most Used Components/Footer';
import Connection from "../Components/Most Used Components/Connection"; // import Connection from '../Components/Most Used Components/Connection';
import About_Us_Content from "../Components/Privacy Policy & About US Page Components/About Us Content"; // import About_Us_Content from '../Components/Privacy Policy & About US Page Components/About Us Content';

export default function AboutUs() {
  // using Global Context
  const { InternetStatus }: any = useContext(GlobalContext); // const { } = useContext(GlobalContext);

  return (
    <>
      {InternetStatus === "Online" ? (
        <>
          <Navbar AppName="About us" />
          <About_Us_Content />
          <Footer />
        </>
      ) : InternetStatus === "Offline" ? (
        <>
          <Navbar AppName="No Internet" />
          <About_Us_Content />
          <Footer />
          <Connection />
        </>
      ) : null}
    </>
  );
}
