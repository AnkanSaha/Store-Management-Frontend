// This component is used to add new employee
// import UI components
import {
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
  } from "@chakra-ui/react"; // Chakra UI
  
  // import react hooks
  import { useState, useContext } from "react"; // React Hooks
  import Decode_Token from "../../../../Functions/JWT/Decode"; // Decode Token
  // import functions
  import { Update_Document_Title } from "../../../../Functions/Most Used Functions"; // Update Document Title
  import { AddCategory_Function } from "../../../../Functions/Store Management/Category Management"; // Add Employee Function
  
  //import Components
  import { Alert } from "../../../Most Used Components/Alert"; // Alert Component
  
  // import variables & context
  import { AppName } from "../../../../Global/Global variables"; // App Name
  import { GlobalContext } from "../../../../Context/Context API"; // Context API
  
  // types
  type props = {
    StoreName: string;
  };
  
  export default function Add_New_Category({StoreName}:props) {
    // Context API
    const {
      UpdateLoading,
      AuthDetails,
      AlertMessage,
      UpdateAlert,
      UpdateSidebarOption,
    }: any = useContext(GlobalContext); // Set Document Title
    
    // Decode Token
    const Decoded : any = Decode_Token(AuthDetails.Data.AccountDetails); // decode token
    
    // Update Document Title with logic
    Update_Document_Title({ TitleName: `Add New Category - ${StoreName}` }); // Update Document Title
  
    // State for Employee Details
    const [CategoryDetails, setCategoryDetails] = useState({
        User_idForBody: Decoded.User_id,
        OwnerEmailForBody:Decoded.Email,
        CategoryName: "",
        CategoryDescription: "",
        isActivated: true
    });
  
    // State Updater for Employee Details
    const UpdateState = (element: any) => {
      setCategoryDetails({
        ...CategoryDetails,
        [element.target.name]: element.target.value,
      });
    };
  
    // Handle Submit
    async function HandleSubmit() {
      UpdateLoading(true); // Update Loading State to false
      let AddStatus = await AddCategory_Function({
        AddEmployeeData: CategoryDetails,
      }); // Add Employee Function
  
      if (AddStatus === false) {
        UpdateLoading(false); // Update Loading State to false
      } else {
        UpdateLoading(false); // Update Loading State to false
        UpdateAlert(AddStatus); // Update Alert Message
      }
    }
  
    return (
      <div className="rounded-xl ml-[13.25rem] shadow-2xl bg-slate-50 min-w-[83%] min-h-fit mb-5 py-10 absolute top-[5rem] ">
        {AlertMessage.Status === "Account Not Found" ? (
          <Alert
            Title={AlertMessage.Status}
            Message={AlertMessage.Message}
            ButtonText="Ok"
            ButtonFunc={() => {
              UpdateAlert({}); // Update Alert Message to empty
            }}
          />
        ) : AlertMessage.Status === "Bad Request" ? (
          <Alert
            Title={AlertMessage.Status}
            Message={AlertMessage.Message}
            ButtonText="Manage Categories"
            ButtonFunc={() => {
              UpdateSidebarOption("manage-categories"); // Update Sidebar Option to Manage Employees
              UpdateAlert({}); // Update Alert Message to empty
            }}
          />
        ) : AlertMessage.Status === "Success" ? (
          <Alert
            Title={AlertMessage.Status}
            Message={AlertMessage.Message}
            ButtonText="Manage Categories"
            ButtonFunc={() => {
              UpdateSidebarOption("manage-categories"); // Update Sidebar Option to Manage Employees
              UpdateAlert({}); // Update Alert Message to empty
            }}
          />
        ) : null}
        <Heading className="ml-[20.5rem]">Add New Category</Heading>
        <FormControl className="px-10 mt-[3.5rem]" isRequired>
          <FormLabel>Enter Category Name</FormLabel>
          <Input
            type="text"
            name="CategoryName"
            id="CategoryName"
            onChange={UpdateState}
            value={CategoryDetails.CategoryName}
            isRequired
          />
          <FormLabel className="mt-[2.25rem]">Enter Category Description (max : 20 charecters)</FormLabel>
          <Input
            type="email"
            name="CategoryDescription"
            id="CategoryDescription"
            onChange={UpdateState}
            value={CategoryDetails.CategoryDescription}
            isRequired
          />
        </FormControl>
        <Button
          variant="solid"
          colorScheme="linkedin"
          className="mt-[3.5rem] ml-[27.25rem]"
          onClick={HandleSubmit}
        >
          <span className="text-sm">Add Category</span>
        </Button>
      </div>
    );
  }
  
  // default props
  Add_New_Category.defaultProps = {
    StoreName: AppName,
  };