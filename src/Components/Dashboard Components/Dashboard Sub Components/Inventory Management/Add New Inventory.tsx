import React, { useState } from "react"; // React
// global types
type num = number; // type for number
type str = string; // type for string
type globe = any; // type for any

// chakra ui
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react"; // Chakra UI

//import Components
import { Alert } from "../../../Most Used Components/Alert"; // Alert Component

// import functions
import { Update_Document_Title } from "../../../../Functions/Most Used Functions"; // Update Document Title
// import variables & context
import { AppName } from "../../../../Global/Global variables"; // App Name
import { GlobalContext } from "../../../../Context/Context API"; // Context API

// import functions
import { AddInventory_Function } from "../../../../Functions/Store Management/Inventory Management"; // Add Inventory Function
// interface for Add New Inventory
interface props {
  StoreName: str;
}

// Add New Inventory Function
interface EmployeeDetails {
  OwnerEmail: num;
  User_id: str;
  ProductName: str;
  ProductCategory: str;
  ProductSKU: str;
  ProductQuantity: num;
  ProductPrice: num;
  ProductExpiryDate: str;
  ProductManufacturingDate: str;
  ProductDescription: str;
}

export default function Add_New_Inventory({ StoreName }: props) {
  // Update Document Title with logic
  Update_Document_Title({
    TitleName: `Add New Item into Inventory - ${StoreName}`,
  }); // Update Document Title
  // using Context API

  const {
    AlertMessage,
    UpdateAlert,
    UpdateSidebarOption,
    AuthDetails,
    UpdateLoading,
  }: any = React.useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  // States
  const [InventoryDetails, setInventoryDetails] = useState<EmployeeDetails>({
    OwnerEmail: AuthDetails.Data.AccountDetails.Email,
    User_id: AuthDetails.Data.AccountDetails.User_id,
    ProductName: "",
    ProductCategory: "",
    ProductSKU: "",
    ProductQuantity: 0,
    ProductPrice: 0,
    ProductExpiryDate: "",
    ProductManufacturingDate: "",
    ProductDescription: "",
  }); // Inventory Details

  // State Updater for Employee Details
  const UpdateState = (element: globe): void => {
    setInventoryDetails({
      ...InventoryDetails,
      [element.target.name]: element.target.value,
    }); // set Inventory Details to empty
  };

  // Add Inventory Function
  const AddInventory = async (): Promise<void> => {
    UpdateLoading(true); // Update Loading State to true
    let Result = await AddInventory_Function(InventoryDetails); // Add Inventory Function

    // Condition for Add Inventory
    if (Result === false) {
      UpdateLoading(false); // Update Loading State to false
    }
    else if(Result.Status){
      UpdateLoading(false); // Update Loading State to false
      UpdateAlert(Result); // Update Alert
    }
  };
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
      ) : AlertMessage.Status === "Store Not Found" ? (
        <Alert
          Title={AlertMessage.Status}
          Message={AlertMessage.Message}
          ButtonText="Manage Inventory"
          ButtonFunc={() => {
            UpdateSidebarOption("manage-inventory"); // Update Sidebar Option to Manage Employees
            UpdateAlert({}); // Update Alert Message to empty
          }}
        />
      ) : AlertMessage.Status === "Product Already Exist" ? (
        <Alert
          Title={AlertMessage.Status}
          Message={AlertMessage.Message}
          ButtonText="Manage Inventory"
          ButtonFunc={() => {
            UpdateSidebarOption("manage-inventory"); // Update Sidebar Option to Manage Employees
            UpdateAlert({}); // Update Alert Message to empty
          }}
        />
      ) : AlertMessage.Status === "Product Added" ? (
        <Alert
          Title={AlertMessage.Status}
          Message={AlertMessage.Message}
          ButtonText="Manage Inventory"
          ButtonFunc={() => {
            UpdateSidebarOption("manage-inventory"); // Update Sidebar Option to Manage Employees
            UpdateAlert({}); // Update Alert Message to empty
          }}
        />
      ) : null}
      <Heading className="ml-[18.5rem]">Add New Product into Inventory</Heading>
      <FormControl className="px-10 mt-[3.5rem]" isRequired>
        <FormLabel>Enter Product Name</FormLabel>
        <Input
          type="text"
          name="ProductName"
          value={InventoryDetails.ProductName}
          onChange={UpdateState}
          id="ProductName"
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">Enter Product Category</FormLabel>
        <Input
          type="text"
          name="ProductCategory"
          value={InventoryDetails.ProductCategory}
          onChange={UpdateState}
          id="ProductCategory"
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">Enter Product SKU ID</FormLabel>
        <Input
          type="text"
          name="ProductSKU"
          value={InventoryDetails.ProductSKU}
          onChange={UpdateState}
          id="ProductSKU"
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">
          Enter Product Available Quantity
        </FormLabel>
        <Input
          type="number"
          name="ProductQuantity"
          value={InventoryDetails.ProductQuantity}
          onChange={UpdateState}
          id="ProductQuantity"
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">Enter Product Price</FormLabel>
        <Input
          type="number"
          name="ProductPrice"
          value={InventoryDetails.ProductPrice}
          onChange={UpdateState}
          id="ProductPrice"
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">
          Enter Product Expiry Date (if any)
        </FormLabel>
        <Input
          type="date"
          name="ProductExpiryDate"
          value={InventoryDetails.ProductExpiryDate}
          onChange={UpdateState}
          id="ProductExpiryDate"
          placeholder="If Any"
        />
        <FormLabel className="mt-[2.25rem]">
          Enter Product Manufacturing Date (if any)
        </FormLabel>
        <Input
          type="date"
          name="ProductManufacturingDate"
          value={InventoryDetails.ProductManufacturingDate}
          onChange={UpdateState}
          id="ProductManufacturingDate"
        />
        <FormLabel className="mt-[2.25rem]">
          Enter Product Description
        </FormLabel>
        <Input
          type="text"
          name="ProductDescription"
          value={InventoryDetails.ProductDescription}
          onChange={UpdateState}
          id="ProductDescription"
          isRequired
        />
      </FormControl>
      <Button
        variant="solid"
        colorScheme="facebook"
        className="mt-[3.5rem] ml-[27.25rem]"
        onClick={AddInventory}
      >
        <span className="text-sm">Add New Product</span>
      </Button>
    </div>
  );
}

// default props
Add_New_Inventory.defaultProps = {
  StoreName: AppName,
};
