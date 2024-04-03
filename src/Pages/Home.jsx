import React from 'react'
import Hero from '../UI/Hero'
import Skills from '../UI/Skills'
import Project from '../UI/Project'
import About from '../UI/About'

const Home = () => {
  return (
<section   className="home" id="home">


    <Hero />
    <About  />
    <Skills />
    <Project />

</section>
  )
}

export default Home