import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripeInCents = price * 100;
    const publishableKey = 'pk_test_51IlJuwKHoTsOEzANCtDYHWdjurDOh8OlYM9YarwbGlPZ7WvkBcvzXsHwoUlDdL1XfwhnYDf3yRqpHbJthdXV0hGQ00F1iiREPS';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='Naturalz LLC.'
            billingAddress
            shippingAddress 
            description={`Your total is $${price}`}
            amount={priceForStripeInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}          
        />    
    );
};

export default StripeCheckoutButton;