import React, {  } from 'react'

import "../Styles/Hero.css"

import portfolio from "../Img/portfolio.png"



const Hero = () => {




  return (
    <section   className="hero" id="hero">

        <div className="hero__wrapper">

        <div className="hero__text">
            <h1>Hi, i'm Wisdom, a passionate 
                <span> Frontend Developer.</span>
                </h1>

<p className="pt-4 pb-4">i am also a passionate web developer with a strong desire to learn and resaerch and share knwoledge </p>
     <button  className="hero__btn ">Download Resume</button>
            </div>



            <div className="hero__pics">
                <img src={portfolio} alt="" />
            </div>

          
        </div>

        </section>
  )
}

export default Hero