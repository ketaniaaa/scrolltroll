import React, { Component } from 'react'


import banner from '../images/homebanner.png';
import '../styles/home.css';
import '../fonts/Scroll_troll-Regular.ttf';
import {Link, NavLink} from "react-router-dom";

import Form from '../components/homeForm';


export default class Home extends Component {
  render() {
    return (
    <main className= 'homeMain h-feed'>
      <h1 className='p-title'>WeLcoMe to ScroLl trOLL</h1>
      <button className='signupLink u-url'> <a className='u-url aIdRedirect' href={Form}></a>start trolling </button> 
      {/* Maybe make the button a pop-up instead of redirecting to the form?? */}
      <img src={banner} alt="Three troll characters talking about their posts on scroll troll" className='homeBanner u-photo' />
      <Form/>
    </main>
    )
  }
}
