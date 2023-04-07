// This is a component that will be used in the Signup Page Component

// import React hooks  & other React related stuff
import { Link } from "react-router-dom"; // Link Component

// import Variables & Contexts
import { AppName } from "../../Global/Global variables"; // App Name Variable
import {
  Signup_Form_City_Name,
  Signup_Form_State_Name,
  Signup_Form_Country_Name,
} from "./Signup Form Variables"; // City Name Variable

export default function Signup_Form_Section() {
  return (
    <>
      <h1 className="mt-[5.25rem] mb-10 ml-[19rem] text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Join With
        </span>{" "}
        {AppName}
      </h1>
      <div className="mx-10 mb-[2.5rem]">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="full_Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex: Ankan Saha"
              required
            />
          </div>
          <div>
            <label
              htmlFor="User_Email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="User_Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex: example@global.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="text"
              id="Address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone_number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="706******"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <select className="select select-success w-full max-w-xs">
            <option disabled selected value="">
              Select Your city Name
            </option>
            {Signup_Form_City_Name.map((city: any) => {
              return <option value={city}>{city}</option>;
            })}
          </select>
          <select className="select select-success w-full max-w-xs">
            <option disabled selected value="">
              Select Your state Name
            </option>
            {Signup_Form_State_Name.map((city: any) => {
              return <option value={city}>{city}</option>;
            })}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="pincode"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Your Pincode
          </label>
          <input
            type="number"
            id="pincode"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="******"
            required
          />
        </div>
        <select className="select select-success min-w-full max-w-xs">
          <option disabled selected value="">
            Select Your country Name
          </option>
          {Signup_Form_Country_Name.map((city: any) => {
            return <option value={city}>{city}</option>;
          })}
        </select>
        <select className="select select-success min-w-full max-w-xs mt-5">
          <option disabled selected value="">
            Do you have GST Number?
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <div className="mb-6 mt-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Shop_Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Shop Name
          </label>
          <input
            type="text"
            id="Shop_Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Shop Name"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="Shop_Address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Shop Address
          </label>
          <input
            type="text"
            id="Shop_Address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Shop Address"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="GST_Number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter GST Number (Optional)
          </label>
          <input
            type="text"
            id="GST_Number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your GST Number (Optional)"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="PAN_Number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter PAN Number
          </label>
          <input
            type="text"
            id="PAN_Number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your PAN Number"
          />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <Link
              to="/signup/process/terms-andconditions"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </Link>
            .
          </label>
        </div>
        <button className="text-white bg-black hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 min-w-full">
          Submit
        </button>
      </div>
    </>
  );
}