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
const updateBookController=async (req,res)=>{
    let bookId=req.params.id;
    let updatedData=req.body;
    bookModel.findOne({_id:bookId}).then(book=>{
        book.title=updatedData.title;
        book.email=updatedData.email;
        book.description=updatedData.description;
        book.status=updatedData.status
        book.save();
    });
    let updatedBooktsList=await bookModel.find({});
    res.status(200).send(updatedBooktsList);
}

module.exports = {
    booksController,
    createBook,
    deleteBookController,
    updateBookController
}