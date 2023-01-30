import React from 'react';
import { useForm } from "react-hook-form";

const Errors = () => {
    const {setError} = useForm();
    return(
        setError('email', {types: {
            required: 'Email requis',
            minLength: 'Email trop court',
        }})
    );
}

export default Errors;