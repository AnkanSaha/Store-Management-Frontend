// Dashboard Main Component

// import reqired React Hooks
import { useContext, useEffect } from "react"; // context API

// import Components
import Navbar from "../../Components/Most Used Components/Navbar"; // import Navbar
import Footer from "../../Components/Most Used Components/Footer"; // import Footer
import { Connection_Fail } from "../../Components/Most Used Components/Connection Fail"; // import Connection
import NotFound from "../Home/Not Found Page"; // Not Found Page

// import Functions
import {
  Update_Document_Title,
  Internet_Connection_Status,
} from "../../Functions/Most Used Functions"; // import Functions

import Dashboard_Overview from "../../Components/Dashboard Components/Dashboard Overview"; // import Dashboard Overview Component

// import Variables & Context
import { AppName } from "../../Global/Global variables"; // import App Name
import { GlobalContext } from "../../Context/Context API"; // import Global Context

export default function Dashboard() {
  // using Context API
  const { InternetStatus, AuthDetails, UpdateAlert }: any =
    useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  // clear alert message
  useEffect(() => {
    UpdateAlert({}); // Update Alert
  });

  Internet_Connection_Status(); // Internet Connection Status
  // Update Document Title with logic
  if (AuthDetails.Status === "Success") {
    Update_Document_Title({
      TitleName: `${AuthDetails.AccountDetails.ShopName} - ${AppName}`,
    }); // Update Document Title
  }

  return (
    <>
      {InternetStatus === "Offline" ? <Connection_Fail /> : null}
      {AuthDetails.Status === "Success" ? (
        <>
          <Navbar AppName={AuthDetails.AccountDetails.ShopName} />
          <Dashboard_Overview />
          <Footer />
        </>
      ) : (
        <NotFound
          PageTitle="Not Allowed"
          ComponentTitle="Not Allowed"
          MainMessage="No User Logged in"
        />
      )}
    </>
  );
}
