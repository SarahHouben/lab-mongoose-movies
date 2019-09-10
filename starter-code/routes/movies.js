const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie");

router.get('/movies', (req, res, next) => {
    Movie.find().then(movie => {
        res.render("movies/index", {
            movieList: movie
        })
    }).catch(err => {
        console.log(err);
        next();
    })
});



router.get('/movies/:id/edit', (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id).then(movie => {
        res.render("movies/edit", {
            movie
        })
    }).catch(err => {
        console.log(err);
        next();
    });
});


router.post('/movies/:id/edit', (req, res, next) => {
    const id = req.params.id;

    const {
        title,
        genre,
        plot
    } = req.body;

    Movie.findByIdAndUpdate(id, {
        title,
        genre,
        plot
    }).then(movie => {
        res.redirect('/movies');
    }).catch(err => {
        console.log(err);
        next();
    })
});




router.get('/movies/:movieId', (req, res, next) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId).then(movie => {
        console.log(movie);
        res.render("movies/show", {
            movie
        })
    }).catch(err => {
        console.log(err);
        next();
    })
});



router.get('/movies/new', (req, res, next) => {
    res.render("movies/new")
})


router.post('/movies', (req, res, next) => {

    const {
        title,
        genre,
        plot
    } = req.body;

    Movie.create({
            title,
            genre,
            plot
        })
        .then(celebrity => {
            console.log(`Success! ${title} was added to the database.`);
            res.redirect(`/movies`);
        })
        .catch(err => {
            console.log(err);
            next();
        })
})



router.post('/movies/:id/delete', (req, res, next) => {
    const id = req.params.id;
    Movie.findByIdAndRemove(id).then(() => {
        console.log("Success. Your movie was deleted.");
        res.redirect(`/movies`);
    }).catch(err => {
        console.log(err);
        next();
    })
});



module.exports = router;