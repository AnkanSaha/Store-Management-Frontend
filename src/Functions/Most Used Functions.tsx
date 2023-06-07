/**
 * The Proptypes type is defined as an object with a single property called TitleName of type string.
 * @property {string} TitleName - a string that represents the name of a title. It is likely used as a
 * prop in a component.
 */
// This File is for the most used functions in the project
// Import Essential Packages
import { useContext } from "react"; // import UseContext from 'react';
// import Context API
import { GlobalContext } from "../Context/Context API"; // import Global Context

//defile types for typescript
type Proptypes = {
  TitleName: string;
};

/**
 * This function updates the document title with a given title name or a default title if none is
 * provided.
 * @param {Proptypes}  - The function `Update_Document_Title` takes in a single parameter `TitleName`
 * which is of type `Proptypes`. The `Proptypes` is likely a custom type defined elsewhere in the
 * codebase. The function updates the document title with the value of `TitleName` if it
 */
// This function is for updating the document title

export function Update_Document_Title({ TitleName }: Proptypes) {
  if (TitleName === undefined) {
    TitleName = "Store Manager";
  }
  document.title = TitleName;
}

/**
 * This function listens to the internet connection status and updates it using Context API.
 */
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
interface POSTFunctionProps {
  PostPath: string;
  SendData: object;
}

import { Hostname } from "../Global/Global variables"; // import Hostname

/**
 * This is an asynchronous function that sends a POST request to a specified path with JSON data and
 * returns the response data in JSON format.
 * @param {POSTFunctionProps}  - - `PostPath`: a string representing the path to which the POST request
 * will be sent.
 * @returns the data received from the HTTP POST request after converting it to JSON format.
 */
export async function HTTP_POST({ PostPath, SendData }: POSTFunctionProps) {
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


/**
 * This is a TypeScript React function that performs a GET request to a specified endpoint and returns
 * the response data in JSON format.
 * @param {GETFunctionProps}  - This is a TypeScript function that performs an HTTP GET request to a
 * specified endpoint.
 * @returns the data fetched from the specified URL in JSON format.
 */
// GET function
interface GETFunctionProps {
  PostPath: string;
}
export async function HTTP_GET({ PostPath}: GETFunctionProps) {
  let Wait = await fetch(`${Hostname}${PostPath}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }); // end of fetch
  // convert the data into json
  let Data = await Wait.json();

  return Data;
}

/**
 * This is a TypeScript React function that sends a DELETE request to a specified endpoint and returns
 * the response data in JSON format.
 * @param {DELETEFunctionProps}  - The above code defines an asynchronous function named `HTTP_DELETE`
 * that takes an object with a single property `PostPath` as its argument. The `PostPath` property is a
 * string that represents the path of the resource to be deleted. The function sends an HTTP DELETE
 * request to the specified path using
 * @returns the data obtained from the HTTP DELETE request made to the specified PostPath. The data is
 * converted to JSON format before being returned.
 */
// DELEE function
interface DELETEFunctionProps {
  PostPath: string;
}
export async function HTTP_DELETE({ PostPath}: DELETEFunctionProps) {
  let Wait = await fetch(`${Hostname}${PostPath}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  }); // end of fetch
  // convert the data into json
  let Data = await Wait.json();

  return Data;
}

/**
 * This is a TypeScript React function that sends a PUT request with JSON data to a specified path and
 * returns the response data as JSON.
 * @param {POSTFunctionProps}  - - `PostPath`: a string representing the path of the API endpoint to
 * send the PUT request to.
 * @returns the data received from the server after making a PUT request with the specified PostPath
 * and SendData. The data is converted to JSON format before being returned.
 */
// PUT function
export async function HTTP_PUT({ PostPath, SendData }: POSTFunctionProps) {
  let Wait = await fetch(`${Hostname}${PostPath}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SendData), // end of fetch
  }); // end of fetch
  // convert the data into json
  let Data = await Wait.json();

  return Data;
}