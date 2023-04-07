// import All Essential Components & Libraries

// import Main Router
import MainRouter from "./Global Router"; // import Main Router

// import Global API Linker
import { GlobalProvider } from "../Context/Context API"; // import Global API Linker
// import All Global Styles
import "daisyui"; // import daisyUI
import "../assets/CSS/Tailwind/Output.css"; // import Tailwind CSS
import "flowbite"; // import Flowbite CSS

// function declaration for the App component
// This is the main entry point for the application. It is used to render the MainRouter component to the DOM.

export default function GlobalAPI() {
  return (
    <>
      <GlobalProvider>
        <MainRouter />
      </GlobalProvider>
    </>
  );
}