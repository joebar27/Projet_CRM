import React from 'react';
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios';
import { element } from 'prop-types';

export const CheckoutForm=()=>{
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const {error, paymentMethod} = await stripe?.createPaymentMethod({
            type: "card",
            card: element.getElement(CardElement),
        });
        if(!error){
            console.log("token Généré : ", paymentMethod);
        }
    }

    return(
        <form onSubmit={handleSubmit} style={{ maxWidth: 400}}>
            <CardElement
                options={{
                    hidePostalCode: true
                }}
            />
            <button>Payer</button>
    
        </form>
    )
}