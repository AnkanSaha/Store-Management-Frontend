 import {decodeToken} from 'react-jwt'; // import jwt-decode

 // global type
 type globe = any;

 export default function Decode_Token(Token:globe): globe {
    // decode token
    const DecodedToken : globe = decodeToken(Token);
    return DecodedToken;
 } // export decode token function