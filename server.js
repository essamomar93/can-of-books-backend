'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());
const MONGO_SERVER = process.env.MONGO_SERVER;
const PORT = process.env.PORT || 8000;
const jwt=require('jsonwebtoken');
const jwksClient=require('jwks-rsa');
const { booksController, createBook ,deleteBookController,UpdateBookController } = require("./controllers/Book.controller")
const {bookModel}  = require("./models/Book.model");
mongoose.connect(`${MONGO_SERVER}/Book`, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/books', booksController)
app.post('/create-book', createBook)
app.delete('/delet-book/:id',deleteBookController)
app.put("/update-book/:id",UpdateBookController);

const client = jwksClient({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  });

const getKey=(header, callback)=>{
    client.getSigningKey(header.kid, function(err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      });
}

app.get('/auth',(req,res)=>{
    console.log("i was called")
    "Bearer ljdlasiudo87waudljaslidu"
    ["Bearer","ljdlasiudo87waudljaslidu"]
    const token=req.headers.authorization.split(' ')[1];
   
    jwt.verify(token,getKey,{},(err,user)=>{
        if(err){
            res.send('invalid token');
        }
        res.send("Your are authenticated/Authorized");
    })
});

app.listen(PORT, () =>console.log(`listening on ${PORT}`));
