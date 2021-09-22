"use strict";

const { bookModel } = require('../models/Book.model');

let booksController = (req, res) => {
    bookModel.find().then(data => {
        res.status(200).json(data)
    })
}


let createBook =  (req, res) => {
    let bookData = req.body;
    let newBook = new bookModel(bookData)
    newBook.save();
    res.status(200).json(newBook);
}
const deleteBookController =  (req, res) => {
    let idBook = req.params.id;
    bookModel.findByIdAndDelete(idBook).then(() => {
        bookModel.find().then(data => res.json(data));
    })
}
let UpdateBookController = async (req,res)=>{
    let id = req.params.id;
    let {title,description,email,status} = req.body;

    bookModel.findOne({_id:id}).then((book)=>{
        book.title = title
        book.description =description
        book.status = status
        book.email = email
        book.save()
    })
    let UpdateBooks = await bookModel.find({})
    res.status(200).json(UpdateBooks)
    
}

module.exports = {
    booksController,
    createBook,
    deleteBookController,
    UpdateBookController
}
