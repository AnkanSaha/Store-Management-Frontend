// This File For Validate Manage Employee Form

// types
type str = string;
type num = number;
type bool = boolean;

// interface
interface ValidateAddEmployee {
    EmployeeName: str;
    EmployeeEmail: str;
    EmployeePhoneNumber:  str;
    EmployeeMonthlySalary: num;
    EmployeeRole: str;
    EmployeeDateOfJoining: str;
}

interface ValidateUpdateEmployee extends ValidateAddEmployee {
    OwnerEmail: str;
}


export async function ValidateAddEmployee(data:ValidateAddEmployee): Promise<bool> {
    // Validate Add Employee Form
    if (data.EmployeeName === "" || data.EmployeeName === null || data.EmployeeName === undefined) {
        alert ("Please Enter Employee Name");
        return false
    }
    else if (data.EmployeeEmail === "" || data.EmployeeEmail === null || data.EmployeeEmail === undefined) {
        alert ("Please Enter Employee Email");
        return false
    }
    else if(data.EmployeeEmail.includes("@") === false || data.EmployeeEmail.includes(".") === false){
        alert ("Please Enter Valid Employee Email");
        return false
    }
    else if (data.EmployeePhoneNumber === null || data.EmployeePhoneNumber === undefined || data.EmployeePhoneNumber.length !== 10) {
        alert ("Please Enter Valid Employee Phone");
        return false
    }
    else if(data.EmployeeMonthlySalary === null || data.EmployeeMonthlySalary === undefined || data.EmployeeMonthlySalary < 0){
        alert ("Please Enter Valid Employee Monthly Salary");
        return false
    }
    else if(data.EmployeeRole === "" || data.EmployeeRole === null || data.EmployeeRole === undefined){
        alert ("Please Enter Employee Role");
        return false
    }
    else if(data.EmployeeDateOfJoining === "" || data.EmployeeDateOfJoining === null || data.EmployeeDateOfJoining === undefined){
        alert ("Please Enter Employee Date Of Joining");
        return false
    }
    else{
        return true
    }
}

export async function ValidateUpdateEmployee (data:ValidateUpdateEmployee){
       // Validate Add Employee Form
       if (data.EmployeeName === "" || data.EmployeeName === null || data.EmployeeName === undefined) {
        alert ("Please Enter Employee Name");
        return false
    }
    else if (data.EmployeeEmail === "" || data.EmployeeEmail === null || data.EmployeeEmail === undefined) {
        alert ("Please Enter Employee Email");
        return false
    }
    else if(data.EmployeeEmail.includes("@") === false || data.EmployeeEmail.includes(".") === false){
        alert ("Please Enter Valid Employee Email");
        return false
    }
    else if (data.EmployeePhoneNumber === "" || data.EmployeePhoneNumber === null || data.EmployeePhoneNumber === undefined || data.EmployeePhoneNumber.length !== 10) {
        alert ("Please Enter Valid Employee Phone");
        return false
    }
    else if(data.EmployeeMonthlySalary === null || data.EmployeeMonthlySalary === undefined || data.EmployeeMonthlySalary < 0){
        alert ("Please Enter Valid Employee Monthly Salary");
        return false
    }
    else if(data.EmployeeRole === "" || data.EmployeeRole === null || data.EmployeeRole === undefined){
        alert ("Please Enter Employee Role");
        return false
    }
    else if(data.EmployeeDateOfJoining === "" || data.EmployeeDateOfJoining === null || data.EmployeeDateOfJoining === undefined){
        alert ("Please Enter Employee Date Of Joining");
        return false
    }
    else if(data.OwnerEmail.includes('@') === false || data.OwnerEmail === null || data.OwnerEmail === undefined){
        alert ("Please Login Correctly");
        return false;
    }
    else{
        return true
    }
}