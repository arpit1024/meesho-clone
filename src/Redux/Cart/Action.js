import { ADD_ADDRESS, ADD_MARGIN, ADD_TO_CART, CHANGE_CHECKOUT_STAGE, CHANGE_QTY, ORDER_SUCCESSFUL, REMOVE_FROM_CART } from "./ActionType"


export const addAddress = ( add ) => ({
    type: ADD_ADDRESS,
    payload: {
        address: add
    }
});

export const addToCart = ( item ) => ({
    type: ADD_TO_CART,
    payload: {
        product: item
    }
});

export const changeQty = ( id, qty ) => ({
    type: CHANGE_QTY,
    payload: {
        id: id,
        qty: qty
    }
});

export const removeFromCart = ( id ) => ({
    type: REMOVE_FROM_CART,
    payload: {
        id: id
    }
});

export const changeCheckoutStage = ( stage ) => ({
    type: CHANGE_CHECKOUT_STAGE,
    payload: {
        stage
    }
});


export const orderSuccessful = ( ) => ({
    type: ORDER_SUCCESSFUL,
    payload: {
        success: true
    }
});

export const addMargin = ( margin ) => ({
    type: ADD_MARGIN,
    payload: {
        margin: Number.isNaN(Number(margin)) ? 0 : Number(margin)
    }
})