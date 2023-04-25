// This File For Validate Manage Employee Form


export async function ValidateAddEmployee(data) {
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
    else if(data.EmployeeMonthlySalary === "" || data.EmployeeMonthlySalary === null || data.EmployeeMonthlySalary === undefined || data.EmployeeMonthlySalary < 0){
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