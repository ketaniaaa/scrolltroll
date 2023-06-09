import React, { Component } from 'react'


import banner from '../images/homebanner.png';
import '../styles/home.css';
import '../fonts/Scroll_troll-Regular.ttf';
import {Link, NavLink} from "react-router-dom";

import Form from '../components/homeForm';

import HelmetExport, { Helmet } from 'react-helmet';

export default class Home extends Component {
  render() {
    return (
     
    <main className= 'homeMain h-feed'>
      
      <Helmet>
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content=" Scroll Troll is the newest website to troll you friends, and more importantly, to troll UX designers"/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Scroll Troll" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/"/>
       <meta name="keywords" content="UX Design, intentionally-bad-design, ux, ui , pardoy, social media"/>
      </Helmet>


      <h1 className='p-title'>WeLcoMe to ScroLl trOLL</h1>
      <button className='signupLink u-url'> <a className='u-url aIdRedirect' href={Form}></a>start trolling </button> 
      {/* Maybe make the button a pop-up instead of redirecting to the form?? */}
      <img src={banner} alt="Three troll characters talking about their posts on scroll troll" className='homeBanner u-photo' />
      <Form/>
    </main>
    )
  }
}
