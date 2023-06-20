// This File For Validate Manage Employee Form

// types
type str = string;
type num = number;
type bool = boolean;

// interface
interface ValidateOrderDetails {
    OwnerEmailForBody: str;
    User_idForBody: num;
    ProductName: str;
    ProductCategory: str;
    ProductSKU: str;
    ProductQuantity: num;   
    ProductPrice: num;  
    DeliveryAddress: str;
    DeliveryDate: str;
    DeliveryStatus: str;
    PaymentMethod: str;
    PaymentStatus: str;
    CustomerName: str;
    CustomerEmail: str;
    CustomerPhone: str;
}



export async function ValidateOrderDetails(data:ValidateOrderDetails): Promise<bool> {
    // Validate Add Employee Form
    if (data.CustomerEmail === "" || data.CustomerEmail === null || data.CustomerEmail === undefined) {
        alert ("Please Enter Customer Name");
        return false
    }
    else if (data.CustomerEmail === "" || data.CustomerEmail === null || data.CustomerEmail === undefined) {
        alert ("Please Enter Customer Email");
        return false
    }
    else if(data.CustomerEmail.includes("@") === false || data.CustomerEmail.includes(".") === false){
        alert ("Please Enter Valid Customer Email");
        return false
    }
    else if (data.CustomerPhone === null || data.CustomerPhone === undefined || data.CustomerPhone.length !== 10) {
        alert ("Please Enter Valid Customer Phone");
        return false
    }
    else if(data.DeliveryAddress === null || data.DeliveryAddress === undefined || data.DeliveryAddress === ""){
        alert ("Please Enter Valid Delivery Address");
        return false
    }
    else if(data.DeliveryDate === "" || data.DeliveryDate === null || data.DeliveryDate === undefined){
        alert ("Please Enter Delivery Date");
        return false
    }
    else{
        return true
    }
}

// export async function ValidateUpdateEmployee (data:ValidateUpdateEmployee){
//        // Validate Add Employee Form
//        if (data.EmployeeName === "" || data.EmployeeName === null || data.EmployeeName === undefined) {
//         alert ("Please Enter Employee Name");
//         return false
//     }
//     else if (data.EmployeeEmail === "" || data.EmployeeEmail === null || data.EmployeeEmail === undefined) {
//         alert ("Please Enter Employee Email");
//         return false
//     }
//     else if(data.EmployeeEmail.includes("@") === false || data.EmployeeEmail.includes(".") === false){
//         alert ("Please Enter Valid Employee Email");
//         return false
//     }
//     else if (data.EmployeePhoneNumber === "" || data.EmployeePhoneNumber === null || data.EmployeePhoneNumber === undefined || data.EmployeePhoneNumber.length !== 10) {
//         alert ("Please Enter Valid Employee Phone");
//         return false
//     }
//     else if(data.EmployeeMonthlySalary === null || data.EmployeeMonthlySalary === undefined || data.EmployeeMonthlySalary < 0){
//         alert ("Please Enter Valid Employee Monthly Salary");
//         return false
//     }
//     else if(data.EmployeeRole === "" || data.EmployeeRole === null || data.EmployeeRole === undefined){
//         alert ("Please Enter Employee Role");
//         return false
//     }
//     else if(data.EmployeeDateOfJoining === "" || data.EmployeeDateOfJoining === null || data.EmployeeDateOfJoining === undefined){
//         alert ("Please Enter Employee Date Of Joining");
//         return false
//     }
//     else if(data.OwnerEmailForBody.includes('@') === false || data.OwnerEmailForBody === null || data.OwnerEmailForBody === undefined){
//         alert ("Please Login Correctly");
//         return false;
//     }
//     else{
//         return true
//     }
// }