// This File is for Signup Validation

// import External Packages

// import Internal Modules

// import Internal Components

// import Context API

// import Variables



// Signup Validation Function
export default async function SignupValidation(values) {
    // validate all fields
    if (values.Name === "" || values.Name === null || values.Name === undefined) {
        alert("Name is Required");
        return false;
    }
    else if(values.Email === "" || values.Email === null || values.Email === undefined || !values.Email.includes("@") || !values.Email.includes(".")) {
        alert("Valid Email is Required");
        return false;
    }
    else if(values.Password === "" || values.Password === null || values.Password === undefined) {
        alert("Password is Required");
        return false;
    }
    else if(values.Confirm_Password === "" || values.Confirm_Password === null || values.Confirm_Password === undefined) {
        alert("Confirm Password is Required");
        return false;
    }
    else if(values.Password !== values.Confirm_Password) {
        alert("Password and Confirm Password must be same");
        return false;
    }
    else if(values.Password.length < 8 || values.Password.length > 16 || values.Confirm_Password.length < 8 || values.Confirm_Password.length > 16) {
        alert("Password & Confirm Password must be 8 to 16 characters long");
        return false;
    }
    else if(values.Password.includes("@") === false && values.Password.includes("#") === false && values.Password.includes("$") === false && values.Password.includes("%") === false && values.Password.includes("&") === false && values.Password.includes("*") === false && values.Password.includes("!") === false && values.Password.includes("~") === false && values.Password.includes("^") === false && values.Password.includes("(") === false && values.Password.includes(")") === false && values.Password.includes("-") === false && values.Password.includes("+") === false && values.Password.includes("=") === false && values.Password.includes("{") === false && values.Password.includes("}") === false && values.Password.includes("[") === false && values.Password.includes("]") === false && values.Password.includes(":") === false && values.Password.includes(";") === false && values.Password.includes("<") === false && values.Password.includes(">") === false && values.Password.includes("?") === false && values.Password.includes("/") === false && values.Password.includes("|") === false && values.Confirm_Password.includes("@") === false && values.Confirm_Password.includes("#") === false && values.Confirm_Password.includes("$") === false && values.Confirm_Password.includes("%") === false && values.Confirm_Password.includes("&") === false && values.Confirm_Password.includes("*") === false && values.Confirm_Password.includes("!") === false && values.Confirm_Password.includes("~") === false && values.Confirm_Password.includes("^") === false && values.Confirm_Password.includes("(") === false && values.Confirm_Password.includes(")") === false && values.Confirm_Password.includes("-") === false && values.Confirm_Password.includes("+") === false && values.Confirm_Password.includes("=") === false && values.Confirm_Password.includes("{") === false && values.Confirm_Password.includes("}") === false && values.Confirm_Password.includes("[") === false && values.Confirm_Password.includes("]") === false && values.Confirm_Password.includes(":") === false && values.Confirm_Password.includes(";") === false && values.Confirm_Password.includes("<") === false && values.Confirm_Password.includes(">") === false && values.Confirm_Password.includes("?") === false && values.Confirm_Password.includes("/") === false && values.Confirm_Password.includes("|") === false) {
        alert("Password & Confirm Password must contain at least one of the special characters (@, #, $, %, &, *, !, ~, ^, (, ), -, +, =, {, }, [, ], :, ;, <, >, ?, /, |)");
        return false;
    }
    else if(values.Phone === "" || values.Phone === null || values.Phone === undefined || values.Phone.length !== 10) {
        alert(`Phone Number is Required & must be 10 digits long current length is ${values.Phone.length}`);
        return false;
    }
    else if(values.Address === "" || values.Address === null || values.Address === undefined) {
        alert("Address is Required");
        return false;
    }
    else if(values.City === "" || values.City === null || values.City === undefined) {
        alert("City is Required");
        return false;
    }
    else if(values.State === "" || values.State === null || values.State === undefined) {
        alert("State is Required");
        return false;
    }
    else if(values.Zip === "" || values.Zip === null || values.Zip === undefined) {
        alert("Pincode is Required");
        return false;
    }
    else if(values.Country === "" || values.Country === null || values.Country === undefined) {
        alert("Country is Required");
        return false;
    }
    else if(values.isTermsAccepted === false) {
        alert("Please Accept Terms and Conditions");
        return false;
    }
    else if(values.ShopName === "" || values.ShopName === null || values.ShopName === undefined) {
        alert("Shop Name is Required");
        return false;
    }
    else if(values.ShopAddress === "" || values.ShopAddress === null || values.ShopAddress === undefined) {
        alert("Shop Address is Required");
        return false;
    }
    else if(values.PAN === "" || values.PAN === null || values.PAN === undefined) {
        alert("PAN is Required"); 
        return false;
    }
    else if(values.isGSTIN === "" || values.isGSTIN === null || values.isGSTIN === undefined) {
        alert("Please Select do you have GSTIN");
        return false;
    }
    else if(values.isGSTIN === "Yes"){
        if(values.GSTIN === "" || values.GSTIN === null || values.GSTIN === undefined) {
            alert("GSTIN is Required");
            return false;
        }
    }
    else if(values.isGSTIN === "No"){
        return true;
    }
    else{
        return true;
    }
}; // End of Signup Validation Function