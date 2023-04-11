// This File is Created By: Ankan Saha

// importing the required modules

// import functions
import SignupValidation from "../../Validator/Authentication/Signup Validate"; // Signup Validation Function
import { HTTP_POST } from "../Most Used Functions"; // import HTTP POST Function

// import Variables & Contexts
// import { Hostname } from "../../Global/Global variables"; // import the hostname

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
      SendData: FullData,
    }); // send the data to the server
    return wait;
  } else if (Validation_Result === false) {
    return {
      Status: false,
    };
  }
}
