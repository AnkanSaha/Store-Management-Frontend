/* The code is importing the necessary modules and variables from the React library, specifically the
`createContext` and `useState` functions. It then creates a new context called `GlobalContext` using
the `createContext` function and exports it. The initial value of the context is an empty object. */
// import Essential Modules & Variables
import { createContext, useState } from "react"; // import {createContext} from 'react';

// create the context
export const GlobalContext = createContext({}); // const GlobalContext = createContext({});

/**
 * This is a TypeScript React function that creates a global provider with multiple states and state
 * updaters.
 * @param {Properties}  - This code defines an interface for the properties of a global provider
 * component, which takes in a `children` prop. It then defines a `GlobalProvider` function that
 * returns a `GlobalContext.Provider` component with several state variables and their corresponding
 * state updater functions as values in the provider's `value`
 * @returns The GlobalProvider function is returning the GlobalContext.Provider component with the
 * provided props and children as its content. The GlobalContext.Provider component is used to provide
 * the state and state updaters to its child components through the use of the useContext hook.
 */
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
  const [AuthDetails, setAuthDetails] = useState({}); // State for Loading
  const UpdateAuthDetails = (Status: any) => {
    setAuthDetails(Status);
  }; // UpdateAuthDetails is a function that updates the Loading state

  // State for Loading & State Updater
  const [LoadingStatus, setLoadingStatus] = useState(false); // State for Loading
  const UpdateLoading = (Status: any) => {
    setLoadingStatus(Status);
  }; // UpdateLoading is a function that updates the Loading state

  // State for Alert & State Updater
  const [AlertMessage, setAlertMessage] = useState({}); // State for Alert
  const UpdateAlert = (Message: any) => {setAlertMessage(Message)}; // UpdateAlert is a function that updates the Alert state

    // State for Alert & State Updater
    const [SidebarOption, setSidebarOption] = useState("dashboard"); // State for Alert
    const UpdateSidebarOption = (Value: any) => {setSidebarOption(Value)}; // UpdateAlert is a function that updates the Alert state

  return (
    <GlobalContext.Provider
      value={{
        InternetStatus,
        UpdateInternetStatus,

        AuthDetails,
        UpdateAuthDetails,

        LoadingStatus,
        UpdateLoading,

        AlertMessage,
        UpdateAlert,

        SidebarOption,
        UpdateSidebarOption,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
} // GlobalProvider is a function that returns the GlobalContext.Provider
