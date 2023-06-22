import React from 'react'; // Import React Module
import { CSVLink } from 'react-csv'; // import CSVLink
import { useNavigate } from 'react-router-dom'; // import useNavigate

// global types
type str = string; // type for string
type globe = any; // type for any
type bool = boolean; // type for boolean

// types & interfaces
type props = {
    ShopName: str;
  };

// import components
import Dashboard_No_Data_Found from '../Basic Components/Dashboard No Data Found'; // import Dashboard No Data Found Component
import { Alert } from '../../../Most Used Components/Alert'; // import Alert Component
// Context API & Variables
import { GlobalContext } from '../../../../Context/Context API'; // import global Context API
import { AppName } from '../../../../Global/Global variables'; // import App Name
// import functions
import { HTTP_GET } from '../../../../Functions/Most Used Functions'; // import HTTP_POST Function
import { Update_Document_Title } from '../../../../Functions/Most Used Functions'; // Update Document Title
import Decode_Token from '../../../../Functions/JWT/Decode';


export default function Manage_Orders({ShopName} : props) {
    // States & Variables
    const [LoadingText, setLoadingText] = React.useState<bool>(false); // Loading Text
    const [OrderData, setOrderData] = React.useState<globe>([]); // Inventory Data
    // Creating a Variable To make Spreeadsheet
    let SpreadsheetData: any[] = OrderData;

    // Context API
    const {AlertMessage, AuthDetails, UpdateAlert, UpdateSidebarOption} :globe = React.useContext(GlobalContext); // Context API

    const Decoded_AuthDetails : any  = Decode_Token(AuthDetails.Data.AccountDetails); // Decode Token

    Update_Document_Title({ TitleName: `Manage Orders - ${ShopName}` }); // Update Document Title
    // End of Update Document Title with logic

    // Navigation
    const Navigate = useNavigate(); // Navigate

    // useEffect
  React.useEffect(() => {
    setLoadingText(true); // Set Loading Text to true
    HTTP_GET({
      PostPath: `/get/order/GetAllOrders/${Decoded_AuthDetails.Email}/${Decoded_AuthDetails.User_id}`,
    }).then((Response) => {
      setLoadingText(false); // Set Loading Text to false
      if (Response.Status === "Ok") {
        setOrderData(Response.Data);
      } else if (Response.Status === "Inventory Not Found") {
        UpdateAlert(Response); // Update Alert
      }
    });
  }, []); // End of useEffect

  return (
    <>
    {LoadingText === true ? (
      <Dashboard_No_Data_Found Message=" Loading Order Details..." />
    ) : (
      <>
        {OrderData.length !== 0 ? (
          <>
            {AlertMessage.Status === "Inventory Not Found" ? (
              <Alert
                Title={AlertMessage.Status}
                Message={AlertMessage.Message}
                ButtonText="Go To Dashboard"
                ButtonFunc={()=>{
                  UpdateSidebarOption('dashboard'); // Update Sidebar Option
                UpdateAlert({}); // Update Alert Message
              }}
              />
            ) : AlertMessage.Status === "fail" ? (
                <Alert
                Title={AlertMessage.Status}
                Message={AlertMessage.Message}
                ButtonText="ok"
              />
            ) : null}

            <div className="pb-5 overflow-x-auto shadow-md sm:rounded-lg ml-[12.25rem] absolute top-[5.5rem] w-[85%]">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                    S.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Order ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Product Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Product Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Product Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Product SKU
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Product Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Payment Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Delivery Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {OrderData.map((Orders: any, index: number) => {
                    return (
                      <>
                        <tr
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          key={index}
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <strong> {index+1} </strong>
                          </th>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <strong> {Orders.OrderID} </strong>
                          </th>
                          <td className="px-6 py-4">
                            {Orders.ProductName}
                          </td>
                          <td className="px-6 py-4">
                          ₹ {Orders.ProductPrice}
                          </td>
                          <td className="px-6 py-4">
                            {Orders.ProductQuantity}
                          </td>
                          <td className="px-6 py-4">
                            {Orders.ProductSKU.toUpperCase()}
                          </td>
                          <td className="px-6 py-4">
                            {Orders.ProductCatagory}
                          </td>
                          <td className="px-6 py-4">
                            {Orders.PaymentStatus}
                          </td>
                          <td className="px-6 py-4">
                            {Orders.DeliveryStatus}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              type="button"
                              onClick={() => {
                                Navigate(
                                  `/dashboard/orders/${Decoded_AuthDetails.Email}/${Decoded_AuthDetails.User_id}/${Orders.ProductSKU}`
                                );
                              }}
                              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
              <CSVLink
                filename={`Orders Details For ${Decoded_AuthDetails.Name} (${Decoded_AuthDetails.ShopName}).csv`}
                className="btn bg-green-500 ml-[25.25rem] fixed bottom-[3.25rem] shadow-xl shadow-black"
                target="_blank"
                data={SpreadsheetData}
              >
                Download CSV Sheet
              </CSVLink>
            </div>
          </>
        ) : (
          <Dashboard_No_Data_Found Message="No Orders Details Found" />
        )}
      </>
    )}
  </>
  );
};

Manage_Orders.defaultProps = {
    ShopName: AppName
}; // default props for Manage Inventory Component