const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51IIBX1ACAFIHSl3VZQbhhh5r7TDhSSkkgkhnjCpJQLMLHWzBjfCYiao8HXcRCgvgtQRR7ta9p7E32C8pKwK3LlmH00bixY67M0"
);
//API

//App config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (request, response) => response.status(200).send("hello clone"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved !! for the amount>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-13379/us-central1/api
