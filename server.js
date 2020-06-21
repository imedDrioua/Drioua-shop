const express = require("express");
const bodyParser = require("body-parser");
const cors  = require("cors");
const path = require("path");
const key = 	
'sk_test_51Gug5xFoN3XRC2nfs6zldgCSjqxM5AV2uPvETS5Zz4C4mL1WbNFqZJe8jbF8WwxYv5yXACWEDiUamc3VWyAh9o9T00JX9Qlidh';
var stripe = require('stripe')(key);
if(process.env.NODE_ENV === "production") require("dotenv").config();
const port  = process.env.PORT || 5000 ;


const app=express();

 app.use(bodyParser.json());
 app.use(express.urlencoded({extended :true}));
 app.use(cors());
 if(process.env.NODE_ENV === "production")
 {
     app.use(express.static(path.join(__dirname , "client/public")));

     app.get("*",(req , res )=>{
          res.sendFile(path.join(__dirname,"client/buid/","index.html"));
     });
 }
 app.listen(port , error=>{
     if(error) console.log(error);
     console.log("Starting at port "+port );
 });
app.post("/payment", (req , res )=>{
    const body = {
        source : req.body.token.id ,
        amount : req.body.price,
        currency : "usd"
    };
    stripe.chrages.create(body , (stripeErr , stripeSucc)=>{
        if(stripeErr) {
            res.status(500).send({error : stripeErr});
        }else{
            res.status(200).send({success : stripeSucc});
        }
    });
})