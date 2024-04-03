import React from 'react'

import { Link } from 'react-router-dom'

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

    </div>


    ))
  }
    
    </div>
}

    </section>
  )
}

export default personal