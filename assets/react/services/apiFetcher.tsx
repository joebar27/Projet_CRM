import React, { useEffect } from "react";

interface IFormData {
    name: string | null;
    location: string | null;
}

interface IResponse {
    success: boolean;
    data?: any;
    error?: any;
}

const getApiFetcher = async ($url: any) => {
    const response: IResponse = {
        success: false,
    };

    try {
        await fetch($url, {
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Bearer "+ sessionStorage.getItem('token'),
            },
            method: "GET",
        })
            .then((res) => res.json())
            .then((json) => {
                response.success = true;
                response["data"] = json;
            })
            .catch((err) => {
                response.error =
                    err && err.response && err.response.data
                        ? err.response.data
                        : err.message;
            });
    } catch (err: any) {
        response["error"] = err.message;
    }

    return response;
};

/**
 * This function is used to get jwt token from the api with the login and password
 * @param {IFormData} formData - The form data
 * @returns {Promise<IResponse>} - The response
 */
const postApiFetcher = async ($url: any, credentials: IFormData) => {
    const response: IResponse = {
        success: false,
    };
    
    try {
        await fetch($url, {
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Bearer "+ sessionStorage.getItem('token'),
            },
            method: "POST",
            body: JSON.stringify(credentials),
        })
            .then((res) => res.json())
            .then((json) => {
                response.success = true;
                response["data"] = json;
            })
            .catch((err) => {
                response.error =
                    err && err.response && err.response.data
                        ? err.response.data
                        : err.message;
            });
    } catch (err: any) {
        response["error"] = err.message;
    }

    return response;
};

export default { getApiFetcher, postApiFetcher };
