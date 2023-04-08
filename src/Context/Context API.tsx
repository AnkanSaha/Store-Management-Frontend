// import Essential Modules & Variables
import { createContext, useState } from "react"; // import {createContext} from 'react';

// create the context
export const GlobalContext = createContext({}); // const GlobalContext = createContext({});

// making a interface for GlobalProvider Props
interface Properties {
  children: any;
}

// creating a Global Provider function
export function GlobalProvider({ children }: Properties) {
  // Write your State & State Updaters here

  // State for Internet Status & State Updater
  const [InternetStatus, setInternetStatus] = useState("Online"); // State for Internet Status
  const UpdateInternetStatus = (Status: any) => {
    setInternetStatus(Status);
  }; // UpdateInternetStatus is a function that updates the InternetStatus state

  // State for Loading & State Updater
  const [AuthDetails, setAuthDetails] = useState(false); // State for Loading
  const UpdateAuthDetails = (Status: any) => {
    setAuthDetails(Status);
  }; // UpdateAuthDetails is a function that updates the Loading state

  // State for Loading & State Updater
  const [LoadingStatus, setLoadingStatus] = useState(false); // State for Loading
  const UpdateLoading = (Status: any) => {
    setLoadingStatus(Status);
  }; // UpdateLoading is a function that updates the Loading state

  return (
    <GlobalContext.Provider
      value={{
        InternetStatus,
        UpdateInternetStatus,
        AuthDetails,
        UpdateAuthDetails,
        LoadingStatus,
        UpdateLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
} // GlobalProvider is a function that returns the GlobalContext.Provider
