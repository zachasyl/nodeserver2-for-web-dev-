const model = require('./model');

const findMovieById = (id) =>
    model.findById(id);

const findAllMovies = () => model.find();

const createMovie = (movie) =>
    model.create(movie);


const updateMovie = (id, movie) =>
    model.updateOne({_id: id},
        {$set: movie});


const deleteMovie = (id) =>
    model.deleteOne({_id: id});

module.exports = {
    findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie
};


