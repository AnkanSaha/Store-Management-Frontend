// This file is created by Ankan Saha

// Import Functions
import { HTTP_POST } from "../Most Used Functions"; // import HTTP POST Function
import { ValidateAddEmployee } from "../../Validator/Store Management/Manage Employee Validate"; // import Validate Add Employee Function

// Typescript Interface
interface EmployeeAddProps {
    AddEmployeeData: object;
}

// function  for add employee
export async function AddEmployee_Function({ AddEmployeeData }: EmployeeAddProps) {
    // Let's validate the data
    let ValidateStatus = await ValidateAddEmployee(AddEmployeeData);
    
    // If validation is successful
    if(ValidateStatus === true) {
        // Let's add the employee
        let AddEmployeeStatus = await HTTP_POST({ 
            PostPath:"/post/employee/create",
            SendData: AddEmployeeData
         });
        return AddEmployeeStatus;
    } else if(ValidateStatus === false) {
        return false;
    }
}