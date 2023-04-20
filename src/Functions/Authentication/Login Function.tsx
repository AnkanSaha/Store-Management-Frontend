// This File is Created By: Ankan Saha

// importing the required modules

// import Functions
import LoginValidate from "../../Validator/Authentication/Login Validate"; // import Login Validate Function
import { HTTP_POST } from "../Most Used Functions"; // import HTTP POST Function

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
    return Result;
  } else if (Verification_Result === false) {
    return {
      Status: false
    };
  }
}
