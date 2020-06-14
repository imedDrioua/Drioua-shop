export const addItemsArray = (cartitems , itemToadd)=>{
 const  exist = cartitems.find(cartItem => cartItem.id === itemToadd.id);
  if(exist) {
    return ( cartitems.map(item=> item.id === itemToadd.id ? 
        {...item ,quantity : item.quantity +1} : item));
  }

return [...cartitems , {...itemToadd , quantity : 1}]

}