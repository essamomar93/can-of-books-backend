"use strict";

const bookModel=require('../models/Book.model');

let booksController= (req,res)=>{
    bookModel.find().then(data=>{
        res.json(data);
    })  
}
module.exports= booksController
    

