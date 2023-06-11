import React from 'react'
import { RiMovie2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex space-x-8 px-8 border items-center py-4 pl-12'>
            <Link to='/'><RiMovie2Line className='text-3xl md:text-6xl text-red-500' /></Link>
            <Link to='/' className='text-blue-400 font-bold text-xl md:text-3xl'>Movies</Link>
            <Link to='/fav' className='text-blue-400 font-bold text-xl md:text-3xl'>Favourites</Link>
        </div>
    )
}

export default Navbar
