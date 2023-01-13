import React from 'react';
import { isExpired, decodeToken } from "react-jwt";

const jwtDecode = (token: string) => {
    if (isExpired(token)) {
        console.log('Token expiré');
    } else {
        const decodedToken = decodeToken(token);
        return decodedToken;
    }

}

export default jwtDecode;