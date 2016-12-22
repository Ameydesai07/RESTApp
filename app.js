/**
 * Created by lt-117 on 14/12/16.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// Required models
var Genres = require('./models/genre');
var Books = require('./models/books');

// Connection to database
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

// Routes
//1. Homepage
app.get('/', function (req, res) {
   res.send("hello");
});

// Genre Routes
//1. Get genre details
app.get('/bookstore/genres', function (req, res) {
    Genres.getGenres(function (err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    });
});

//2. Add genre
app.post('/bookstore/genres', function (req, res) {
    var genre = req.body;
   Genres.addGenres(genre, function (err, genre) {
       if(err) {
           throw err;
       }
       res.json(genre);
   })
});

//3. Update genre
app.put('/bookstore/genres/:_id', function (req, res) {
    var genre = req.body;
    Genres.updateGenre(req.params._id, genre,{}, function (err, genre) {
        if(err) {
            throw err;
        }
        res.json(genre);
    })
});

//4. Delete genre
app.delete('/bookstore/genres/:_id', function (req, res) {
    Genres.deleteGenre(req.params._id, function (err, genre) {
        if(err)
        {
            throw err;
        }
        res.json(genre)
    })
});

// Book Routes
//1. Get book details
app.get('/bookstore/books', function (req, res) {
   Books.getBooks(function (err, books) {
     if (err) {
         throw  err;
     }
     res.json(books);
   });
});

//2. Get book by Id
app.get('/bookstore/books/:_id', function (req, res) {
    Books.getBookById(req.params._id, function(err, book) {
        if (err) {
            throw  err;
        }
        res.json(book);
    })
});

//Add book
app.post('/bookstore/books', function (req, res) {
    var book = req.body;
    Books.addBook(book, function (err, book) {
        if(err) {
            throw err;
        }
        res.json(book);
    })
});

//Update Genre
app.put('/bookstore/books/:_id', function(req, res){
    var book = req.body;
    Books.updateBook(req.params._id, book, {}, function (err, book) {
        if(err) {
            throw err;
        }
        res.json(book);
    })
});

//Delete Book
app.delete('/bookstore/books/:_id', function (req, res) {
    Books.deleteBook(req.params._id, function (err, book) {
       if(err) {
           throw  err;
       }
        res.json(book);
    });
})

// Port assignment
app.listen(3000);
console.log('running on port 3000');