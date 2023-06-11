import React from 'react'
import { RiMovie2Line } from 'react-icons/ri'
const Navbar = () => {
    return (
        <div className='flex space-x-8 px-8 border items-center py-4 pl-12'>
            <RiMovie2Line className='text-6xl text-red-500' />
            <div className='text-blue-400 font-bold text-3xl'>Movies</div>
            <div className='text-blue-400 font-bold text-3xl'>Favourites</div>
        </div>
    )
}

export default Navbar
