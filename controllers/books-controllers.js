const express = require('express')
const books = express.Router()
const books = require('../models/books.js')

//module.exports=books

books.get('/books',(req, res) => {
    books.find().then(foundBooks => {
        res.json(foundBooks)
    })
})

books.get('/books/:id', (req, res) => {
    books.findById(req.params.id).then(foundBook => {
        res.json(foundBook)
    })
})

books.post('/books', (req, res) => {
    books.insertOne(req.body).then(insertedBook => {
        res.json(insertedBook)
    })
})

books.put('/books/:id', (req, res) => {
    books.findByIdAndUpdate(req.params.id, req.body).then(updatedBook => {
        res.json(updatedBook)
    })
})

books.delete('/books/:id', (req, res) => {
    books.findByIdAndRemove(req.params.id).then(deletedBook => {
        res.json(deletedBook)
    })
})

books.get('/books', (req, res) => {
    books.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


module.exports=books;