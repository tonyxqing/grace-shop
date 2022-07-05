const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LHupqI2HkViCwBLy2sZo5a3Jlsmy5YzygOTKjyRW7jNbvJf7uE5cvGz5wNKGHVqxjgfjKAnonswj4myIZHgtcZx00iElE7wqO"
);

// API

// App Config
const app = express();

// MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request: any, response: any) =>
  response.status(200).send("Hello World")
);

app.post("/payments/create", async (request: any, response: any) => {
  const total = request.query.total;
  console.log("Payment Request Recieved: ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
// http://localhost:5001/grace-shop-95023/us-central1/api
