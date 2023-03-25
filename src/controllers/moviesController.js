import Movie from "../models/movies"
import axios from 'axios';

export const createMovie = async (req,res,next)=>{
    const newMovie = new Movie({
        original_title: req.body.original_title,
        backdrop_path: req.body.backdrop_path,
    })

    try {

        const movieSaved = await newMovie.save();
        res.status(201).json(movieSaved);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const getMovies = async (req,res,next)=>{
    try {
        const movies = await Movie.find({});
        const moviesDB = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20`
        );
        
        const finalMovies=movies.concat(moviesDB.data.results)
        res.json(finalMovies);
    } catch (error) {
        console.log(error);
        next();
    }
}

export const getMovieById = async (req,res,next)=>{
    const movie = await Movie.findById(req.params.movieId);

    if(!movie) {
        res.json({mensaje : 'Esa pelicula no existe'});
        return next();
    }
    res.json(movie);
}



export const updateMovieById = async(req,res,next)=>{
    try {
        let movie = await Movie.findOneAndUpdate({_id : req.params.movieId}, req.body, {
            new: true
        } )
        res.json({movie:movie});
    } catch (error) {
        console.log(error);
        next();
    }
}

export const deleteMovieById = async(req,res,next)=>{

    try {
        const movie_Id = req.params.movieId;
        const foundMovie = await Movie.findById(movie_Id);
        if (!foundMovie) {
            const err = new Error(
                'pelicula no encontrada.',
        );
            err.statusCode = 404;
            throw err;
        }
        await Movie.findByIdAndRemove(movie_Id);
        res.status(200).json({ message: 'pelicula eliminada'});
    } catch (error) {
        console.log(error);
        next();
    }
    
}