import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import Stripe from "stripe";
const stripe = new Stripe(
    "sk_test_51LHupqI2HkViCwBLy2sZo5a3Jlsmy5YzygOTKjyRW7jNbvJf7uE5cvGz5wNKGHVqxjgfjKAnonswj4myIZHgtcZx00iElE7wqO",
    {apiVersion: "2020-08-27"}
);

// API

// App Config
const app = express();

// MiddleWares
app.use(cors({origin: true}));
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
