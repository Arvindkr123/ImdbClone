import React, { useState } from 'react'

const Card = ({ movie }) => {
    const [hover, setHover] = useState('')
    const [fav, setFav] = useState([]);
    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };
    const addToFavourite = (movie) => {
        setFav(prev=>[...prev, movie]);
        console.log(fav)
    }
    return (
        <div className='p-1 hover:scale-110 duration-300 mt-8 relative' onMouseEnter={() => {setHover(movie.id)}} onMouseLeave={()=>setHover('')}>
            <img src={`https:/image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className='bg-cover bg-center rounded-t-lg' />
            {hover === movie.id ? <>
            <div className='absolute top-2 right-2 bg-gray-900 rounded-xl text-2xl cursor-pointer p-2' onClick={()=>addToFavourite(movie)}>🥰</div>
            </>:null}
            <div className='w-full'>
                <div className='text-center bg-gray-900 text-white py-2 text-sm md:text-xl rounded-b-lg '>{truncateString(movie.title, 20)}</div>
            </div>
        </div>
    )
}

export default Card
