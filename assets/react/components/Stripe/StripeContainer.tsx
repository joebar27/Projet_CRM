import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';

const PUBLIC_KEY = "pk_test_51MP4JIDouJcaqTebjqTxwUqTXYocyNFFHre5VEEZn8CUa5IJiTKGWPqPDs7738zMpct5JNuB6nblrHZ8unNTzUW400OSr0jBGw";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ()=>{

    return(
        <Elements stripe={stripeTestPromise} >
            <CheckoutForm />
        </Elements>
    );
};

// const Logout = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     a{
//         width: 100%;
//         font-size: 1.5rem;
//         font-family: 'Roboto', sans-serif;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 10px;
//         padding: 2% 0;
//         text-decoration: none;
//         color: white;
//         cursor: pointer;
//     }
// `;

export default Stripe;