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
export const selectCollectionArray = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map(key => collections[key])
)

export const collectionSelector = paramName =>(
    createSelector(
        [selectCollections],
        (collections)=>(collections[paramName])
    )
)