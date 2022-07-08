import React from 'react'
import logo from './image/logo.svg'



function Navigation () {
  return (

    <div className="navigation container-fluid">
        <div className="container d-flex justify-content-between align-items-center">
            <div className="logo"><img src={logo} alt="Belton" /></div>
            <nav>
                <ul className="nav-list d-flex justify-content-end align-items-center">
                    <li><a href="http://www.google.lt" >HOME</a></li>
                    <li><a href="http://www.google.lt">ABOUT</a></li>
                    <li><a href="http://www.google.lt">SERVICES</a></li>
                    <li><a href="http://www.google.lt">CONTACT</a></li>
                    <li><a href="http://www.google.lt">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navigation;