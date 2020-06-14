import {createSelector } from "reselect";

const selectcart = state=> state.cart;

export const selectCartItems = createSelector(
    [selectcart],

    (cart)=> cart.items
)
export const selectHidden = createSelector(
    [selectcart],
    (cart)=> cart.hidden
)


export const selectCartItemsNumber = createSelector(
    [selectCartItems],
    (items) => items.reduce((somme , cartItem)=> somme + cartItem.quantity,0)
)
export const selectTotalprice = createSelector(
    [selectCartItems],
    (items) => items.reduce((somme , item)=>somme = somme + item.quantity*item.price,0)
)