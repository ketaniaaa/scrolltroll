//React Imports 

import React, {Component} from "react";
import {NavLink} from "react-router-dom";

//Local Stylesheet and Assests 
import '../fonts/Scroll_troll-Regular.ttf';
import navLogo from '../images/navLogo.png';
import MenuIcon from "../images/menuvector.svg";
import { HashLink } from "react-router-hash-link";
import '../styles/nav.css';


//External Package Imports 




export default class Navbar extends Component{
     
    constructor(props){
        super(props);
        this.state ={
            openMenu : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState(prevState => ({
            openMenu: !prevState.openMenu
        }));
    }


    render(){
        return(
         <header className="navigation nav">
            <nav className="navBar navigation">
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
               
               
                <ul className="mobileNav" id={this.state.openMenu ? "open" : "close"}>
                 <li className="navMobileLi u-url"> <NavLink  className="navMobileLinks u-url" to='/BlogSelection'> bLog</NavLink></li>
                <li className="navMobileLi u-url"> <NavLink  className="navMobileLinks u-url" to='/DesignSelection'> dESIgn</NavLink></li>
                </ul>
               <HashLink className="navSignUp" to ="/#form">Sign Up</HashLink>
               <button onClick={this.toggleNav} className="menuButton"><img src={MenuIcon} alt="menu icon" className="mobileMenuButton" /></button>
               </ul>
            </nav>
         </header>
        )
    }
}