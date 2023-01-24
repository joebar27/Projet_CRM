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

export default Stripe;