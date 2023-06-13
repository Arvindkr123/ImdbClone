import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Audio, Oval } from 'react-loader-spinner'
import Pagination from './Pagination';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [hover, setHover] = useState('')
    const [fav, setFav] = useState([]);
    const goahead = () => {
        setPageNumber(pageNumber + 1)
    }
    const gobehind = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }

    useEffect(() => {
        getMoviesData();
    }, [pageNumber])


    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=9c3e3681cf1cc02a6205b0db0f1466cd&page=${pageNumber}`;
    const getMoviesData = async () => {
        let res = await axios.get(url)
        console.log(res.data.results);
        setMovies(res.data.results)
        let oldFav = localStorage.getItem('imdb');
        if (oldFav) {
            oldFav = JSON.parse(oldFav);
        }
        console.log('old fav ', oldFav)
        setFav([...oldFav]);
    }

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };
    const addToFavourite = (movie) => {
        let newArray = [...fav, movie]
        setFav([...newArray]);
        localStorage.setItem('imdb', JSON.stringify(newArray));
        console.log(newArray)
    }

    const delfavMovie = (movie) => {
        let newArray = fav.filter((m) => m.id !== movie.id);
        setFav([...newArray])
        localStorage.setItem('imdb', JSON.stringify(newArray));
    }
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
                                    return <div key={movie.id} className='p-1 hover:scale-110 duration-300 mt-8 relative' onMouseEnter={() => { setHover(movie.id) }} onMouseLeave={() => setHover('')}>
                                        <img src={`https:/image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className='bg-cover bg-center rounded-t-lg' />
                                        {
                                            hover === movie.id &&
                                            <>
                                                {
                                                    !fav.find((m) => m.id === movie.id) ? <>
                                                        <div className='absolute top-2 right-2 bg-gray-900 rounded-xl text-2xl cursor-pointer p-2' onClick={() => addToFavourite(movie)}>🥰</div>
                                                    </> : <>
                                                        <div className='absolute top-2 right-2 bg-gray-900 rounded-xl text-2xl cursor-pointer p-2' onClick={() => delfavMovie(movie)}>❌</div>
                                                    </>
                                                }
                                            </>
                                        }
                                        <div className='w-full'>
                                            <div className='text-center bg-gray-900 text-white py-2 text-sm md:text-xl rounded-b-lg '>{truncateString(movie.title, 20)}</div>
                                        </div>
                                    </div>
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
