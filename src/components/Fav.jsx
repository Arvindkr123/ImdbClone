import React from 'react'

const Fav = () => {
    return (
        <>
            <div className='flex justify-center space-x-2 mt-4 px-2 flex-wrap'>
                <button className='text-lg m-2 p-1 px-2 font-bold bg-blue-400 text-white rounded-xl'>All Genres</button>
                <button className='text-lg m-2 hover:bg-gray-400 duration-300  p-1 px-2 font-bold bg-blue-400 text-white rounded-xl'>All Genres</button>
                <button className='text-lg m-2 hover:bg-gray-400 duration-300  p-1 px-2 font-bold bg-blue-400 text-white rounded-xl'>All Genres</button>
            </div>
            <div>Input Container</div>
            <div>Table Container</div>
            <div>Pagination</div>
        </>
    )
}

export default Fav
