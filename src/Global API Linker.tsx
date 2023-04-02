// import All Essential Components & Libraries
import React from "react"; // import React

// import Main Router
import MainRouter from "./Router"; // import Main Router

// import Global API Linker

// import All Global Styles
import 'daisyui'; // import daisyUI
import './assets/CSS/Tailwind/Output.css'; // import Tailwind CSS
import 'flowbite'; // import Flowbite CSS

// function declaration for the App component
export default function GlobalAPI() {
  return (
    <>
      <MainRouter />
    </>
  );
}
