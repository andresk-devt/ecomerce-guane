export const setProducts  = (state, products) => {
    state.products = products;
}
/*
export const setProduct = (state, id) => {
    state.products = id;
}
*/
export const ADD_TO_CART = (state, {product, count}) =>{

    //Increment the count in the shop cart if the product its exist in this.
    let productInCart = state.cart.find(item => {
        return item.product.id === product.id;
    })

    if(productInCart){
        productInCart.count += count;
        return;
    }

    state.cart.push({
        product,
        count
    })
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
    })
}

export const CLEAR_CART_ITEMS = (state) => {
    state.cart = []
}

export const addName = (state,{ name , email}) => {
    state.user.push({
        name,
        email
    })
}
