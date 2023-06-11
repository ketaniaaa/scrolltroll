//React Imports 

import React, {Component} from "react";
import {NavLink, Routes, Route} from "react-router-dom";

//Local Stylesheet and Assests 
import '../fonts/Scroll_troll-Regular.ttf';
import navLogo from '../images/navLogo.png';
import burger from '../images/hamburgericon.png';
import '../styles/nav.css';

//External Package Imports 




export default class Navbar extends Component{
     

    render(){
        return(
         <header className="navigation nav">
            <nav className="navBar navigation">
                <section className="leftNav">
                <NavLink to='/' className='navLogo u-url u-photo'>
                <img src={navLogo} alt="Logo for Scroll Troll" className="navImage"/>
                </NavLink>
                <NavLink className="navTitle u-url" to='/'> sCroLl trOLL</NavLink>
                </section>

               <ul className="navUl h-feed">
                <li className="navLi u-url"> <NavLink activeClassName="activeNav" className="navLinks u-url" to='/BlogSelection'> bLog</NavLink></li>
                <li className="navLi u-url"> <NavLink activeClassName="activeNav" className="navLinks u-url" to='/DesignSelection'> dESIgn</NavLink></li>
              
               </ul>
            </nav>
         </header>
        )
    }
}