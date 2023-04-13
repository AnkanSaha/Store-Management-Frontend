// This File is for the most used functions in the project
// Import Essential Packages
import { useContext } from "react"; // import UseContext from 'react';

// import Context API
import { GlobalContext } from "../Context/Context API"; // import Global Context
import { Hostname } from "../Global/Global variables"; // import Hostname

//defile types for typescript
type Proptypes = {
  TitleName: string;
};

// This function is for updating the document title

export function Update_Document_Title({ TitleName }: Proptypes) {
  if (TitleName === undefined) {
    TitleName = "Store Manager";
  }
  document.title = TitleName;
}

// This function is for always listening to the internet connection status
export function Internet_Connection_Status() {
  // using Context API
  const { UpdateInternetStatus }: any = useContext(GlobalContext); // const {InternetStatus, UpdateInternetStatus} = useContext(GlobalContext);

  // // Event Listener for Internet Connection Status (Online)
  window.addEventListener("online", () => {
    UpdateInternetStatus("Online");
  });

  // // Event Listener for Internet Connection Status (Offline)
  window.addEventListener("offline", () => {
    UpdateInternetStatus("Offline");
  });
}


// HTTP Request Function POST
interface FunctionProps {
  PostPath: string;
  SendData: object;
}

export async function HTTP_POST({ PostPath, SendData }: FunctionProps) {
  let Wait = await fetch(`${Hostname}${PostPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SendData), // end of fetch
  }); // end of fetch
  // convert the data into json
  let Data = await Wait.json();

  return Data;
}
