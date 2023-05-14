/* This code is defining and exporting a React component named `Dashboard`. It imports necessary
components, functions, variables, and context from other files. The component renders a `Navbar`
component, a `Dashboard_Overview` component, and other components based on the `InternetStatus` and
`AuthDetails` data retrieved from the global context. It also updates the document title and clears
the alert message using the `useEffect` hook. */
// Dashboard Main Component

// import reqired React Hooks
import { useContext, useEffect } from "react"; // context API

// import Components
import Navbar from "../../Components/Most Used Components/Navbar"; // import Navbar
import { Connection_Fail } from "../../Components/Most Used Components/Connection Fail"; // import Connection
import NotFound from "../Home/Not Found Page"; // Not Found Page
import Loading from "../../Components/Most Used Components/Loading"; // Loading

// import Functions
import {
  Update_Document_Title,
  Internet_Connection_Status,
} from "../../Functions/Most Used Functions"; // import Functions

import Dashboard_Overview from "../../Components/Dashboard Components/Dashboard Controller"; // import Dashboard Overview Component

/* The code is importing variables and context from other files. Specifically, it is importing the
`AppName` variable from the `Global variables` file located in the `Global` folder and the
`GlobalContext` from the `Context API` file located in the `Context` folder. These variables and
context are then used within the `Dashboard` component to access and update global state and
variables. */
// import Variables & Context
import { AppName } from "../../Global/Global variables"; // import App Name
import { GlobalContext } from "../../Context/Context API"; // import Global Context

/* This code exports a default function named `Dashboard` which is a React component. It imports
necessary components, functions, variables, and context from other files. It uses the `useContext`
hook to access the global context and retrieve the values of `InternetStatus`, `AuthDetails`,
`UpdateAlert`, and `LoadingStatus`. It also uses the `useEffect` hook to clear the alert message and
update the document title based on the `AuthDetails` data. */
export default function Dashboard() {
  
/* This code is using the `useContext` hook to access the `GlobalContext` and retrieve the values of
`InternetStatus`, `AuthDetails`, `UpdateAlert`, and `LoadingStatus`. It is also using the
`useEffect` hook to clear the alert message by calling the `UpdateAlert` function with an empty
object as its argument. This ensures that any previous alert message is removed when the component
is mounted or updated. */
  // using Context API
  const { InternetStatus, AuthDetails, UpdateAlert, LoadingStatus }: any =
    useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  // clear alert message
  useEffect(() => {
    UpdateAlert({}); // Update Alert
  }, []);

/* This code is checking the internet connection status using the `Internet_Connection_Status` function
and updating the document title based on the `AuthDetails` data. If the `AuthDetails.Status` is
equal to "Success", then the `Update_Document_Title` function is called with an object containing
the `TitleName` property set to a string that includes the `ShopName` from the
`AuthDetails.Data.AccountDetails` object and the `AppName` variable from the `Global variables`
file. This updates the document title to include the name of the shop and the name of the
application. */
  Internet_Connection_Status(); // Internet Connection Status
  // Update Document Title with logic
  if (AuthDetails.Status === "Success") {
    Update_Document_Title({
      TitleName: `${AuthDetails.Data.AccountDetails.ShopName} - ${AppName}`,
    }); // Update Document Title
  }

  return (
    <>
      {InternetStatus === "Offline" ? <Connection_Fail /> : null}
      {AuthDetails.Status === "Success" ? (
        <>
          {LoadingStatus === true ? (
            <Loading Title="Fetching from server" Description="Please wait a moment  while we fetch data from server for you." />
          ) : (
            <>
              <Navbar AppName={AuthDetails.Data.AccountDetails.ShopName} />
              <Dashboard_Overview />
            </>
          )}
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
