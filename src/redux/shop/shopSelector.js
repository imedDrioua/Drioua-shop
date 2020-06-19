import {createSelector} from "reselect";
export const selectShop = state => state.shop;


export const selectCollections  = createSelector(
    [selectShop],
    (shop)=> shop.collections
)
export const selectCollectionArray = createSelector(
    [selectCollections],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
) 

export const collectionSelector = paramName =>(
    createSelector(
        [selectCollections],
        (collections)=>(collections ? collections[paramName] : null )
    )
)