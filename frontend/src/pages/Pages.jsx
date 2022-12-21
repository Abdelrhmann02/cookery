import Home from "./home"
import React from 'react'
import Searched from './Searched'
import Menu from './Menu'
import Recipe from "./Recipe"
import {Route, Routes} from 'react-router-dom'

function Pages(){
    return(
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/Menu" element={<Menu />} />
            <Route path ="/searched/:search" element={<Searched />} />
            <Route path ="/recipe/:name" element={<Recipe  />} />
        </Routes>
    )
}

export default Pages;