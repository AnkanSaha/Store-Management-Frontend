// This File is Created By: Ankan Saha

// importing the required modules

// import functions
import SignupValidation from "../../Validator/Authentication/Signup Validate"; // Signup Validation Function
import { HTTP_POST } from "../Most Used Functions"; // import HTTP POST Function

// import Variables & Contexts

/**
 * This is a TypeScript function that creates an account by sending data to a server after validating
 * it.
 * @param {Props}  - This is a Typescript function that creates an account by sending data to a server.
 * The function takes in an object called `Props` which has one property called `FullData` of type
 * `object`. The `FullData` object contains all the necessary data to create an account. The function
 * first
 * @returns The function `CreateAccountFunction` returns a promise that resolves to the result of
 * sending the `FullData` object to the server to create an account. If the validation of the data is
 * successful, the function sends the data to the server and returns the result of the HTTP POST
 * request. If the validation fails, the function returns an object with a `Status` property set to
 * `false`.
 */
// Typescript Interface
interface Props {
  FullData: object;
}

// function to create account
export default async function CreateAccountFunction({ FullData }: Props) {
  // send the data to the function to validate the data
  let Validation_Result = await SignupValidation(FullData); // validate the data

  // if the validation is successful
  if (Validation_Result === true) {
    let wait = await HTTP_POST({
      PostPath: `/post/auth/CreateAccount`,
      SendData: FullData
    }); // send the data to the server
    return wait;
  } else if (Validation_Result === false) {
    return {
      Status: false,
    };
  }
}
