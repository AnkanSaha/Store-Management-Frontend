// This file is too long to be displayed in the browser.

// import essential components & libraries
import { useParams } from "react-router-dom"; // import useSearchParams for getting the search params


// import Functional Components
import Navbar from "../../../Most Used Components/Navbar"; // import Navbar Component

// function for Manage Single Employee
export default function Manage_Single_Employee() {
    let ParameterData:object = useParams();
    console.log(ParameterData);
  return (
   <>
   <Navbar/>
   </>
  )
}
