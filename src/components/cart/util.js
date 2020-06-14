export const addItemsArray = (cartitems , itemToadd)=>{
 const  exist = cartitems.find(cartItem => cartItem.id === itemToadd.id);
  if(exist) {
    return ( cartitems.map(item=> item.id === itemToadd.id ? 
        {...item ,quantity : item.quantity +1} : item));
  }

return [...cartitems , {...itemToadd , quantity : 1}]


}
export const decreasItem = (cartitems , itemTodec)=>{
  const  exist = cartitems.find(cartItem => cartItem.id === itemTodec.id);
   if(exist.quantity!==1) {
     return ( cartitems.map(item=> item.id === itemTodec.id ? 
         {...item ,quantity : item.quantity - 1} : item));
   }
   else {
     return cartitems.filter(item => item.id !== itemTodec.id)
   }
 
 
 }
 
 
