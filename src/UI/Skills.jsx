import React from 'react'

import "../Styles/Skills.css"

import Slider from "react-slick";

const Skills = () => {

  const settings = {
    dots: false,
    loop: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    swipeToSlide:true,
  };


  return (
<section className="skills" id="skills">


<div  className="heading__skills">
<h1>Skiills </h1>
</div>

   <div  className="skills__wrapper"  >

<Slider {...settings}>

<div  className="skills__box">
<i class="ri-html5-fill"></i>
    <h1>HTML5</h1>
  <p>Basic knowledge & Understanding  in HTML, such as container tags</p>
   </div>

   <div  className="skills__box">
   <i class="ri-css3-fill"></i>
    <h1>CSS</h1>
    <p>Basic knowledge & Understanding  in CSS, such as Flexbox,Background image,Animation etc</p>
   </div>

   <div  className="skills__box">
   <i class="ri-tailwind-css-fill"></i>
   <h1>TAILWINDCSS</h1>
   <p>Basic knowledge & Understanding  in TAILWINDCSS, such as Installation, Application and most importantly achieve responsiveness</p>
   </div>

   <div  className="skills__box">
   <i class="ri-javascript-fill"></i>
    <h1>JAVASCRIPT</h1>
   </div>


   <div  className="skills__box">
   <i class="ri-reactjs-fill"></i>
   <h1>REACT</h1>
   <p>Basic knowledge & Understanding  in REACT, such as React-routerdom,Basic React Hooks  e.t.c</p>
   </div>

   
   <div  className="skills__box">
   <i class="ri-nextjs-fill"></i>
   <h1>NEXT.JS</h1>
   <p>Basic knowledge & Understanding  in NEXT.JS, such as routing and basic hooks</p>
   </div>


   <div  className="skills__box">
   <i class="ri-nodejs-fill"></i>
   <h1>NODE.JS</h1>
   </div>

  

</Slider>


   

   </div>
</section>
  )
}

export default Skills