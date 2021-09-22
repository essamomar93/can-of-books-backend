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

const { booksController, createBook ,deleteBookController
    ,UpdateBookController 
} = require("./controllers/Book.controller")

const {bookModel}  = require("./models/Book.model");
mongoose.connect(`${MONGO_SERVER}/Book`, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/books', booksController)
app.post('/create-book', createBook)
app.delete('/delet-book/:id',deleteBookController)

app.put("/update-book/:id",UpdateBookController);

app.listen(PORT, () =>console.log(`listening on ${PORT}`));

