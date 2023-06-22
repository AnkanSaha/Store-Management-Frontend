import * as React from 'react'; // React module
import {useParams, useNavigate} from 'react-router-dom'; // React Router Dom

import {AiOutlineRollback} from 'react-icons/ai'; // AiOutlineRollback Icon
import {RxUpdate} from 'react-icons/rx'; // RxUpdate Icon
import {FiPrinter} from 'react-icons/fi'; // FiPrinter Icon

import {Button} from '@chakra-ui/react'; // Chakra UI

// import Functions
import { HTTP_GET } from '../../../../Functions/Most Used Functions'; // Get Method
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

const Single_Order = () => {
    // Params Data
    const {Email, User_id, OrderID} = useParams();

    // changing Document Title & Internet Status
    Internet_Connection_Status();
    Update_Document_Title({TitleName: `Control panel for ${OrderID}`})

    // States 
    const [ProductDetails, setProductDetails] = React.useState<object | any>({})// Started State for Product Details
    let [LoadingState, setLoadingState] = React.useState<boolean>(true); // state for loading
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
      PostPath: `/get/order/GetAllOrders/${Email}/${User_id}`,
    }).then((Response) => {
      console.log(Response);
      setLoadingState(false); // Set Loading Text to false
      if (Response.Status === "Ok") {
        let Filtered_Inventory_Data = Response.Data.filter(
          (OrderItem: any) =>
          Number(OrderItem.OrderID) === Number(OrderID)
        );
        setProductDetails(Filtered_Inventory_Data); // set Employee Data
      } else if (Response.Status === "No Order Found") {
        UpdateAlert(Response); // Update Alert
      }
    });
  }, []); // End of useEffect

  // Send UI in Edit
  const SendUIinEdit = () => {
    Navigate(
      `/dashboard/orders/${Email}/${Decoded_AuthDetails.User_id}/${OrderID}/edit`
    );
  };

  // Print Order
  const PrintOrder = () => {
    window.print(); // Print Order
  };
  
    return ( 
        <>
        {LoadingState === true ? (
          <Loading
            Title={`Loading ${OrderID}'s Details`}
            Description={`Please wait while we are loading the details of ${OrderID} for you. This may take a few seconds.`}
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
                      Orders Details for {ProductDetails[0].OrderID}
                    </span>
                  </h1>
                  <h2 className="text-lg font-medium">
                    <strong>Product Name</strong> :{" "}
                    <span className="ml-10">{ProductDetails[0].ProductName}</span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Product Category</strong> :{" "}
                    <span className="ml-10">{ProductDetails[0].ProductCatagory}</span>
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
                      {ProductDetails[0].ProductSKU.toUpperCase()}
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Delivery Address</strong> :{" "}
                    <span className="ml-10">
                      {ProductDetails[0].DeliveryAddress}
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Delivery Date </strong> :{" "}
                    <span className="ml-10">
                      {ProductDetails[0].DeliveryDate }
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Payment Method</strong> :{" "}
                    <span className="ml-10">
                      <i>{ProductDetails[0].PaymentMethod}</i>
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Delivery Status</strong> :{" "}
                    <span className="ml-10">
                      <i>{ProductDetails[0].DeliveryStatus}</i>
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Payment Status</strong> :{" "}
                    <span className="ml-10">
                      <i>{ProductDetails[0].PaymentStatus}</i>
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Customer Name</strong> :{" "}
                    <span className="ml-10">
                      <i>{ProductDetails[0].CustomerName}</i>
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Customer Email</strong> :{" "}
                    <span className="ml-10">
                      <i>{ProductDetails[0].CustomerEmail}</i>
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                  <strong>Customer Phone</strong> :{" "}
                    <span className="ml-10">
                      <i>{ProductDetails[0].CustomerPhone}</i>
                    </span>
                  </h2>
                </div>
                <Button
                  leftIcon={<AiOutlineRollback />}
                  onClick={() => {
                    Navigate(-1);
                  }}
                  className="ml-[21.25rem] mt-5"
                  variant="solid"
                  colorScheme="linkedin"
                >
                  Go Back
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
                <Button
                  leftIcon={<FiPrinter />}
                  className="ml-[7.25rem] mt-5 rounded-3xl"
                  variant="solid"
                  colorScheme="facebook"
                  onClick={PrintOrder}
                >
                  Print This Order
                </Button>
                <Footer FooterStyle='static' />
              </>
            ) : (
              <Dashboard_No_Data_Found
                Message=" No Order Found with this Order Details."
                Height="10rem"
              />
            )}
          </>
        )}
      </>
     )
}
 
export default Single_Order;