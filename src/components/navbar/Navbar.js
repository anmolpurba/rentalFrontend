import React from 'react'
import "./Navbar.css"
import companyLogo from "../images/house.png"
import {Link} from "react-scroll"


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid" >
            <a className="navbar-brand font" href="#">Rent Karo</a>
                <img src={companyLogo} alt="Bootstrap" width="35" height="35" />
            <button className="navbar-toggler" style={{backgroundColor:"beige"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                    <li className="nav-item">
                        <a className="nav-link font" aria-current="page" href="" >Home</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link font" to="footerscroll" smooth={true} duration={0.5} >Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar