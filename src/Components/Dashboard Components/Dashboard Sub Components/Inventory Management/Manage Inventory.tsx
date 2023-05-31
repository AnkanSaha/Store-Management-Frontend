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


export default function Manage_Inventory({ShopName} : props) {
    // States & Variables
    const [LoadingText, setLoadingText] = React.useState<bool>(false); // Loading Text
    const [InventoryData, setInventoryData] = React.useState<globe>([]); // Inventory Data
    // Creating a Variable To make Spreeadsheet
    let SpreadsheetData: any[] = InventoryData;

    // Context API
    const {AlertMessage, AuthDetails, UpdateAlert, UpdateSidebarOption} :globe = React.useContext(GlobalContext); // Context API

    Update_Document_Title({ TitleName: `Manage Inventory - ${ShopName}` }); // Update Document Title
    // End of Update Document Title with logic

    // Navigation
    const Navigate = useNavigate(); // Navigate

    // useEffect
  React.useEffect(() => {
    setLoadingText(true); // Set Loading Text to true
    HTTP_GET({
      PostPath: `/get/inventory/getProducts/${AuthDetails.Data.AccountDetails.User_id}/${AuthDetails.Data.AccountDetails.Email}`,
    }).then((Response) => {
      setLoadingText(false); // Set Loading Text to false
      if (Response.Status === "Success") {
        setInventoryData(Response.Data);
      } else if (Response.Status === "Inventory Not Found") {
        UpdateAlert(Response); // Update Alert
      }
    });
  }, []); // End of useEffect

  return (
    <>
    {LoadingText === true ? (
      <Dashboard_No_Data_Found Message=" Loading Inventory Details..." />
    ) : (
      <>
        {InventoryData.length !== 0 ? (
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
                    Product Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                    SKU
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Expiry Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Manufacturing Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {InventoryData.map((InventoryData: any, index: number) => {
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
                            <strong> {InventoryData.ProductName?.toUpperCase()} </strong>
                          </th>
                          <td className="px-6 py-4">
                            {InventoryData.ProductCategory}
                          </td>
                          <td className="px-6 py-4">
                            {InventoryData.ProductSKU.toUpperCase()}
                          </td>
                          <td className="px-6 py-4">
                            ₹ {InventoryData.ProductPrice}
                          </td>
                          <td className="px-6 py-4">
                            {InventoryData.ProductQuantity}
                          </td>
                          <td className="px-6 py-4">
                            {InventoryData.ProductExpiryDate === "" ? "N/A" : InventoryData.ProductExpiryDate}
                          </td>
                          <td className="px-6 py-4">
                            {InventoryData.ProductManufacturingDate === "" ? "N/A" : InventoryData.ProductManufacturingDate}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              type="button"
                              onClick={() => {
                                Navigate(
                                  `/dashboard/inventory/${AuthDetails.Data.AccountDetails.Email}/${InventoryData.ProductSKU}`
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
                filename={`Inventory Details For ${AuthDetails.Data.AccountDetails.Name} (${AuthDetails.Data.AccountDetails.ShopName}).csv`}
                className="btn bg-green-500 ml-[25.25rem] fixed bottom-[3.25rem] shadow-xl shadow-black"
                target="_blank"
                data={SpreadsheetData}
              >
                Download CSV Sheet
              </CSVLink>
            </div>
          </>
        ) : (
          <Dashboard_No_Data_Found Message="No Inventory Details Found" />
        )}
      </>
    )}
  </>
  );
};

Manage_Inventory.defaultProps = {
    ShopName: AppName
}; // default props for Manage Inventory Component