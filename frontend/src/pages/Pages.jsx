import Home from "./home"
import React from 'react'
import Searched from './Searched'
import Menu from './Menu'
import {Route, Routes} from 'react-router-dom'
import FetchData from '../components/FetchData'

function Pages(){
    return(
        <Routes>
            <Route exact path ="/" element={<Home />} />
            <Route path ="/Menu" element={<Menu />} />
            <Route path ="/searched/:search" element={<Searched />} />
            <Route path ="/recipe/:name" element={<FetchData  />} />
        </Routes>
    )
}

export default Pages;