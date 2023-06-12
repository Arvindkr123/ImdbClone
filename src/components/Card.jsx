import React from 'react'

const Card = ({ movie }) => {
    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };
    return (
        <div className='p-1 hover:scale-110 duration-300 mt-8'>
            <img src={`https:/image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className='bg-cover bg-center rounded-t-lg' />
            <div className='w-full'>
                <div className='text-center bg-gray-900 text-white py-2 text-sm md:text-xl rounded-b-lg '>{truncateString(movie.title, 20)}</div>
            </div>
        </div>
    )
}

export default Card
