import React from 'react'
import { Link } from 'react-router-dom'

import "../Footer/Footer.css"

const Footer = () => {
  return (
  <section  className="footer"  id="footer">


    <div className="footer__wrapper">
    <h1>Contact Me</h1>

    <ul  className="footer__menu">
    <li><Link to="https://www.facebook.com/profile.php?id=100087303851294"><i class="ri-facebook-circle-line"></i></Link></li>
    <li><Link to="https://www.linkedin.com/in/teitei-wisdom-1a6965208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i class="ri-linkedin-fill"></i></Link></li>
    <li><Link to="https://x.com/MachalaFx12?t=njgRcguITkfxU1BxZraayw&s=09"><i class="ri-twitter-line"></i></Link></li>
    <li><Link to="https://github.com/Ajinormotor"><i class="ri-github-fill"></i></Link></li>
    </ul>
    </div>

    <p>Copyright <i class="ri-copyright-line"></i>2022 ALl rights reserved</p>

  </section>
  )
}

export default Footer