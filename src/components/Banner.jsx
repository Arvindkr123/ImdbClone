import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
    const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=9c3e3681cf1cc02a6205b0db0f1466cd&page=1';
    const [movie, setMovie] = useState({});

    const getMoviesData = async () => {
        try {
            const res = await axios.get(url);
            const moviesData = res.data.results;
            setMovie(moviesData[2]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMoviesData();
    }, []);

    return (
        <>
            {movie.backdrop_path && (
                <div>
                    <img className='w-full h-[70vh] bg-center bg-cover'
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <div className="text-xl md:text-3xl text-white p-4 bg-gray-900 w-full flex justify-center bg-opacity-50">
                        {movie.title}
                    </div>
                </div>
            )}
        </>
    );
};

export default Banner;
