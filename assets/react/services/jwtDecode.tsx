import React from 'react';
import { isExpired, decodeToken } from "react-jwt";

const jwtDecode = (token: string) => {
    if (isExpired(token)) {
        window.location.href = '/login'; 
    } else {
        const decodedToken = decodeToken(token);
        return decodedToken;
    }

}

export default jwtDecode;