import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner.jsx'
import Movies from './components/Movies'

const App = () => {
    return (
        <div>
            <Navbar />
            <Banner/>
            <Movies/>
        </div>
    )
}

export default App
