'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const mongoose=require("mongoose");
const MONGO_SERVER=process.env.MONGO_SERVER;

const PORT = process.env.PORT ;
// || 8000;
const booksController=require("./controllers/Book.controller")
const {
   bookModel}=require("./models/Book.model");

// app.get('/books', (req, res) => {
//   // seedBook();
//   // res.json({'message':'test request received'})

// })
app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.get('/books',booksController)


// app.get('/books',(req,res)=>{
//   bookModel.find().then(data=>{
//       res.json(data);
// })})
mongoose.connect(`${MONGO_SERVER}/Book`,{useNewUrlParser: true, useUnifiedTopology: true});
