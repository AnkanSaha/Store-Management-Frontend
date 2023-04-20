// This File is for Login Validation

export default async function LoginValidate (Y){
    if(Y.Email === null || Y.Email === undefined || Y.Email === ""){
        alert("Email is Required");
        return false;
    }
    else if(!Y.Email.includes("@") || !Y.Email.includes(".")){
        alert("Valid Email is Required");
        return false;
    }
    else if(Y.Password === null || Y.Password === undefined || Y.Password === ""){
        alert("Password is Required");
        return false;
    }
    else if(Y.Password.length < 8 || Y.Password.length > 16){
        alert("Password must be 8 to 16 characters long");
        return false;
    }
    else if(Y.Password.includes("@") === false && Y.Password.includes("#") === false && Y.Password.includes("$") === false && Y.Password.includes("%") === false && Y.Password.includes("&") === false && Y.Password.includes("*") === false && Y.Password.includes("!") === false && Y.Password.includes("~") === false && Y.Password.includes("^") === false && Y.Password.includes("(") === false && Y.Password.includes(")") === false && Y.Password.includes("-") === false && Y.Password.includes("+") === false && Y.Password.includes("=") === false && Y.Password.includes("{") === false && Y.Password.includes("}") === false && Y.Password.includes("[") === false && Y.Password.includes("]") === false && Y.Password.includes(":") === false && Y.Password.includes(";") === false && Y.Password.includes("<") === false && Y.Password.includes(">") === false && Y.Password.includes("?") === false && Y.Password.includes("/") === false && Y.Password.includes("|") === false){
        alert("Password must contain at least one of the special characters (@, #, $, %, &, *, !, ~, ^, (, ), -, +, =, {, }, [, ], :, ;, <, >, ?, /, |)");
        return false;
    }
    else{
        return true;
    }
}