import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import { Audio, Oval } from 'react-loader-spinner'

const Movies = () => {
    const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=9c3e3681cf1cc02a6205b0db0f1466cd&page=1';
    const [movies, setMovies] = useState([]);
    const getMoviesData = async () => {
        let res = await axios.get(url)
        console.table(res.data.results);
        setMovies(res.data.results)
    }
    useEffect(() => {
        getMoviesData();
    }, [])
    return (
        <div className='mb-8'>
            <div className='mt-8 text-xl md:text-2xl text-bold text-center'>Trending Movies</div>
            {
                movies.length == 0 ?
                    <div className='flex justify-center items-center m-8'>
                        <Oval
                            ariaLabel="loading-indicator"
                            height={100}
                            width={100}
                            strokeWidth={5}
                            strokeWidthSecondary={1}
                            color="blue"
                            secondaryColor="white"
                        />
                    </div>
                    : <div className='flex flex-wrap justify-center'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
            }
        </div>
    )
}

export default Movies
