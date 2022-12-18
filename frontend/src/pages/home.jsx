import Breakfast from "../components/Breakfast"
import Intro from "../components/Intro";
import Dinner from "../components/Dinner"
import React from 'react'
import Footer from "../components/Footer";

function Home(){
    return(
        <>
            <Intro />
            <Breakfast/>
            <Dinner/>
            <Footer/>
        </>
    )
}

export default Home;