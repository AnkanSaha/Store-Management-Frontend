// import packages
import React from "react"; // import react library
import moment from "moment"; // import moment library
// import Functions
import { Update_Document_Title } from "../../../../Functions/Most Used Functions"; // Function to update document title
import Decode_Token from "../../../../Functions/JWT/Decode"; // Decode Token
// import Global Context
import { GlobalContext } from "../../../../Context/Context API"; // import Global Context

// import Global Variables
import { AppName } from "../../../../Global/Global variables"; // App Name

// interfaces
interface Props {
  ShopName: string;
}

export default function ViewProfile({ ShopName }: Props) {
  // using Context API
  const { AuthDetails }: any = React.useContext(GlobalContext);
  const [AccountDetails] = React.useState<any>(AuthDetails.Data.AccountDetails); // Account Details state
  console.log(AccountDetails);

  const Decoded_AuthDetails : any = Decode_Token(AccountDetails); // Decode Token
  // Update document title
  Update_Document_Title({ TitleName: `Manage Profile - ${ShopName}` });
  return (
    <>
      <div className="min-w-[85%] ml-[12.25rem] shadow-2xl max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 absolute top-[5rem]">
        <h1 className="font-mono text-3xl font-bold ml-[23.25rem] mt-3 mb-5">
          Manage Profile
        </h1>

        <div className="flex flex-wrap space-x-4 cursor-pointer space-y-4">
          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Owner Name
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.Name}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Email
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.Email}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Password
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.Password} <strong>(Encrypted)</strong>
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Phone Number
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.Phone}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Owner Address
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.Address}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Owner City
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.City}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Owner State
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.State}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Owner Pincode
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.Zip}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Owner Country
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.Country}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Account Creacted
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {moment(Decoded_AuthDetails.CreatedAt)
                .local()
                .format("DD/MM/YYYY hh:mm:ss A")}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              is GST Number Available ?
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.isGSTIN}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Owner GST Number
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.GSTIN === ""
                ? "No GST Number Provided"
                : Decoded_AuthDetails.GSTIN}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              Store Manager User id
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.User_id}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              Store Name
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.ShopName}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              Owner Pan Number
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.PAN}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              Shop Address
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.ShopAddress}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              Shop Status
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.Status}
            </p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Owner Accepted Terms & Conditions ?
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Decoded_AuthDetails.isTermsAccepted === true ? "YES" : "NO"}
            </p>
          </a>
        </div>
      </div>
    </>
  );
} // ViewProfile component ends here

// default props for ViewProfile component
ViewProfile.defaultProps = {
  ShopName: AppName,
};
