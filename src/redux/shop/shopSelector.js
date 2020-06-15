import {createSelector} from "reselect";
const stringToId={
    "hats" : 1 ,
     "sneakers" : 2,
     "jackets" : 3,
     "womens" :4,
     "mens" : 5


}


export const selectShop = state => state.shop;

export const selectCollections  = createSelector(
    [selectShop],
    (shop)=> shop.collections
)

export const collectionSelector = paramName =>(
    createSelector(
        [selectCollections],
        (collections)=> collections.filter(collection => collection.id === stringToId[paramName])[0]
    )
)