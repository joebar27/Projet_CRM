const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");
const { json } = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.post("/api/stripe/charge",cors(), async (req, res)=>{
    let { amount, id } = req.body;
    console.log("amount & id :", amount, id);
    try{
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "EUR",
            description: "Your Company Description",
            payment_method: id,
            confirm: true,
        });
        res.json({
            message: "payement réussi",
            success: true,
        })
    } catch(error){
        console.log("erreur...", error);
        res.json({
            message: "Le payment à échoué",
            success: false,
        })
    }
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Serveur démaré...");
})