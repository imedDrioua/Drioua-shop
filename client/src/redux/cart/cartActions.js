export const toggleCart=()=>(
  {  
    type : "HIDE_SHOW",
  }
);
export const addItem=item =>
(
  {
    type : "ADD_ITEMS",
    payload : item
  }
);
export const removeItem = item =>(
  {
    type : "REMOVE_ITEM",
    payload : item
  }
);
export const decreaseItem = item =>(
  {
    type : "DECREASE_ITEM",
    payload : item
  }
);