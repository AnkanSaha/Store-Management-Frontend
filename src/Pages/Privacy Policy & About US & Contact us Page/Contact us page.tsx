// Description: Contact us page

// import React
import React from 'react'; // React

// import Variables
import {
  AppName,
  OwnerEmail,
  OwnerAddress,
  OwnerPhone,
  OwnerName,
} from "../../Global/Global variables"; // import AppName from '../../Non Changable variables';

// import Components
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { Connection_Fail } from '../../Components/Most Used Components/Connection Fail';
// import Navbar & Footer
import Navbar from "../../Components/Most Used Components/Navbar"; // import Navbar
import Footer from "../../Components/Most Used Components/Footer"; // import Footer

// import Function
import { Update_Document_Title, Internet_Connection_Status } from "../../Functions/Most Used Functions"; // update title Func

// import Context API
import { GlobalContext } from '../../Context/Context API'; "../../Global/Global API Linker"; // global context API

const Contact = () => {
  Update_Document_Title({TitleName: `Contact us - ${AppName}`}); // updating Document Title
  Internet_Connection_Status(); // Internet Connection Status

  // Initializing Context API
  const {InternetStatus} : any = React.useContext(GlobalContext);
  return (
    <>
    {InternetStatus === "Offline" ? <Connection_Fail Title='No Internet available' Message="Please Check Your Internet Config, without internet, this site can't be run" /> : null}
      <Navbar AppName="Contact us" />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8 fixed top-[7rem]">
          Contact With {AppName}
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <div className="flex items-center mb-4">
            <BsFillPersonVcardFill className="text-gray-400 mr-4" />
            <p className="text-gray-700">{OwnerName}</p>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-gray-400 mr-4" />
            <p className="text-gray-700">{OwnerAddress}</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-gray-400 mr-4" />
            <a
              href={`mailto:${OwnerEmail}`}
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              {OwnerEmail}
            </a>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-gray-400 mr-4" />
            <a href={`tel:${OwnerPhone}`} className="text-gray-700">{OwnerPhone}</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
