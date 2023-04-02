import React from 'react'// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client'; // or 'react-dom/server' for SSR

// import Router to Display the App
import GlobalAPI from './Global API Linker'; // import Global API Linker

ReactDOM.createRoot(document.getElementById('www') as HTMLElement).render(
  <React.StrictMode>
    <GlobalAPI />
  </React.StrictMode>
);