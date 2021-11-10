export const cartItemCount = (state) => {
    return state.cart.length;
}

export const carTotalPrice = (state) => {
    let total = 0;

    state.cart.forEach(item => {
        total += item.product.price * item.count
    });

    return total;
}

export const userName = (state) => {
    return state.user;
}

export const order = (state) => {
    return state.cart;
}