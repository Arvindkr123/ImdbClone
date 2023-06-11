import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner.jsx'
import Pagination from './components/Pagination.jsx'
import Movies from './components/Movies'

const App = () => {
    return (
        <div>
            <Navbar />
            <Banner/>
            <Movies />
            <Pagination/>
        </div>
    )
}

export default App
