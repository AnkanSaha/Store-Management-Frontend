// import Functions
import { Update_Document_Title } from "../../../Functions/Most Used Functions"; // Function to update document title

// import Global Variables
import { AppName } from "../../../Global/Global variables"; // App Name

// interfaces
interface Props {
    ShopName: string;
}

export default function ViewProfile ({ShopName}:Props){
    // Update document title
    Update_Document_Title({TitleName:`Manage Profile - ${ShopName}`});
  return (
   <>
   <div className="min-w-[85%] ml-[12.25rem] shadow-2xl max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 fixed top-[5rem]">
   <h1 className="font-mono text-3xl font-bold ml-[23.25rem] mt-3 mb-5">Manage Profile</h1>
   </div>
   </>
  );
}; // ViewProfile component ends here

// default props for ViewProfile component
ViewProfile.defaultProps = {
    ShopName: AppName
};