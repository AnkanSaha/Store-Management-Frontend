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
  Select
} from "@chakra-ui/react"; // Chakra UI

//import Components
import { Alert } from "../../../Most Used Components/Alert"; // Alert Component

// import functions
import { HTTP_GET } from "../../../../Functions/Most Used Functions"; // HTTP GET
import { Update_Document_Title } from "../../../../Functions/Most Used Functions"; // Update Document Title
// import variables & context
import { AppName } from "../../../../Global/Global variables"; // App Name
import { GlobalContext } from "../../../../Context/Context API"; // Context API

// import functions
import { PlaceOrder_Function } from "../../../../Functions/Store Management/order management"; // Add Inventory Function
import Decode_Token from "../../../../Functions/JWT/Decode";
// interface for Add New Inventory
interface props {
  StoreName: str;
}

// Add New Inventory Function
interface OrderDetails {
    OwnerEmailForBody: str;
    User_idForBody: num;
    ProductName: str;
    ProductCatagory: str;
    ProductSKU: str;
    ProductQuantity: num;   
    ProductPrice: num;  
    DeliveryAddress: str;
    DeliveryDate: str;
    DeliveryStatus: str;
    PaymentMethod: str;
    PaymentStatus: str;
    CustomerName: str;
    CustomerEmail: str;
    CustomerPhone: str;
}

export default function Create_New_Order({ StoreName }: props) {
  // Update Document Title with logic
  Update_Document_Title({
    TitleName: `Place a new order - ${StoreName}`,
  }); // Update Document Title
  // using Context API
  
  const {
    AlertMessage,
    UpdateAlert,
    UpdateSidebarOption,
    AuthDetails,
    UpdateLoading,
  }: any = React.useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);
  
  const Decoded_AuthDetails:any = Decode_Token(AuthDetails.Data.AccountDetails); // Decode Token

  // States
  const [orderDetails, setorderDetails] = useState<OrderDetails>({
    OwnerEmailForBody: Decoded_AuthDetails.Email,
    User_idForBody: Number(Decoded_AuthDetails.User_id),
    ProductName: "",
    ProductCatagory: "",
    ProductSKU: "",
    ProductQuantity: 0,
    ProductPrice: 0,
    DeliveryAddress: "",
    DeliveryDate: "",
    CustomerEmail: "",
    CustomerName: "",
    CustomerPhone: "",
    DeliveryStatus: "",
    PaymentMethod: "",
    PaymentStatus: ""
  }); // Inventory Details

// Import States
  const [InventoryDetails, setInventoryDetails] = useState<globe>([])

  // using useEffect
  React.useEffect(() => {
    HTTP_GET({PostPath:`/get/inventory/getProducts/${Decoded_AuthDetails.User_id}/${Decoded_AuthDetails.Email}`}).then((res:globe) => {
        if (res.Status === "Success") {
            setInventoryDetails(res.Data);
        }
    });
        
  }, []);

  // State Updater for Employee Details
  const UpdateState = (element: globe): void => {
      if(element.target.name === "ProductName"){
        const ProductDetails = InventoryDetails.find((item:globe) => item.ProductName === element.target.value);
        setorderDetails({ // Update Inventory Details
            ...orderDetails,
            ProductName: ProductDetails !== undefined ? ProductDetails.ProductName : "",
            ProductCatagory: ProductDetails !== undefined ? ProductDetails.ProductCategory : "",
            ProductSKU: ProductDetails !== undefined ? ProductDetails.ProductSKU : "",
            ProductPrice: ProductDetails !== undefined ? ProductDetails.ProductPrice : 0
            
        });
    }
    else if(element.target.name === "ProductQuantity"){
        const ProductDetails = InventoryDetails.find((item:globe) => item.ProductSKU === orderDetails.ProductSKU );
        setorderDetails({ // Update Inventory Details
            ...orderDetails,
            ProductQuantity: element.target.value,
            ProductPrice: ProductDetails !== undefined ? ProductDetails.ProductPrice * Number(element.target.value) : 0,
        });
    }
    else{
        setorderDetails({
            ...orderDetails,
            [element.target.name]: element.target.value,
          }); // set Inventory Details to empty
    }
  };

  // Add Inventory Function
  const PlaceOrder = async (): Promise<void> => {
    UpdateLoading(true); // Update Loading State to true
    let Result = await PlaceOrder_Function(orderDetails); // Add Inventory Function

    // Condition for Add Inventory
    if (Result === false) {
      UpdateLoading(false); // Update Loading State to false
    }
    else if(Result.Status === "Ok"){
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
      <Heading className="ml-[18.5rem]">Place New Order</Heading>
      <FormControl className="px-10 mt-[3.5rem]" isRequired>
        <FormLabel>Select Product Name</FormLabel>
        <Select
          name="ProductName"
          onChange={UpdateState}
          id="ProductName"
          isRequired>
            <option value="">Select Product Name</option>
            {InventoryDetails.map((item:globe) => {return(<option value={item.ProductName}>{item.ProductName}</option>)})}
        </Select>
        <FormLabel className="mt-[2.25rem]">Enter Product Category</FormLabel>
        <Select
          name="ProductCatagory"
          value={orderDetails.ProductCatagory}
          onChange={UpdateState}
          id="ProductCatagory"
          isRequired>
            <option>{orderDetails.ProductCatagory}</option>
        </Select>
        <FormLabel className="mt-[2.25rem]">Enter Product SKU ID</FormLabel>
        <Input
          type="text"
          name="ProductSKU"
          value={orderDetails.ProductSKU}
          onChange={UpdateState}
          id="ProductSKU"
          disabled={true}
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">
          Enter Total Quantity of Product
        </FormLabel>
        <Input
          type="number"
          name="ProductQuantity"
          value={InventoryDetails.ProductQuantity}
          onChange={UpdateState}
          id="ProductQuantity"
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">
          Customer Name
        </FormLabel>
        <Input
          type="text"
          name="CustomerName"
          value={orderDetails.CustomerName}
          onChange={UpdateState}
          id="CustomerName"
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">
          Customer Email Address
        </FormLabel>
        <Input
          type="text"
          name="CustomerEmail"
          value={orderDetails.CustomerEmail}
          onChange={UpdateState}
          id="CustomerEmail"
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">
          Customer Phone Number (10 Digits)
        </FormLabel>
        <Input
          type="text"
          name="CustomerPhone"
          value={orderDetails.CustomerPhone}
          onChange={UpdateState}
          id="CustomerPhone"
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">
          Customer Delivery Address
        </FormLabel>
        <Input
          type="text"
          name="DeliveryAddress"
          value={orderDetails.DeliveryAddress}
          onChange={UpdateState}
          id="DeliveryAddress"
          isRequired
        />
        <FormLabel className="mt-[2.25rem]">
          Delivery Date
        </FormLabel>
        <Input
          type="date"
          name="DeliveryDate"
          value={orderDetails.DeliveryDate}
          onChange={UpdateState}
          id="DeliveryDate"
          isRequired
        />
         <FormLabel className="mt-[2.25rem]">
          Delivery Status
        </FormLabel>
        <Select  onChange={UpdateState} value={orderDetails.DeliveryStatus} name="DeliveryStatus" id="DeliveryStatus">
            <option value="">Select Delivery Status</option>
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
        </Select>

         <FormLabel className="mt-[2.25rem]">
          Payment Status
        </FormLabel>
        <Select  onChange={UpdateState} value={orderDetails.PaymentStatus} name="PaymentStatus" id="PaymentStatus">
            <option value="">Select Payment Status</option>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="No Done">Payment No Done</option>
        </Select>

         <FormLabel className="mt-[2.25rem]">
          Payment Method
        </FormLabel>
        <Select  onChange={UpdateState} value={orderDetails.PaymentMethod} name="PaymentMethod" id="PaymentMethod">
            <option value="">Select Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
        </Select>
        
        <FormLabel className="mt-[2.25rem]">
          Total Price for the Product
        </FormLabel>
        <Input
          type="number"
          name="ProductQuantity"
          value={orderDetails.ProductPrice}
          onChange={UpdateState}
          id="ProductQuantity"
          disabled={true}
          isRequired
        />
      </FormControl>
      <Button
        variant="solid"
        colorScheme="twitter"
        className="mt-[3.5rem] ml-[27.25rem]"
        onClick={PlaceOrder}
      >
        <span className="text-sm">Place New Order</span>
      </Button>
    </div>
  );
}

// default props
Create_New_Order.defaultProps = {
  StoreName: AppName,
};
