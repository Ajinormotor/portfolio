import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import "../../Data/portfoliodata/personaldata.js"
import personaldata from '../../Data/portfoliodata/personaldata.js'

const personal = () => {
  return (
    <section className="personal">



{ <div  className="project__subwrapper">
  {
    personaldata.map(item=>(
      <div  className="project__card">
        <img src={item.img}  alt=''  />
        <h1>{item.title}</h1>

<p>{item.description}</p>

<Link to='#'>View More</Link>

<p  className="stack">{item.stack}</p>


      
      <button className="personal__btn"><NavLink to="https://ajinormotor.github.io/workaholic/">Demo</NavLink></button>
      

    </div>


    ))
  }
    
    </div>
}

    </section>
  )
}

export default personal