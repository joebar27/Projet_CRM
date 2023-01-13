import React from "react";
import jwtDecode from "./jwtDecode";

function loggin(token:string) {
    sessionStorage.setItem('token', token);
    //console.log(sessionStorage);
}

function logout() {
    sessionStorage.clear();
}

function getCurrentUserRoles() {
    const token = sessionStorage.getItem('token');
    if (token) {
        const decodedToken = jwtDecode(token);
        return decodedToken.roles;
    }
}

export default { loggin, logout, getCurrentUserRoles };