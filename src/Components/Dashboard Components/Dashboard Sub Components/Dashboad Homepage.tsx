// this is the default page that will be shown when the user is logged in

// import Variables
import { AppLogo, AppName } from "../../../Global/Global variables"; // import AppLogo & AppName

export default function Dashboad_Homepage() {
  return (
    <div>
      <img
        src={AppLogo}
        className="w-60 ml-[34.25rem] mb-5 fixed top-[8rem]"
        alt="Official_Logo"
      />
      <div className="mt-3">
        <h1 className="mb-4 text-center text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Welcome to
          </span>{" "}
          {AppName}
        </h1>
        <p className="text-lg text-center font-normal text-gray-500 lg:text-md dark:text-gray-400">
          You can use all the features by clicking on the Open menu button on
          the top left corner.
        </p>
      </div>
    </div>
  );
}
