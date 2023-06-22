import * as React from 'react'; // Import React
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams & useNavigate

// import components
import Navbar from "../../../Most Used Components/Navbar"; // import Navbar
import Loading from "../../../Most Used Components/Loading"; // import loading
import { Alert } from "../../../Most Used Components/Alert"; // import Alert
import Footer from "../../../Most Used Components/Footer"; // import footer

// import Context API & variables
import { AppName } from "../../../../Global/Global variables"; // import common variables
import { GlobalContext } from "../../../../Context/Context API"; // import global context


// import Functions
import {
    Update_Document_Title,
    Internet_Connection_Status,
    HTTP_GET
  } from "../../../../Functions/Most Used Functions";
  import { Connection_Fail } from "../../../Most Used Components/Connection Fail";
import { UpdateOrder } from '../../../../Functions/Store Management/order management';
import Decode_Token from '../../../../Functions/JWT/Decode';

  // Data interface
  interface Data {
    OwnerEmailForBody: string;
    OrderID?: Number;
    User_idForBody: number;
    DeliveryAddress?: string;
    DeliveryDate?: string;
    DeliveryStatus?: string;
    PaymentMethod?: string;
    PaymentStatus?: string;
  }

  export default function Edit_Order_Details() {
    Internet_Connection_Status(); // Internet Connection Status
    const ParameterData = useParams(); // getting data from parameter
    const Navigator = useNavigate(); // Creating instance of Navigator


      // using Context API
  let { AuthDetails, UpdateAlert, AlertMessage, InternetStatus }: any =
  React.useContext(GlobalContext);

const Decoded_AuthDetails: any = Decode_Token(AuthDetails.Data.AccountDetails); // Decoding Token

    // All States
    const [isLoading, setIsLodaing] = React.useState<boolean>(false); // is Loading

    const [NewOrderData, setNewOrderDataData] = React.useState<Data>({
      OwnerEmailForBody:Decoded_AuthDetails.Email,
      User_idForBody: Number(Decoded_AuthDetails.User_id),
      OrderID: undefined,
        DeliveryAddress: "",
        DeliveryDate: "",
        DeliveryStatus: "",
        PaymentMethod: "",
        PaymentStatus: ""
  }); // New Inventory Data

    Update_Document_Title({
        TitleName: `Edit ${ParameterData.ProductSKU} Details`,
      }); // Update Document Title

        // function on press
  const GoBack = (event: any) => {
    event.preventDefault();
    setNewOrderDataData({
      OwnerEmailForBody: "",
      User_idForBody: Number(""),
      OrderID: 0,
        DeliveryAddress: "",
    }); // Clearing Employee Data
    Navigator(`/dashboard`);
  };

  // useEffect
  React.useEffect(() => {
    HTTP_GET({PostPath:`/get/order/GetAllOrders/${ParameterData.Email}/${Decoded_AuthDetails.User_id}`,
    }).then((result: any) => {
        if(result.Status === "Ok"){
            let Filtered_Inventory_Data = result.Data.filter(
                (OrderItem: any) =>
                OrderItem.ProductSKU === ParameterData.ProductSKU?.toLowerCase()
            );
            setNewOrderDataData({
                ...NewOrderData,
                OrderID: Filtered_Inventory_Data[0].OrderID,
                DeliveryAddress: Filtered_Inventory_Data[0].DeliveryAddress,
                DeliveryDate: Filtered_Inventory_Data[0].DeliveryDate,
                DeliveryStatus: Filtered_Inventory_Data[0].DeliveryStatus,
                PaymentMethod: Filtered_Inventory_Data[0].PaymentMethod,
                PaymentStatus: Filtered_Inventory_Data[0].PaymentStatus
            })
        }
    })
  }, []);

    // Update Employee Data on Change
    const updateInventoryDataonChange = (element: any) => {
        setNewOrderDataData({
          ...NewOrderData,
          [element.target.name]: element.target.value,
        });
      };

        // Update All Data in Server
  const SaveDataToServer = async (event: any) => {
    event.preventDefault();
    setIsLodaing(true);
    let AfterResult = await UpdateOrder(NewOrderData);
    if (AfterResult === false) {
      console.log("Failed to validate");
      setIsLodaing(false);
    } else if (AfterResult.Status) {
      setIsLodaing(false);
      UpdateAlert(AfterResult);
      Navigator("/dashboard");
    }
  };
      return (
        <>
        {isLoading === false ? (
          <>
            {AlertMessage.Status === "Product Not Found" ? (
              <Alert
                Title={AlertMessage.Status}
                Message={AlertMessage.Message}
                ButtonText="ok"
                ButtonFunc={() => {
                  Navigator("/dashboard");
                }}
              />
            ) : AlertMessage.Status === "Account Not Found" ? (
              <Alert
                Title={AlertMessage.Status}
                Message={AlertMessage.Message}
                ButtonText="ok"
                ButtonFunc={() => {
                  Navigator("/dashboard");
                }}
              />
            ) : AlertMessage.Status === "Store Not Found" ? (
              <Alert
                Title={AlertMessage.Status}
                Message={AlertMessage.Message}
                ButtonText="ok"
                ButtonFunc={() => {
                  Navigator("/dashboard");
                }}
              />
            ) : null}
  
            {AlertMessage.Status === "Product Updated" ? (
              <Alert
                Title={AlertMessage.Status}
                Message={AlertMessage.Message}
                ButtonText="Manage Employee"
                ButtonFunc={() => {
                  Navigator(-1);
                }}
              />
            ) : AlertMessage.Status === "fail" ? (
              <Alert
                Title={AlertMessage.Status}
                Message={AlertMessage.Message}
                ButtonText="ok"
                ButtonFunc={() => {
                  Navigator("/dashboard");
                }}
              />
            ) : null}
              <>
              {InternetStatus === "Offline" ? <Connection_Fail /> : null}
                <Navbar AppName={`${AppName} (${ParameterData.ProductSKU})`} />
  
                <form className="mt-[6.25rem] mx-20">
                  <h1 className="text-center my-10 font-semibold text-2xl">
                    Edit {ParameterData.ProductSKU}'s data
                  </h1>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="number"
                      value={String(NewOrderData.OrderID)}
                      name="OrderID"
                      onChange={updateInventoryDataonChange}
                      id="OrderID"
                      disabled={true}
                      className="block bg-slate-50 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor="EmployeeEmail"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Order ID
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      value={NewOrderData.DeliveryAddress}
                      name="DeliveryAddress"
                      onChange={updateInventoryDataonChange}
                      id="DeliveryAddress"
                      disabled={false}
                      className="block bg-slate-50 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder="Enter New Delivery Address"
                      required
                    />
                    <label
                      htmlFor="EmployeeEmail"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Delivery Address
                    </label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="date"
                      name="DeliveryDate"
                      id="DeliveryDate"
                      onChange={updateInventoryDataonChange}
                      value={NewOrderData.DeliveryDate}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor="ProductSKU"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Delivery Date
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <select value={NewOrderData.DeliveryStatus} name='DeliveryStatus' id='DeliveryStatus' onChange={updateInventoryDataonChange}>
                        <option value="Pending">Pending</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                    <label
                      htmlFor="ProductExpiryDate"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Delivery Status
                    </label>
                  </div>
                  </div>

                  <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <select value={NewOrderData.PaymentStatus} name='PaymentStatus' id='PaymentStatus' onChange={updateInventoryDataonChange}>
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                    <label
                      htmlFor="ProductExpiryDate"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Payment Status
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-6 group">
                    <select value={NewOrderData.PaymentMethod} name='PaymentMethod' id='PaymentMethod' onChange={updateInventoryDataonChange}>
                        <option value="Cash">Cash</option>
                        <option value="Card">Card</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="UPI">UPI</option>
                        <option value="Net Banking">Net Banking</option>
                    </select>
                    <label
                      htmlFor="ProductExpiryDate"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Payment Method
                    </label>
                  </div>

                  </div>
                  <button
                    type="submit"
                    onClick={SaveDataToServer}
                    className="text-white ml-[26.5rem] mt-5 bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save Changes
                  </button>
                  <button
                    className="ml-10 bg-red-800 px-10 py-2 text-white rounded-full"
                    onClick={GoBack}
                  >
                    Go Back
                  </button>
                </form>
                <Footer FooterStyle='static'/>
              </>
          </>
        ) : (
          <Loading
            Title="loading Data"
            Description="Please wait, while we loading your data from server"
          />
        )}
      </>
      )
      // End of Update Document Title with logic
  }; // export Edit_Employee_Details function