//React Imports 

import React, {Component} from "react";
import {NavLink} from "react-router-dom";

//Local Stylesheet and Assests 
import '../fonts/Scroll_troll-Regular.ttf';
import navLogo from '../images/navLogo.png';
import MenuIcon from "../images/menuvector.svg";
import { HashLink } from "react-router-hash-link";
import '../styles/nav.css';
import CloseIcon from '../images/closeWhite.svg';


//External Package Imports 




export default class Navbar extends Component{
     
   constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };


    render(){
         const { isOpen } = this.state;
        return(
         <header className="navigation nav">
            <nav className={`navBar ${isOpen ? 'show' : ''}`}>
                <section className="leftNav">
                <NavLink to='/' className='navLogo u-url u-photo'>
                <img src={navLogo} alt="Logo for Scroll Troll" className="navImage"/>
                </NavLink>

            

                <NavLink className="navTitle u-url" to='/'> sCroLl trOLL</NavLink>

    

            
               {/*  <ul className="mobileNav">
                 <li className="navLi u-url"> <NavLink  className="navLinks u-url" to='/BlogSelection'> bLog</NavLink></li>
                <li className="navLi u-url"> <NavLink  className="navLinks u-url" to='/DesignSelection'> dESIgn</NavLink></li>
                </ul>*/}
                </section>

               <ul className="navUl h-feed">
                <li className="navLi u-url"> <NavLink  className="navLinks blogNavLink u-url" to='/BlogSelection'> bLog</NavLink></li>
                <li className="navLi u-url"> <NavLink  className="navLinks u-url" to='/DesignSelection'> dESIgn</NavLink></li>
               
               
               
               <HashLink className="navSignUp" to ="/#form">Sign Up</HashLink>
               </ul>
              
               
            </nav>


                <nav className="mobileNav" >
                <section className="nav mobileAllVis">
                <NavLink className='mobileLogo u-url' to={'/'}><img src={navLogo} alt="Scroll Troll Logo" className=" mobileLogoImg u-photo"/></NavLink>
                <HashLink className="mobileNavSignUp" to ="/#form">Sign Up</HashLink>
                <button onClick={this.toggleMenu} className="menuButton"><img src={MenuIcon} alt="menu icon" className="mobileMenuButton" /></button>
                </section>

                <ul className={`navMobileList ${isOpen ? 'openList' : 'close'}`}>
                 <li className={`navMobileLi ${isOpen ? 'open' : 'close'}`}> <button onClick={this.toggleMenu} className="closeButton"><img src={CloseIcon} alt="close icon" className="mobileCloseButton"/></button></li>
                 
                 <li className={`navMobileLi ${isOpen ? 'openMobileTitle' : 'close'}`}> <NavLink  className="navMobileLinks mobileTitle u-url" to='/'> <img src={navLogo} alt="Scroll Troll Logo" className="mobileOpenLogo"/> sCroLl trOLL</NavLink></li> 
                <hr className="mobileHr"/>
                 <li className={`navMobileLi ${isOpen ? 'open' : 'close'}`}> <NavLink  className="navMobileLinks u-url" to='/' onClick={this.toggleMenu}> hOmE</NavLink></li>
                 <li className={`navMobileLi ${isOpen ? 'open' : 'close'}`}> <NavLink  className="navMobileLinks u-url" to='/BlogSelection' onClick={this.toggleMenu}> bLog</NavLink></li>
                <li className={`navMobileLi ${isOpen ? 'open' : 'close'}`}> <NavLink  className="navMobileLinks u-url" to='/DesignSelection' onClick={this.toggleMenu}> dESIgn</NavLink></li>
                </ul>
                </nav>

                
         </header>
        )
    }
}