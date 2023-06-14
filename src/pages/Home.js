import React, { Component } from 'react'


import banner from '../images/heroimage.png';
import '../styles/home.css';
import '../fonts/Scroll_troll-Regular.ttf';
import { HashLink } from 'react-router-hash-link';

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

       <article className='h-card heroHome'>
        <section className='p-summary'>
      <h1 className='p-title'>The World's Worst Social Media Website</h1>
      <p className='e-content heroSummary'> An all new space to share your shitposts and connect with other like-minded trolls. Troll those that matter most and we troll you!</p>
            <HashLink className='signupLink u-url' smooth to ="#form">sign up today! </HashLink> 

      </section>
            <img src={banner} alt="Three troll characters talking about their posts on scroll troll" className='homeBanner u-photo' />

      </article>
      {/* Maybe make the button a pop-up instead of redirecting to the form?? */}

      <article  id="form">
      <Form/>
      </article>
    </main>
    )
  }
}
