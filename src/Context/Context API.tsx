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

  return (
    <GlobalContext.Provider value={{ InternetStatus, UpdateInternetStatus }}>
      {children}
    </GlobalContext.Provider>
  );
} // GlobalProvider is a function that returns the GlobalContext.Provider
