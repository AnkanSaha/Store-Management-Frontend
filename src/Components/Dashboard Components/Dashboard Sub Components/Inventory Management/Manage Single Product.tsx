import * as React from 'react'; // React module
import {useParams, useNavigate} from 'react-router-dom'; // React Router Dom
import {RiDeleteBin2Line} from 'react-icons/ri'; // RiDeleteBin2Line Icon
import {AiOutlineRollback} from 'react-icons/ai'; // AiOutlineRollback Icon
import {RxUpdate} from 'react-icons/rx'; // RxUpdate Icon

import {Button} from '@chakra-ui/react'; // Chakra UI

// import Functions
import { HTTP_GET, HTTP_DELETE } from '../../../../Functions/Most Used Functions'; // Get Method
import { Update_Document_Title, Internet_Connection_Status } from '../../../../Functions/Most Used Functions';

// import Variable & Context API
import { GlobalContext } from '../../../../Context/Context API';

// import Components
import { Connection_Fail } from '../../../Most Used Components/Connection Fail';
import Loading from '../../../Most Used Components/Loading';
import { Alert } from '../../../Most Used Components/Alert';
import Navbar from '../../../Most Used Components/Navbar';
import Dashboard_No_Data_Found from '../Basic Components/Dashboard No Data Found';
import Footer from '../../../Most Used Components/Footer';
import Decode_Token from '../../../../Functions/JWT/Decode';

const Single_Inventory = () => {
    // Params Data
    const {Email, ProductSKU} = useParams();

    // changing Document Title & Internet Status
    Internet_Connection_Status();
    Update_Document_Title({TitleName: `Control panel for ${ProductSKU}`})

    // States 
    const [ProductDetails, setProductDetails] = React.useState<object | any>({})// Started State for Product Details
    let [LoadingState, setLoadingState] = React.useState<boolean>(true); // state for loading
    let [isDeleting, setIsDeleting] = React.useState<boolean>(false); // state for deleting
    // Context API
    const {AuthDetails, UpdateAlert, AlertMessage, InternetStatus } : any = React.useContext(GlobalContext);

    const Decoded_AuthDetails : any = Decode_Token(AuthDetails.Data.AccountDetails); // Decode Token

    // Navigator
    const Navigate = useNavigate();

      // useEffect
  React.useEffect(() => {
    UpdateAlert({}); // Update Alert Message
    setLoadingState(true); // Set Loading Text to true
    HTTP_GET({
      PostPath: `/get/inventory/getProducts/${Decoded_AuthDetails.User_id}/${Email}`,
    }).then((Response) => {
      console.log(Response);
      setLoadingState(false); // Set Loading Text to false
      if (Response.Status === "Success") {
        let Filtered_Inventory_Data = Response.Data.filter(
          (InventoryItem: any) =>
          InventoryItem.ProductSKU === ProductSKU?.toLowerCase()
        );
        setProductDetails(Filtered_Inventory_Data); // set Employee Data
      } else if (Response.Status === "No Employee Found") {
        UpdateAlert(Response); // Update Alert
      }
    });
  }, []); // End of useEffect

  const SendUIinEdit = () => {
    Navigate(
      `/dashboard/inventory/${Email}/${ProductSKU}/edit`
    );
  };

  async function DeleteRecord() {
    setIsDeleting(true); // set is Deleting to true
    let Result = await HTTP_DELETE({
      
      PostPath: `/delete/inventory/delete/${Decoded_AuthDetails.User_id}/${Decoded_AuthDetails.Email}/${ProductSKU}`,
    });
    setIsDeleting(false); // set is Deleting to true
    if (Result.Status === "Product Deleted") {
      Navigate(-1);
    } else {
      UpdateAlert(Result);
    }
  }
  
    return ( 
        <>
        {LoadingState === true ? (
          <Loading
            Title={`Loading ${ProductSKU}'s Details`}
            Description={`Please wait while we are loading the details of ${ProductSKU} for you. This may take a few seconds.`}
          />
        ) : isDeleting === true ? (
          <Loading
          Title={`Deleting ${ProductSKU}'s Record`}
          Description={`Please wait while we are deleting the record of ${ProductSKU} for you. This may take a few seconds.`}
        />
        ) : (
          <>
               {InternetStatus === "Offline" ? <Connection_Fail /> : null}
            <Navbar />
            {ProductDetails.length !== 0 ? (
              <>
                {AlertMessage.Status === "Inventory Not Found" ? (
                  <Alert
                    Title={AlertMessage.Status}
                    Message={AlertMessage.Message}
                    ButtonText="ok"
                  />
                ) : AlertMessage.Status === "Account Not Found" ? (
                  <Alert
                    Title={AlertMessage.Status}
                    Message={AlertMessage.Message}
                    ButtonText="ok"
                  />
                ) : AlertMessage.Status === "Store Not Found" ? (
                  <Alert
                    Title={AlertMessage.Status}
                    Message={AlertMessage.Message}
                    ButtonText="ok"
                  />
                ) : null}
  
                <div className="bg-white shadow-2xl rounded-2xl p-4 mt-[4.5rem] mx-60 space-y-6 px-5">
                  <h1 className="text-center">
                    <span className="text-2xl font-bold">
                      Inventory Details for {ProductSKU?.toUpperCase()}
                    </span>
                  </h1>
                  <h2 className="text-lg font-medium">
                    <strong>Product Name</strong> :{" "}
                    <span className="ml-10">{ProductDetails[0].ProductName}</span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Product Category</strong> :{" "}
                    <span className="ml-10">{ProductDetails[0].ProductCategory}</span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Product Price</strong> :{" "}
                    <span className="ml-10">
                      {ProductDetails[0].ProductPrice}
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Product Quantity</strong> :{" "}
                    <span className="ml-10">{ProductDetails[0].ProductQuantity}</span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Product SKU</strong> :{" "}
                    <span className="ml-10">
                      {ProductDetails[0].ProductSKU.toLowerCase()}
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Product Manufacturing Date</strong> :{" "}
                    <span className="ml-10">
                      {ProductDetails[0].ProductManufacturingDate === "" ? "N/A" : ProductDetails[0].ProductManufacturingDate}
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Product Expiry Date</strong> :{" "}
                    <span className="ml-10">
                      {ProductDetails[0].ProductExpiryDate === "" ? "N/A" : ProductDetails[0].ProductExpiryDate}
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Product Description</strong> :{" "}
                    <span className="ml-10">
                      <i>{ProductDetails[0].ProductDescription}</i>
                    </span>
                  </h2>
                </div>
                <Button
                  leftIcon={<AiOutlineRollback />}
                  onClick={() => {
                    Navigate(-1);
                  }}
                  className="ml-[23.25rem] mt-5"
                  variant="solid"
                  colorScheme="linkedin"
                >
                  Go Back
                </Button>
                <Button
                  leftIcon={<RiDeleteBin2Line />}
                  className="ml-[7.25rem] mt-5 rounded-3xl"
                  variant="solid"
                  onClick={DeleteRecord}
                  colorScheme="red"
                >
                  Delete Record
                </Button>
                <Button
                  leftIcon={<RxUpdate />}
                  className="ml-[7.25rem] mt-5 rounded-3xl"
                  variant="solid"
                  colorScheme="green"
                  onClick={SendUIinEdit}
                >
                  Update Record
                </Button>
                <Footer FooterStyle='static' />
              </>
            ) : (
              <Dashboard_No_Data_Found
                Message=" No Employee Found with this Phone Number."
                Height="10rem"
              />
            )}
          </>
        )}
      </>
     )
}
 
export default Single_Inventory;