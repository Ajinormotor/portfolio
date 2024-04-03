import React from 'react'

import "../Footer/Footer.css"

const Footer = () => {
  return (
  <section  className="footer"  id="footer">


    <div className="footer__wrapper">
    <h1>Contact Me</h1>

    <ul  className="footer__menu">
    <li><i class="ri-facebook-circle-line"></i></li>
    <li><i class="ri-linkedin-fill"></i></li>
    <li><i class="ri-twitter-line"></i></li>
    </ul>
    </div>

    <p>Copyright <i class="ri-copyright-line"></i>2022 ALl rights reserved</p>

  </section>
  )
}

export default Footer