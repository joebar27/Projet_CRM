import React, {useState} from 'react';
import axios from 'axios';  
import { PaymentElement, useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
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
            // envoie du token au backend
            try{
                const{ id } = paymentMethod;
                const response = await axios.post("http://localhost:3000/api/stripe/charge",
                {
                    amount: 100,
                    id: id,
                });
                if(response.data.success)
                console.log("Payement réussi ! ");
            } catch (error) {
                console.log("Erreur ! ", error);
            }
        } else{
            console.log(error.message);
        }
        
    }

    return(
        <form onSubmit={handleSubmit} style={{ maxWidth: 600}}>
            <CardElement
                options={{
                    hidePostalCode: true
                }}
            />
            <button disabled={!stripe}>Payer</button>
        </form>
    );
};