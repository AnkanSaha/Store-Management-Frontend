// This is the main component of dashboard page which is used to render the dashboard overview component to the DOM.

// import all essential components & libraries
import Sidebar from "./Sidebar/Sidebar"; // import Sidebar component
import { useContext } from "react"; // context API

//Context API
import { GlobalContext } from "../../Context/Context API"; // import Global Context


// import all essential components & libraries
import Dashboad_Homepage from "./Dashboard Sub Components/Dashboad Homepage"; // import Dashboad_Homepage component

export default function Dashboard_Overview() {
  // using Context API
  const { AuthDetails, SidebarOption }: any = useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  return (
    <>
      <Sidebar TopText={`Welcome ${AuthDetails.AccountDetails.Name}`} />
      {
        SidebarOption === "dashboard" ? <Dashboad_Homepage /> : null
      }
    </>
  );
}
