import React, { useEffect } from "react";
import apiOps from "./apiFetcherOps";


const getApiFetcher = async ($url:any ) => {
    const response = await fetch($url,{
        ...apiOps,
        method: 'GET',
    });
    return await response.json();
}

const postApiFetcher = async ($url:any, $data = {}) =>{
    const response = await fetch($url,{
        ...apiOps,
        method: 'POST',
        body: JSON.stringify($data),
    });
    return await response.json();
}


export default { getApiFetcher, postApiFetcher };