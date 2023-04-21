// This is the main component of dashboard page which is used to render the dashboard overview component to the DOM.

// import all essential components & libraries
import Sidebar from "./Sidebar/Sidebar"; // import Sidebar component
import { useContext } from "react"; // context API

//Context API
import { GlobalContext } from "../../Context/Context API"; // import Global Context

export default function Dashboard_Overview() {
  // using Context API
  const { AuthDetails }: any = useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  return (
    <>
      <Sidebar TopText={`Welcome ${AuthDetails.AccountDetails.Name}`} />
    </>
  );
}
