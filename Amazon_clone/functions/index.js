

const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51Iw80LHP9lQ4PI8VyONNnKPTBTYCG3PIDpIkfPNe5ANTOgbkqxMawkxuzA4sX4R7smv2t5VtsSx2Ab4Agyu4iEjC00LF0YhBOE'
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

// - Listen command
exports.api = functions.https.onRequest(app);


