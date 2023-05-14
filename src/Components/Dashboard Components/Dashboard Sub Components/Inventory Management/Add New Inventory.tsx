import React from 'react'


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


// interface for Add New Inventory
interface props {
    StoreName: string;
  };

export default function Add_New_Inventory({StoreName}:props) {
    // Update Document Title with logic
  Update_Document_Title({ TitleName: `Add New Item into Inventory - ${StoreName}` }); // Update Document Title
      // using Context API
  const {AlertMessage, UpdateAlert, UpdateSidebarOption }: any = React.useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);
  return (
    <div className="rounded-xl ml-[13.25rem] shadow-2xl bg-slate-50 min-w-[83%] min-h-fit mb-5 py-10 absolute top-[5rem] ">
    {AlertMessage.Status === "Accont Not Found" ? (
      <Alert
        Title={AlertMessage.Status}
        Message={AlertMessage.Message}
        ButtonText="Ok"
        ButtonFunc={() => {
          UpdateAlert({}); // Update Alert Message to empty
        }}
      />
    ) : AlertMessage.Status === "Employee Already Exist" ? (
      <Alert
        Title={AlertMessage.Status}
        Message={AlertMessage.Message}
        ButtonText="Manage Employees"
        ButtonFunc={() => {
          UpdateSidebarOption("manage-employees"); // Update Sidebar Option to Manage Employees
          UpdateAlert({}); // Update Alert Message to empty
        }}
      />
    ) : AlertMessage.Status === "Employee Added" ? (
      <Alert
        Title={AlertMessage.Status}
        Message={AlertMessage.Message}
        ButtonText="Manage Employees"
        ButtonFunc={() => {
          UpdateSidebarOption("manage-employees"); // Update Sidebar Option to Manage Employees
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
        id="ProductName"
        isRequired
      />
      <FormLabel className='mt-[2.25rem]'>Enter Product Category</FormLabel>
      <Input
        type="text"
        name="ProductCategory"
        id="ProductCategory"
        isRequired
      />
      <FormLabel className="mt-[2.25rem]">Enter Product SKU ID</FormLabel>
      <Input
        type="text"
        name="ProductSKU"
        id="ProductSKU"
        isRequired
      />
      <FormLabel className="mt-[2.25rem]">
        Enter Product Available Quantity
      </FormLabel>
      <Input
        type="number"
        name="ProductQuantity"
        id="ProductQuantity"
        isRequired
      />
      <FormLabel className="mt-[2.25rem]">
        Enter Product Price
      </FormLabel>
      <Input
        type="number"
        name="ProductPrice"
        id="ProductPrice"
        isRequired
      />
      <FormLabel className="mt-[2.25rem]">
        Enter Product Expiry Date (if any)
      </FormLabel>
      <Input
        type="date"
        name="ProductExpiryDate"
        id="ProductExpiryDate"
        placeholder="If Any"
      />
      <FormLabel className="mt-[2.25rem]">
        Enter Product Manufacturing Date (if any)
      </FormLabel>
      <Input
        type="date"
        name="ProductManufacturingDate"
        id="ProductManufacturingDate"
      />
      <FormLabel className="mt-[2.25rem]">
        Enter Product Description
      </FormLabel>
      <Input
        type="text"
        name="ProductDescription"
        id="ProductDescription"
        isRequired
      />
    </FormControl>
    <Button
      variant="solid"
      colorScheme="facebook"
      className="mt-[3.5rem] ml-[27.25rem]"
    >
      <span className="text-sm">Add New Product</span>
    </Button>
  </div>
  )
}

// default props
Add_New_Inventory.defaultProps = {
    StoreName: AppName,
  };