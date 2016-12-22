/**
 * Created by lt-117 on 14/12/16.
 */
var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title:{
        type: 'String',
        required: true
    },
    genre:{
        type: 'String',
        required: true
    },
    description:{
        type: 'String'
    },
    author:{
        type: 'String',
        required: true
    },
    publisher:{
        type: 'String'
    },
    pages:{
        type: 'String'
    },
    imageurl:{
        type: 'String'
    },
    buyurl: {
        type: 'String'
    },
    create_date: {
        type: Date,
        default: Date.now()
    }
});

//Export the Books
var Books = module.exports = mongoose.model('Books', bookSchema);

//Get the book details
module.exports.getBooks = function (callback, limit) {
    Books.find(callback).limit(limit);
}

//Get the book details by id
module.exports.getBookById = function (book, callback) {
    Books.findById(book, callback);
}

//Add Book
module.exports.addBook = function (book, callback) {
    Books.create(book, callback);
}

//Update Book
module.exports.updateBook = function (id, book, options, callback) {
    var query = {_id:id};
    var updateBook = {
        title : book.title,
        genre : book.genre,
        description : book.description,
        author : book.author,
        publisher : book.publisher,
        pages : book.pages,
        imageurl : book.imageurl,
        buyurl : book.buyurl
    }
    Books.findOneAndUpdate(query, updateBook, options, callback);
}

// Delete book
module.exports.deleteBook = function (id, callback) {
    var query = {_id:id};
    Books.remove(query,     callback);
    
}