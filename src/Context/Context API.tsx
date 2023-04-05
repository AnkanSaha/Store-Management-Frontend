// import Essential Modules & Variables
import { createContext } from "react"; // import {createContext} from 'react';

// create the context
export const GlobalContext = createContext({}); // const GlobalContext = createContext({});


// creating a Global Provider function

export function GlobalProvider(props:any) {
    // Write your State & State Updaters here
  return <GlobalContext.Provider value={{}}>{props.children}</GlobalContext.Provider>;
}
