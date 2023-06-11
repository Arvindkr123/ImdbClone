import React from 'react'
import Card from './Card'

const Movies = () => {
    return (
        <div className='mb-8'>
            <div className='mt-8 text-2xl text-bold text-center'>Trending Movies</div>
            <div className='flex flex-wrap justify-center'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Movies
