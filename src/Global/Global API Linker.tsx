// import All Essential Components & Libraries

// Chakra UI Provider
import { ChakraProvider } from "@chakra-ui/react";

// import Main Router
import MainRouter from "../Setting/Router"; // import Main Router

// import Global API Linker
import { GlobalProvider } from "../Context/Context API"; // import Global API Linker
// import All Global Styles

// DaisyUI CSS
import "daisyui"; // import daisyUI

// Tailwind CSS
import "../assets/CSS/Tailwind/Input.css"; // import Tailwind Input CSS
import "../assets/CSS/Tailwind/Output.css"; // import Tailwind CSS

// Flowbite CSS
import "flowbite"; // import Flowbite CSS

// function declaration for the App component
// This is the main entry point for the application. It is used to render the MainRouter component to the DOM.

export default function GlobalAPI() {
  return (
    <>
      <GlobalProvider>
        <ChakraProvider>
          <MainRouter />
        </ChakraProvider>
      </GlobalProvider>
    </>
  );
}
