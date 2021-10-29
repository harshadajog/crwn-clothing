import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { connect } from 'react-redux';
import { resetCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, resetCart}) => {
    const priceForStripeInCents = price * 100;
    const publishableKey = 'pk_test_51IlJuwKHoTsOEzANCtDYHWdjurDOh8OlYM9YarwbGlPZ7WvkBcvzXsHwoUlDdL1XfwhnYDf3yRqpHbJthdXV0hGQ00F1iiREPS';

   const onToken = token => {
        alert('Payment Successful');

    //  Clear shopping cart
        resetCart();
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

const mapDispatchToProps = dispatch => ({
    resetCart: () => dispatch(resetCart())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);