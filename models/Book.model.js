"use strict";
const mongoose=require("mongoose");


const bookSchema=new mongoose.Schema({
    title:String,
    description:String,
    status:String,
    email:String
});

const bookModel=mongoose.model('book',bookSchema);

let seedBook=()=>{
    let newBook=new bookModel({
        title:"The 48 laws pf power",
        description:"a book authered by Rob Greene and it talks about political stuff",
        status:"published at 1998",
        email: "dema.yaser8@gmail.com"

    });
    newBook.save();

    // let SecondBook=new bookModel({
    //     title:"JavaScript: The Good Parts",
    //     description:"author Douglas Crockford focuses on the basics of some of the lesser-known yet desirable aspects of JavaScript",
    //     status:" 1st Edition",
    //     email: "essam.93@hotmail.com"

    // });
    // SecondBook.save();

    // let ThirdBook=new bookModel({
    //     title:". Learn JavaScript VISUALLY",
    //     description:"For newbies wishing to quickly grasp the basics of JavaScript, Learn JavaScript VISUALLY the ideal book to go for. The book makes understanding the basic JS concepts easier by means of a visual approach, hence the name.",
    //     status:"  1st Edition",
    //     email: "essam.93@hotmail.com"

    // });
    // ThirdBook.save();
}

module.exports=seedBook