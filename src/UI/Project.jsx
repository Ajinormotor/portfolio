import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import "../Styles/Project.css"
import  Personal from "../UI/portfolios/personal"

import Api from './portfolios/api'

import "../Data/portfoliodata/uidata.js"
import uidata from '../Data/portfoliodata/uidata.js'


const Project = () => {

const [projectFilter, setProjectFilter]  = useState('PROJECT');



  return (
<section  className="project" id="project">

<div className="project__heading">
<h1>Project</h1>
</div>

<div className="project__wrapper">

<div className="project__top">
    <button className="project__btn"  onClick={()=>setProjectFilter('PROJECT')}>UI/UX Project</button>
    <button className="project__btn"     onClick={()=>setProjectFilter('PERSONAL')}>Personal Project</button>
    <button className="project__btn"     onClick={()=>setProjectFilter('API')}>API Project</button>
</div>


{
    projectFilter==='PROJECT' && <div  className="project__subwrapper">
  {
    uidata.map(item=>(
      <div  className="project__card">
        <img src={item.img}  alt=''  />

        <h1>{item.title}</h1>

        <p>{item.description}</p>

 

        <p  className="stack">{item.stack}</p>

        <div className="the__links">
      
      <button><NavLink to={item.path}>Demo</NavLink></button>
      <button>Design</button>

        </div>

    </div>


    ))
  }
    
    </div>
}


 {  projectFilter==='PERSONAL'  && <Personal  />

},

{
  projectFilter==='API'  && <Api  />

}

</div>

</section>
  )
}

export default Project