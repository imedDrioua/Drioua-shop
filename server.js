const express = require("express");
const bodyParser = require("body-parser");
const cors  = require("cors");
const path = require("path");
require("dotenv").config();
var stripe = require('stripe')(process.env.STRIPE_KEY);

const port  = process.env.PORT || 5000 ;


const app=express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended :true}));
 app.use(cors());
 if(process.env.NODE_ENV === "production")
 {
     app.use(express.static(path.join(__dirname , "client/public")));

     app.get("*",(req , res )=>{
          res.sendFile(path.join(__dirname,"client/buid/","index.html"));
          console.log("i am in");
     });
 }
 app.listen(port , error=>{
     if(error) console.log(error);
     console.log("Starting at port " + port );
 });
app.post("/payment", (req , res )=>{
    
    const body = {
        source : req.body.token.id ,
        amount : req.body.amount,
        currency : "DZA"
    };
   
    stripe.charges.create(body , (stripeErr , stripeSucc)=>{
        if(stripeErr) {
            res.status(500).send({error : stripeErr});
        }else{
            res.status(200).send({success : stripeSucc});
        }
    });
})