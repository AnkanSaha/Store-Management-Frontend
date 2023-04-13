// This File is for Signup Validation

// Signup Validation Function
export default async function SignupValidation(X) {
    // validate all fields
    if (X.Name === "" || X.Name === null || X.Name === undefined) {
        alert("Name is Required");
        return false;
    }
    else if(X.Email === "" || X.Email === null || X.Email === undefined || !X.Email.includes("@") || !X.Email.includes(".")) {
        alert("Valid Email is Required");
        return false;
    }
    else if(X.Password === "" || X.Password === null || X.Password === undefined) {
        alert("Password is Required");
        return false;
    }
    else if(X.Confirm_Password === "" || X.Confirm_Password === null || X.Confirm_Password === undefined) {
        alert("Confirm Password is Required");
        return false;
    }
    else if(X.Password !== X.Confirm_Password) {
        alert("Password and Confirm Password must be same");
        return false;
    }
    else if(X.Password.length < 8 || X.Password.length > 16 || X.Confirm_Password.length < 8 || X.Confirm_Password.length > 16) {
        alert("Password & Confirm Password must be 8 to 16 characters long");
        return false;
    }
    else if(X.Password.includes("@") === false && X.Password.includes("#") === false && X.Password.includes("$") === false && X.Password.includes("%") === false && X.Password.includes("&") === false && X.Password.includes("*") === false && X.Password.includes("!") === false && X.Password.includes("~") === false && X.Password.includes("^") === false && X.Password.includes("(") === false && X.Password.includes(")") === false && X.Password.includes("-") === false && X.Password.includes("+") === false && X.Password.includes("=") === false && X.Password.includes("{") === false && X.Password.includes("}") === false && X.Password.includes("[") === false && X.Password.includes("]") === false && X.Password.includes(":") === false && X.Password.includes(";") === false && X.Password.includes("<") === false && X.Password.includes(">") === false && X.Password.includes("?") === false && X.Password.includes("/") === false && X.Password.includes("|") === false && X.Confirm_Password.includes("@") === false && X.Confirm_Password.includes("#") === false && X.Confirm_Password.includes("$") === false && X.Confirm_Password.includes("%") === false && X.Confirm_Password.includes("&") === false && X.Confirm_Password.includes("*") === false && X.Confirm_Password.includes("!") === false && X.Confirm_Password.includes("~") === false && X.Confirm_Password.includes("^") === false && X.Confirm_Password.includes("(") === false && X.Confirm_Password.includes(")") === false && X.Confirm_Password.includes("-") === false && X.Confirm_Password.includes("+") === false && X.Confirm_Password.includes("=") === false && X.Confirm_Password.includes("{") === false && X.Confirm_Password.includes("}") === false && X.Confirm_Password.includes("[") === false && X.Confirm_Password.includes("]") === false && X.Confirm_Password.includes(":") === false && X.Confirm_Password.includes(";") === false && X.Confirm_Password.includes("<") === false && X.Confirm_Password.includes(">") === false && X.Confirm_Password.includes("?") === false && X.Confirm_Password.includes("/") === false && X.Confirm_Password.includes("|") === false) {
        alert("Password & Confirm Password must contain at least one of the special characters (@, #, $, %, &, *, !, ~, ^, (, ), -, +, =, {, }, [, ], :, ;, <, >, ?, /, |)");
        return false;
    }
    else if(X.Phone === "" || X.Phone === null || X.Phone === undefined || X.Phone.length !== 10) {
        alert(`Phone Number is Required & must be 10 digits long current length is ${X.Phone.length}`);
        return false;
    }
    else if(X.Address === "" || X.Address === null || X.Address === undefined) {
        alert("Address is Required");
        return false;
    }
    else if(X.City === "" || X.City === null || X.City === undefined) {
        alert("City is Required");
        return false;
    }
    else if(X.State === "" || X.State === null || X.State === undefined) {
        alert("State is Required");
        return false;
    }
    else if(X.Zip === "" || X.Zip === null || X.Zip === undefined) {
        alert("Pincode is Required");
        return false;
    }
    else if(X.Country === "" || X.Country === null || X.Country === undefined) {
        alert("Country is Required");
        return false;
    }
    else if(X.isTermsAccepted === false) {
        alert("Please Accept Terms and Conditions");
        return false;
    }
    else if(X.ShopName === "" || X.ShopName === null || X.ShopName === undefined) {
        alert("Shop Name is Required");
        return false;
    }
    else if(X.ShopAddress === "" || X.ShopAddress === null || X.ShopAddress === undefined) {
        alert("Shop Address is Required");
        return false;
    }
    else if(X.PAN === "" || X.PAN === null || X.PAN === undefined || X.PAN.length !== 10) {
        alert("PAN is Required"); 
        return false;
    }
    else if(X.isGSTIN === "" || X.isGSTIN === null || X.isGSTIN === undefined) {
        alert("Please Select do you have GSTIN");
        return false;
    }
    else if(X.isGSTIN === "Yes"){
        if(X.GSTIN === "" || X.GSTIN === null || X.GSTIN === undefined) {
            alert("GSTIN is Required");
            return false;
        }
    }
    else if(X.isGSTIN === "No"){
        return true;
    }
    else{
        return true;
    }
}; // End of Signup Validation Function