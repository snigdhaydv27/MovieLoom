const {fetchFromTMDB} = require('../services/tmdb.service');

async function getTrendingMovie(req,res) {
    try {
        const data =await fetchFromTMDB('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

        res.json({success: true, content: randomMovie});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

async function getMovieTrailers(req,res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
        res.json({success: true, trailers: data.results});
    } catch (error) {
        if (error.response.status === 404) {
            res.status(404).json({success: false, message: "No trailers found for this movie"});
        } else {
            res.status(500).json({success: false, message: error.message});
        }
    }
};

async function getMovieDetails(req,res) {  
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
        res.status(200).json({success: true, content: data});
    } catch (error) {
        if (error.response.status === 404) {
            res.status(404).json({success: false, message: "No details found for this movie"});
        } else {
            res.status(500).json({success: false, message: error.message});
        }
    }
};

async function getSimilarMovies(req,res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
        res.json({success: true, similar: data.results});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

async function getMovieByCategory(req,res) {
    const {category} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
        res.json({success: true, content: data.results});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

module.exports = {
    getTrendingMovie,
    getMovieTrailers,
    getMovieDetails,
    getSimilarMovies,
    getMovieByCategory
}