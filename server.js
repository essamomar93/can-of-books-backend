'use strict';
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());
const MONGO_SERVER = process.env.MONGO_SERVER;
const PORT = process.env.PORT || 8000;


const { booksController, createBook ,deleteBookController
    ,UpdateBookController 
} = require("./controllers/Book.controller")

const {bookModel}  = require("./models/Book.model");

mongoose.connect(`${MONGO_SERVER}/Book`, { useNewUrlParser: true, useUnifiedTopology: true });

const client = jwksClient({
    // this url comes from your app on the auth0 dashboard 
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

const getKey = (header, callback) => {
    client.getSigningKey(header.kid, function (err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}
app.get('/auth', (req, res) => {
    console.log("i was called")
    // getting the JWT from the request headers
    "Bearer ljdlasiudo87waudljaslidu"
    ["Bearer", "ljdlasiudo87waudljaslidu"]
    const token = req.headers.authorization.split(' ')[1];
    // token="ljdlasiudo87waudljaslidu"
    // checking the token if it is valid/verfied
    jwt.verify(token, getKey, {}, (err, user) => {
        if (err) {
            res.send('invalid token');
        }
        res.send("Your are authenticated/Authorized");
    })
});
app.get('/books', booksController)
app.post('/create-book', createBook)

app.delete('/delet-book/:id',deleteBookController)

app.put("/update-book/:id",UpdateBookController);

app.listen(PORT, () =>console.log(`listening on ${PORT}`));
