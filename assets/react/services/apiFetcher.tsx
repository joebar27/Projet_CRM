import React, { useEffect } from "react";
import apiOps from "./apiFetcherOps";


const getApiFetcher = async ($url:any ) => {
    await fetch($url,{
        ...apiOps,
        method: 'GET',
    });
}

const postApiFetcher = async ($url:any, $data = {}) =>{
    await fetch($url,{
        ...apiOps,
        method: 'POST',
        body: JSON.stringify($data),
    });
}


export default { getApiFetcher, postApiFetcher };