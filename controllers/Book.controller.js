"use strict";

const bookModel = require('../models/Book.model');

let booksController = (req, res) => {
    bookModel.find({}).then(data => {
        res.json(data);
    })
}

let createBook = async (req, res) => {
    let title = req.body;
    let description = req.body;
    let email = req.body;
    let status = req.body;
    let newBook = new bookModel({
        title:title,
        description:description,
        email:email,
        status:status
    })
    newBook.save();
    let bookList = await bookModel.find({});
    res.status(201).json(bookList);
}
module.exports = {
    booksController,
    createBook
}