import  React from "react";

import StripeCheckout from "react-stripe-checkout";

const Strip = ({price})=>{
    const publishKey=	
   "pk_test_51Gug5xFoN3XRC2nfqeJM8XyEe90UaAlWp4LtvTuPLhy7Swc40lzs5QoVhOWSnbBtqxV7PxUmS7fWRQSfXW25f1Nm008lLcsLpu";
   const token = token =>(
        alert("Succefuly paid")
    )
    return(
       <StripeCheckout
       label="Pay Now"
       name="Asma's Shop"
       shippingAddress
       billingAddress
       description={`Your total is ${price}`} 
       amount={price * 100}
       panelLabel="Pay now"
       stripeKey={publishKey}
       token={token}
       />
   )
}
export default Strip;