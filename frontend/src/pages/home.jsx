import React from 'react'
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import AddtoMenu from "../components/AddtoMenu";

function Home(){
    return(
        <>
            <Intro />
                <AddtoMenu/>
            <Footer/>
        </>
    )
}

export default Home;