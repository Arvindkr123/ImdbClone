import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner.jsx'
import Pagination from './components/Pagination.jsx'
import Fav from './components/Fav.jsx'
import Movies from './components/Movies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<>
                    <Banner />
                    <Movies />
                </>}></Route>
                <Route path='/fav' element={<Fav />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
