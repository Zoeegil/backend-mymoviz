
var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=${TMDB_API_KEY}`)
 .then(response => response.json())
 .then(data => {
    console.log(data)
   res.json({ movies: data.results });
 });
});
