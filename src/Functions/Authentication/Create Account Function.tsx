// This File is Created By: Ankan Saha

// importing the required modules

// import Components

// import Variables & Contexts
// import { Hostname } from "../../Global/Global variables"; // import the hostname

// Typescript Interface
interface Props{
    FullData: object;
}

// function to create account
export default async function CreateAccountFunction ({FullData}: Props){
    // fetch the data from the server
    let Wait = await fetch(`/post/auth/CreateAccount`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(FullData)
    }); // end of fetch

    // convert the data into json
    let Data = await Wait.json();

    return Data;
}