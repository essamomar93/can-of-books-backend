"use strict";

const { bookModel } = require('../models/Book.model');

let booksController = (req, res) => {
    bookModel.find().then(data => {
        res.status(200).json(data)
    })
}

let createBook = (req, res) => {
    let bookData = req.body;
    let newBook = new bookModel(bookData)
    newBook.save();
    res.status(200).json(newBook);
}
const deleteBookController = (req, res) => {
    let bookId = req.params.id;
    bookModel.findByIdAndDelete(bookId).then(() => {
        bookModel.find().then(data => res.json(data));
    })
}

module.exports = {
    booksController,
    createBook,
    deleteBookController,
    
}