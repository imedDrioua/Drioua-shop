import {addItemsArray,decreasItem} from "../../components/cart/util";
const INITIAL_STATE ={
    hidden : false,
    items : []
}


const cartReducer = (state=INITIAL_STATE  , action )=>{
    switch (action.type) {
        case "HIDE_SHOW":
          return {
              ...state,
              hidden : ! state.hidden
          };
        case "ADD_ITEMS":
            return  {
                ...state,
                items : addItemsArray(state.items , action.payload)
            };
        case "REMOVE_ITEM":
             return {
                ...state,
                 items : state.items.filter(item => item.id !== action.payload.id)
                };
                case "DECREASE_ITEM":
                    return {
                       ...state,
                        items : decreasItem(state.items,action.payload)
                       };      
        default: return state;
    }
}
export default cartReducer;