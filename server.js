require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT
const app = express()
const cors = require('cors')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Welcome to Books API!')
  })

  app.get('/books', (req, res) => {
    res.send('Books Inventory!')
  })

  app.get('/books/seeds', (req, res) => {
    res.send('Book of Seeds!')
  })

/*  const booksController = require('./controllers/books-controller.js')
app.use('/books', booksController)*/


  app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })