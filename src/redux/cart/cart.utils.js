export const addItemToCart = (cartItems, cartItemToAdd) => {
   const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);

// if cartItemToAdd matches an existingCartItem, then return new array with modified quantity
if(existingCartItem) {
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
        )
}

// if no cart items found, return the cartItems + new cartItemToAdd with base quantity 1
return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};

