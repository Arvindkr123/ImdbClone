import React from 'react'

const Card = ({ movie }) => {
    return (
        <div className='p-1 hover:scale-110 duration-300 mt-8'>
            <img src={`https:/image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className='bg-cover bg-center rounded-t-lg' />
            <div className='w-full bg-gray-900 text-white py-2 text-center text-sm md:text-xl rounded-b-lg'>{movie.title}</div>
        </div>
    )
}

export default Card
