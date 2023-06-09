import React, { Component } from 'react'
import {Link} from "react-router-dom";


import EssayBanner from '../../images/designimages/styleguide.JPG';
import icon from '../../images/icon.png';
import '../../styles/blogTemplate.css';
import BackButton from '../../components/EntryBackButton';

import Inspiration from '../../images/designimages/Inspiration.png';
import TwitterInspo from '../../images/designimages/twitterinspo.png';
import Colours from '../../images/designimages/palette.png';
import Typography from '../../images/designimages/fonts.png';
import LogoDesign from '../../images/designimages/logodesign.png';
import Inputs from '../../images/designimages/InputFields.png';

import { Helmet } from 'react-helmet';
export default class StyleGude extends Component {
  render() {
    return (
     <main className='e-content blogEntryMain'>
       
<Helmet>
  
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
        <title> Style Guide</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="The style guide for Scroll Troll"/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Style Guide" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/#/StyleGuide"/>
       <meta name="keywords" content="style guide, graphic design, typography, logo design"/>
      </Helmet>


      <BackButton/>
        <img src={EssayBanner} alt="blah" className='u-photo entryImage' />


        <section className='h-card blogIconandButton'>
        <img src={icon} alt="..sndns" className='blogTempIcon' />

       <button className='nextButton'><Link to={'/'} className='blogNextButton'>Share Post</Link></button> 
        </section>


        <section className='e-content blogTempMain'>

        <h1 className='blogTitle p-name'> Style Guide </h1>
        <h2 className='blogAuthor p-author'>@Ketania</h2>
        <p className='p-summary blogDescription'> Design elements that have formed Scroll Troll </p>
        <p className='dt-published blogTempDate'> 3.33PM.  8 June, 2023</p>
        
        <ul className='tabList navigation'>
          <li className='blogTab tab activeTab'><a href='#blogID' id='blogTab'>Inspiration</a></li>
          <li className='blogRefTab tab'><a href='#colours' id='refTab'>Colours</a></li>
            <li className='blogRefTab tab'><a href='#typography' id='refTab'>Typography</a></li>
            <li className='blogRefTab tab'><a href='#logo' id='refTab'>Logo</a></li>
            <li className='blogRefTab tab'><a href='#inputs' id='refTab'>Inputs</a></li>
            <li className='blogRefTab tab'><a href='#layouts' id='refTab'>Layout</a></li>


        </ul>

        <section className='h-card blogContentContainer' >
        <article className='e-content designActiveContent bfCont' id='blogID'>
     <h3 className='p-name wireframeTitle'>Inspiration </h3>
     <img src={Inspiration} alt="wireframe of the homepage" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  > blah blah blah blah</p>
         <img src={TwitterInspo} alt="wireframe of the homepage" className='u-photo styleImg'/>
    
        </article>
      
      <article id='colours' className='designActiveContent'>
 <h3 className='p-name wireframeTitle'>Inspiration </h3>
<img src={Colours} alt="wireframe of the homepage" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  > blah blah blah blah</p>
      </article>

<article id='typography' className='designActiveContent'>
 <h3 className='p-name wireframeTitle'>Typography </h3>
<img src={Typography} alt="wireframe of the homepage" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  > blah blah blah blah</p>
      </article>

 <article id='logo' className='designActiveContent'>
 <h3 className='p-name wireframeTitle'>Logo</h3>
<img src={LogoDesign} alt="wireframe of the homepage" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  > blah blah blah blah</p>
      </article>
      
      <article id='inputs' className='designActiveContent'>
 <h3 className='p-name wireframeTitle'>Inputs</h3>
<img src={Inputs} alt="wireframe of the homepage" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  > blah blah blah blah</p>
      </article>

        </section>
</section>
     </main>
    )
  }
}

