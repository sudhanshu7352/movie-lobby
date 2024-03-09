
const express = require('express');
// const router = express.Router();
const Movie = require('../models/movie-lobby.model');

// GET /movies
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET /search?q={query}
const searchMovies = async (req, res) => {
    const { q } = req.query;
    try {
        const movies = await Movie.find({ $or: [{ title: new RegExp(q, 'i') }, { genre: new RegExp(q, 'i') }] });
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /movies
const createMovies = async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        rating: req.body.rating,
        streamingLink: req.body.streamingLink
    });

    try {
        const newMovie = await movie.save();
        res.status(200).json(newMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// PUT /movies/:id
const updateMovies = async (req, res) => {
    const { id } = req.params;

    try {
        const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json(movie);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// DELETE /movies/:id
const deleteMovies = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findByIdAndDelete(id);
        if (movie) {

            res.status(200).json({ message: 'Movie deleted successfully' });
        } else {
            res.status(200).json({ message: 'Movie not found' });

        }
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

module.exports = { getMovies, createMovies, updateMovies, searchMovies, deleteMovies };
