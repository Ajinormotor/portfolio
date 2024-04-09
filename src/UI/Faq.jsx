import React, { useState } from 'react'
import faqdata from '../Data/faqdata'

import "../Styles/Faq.css"

const Faq = () => {


  return (


    <main>
    <div className="faq__heading">
    <h2>Faq</h2>
</div>
    <div>
   {
    faqdata.map(question=>(
  
        <FaqItem  key={question.id}  {...question}  />
   
    ))
   }
   </div> 

   </main>
  )
}


const FaqItem  =({title, infos}) => {
const [showInfo, setShowInfo] =  useState(false);

    return(

    

        <div className="faq__wrapper  flex">
    
<div className="faq__top  flex">
    <h1>{title}</h1>
    <button className="faq__btn" onClick={()=>setShowInfo(!showInfo)}>
        {
            showInfo? <i class="ri-arrow-up-s-fill up"></i>:<i class="ri-arrow-down-s-fill  down"></i>
        }

    </button>

    </div>

    <div className="faq__bottom
     flex">
      
{
    showInfo &&   <p>{infos}   </p>
}

     
    </div>

    </div>

   




    )

} 

export default Faq