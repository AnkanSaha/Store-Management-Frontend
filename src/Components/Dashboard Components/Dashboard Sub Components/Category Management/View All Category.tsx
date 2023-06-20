import React, {useState, useContext} from 'react'; // importing FunctionComponent
import { CSVLink } from 'react-csv'; // import CSVLink
import JWT_Decode from '../../../../Functions/JWT/Decode'; // import JWT_Decode function

// import compoents
import Dashboard_No_Data_Found from '../Basic Components/Dashboard No Data Found'; // import Dashboard No Data Found Component
import { Alert } from '../../../Most Used Components/Alert'; // import Alert Component
import { Update_Document_Title } from "../../../../Functions/Most Used Functions"; // import Functions
import { HTTP_GET, HTTP_DELETE } from "../../../../Functions/Most Used Functions"; // import HTTP_POST Function

//import Context
import { GlobalContext } from "../../../../Context/Context API"; // import Global Context


// import Variables & Context
import { AppName } from "../../../../Global/Global variables"; // import App Name

// types & interfaces
type props = {
    ShopName: string;
  };

function ViewAllCategory({ShopName }: props) { // View All Customers Function
  // Context
  const { AuthDetails, UpdateAlert, AlertMessage }: any =
    useContext(GlobalContext); // Global Context

    // Decode AuthDetails Token
    const Decoded_AuthDetails : any = JWT_Decode(AuthDetails.Data.AccountDetails) // decode JWT token
  // Update Document Title with logic
  Update_Document_Title({ TitleName: `Manage Categories - ${ShopName}` }); // Update Document Title
  // End of Update Document Title with logic

  // States
    const [LoadingText, setLoadingText] = useState(true); // Loading Text
    let [CategoryData, setCategoryData] = useState([]); // Employee Data

     // useEffect
  React.useEffect(() => {
    setLoadingText(true); // Set Loading Text to true
    HTTP_GET({  
      PostPath: `/get/category/getCategory/${Decoded_AuthDetails.User_id}/${Decoded_AuthDetails.Email}`,
    }).then((Response) => {
      setLoadingText(false); // Set Loading Text to false
      if (Response.Status === "Success") {
        setCategoryData(Response.Data);
      } else if (Response.Status === "Not Found") {
        UpdateAlert(Response); // Update Alert
      }
    });
  }, []); // End of useEffect

    // Creating a Variable To make Spreeadsheet
    let SpreadsheetData: any[] = CategoryData;

    // Delete Function
    const DeleteCustomer = async (CategoryID: number) => {
      setLoadingText(true); // Set Loading Text to true
      const Result  = await HTTP_DELETE({
        PostPath:`/delete/category/delete-category/?User_idForQuery=${Decoded_AuthDetails.User_id}&OwnerEmailForQuery=${Decoded_AuthDetails.Email}&CategoryID=${CategoryID}`
      }); // HTTP DELETE
      if(Result.Status === "Success"){
        setLoadingText(false); // Set Loading Text to false
        UpdateAlert(Result); // Update Alert
        setCategoryData(Result.Data); // Set Customer Data
      }
    };
  return (
    <>
    {LoadingText === true ? (
      <Dashboard_No_Data_Found Message=" Loading Category Details..." />
    ) : (
      <>
        {CategoryData.length !== 0 ? (
          <>
            {AlertMessage.Status === "No Category Found" ? (
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
                      <strong>S.No</strong>
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Category ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Category Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Category Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Take Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CategoryData.map((Category: any, index: number) => {
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
                            {index + 1}
                          </th>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <strong>{Category.CategoryID}</strong>
                          </th>
                          <td className="px-6 py-4">
                            {Category.CategoryName}
                          </td>
                          <td className="px-6 py-4">
                            {Category.CategoryDescription}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              type="button"
                              onClick={() => {
                              DeleteCustomer(Number(Category.CategoryID))
                              }}
                              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
              <CSVLink
                  filename={`Category Details For ${Decoded_AuthDetails.Name} (${Decoded_AuthDetails.ShopName}).csv`}
                  className="btn bg-green-500 ml-[25.25rem] fixed bottom-[3.25rem] shadow-xl shadow-black"
                  target="_blank"
                  data={SpreadsheetData}
                >
                  Download CSV Sheet
                </CSVLink>
            </div>
          </>
        ) : (
          <Dashboard_No_Data_Found Message="No Category Details Found" />
        )}
      </>
    )}
  </>
  )
}

ViewAllCategory.defaultProps = {
    ShopName: AppName
}; // declaring default props

export default ViewAllCategory; // exporting FunctionComponent ViewAllCustomers