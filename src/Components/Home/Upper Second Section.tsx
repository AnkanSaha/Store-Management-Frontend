// This is the upper second section of the home page
import {AppName} from "../../Global/Global variables"; // Importing the non changable variables

export default function Upper_Second_Section() {
  return (
    <>
    <div className="my-7 mx-16">
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {AppName} is{" "}
        <span className="text-blue-600 dark:text-blue-500">the world's #1</span>{" "}
        Free Store Management Web App
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        {AppName} is a free store management web app that helps you manage your store and keep track of your inventory. It is a free web app that is easy to use and is available on all devices.
      </p>
    </div>
        <br />
        <br />
        <hr />
        <hr />
    </>
  );
}
