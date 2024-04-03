import React, {  useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import "../Header/Header.css"


const nav__link = [
    {
        path:'/home',
        display: 'Home'
    },

    {
        path:'/about',
        display: 'About'
    },

    {
        path:'/projects',
        display: 'Project'
    },


]

const Header = () => {

const [click, setClick]  = useState(false);

const handleClick =  ()  =>  {

    setClick(!click);

}

const headerRef = useRef(null);



useEffect(()=>{

    const handleEvent = ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop  > 80){
     headerRef.current.classList.add("header__shrink");
   
        } else{
            headerRef.current.classList.remove("header__shrink");
        }
    
    
    };

    window.addEventListener('scroll',  handleEvent);

    return() =>{
        window.removeEventListener('scroll', handleEvent);
    }

},[]);




  return (
<section  ref={headerRef}>


<div className="header__wrapper"   >



    <div className="logo">

 
       <h1>teiteiwisdom@gmail.com</h1> 
    </div>

    <div className="harmburger" onClick={handleClick}>
    {  click?
  (<i class="ri-close-line  icon"></i>) : (<i class="ri-menu-2-line  icon"></i>)
    }
    </div>


    <div   className={ click? "navigation":"navigation__shadow"} >

   

    <ul  className="menu">
        {
            nav__link.map(item=>(
                <li className="navigation__item"><Link  to={item.path}>{item.display}</Link></li>
        ))

        }
        
    </ul>
</div>


</div>

</section>
  )
}

export default Header