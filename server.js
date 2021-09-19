'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const mongoose=require("mongoose");
const MONGO_SERVER=process.env.MONGO_SERVER;

const PORT = process.env.PORT || 8000;
// const seedBook=require("./models/Book.model");
const{ booksController}=require("./controllers/Book.controller")

app.get('/books', (req, res) => {
  // seedBook();
  booksController();
  // res.json({'message':'test request received'})

})
// app.get('/books',booksController);
app.listen(PORT, () => console.log(`listening on ${PORT}`));



mongoose.connect(`${MONGO_SERVER}/Book`,{useNewUrlParser: true, useUnifiedTopology: true});
