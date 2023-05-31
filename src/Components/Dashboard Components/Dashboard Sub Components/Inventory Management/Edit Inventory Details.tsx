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
    Internet_Connection_Status
  } from "../../../../Functions/Most Used Functions";
  import { Connection_Fail } from "../../../Most Used Components/Connection Fail";
import { Edit_Inventory_Function } from '../../../../Functions/Store Management/Inventory Management';

  // Data interface
  interface Data {
    OwnerEmail: string;
    User_id: string;
    ProductName: string;
    ProductCategory: string;
    ProductSKU: string;
    ProductQuantity: string;
    ProductPrice: string;
    ProductExpiryDate: string;
    ProductManufacturingDate: string;
    ProductDescription: string;
  }

  export default function Edit_Inventory_Details() {
    Internet_Connection_Status(); // Internet Connection Status
    const ParameterData = useParams(); // getting data from parameter
    const Navigator = useNavigate(); // Creating instance of Navigator


      // using Context API
  let { AuthDetails, UpdateAlert, AlertMessage, InternetStatus }: any =
  React.useContext(GlobalContext);


    // All States
    const [isLoading, setIsLodaing] = React.useState<boolean>(false); // is Loading

    const [NewInventoryData, setNewInventoryData] = React.useState<Data | any>({
        OwnerEmail:AuthDetails.Data.AccountDetails.Email,
        User_id: AuthDetails.Data.AccountDetails.User_id,
        ProductName: "",
        ProductCategory: "",
        ProductSKU: ParameterData.ProductSKU,
        ProductQuantity: "",
        ProductPrice: "",
        ProductExpiryDate: "",
        ProductManufacturingDate: "",
        ProductDescription: ""
    }); // New Inventory Data

    Update_Document_Title({
        TitleName: `Edit ${ParameterData.ProductSKU} Details`,
      }); // Update Document Title

        // function on press
  const GoBack = (event: any) => {
    event.preventDefault();
    setNewInventoryData({}); // Clearing Employee Data
    Navigator(`/dashboard`);
  };

    // Update Employee Data on Change
    const updateInventoryDataonChange = (element: any) => {
        setNewInventoryData({
          ...NewInventoryData,
          [element.target.name]: element.target.value,
        });
      };

        // Update All Data in Server
  const SaveDataToServer = async (event: any) => {
    event.preventDefault();
    setIsLodaing(true);
    let AfterResult = await Edit_Inventory_Function(NewInventoryData);
    if (AfterResult === false) {
      console.log("Failed to validate");
      setIsLodaing(false);
    } else if (AfterResult.Status) {
      setIsLodaing(false);
      UpdateAlert(AfterResult);
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
                      type="text"
                      value={NewInventoryData.ProductName}
                      name="ProductName"
                      onChange={updateInventoryDataonChange}
                      id="ProductName"
                      className="block bg-slate-50 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      required
                    />
                    <label
                      htmlFor="EmployeeEmail"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Product Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                   <select value={NewInventoryData.ProductCategory} onChange={updateInventoryDataonChange} name='ProductCategory' id='ProductCategory' className='block bg-slate-50 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' required>
                    <option value="option1"> Option1</option>
                    <option value="option2"> Option2</option>
                   </select>
                    <label
                      htmlFor="ProductCategory"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Product Category
                    </label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="ProductSKU"
                      id="ProductSKU"
                      disabled
                      onChange={updateInventoryDataonChange}
                      value={NewInventoryData.ProductSKU}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="ProductSKU"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Product SKU
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="date"
                      name="ProductExpiryDate"
                      id="ProductExpiryDate"
                      onChange={updateInventoryDataonChange}
                      value={NewInventoryData.ProductExpiryDate}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="ProductExpiryDate"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Product Expiry Date (Optional)
                    </label>
                  </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="number"
                        name="ProductQuantity"
                        onChange={updateInventoryDataonChange}
                        id="ProductQuantity"
                        value={NewInventoryData.ProductQuantity}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="ProductQuantity"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Product Quantity
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="number"
                        name="ProductPrice"
                        onChange={updateInventoryDataonChange}
                        id="ProductPrice"
                        value={NewInventoryData.ProductPrice}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="ProductPrice"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Product Price
                      </label>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="ProductDescription"
                        onChange={updateInventoryDataonChange}
                        id="ProductDescription"
                        value={NewInventoryData.ProductDescription}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="EmployeeDateOfJoining"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Product Description
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="date"
                        name="ProductManufacturingDate"
                        onChange={updateInventoryDataonChange}
                        id="ProductDescription"
                        value={NewInventoryData.ProductManufacturingDate}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="ProductManufacturingDate"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Product Manufacturing Date (optional)
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