//Create a function to take the products, that the same id to get it.
/*
export const getProduct = ({commit}, {id}) => {
    commit('setProduct', {id});
}
*/


//Create a push function to shop cart
export const addProductToCart = ({commit}, {product, count}) => {
    commit('ADD_TO_CART' ,{product, count});
}

export const removeProductFromCart = ({commit}, product) => {
    commit('REMOVE_PRODUCT_FROM_CART', product);
}

export const clearCatItems = ({commit}) => {
    commit('CLEAR_CART_ITEMS');
}

export const putAdminName = ({commit}) => {
    commit('addName');
}