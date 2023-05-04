// This is the main component of dashboard page which is used to render the dashboard overview component to the DOM.

// import all essential components & libraries
import Sidebar from "./Sidebar/Sidebar"; // import Sidebar component

// import Variables & Context
import { useContext } from "react"; // context API

//Context API
import { GlobalContext } from "../../Context/Context API"; // import Global Context

// import all essential components & libraries
import Dashboad_Homepage from "./Dashboard Sub Components/Dashboad Homepage"; // import Dashboad_Homepage component
import Manage_Employees from "./Dashboard Sub Components/Employee Management/Manage Employees"; // import Manage_Employees component
import Add_New_Employee from "./Dashboard Sub Components/Employee Management/Add New Employee";


// Manage Profile
import ViewProfile from "./Dashboard Sub Components/View Profile"; // import ViewProfile component

export default function Dashboard_Overview() {
  // using Context API
  const { AuthDetails, SidebarOption }: any = useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  return (
    <>
      <Sidebar AdminName={AuthDetails.Data.AccountDetails.Name} />
      {SidebarOption === "dashboard" ? (
        <Dashboad_Homepage ShopName={AuthDetails.Data.AccountDetails.ShopName} />
      ) : SidebarOption === "manage-employees" ? (
        <Manage_Employees ShopName={AuthDetails.Data.AccountDetails.ShopName} />
      ) : SidebarOption === "add-employee" ? (
        <Add_New_Employee StoreName={AuthDetails.Data.AccountDetails.ShopName} />
      ) : SidebarOption === "manage-profile" ? (
        <ViewProfile ShopName={AuthDetails.Data.AccountDetails.ShopName}/>
      ) : null}
    </>
  );
}
