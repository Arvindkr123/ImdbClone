import React, { useState } from 'react'

const Pagination = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const gobehind = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }
    return (
        <div className='w-full flex justify-center mb-8'>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl' onClick={gobehind}>Prev</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-100'>
                {pageNumber}
            </button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl' onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
        </div>
    )
}

export default Pagination
