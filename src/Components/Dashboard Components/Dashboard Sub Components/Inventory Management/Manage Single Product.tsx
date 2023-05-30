import * as React from 'react'; // React module
import {useParams} from 'react-router-dom'; // React Router Dom

// import Functions
import { HTTP_GET } from '../../../../Functions/Most Used Functions'; // Get Method
import { Update_Document_Title, Internet_Connection_Status } from '../../../../Functions/Most Used Functions';

// import Variable & Context API
import { GlobalContext } from '../../../../Context/Context API';

// import Components
import { Connection_Fail } from '../../../Most Used Components/Connection Fail';

const Single_Inventory = () => {
    // Params Data
    const {Email, ProductSKU} = useParams();


    // changing Document Title & Internet Status
    Internet_Connection_Status();
    Update_Document_Title({TitleName: `Control panel for ${ProductSKU}`})

    // States 
    const [ProductDetails, setProductDetails] = React.useState<object | any>({})// Started State for Product Details
    let [LoadingState, setLoadingState] = React.useState<boolean>(true); // state for loading

    // Context API
    const {AuthDetails, UpdateAlert, AlertMessage, InternetStatus } : any = React.useContext(GlobalContext);

    return ( 
        <>
         {InternetStatus === "Offline" ? <Connection_Fail /> : null}
        </>
     )
}
 
export default Single_Inventory;