import React from 'react'
import './intro.css'
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";

export default function Intro() {
  return (
    <div className='intro'>
        <h1 className='sentence'>
            <span className='span0'>
                Discover New Meal and <br />
            </span>
            <span className='span1'>
                How to Prepare them the <br />
            </span>
            <span className='span0'>
                Proper Way.
            </span>
        </h1>
        <Image src='images/intro2.jpg' roundedCircle width="30%"/>
    </div>
  )
}
