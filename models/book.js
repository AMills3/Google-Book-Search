// Creating book schema

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bookSchema = new Schema( {
    title: { type: String, required: true },
    authors: { type: [String], required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true }
});

let Book = mongoose.model("Book", bookSchema);

module.exports = Book;