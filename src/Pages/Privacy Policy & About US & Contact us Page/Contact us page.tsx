// Description: Contact us page

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

// import Navbar & Footer
import Navbar from "../../Components/Most Used Components/Navbar"; // import Navbar
import Footer from "../../Components/Most Used Components/Footer"; // import Footer

const Contact = () => {
  return (
    <>
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
            <p className="text-gray-700">{OwnerPhone}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
