// This file is created by Ankan Saha

// Import Functions
import { HTTP_POST, HTTP_PUT } from "../Most Used Functions"; // import HTTP POST Function
import {
  ValidateAddEmployee,
  ValidateUpdateEmployee,
} from "../../Validator/Store Management/Manage Employee Validate"; // import Validate Add Employee Function

// Typescript Interface
interface EmployeeAddProps {
  AddEmployeeData: object;
}

// function  for add employee
export async function AddEmployee_Function({
  AddEmployeeData,
}: EmployeeAddProps) {
  // Let's validate the data
  let ValidateStatus = await ValidateAddEmployee(AddEmployeeData);

  // If validation is successful
  if (ValidateStatus === true) {
    // Let's add the employee
    let AddEmployeeStatus = await HTTP_POST({
      PostPath: "/post/employee/create",
      SendData: AddEmployeeData,
    });
    return AddEmployeeStatus;
  } else if (ValidateStatus === false) {
    return false;
  }
}

// Typescript Interface
interface EmployeeUpdateProps {
  UpdateEmployeeData: object;
}

export async function UpdateEmployee({
  UpdateEmployeeData,
}: EmployeeUpdateProps) {
  let Validation: boolean = await ValidateUpdateEmployee(UpdateEmployeeData);
  if (Validation === true) {
    let result = await HTTP_PUT({
      PostPath: "/put/employee/update",
      SendData: UpdateEmployeeData,
    });
    return result;
  } else if (Validation === false) {
    return false;
  }
}
