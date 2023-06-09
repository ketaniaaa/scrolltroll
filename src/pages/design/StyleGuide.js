import React, { Component } from 'react'
import {Link} from "react-router-dom";


import EssayBanner from '../../images/designimages/styleguide.JPG';
import icon from '../../images/icon.png';
import '../../styles/blogTemplate.css';

import WireframeHome from '../../images/designimages/lowfidelity-home-desktop.png';
import WireframeSelection from '../../images/designimages/lowfidelity-blog-design-desktop.png';
import WireframeEntry from '../../images/designimages/lowfidelity-blog-template-desktop.png';

export default class StyleGude extends Component {
  render() {
    return (
     <main className='e-content blogEntryMain'>
       
        <Link to={'/DesignSelection'}>back</Link>
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

        <section className='h-card blogContentContainer' id='blogID'>
        <article className='e-content designActiveContent bfCont'>
     <h3 className='p-name wireframeTitle'>Inspiration </h3>
     <img src={WireframeHome} alt="wireframe of the homepage" className='u-photo designImg'/>
    
        </article>



 
      
      
        </section>
</section>
     </main>
    )
  }
}

