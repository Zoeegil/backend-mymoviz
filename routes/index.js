var express = require('express');
var router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/movies', (req, res) => {
    fetch(`https://www.themoviedb.orghttps://api.themoviedb.org/3/movie/550?api_key=5fee7b9a04beb411bd2801790fd6e26e`)
    .then(response => response.json())
    .then(data => {
            res.json({ movies : data});
    });
});

module.exports = router;
