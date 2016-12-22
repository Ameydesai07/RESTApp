/**
 * Created by lt-117 on 14/12/16.
 */
var mongoose = require('mongoose');

// Genre Scheme - for database
var genreSchema = mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    create_date: {
        type: Date,
        Default: Date.now()
    }
});

// Export the genre through the genre object
var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGenres = function (callback, limit) {
    Genre.find(callback).limit(limit);
}

//Add Genre
module.exports.addGenres = function (genre, callback) {
    Genre.create(genre, callback);
}

//Update Genres
module.exports.updateGenre = function (id, genre, options, callback) {
    var query = {_id:id};
    var update = {
        name: genre.name
    };
    Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete Genre
module.exports.deleteGenre = function (id, callback) {
    var query = {_id: id};
    Genre.remove(query, callback);
}