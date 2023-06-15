// This File is Created By: Ankan Saha

// importing the required modules

/* Importing three functions: `LoginValidate` from the file located at
"../../Validator/Authentication/Login Validate", `HTTP_POST` from the file located at "../Most Used
Functions", and `Store_Cache_Data` from the file located at "../../Functions/Cache/cache Storage".
These functions are likely used in the `Login_Function` function defined in the code. */
// import Functions
import LoginValidate from "../../Validator/Authentication/Login Validate"; // import Login Validate Function
import { HTTP_POST } from "../Most Used Functions"; // import HTTP POST Function
import { Store_Cache_Data } from "../../Functions/Cache/cache Storage"; // Store Cache Data Function

/**
 * This is a TypeScript function that validates login data, sends it to a server, and stores the result
 * in cache if specified.
 * @param {Props}  - The code defines an interface `Props` with a single property `LoginData` of type
 * `object`. The function `Login_Function` takes an object with `LoginData` property as an argument and
 * returns a Promise that resolves to an object containing the result of the login attempt. The
 * function first validates
 * @returns The function `Login_Function` returns an object with the `Result` data if the
 * `Verification_Result` is true and the `SaveLocally` property of the `Result.Data` object is also
 * true. If the `SaveLocally` property is false, then only the `Result` data is returned. If the
 * `Verification_Result` is false, then an object with the `Status`
 */
// Typescript Interface
interface Props {
  LoginData: object;
}

// function  for login
export default async function Login_Function({ LoginData }: Props) {
  let Verification_Result = await LoginValidate(LoginData); // validate the login data
  // logic for validate result
  if (Verification_Result === true) {
    let Result = await HTTP_POST({
      PostPath: "/post/auth/login",
      SendData: LoginData,
    }); // send the data to the server
    // Store the data in cache
    if (Result.Data.SaveLocally === true) {
      await Store_Cache_Data({
        AuthData: Result,
        DataPath: "AuthData",
      });
      // return the result
      return Result;
    } else {
      return Result;
    }
  } else if (Verification_Result === false) {
    return {
      Status: false,
    };
  }
}
