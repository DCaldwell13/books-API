const mongoose = require('mongoose')
const { Schema } = mongoose 

const booksSchema = new Schema({
    "id": 1,
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imageURL: { type: String, required: true }
})

const books = mongoose.model('books', booksSchema)
module.exports = books

