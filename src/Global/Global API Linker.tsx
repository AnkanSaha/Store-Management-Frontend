// import All Essential Components & Libraries

// Chakra UI Provider
import { ChakraProvider } from "@chakra-ui/react";

// import Main Router
import MainRouter from "../Setting/Router"; // import Main Router

// import Global API Linker
import { GlobalProvider } from "../Context/Context API"; // import Global API Linker
// import All Global Styles

// Tailwind CSS
import "../assets/Style/Tailwind/Input.css"; // import Tailwind Input CSS

// DaisyUI CSS
import "daisyui"; // import daisyUI

// Flowbite CSS
import "flowbite"; // import Flowbite CSS

// function declaration for the App component
// This is the main entry point for the application. It is used to render the MainRouter component to the DOM.

export default function GlobalAPI() {
  return (
    <>

     {/* {document.addEventListener('contextmenu', event => event.preventDefault()) }  */} 

      <GlobalProvider>
        <ChakraProvider>
          <MainRouter />
        </ChakraProvider>
      </GlobalProvider>
    </>
  );
}
