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
export default async function Login_Function({LoginData}:Props){
    let Verification_Result = await LoginValidate(LoginData); // validate the login data
    console.log(Verification_Result, HTTP_POST);

    // logic for validate result
    if(Verification_Result === true){

    }
    else if(Verification_Result === false){
        return {
            Status: false
        }
    }
}