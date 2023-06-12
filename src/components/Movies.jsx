import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import { Audio, Oval } from 'react-loader-spinner'
import Pagination from './Pagination';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const goahead = () => {
        setPageNumber(pageNumber + 1)
    }
    const gobehind = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=9c3e3681cf1cc02a6205b0db0f1466cd&page=${pageNumber}`;
    const getMoviesData = async () => {
        let res = await axios.get(url)
        console.log(res.data.results);
        setMovies(res.data.results)
    }
    useEffect(() => {
        getMoviesData();
    }, [pageNumber])
    return (
        <>
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
                        : <div className='flex flex-wrap justify-center gap-10'>
                            {
                                movies?.map((movie) => {
                                    return <Card movie={movie} key={movie.id} />
                                })
                            }
                        </div>
                }
            </div>
            <Pagination goahead={goahead} gobehind={gobehind} pageNumber={pageNumber} />
        </>
    )
}

export default Movies
