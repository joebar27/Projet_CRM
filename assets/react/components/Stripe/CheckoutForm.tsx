import React, {useState} from 'react';
import axios from 'axios';  
import { PaymentElement, useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import { StripeCardElement, StripeCardNumberElement } from '@stripe/stripe-js';


export const CheckoutForm=()=>{
    const stripe = useStripe();
    const elements :StripeCardElement | StripeCardNumberElement | { token: string; }= useElements();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        
        
        const {error, paymentMethod} = await stripe?.createPaymentMethod({
            type: "card",
            card: elements?.getElement(CardElement),
        });
        if(!error){
            console.log("token Généré : ", paymentMethod);
        }
        
    }

    return(
        <form onSubmit={handleSubmit} style={{ maxWidth: 400}}>
            <CardElement/>
            <button disabled={!stripe}>Payer</button>
        </form>
    )
}