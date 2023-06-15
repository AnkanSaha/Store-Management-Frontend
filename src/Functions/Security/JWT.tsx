import {decodeToken} from 'react-jwt'; // import JWT library

/**
 * This function decodes a JWT token and returns the decoded token or null if decoding fails.
 * @param {string} JWT_Token - The JWT_Token parameter is a string that represents a JSON Web Token
 * (JWT) that needs to be decoded.
 * @returns The function `JWT_Decode` returns the decoded JWT token as an object if it is successfully
 * decoded, otherwise it returns `null`.
 */
export default function JWT_Decode(JWT_Token: string) {
    // decode JWT token
    const Decoded_Token: any = decodeToken(JWT_Token);
    if(Decoded_Token){
        return Decoded_Token;
    }
    else{
        return null;
    }
} // export JWT_Decode function