import Breakfast from "../components/Breakfast"
import React from 'react'
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddtoMenu from "../components/AddtoMenu";

function Home(){
    return(
        <>
            <Intro />
            <NavLink  to={'/Menu'}>
                <Button variant="warning">Show Menu</Button>
            </NavLink>
            <AddtoMenu/>
            <Footer/>
        </>
    )
}

export default Home;