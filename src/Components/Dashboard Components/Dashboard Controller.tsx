// This is the main component of dashboard page which is used to render the dashboard overview component to the DOM.

/* These lines of code are importing the necessary components and libraries for the
`Dashboard_Overview` component. The `Sidebar` component is imported from the `./Dashboard Sub
Components/Basic Components/Sidebar` file, which is used to render the sidebar menu on the dashboard
page. The `useContext` hook and `GlobalContext` are imported from the `react` and
`../../Context/Context API` libraries respectively, which are used to access the global state and
data stored in the context provider. */
// import all essential components & libraries
import Sidebar from "./Dashboard Sub Components/Basic Components/Sidebar"; // import Sidebar component

// import Variables & Context
import { useContext } from "react"; // context API
import JWT_Decode from '../../Functions/JWT/Decode'; // import JWT_Decode function
//Context API
import { GlobalContext } from "../../Context/Context API"; // import Global Context
/* These lines of code are importing three components: `Dashboad_Homepage`, `Manage_Employees`, and
`Add_New_Employee`. These components are used in the conditional rendering of the
`Dashboard_Overview` component based on the value of the `SidebarOption` variable. Depending on the
value of `SidebarOption`, one of these components will be rendered to the DOM. */
// import all essential components & libraries
import Dashboad_Homepage from "./Dashboard Sub Components/Basic Components/Dashboad Homepage"; // import Dashboad_Homepage component
import Manage_Employees from "./Dashboard Sub Components/Employee Management/Manage Employees"; // import Manage_Employees component
import Add_New_Employee from "./Dashboard Sub Components/Employee Management/Add New Employee";


// inventory Management Components
import Add_New_Inventory_Item from "./Dashboard Sub Components/Inventory Management/Add New Inventory"; // import Add_New_Inventory_Item component
import Manage_Inventory from "./Dashboard Sub Components/Inventory Management/Manage Inventory"; // import Manage_Inventory component
/* These lines of code are importing two components, `ViewProfile` and `LogoutComponent`, which are
used for managing the user's profile and logging out of the dashboard, respectively. These
components are used in the conditional rendering of the `Dashboard_Overview` component based on the
value of the `SidebarOption` variable. If the value of `SidebarOption` is "manage-profile", the
`ViewProfile` component will be rendered to the DOM, and if the value is "logout", the
`LogoutComponent` component will be rendered. */
// Manage Profile
import ViewProfile from "./Dashboard Sub Components/Profile/View Profile"; // import ViewProfile component
import LogoutComponent from "./Dashboard Sub Components/Basic Components/Logout"; // import LogoutComponent component

// Manage Customers
import ViewAllCustomers from "./Dashboard Sub Components/Manage Customer/View All Customers"; // import ViewAllCustomers component

// Manage Categories
import Add_New_Category from "./Dashboard Sub Components/Category Management/Add New Category"; // import Add New Category Component
import ViewAllCategory from "./Dashboard Sub Components/Category Management/View All Category"; // import View All Category Component

// import Order components
import Create_New_Order from "./Dashboard Sub Components/Order Management/Create New Order"; // import Create New Order Component
import Manage_Orders from "./Dashboard Sub Components/Order Management/View All Orders"; // import Manage Orders Component

/* This code exports a functional component named `Dashboard_Overview`. The component renders a
`Sidebar` component and conditionally renders one of several components based on the value of the
`SidebarOption` variable obtained from the `GlobalContext` using the `useContext` hook. The rendered
components include `Dashboad_Homepage`, `Manage_Employees`, `Add_New_Employee`, `ViewProfile`, and
`LogoutComponent`. The component also passes some props to the rendered components, such as
`AdminName`, `ShopName`, and `UserName`. */
export default function Dashboard_Overview() {
  // using Context API
  const { AuthDetails, SidebarOption }: any = useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  // Decode JWT
  const Decoded : any = JWT_Decode(AuthDetails.Data.AccountDetails); // decode token

  return (
    <>
      <Sidebar AdminName={Decoded.Name.split(' ')[0]} />
      {SidebarOption === "dashboard" ? (
        <Dashboad_Homepage ShopName={Decoded.ShopName} />
      ) : SidebarOption === "manage-employees" ? (
        <Manage_Employees ShopName={Decoded.ShopName} />
      ) : SidebarOption === "add-employee" ? (
        <Add_New_Employee StoreName={Decoded.ShopName} />
      ) : SidebarOption === "manage-profile" ? (
        <ViewProfile ShopName={Decoded.ShopName}/>
      ) : SidebarOption === "logout" ? (
        <LogoutComponent UserName={Decoded.Name.split(' ')[0]} />
      ) : SidebarOption === "add-new-inventory-item" ? (
        <Add_New_Inventory_Item StoreName={Decoded.ShopName}/>
      ) : SidebarOption === "manage-inventory" ? (
        <Manage_Inventory  ShopName={Decoded.ShopName}/>
        ) : SidebarOption === "manage-customers" ? (
          <ViewAllCustomers ShopName={Decoded.ShopName} />
        ): SidebarOption === "add-category" ? (
          <Add_New_Category StoreName={Decoded.ShopName} />
        ) : SidebarOption === "manage-categories" ? (
          <ViewAllCategory ShopName={Decoded.ShopName} />
        ) : SidebarOption === "create-new-order" ? (
          <Create_New_Order StoreName={Decoded.ShopName} />
        ) : SidebarOption === "manage-orders" ? (
          <Manage_Orders ShopName={Decoded.ShopName} />
        ) : null}
    </>
  );
}
