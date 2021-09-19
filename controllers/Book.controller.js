"use strict";

const{ BookModel}=require('../models/Book.model');

let booksController= (req,res)=>{
    BookModel.find().then(data=>{
        res.json(data);
    })  
}
module.exports={booksController
    }

