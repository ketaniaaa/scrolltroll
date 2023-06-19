import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../styles/siteMap.css";
export default class SiteMap extends Component {
  render() {
    return (
      <>
      <h1 className='smTitle'>Site Map</h1>

      <main className='smMain'>
     
      <ul className='smUL'>
         <Link className='smMP'>Home</Link>
        <li><HashLink to="/#form" className='smMinor'>Internet Artwork</HashLink></li>
        
      </ul>

     
      <ul className='smUL'>
         <Link to="BlogSelection" className='smMP'>Blog</Link>
       <li><Link to="" className='smMinor'>Reflection: Exam</Link></li>
       <li><Link to="/PrepBlog" className='smMinor'>Prepatory Work and Rationale</Link></li>
       <li><Link to="/Reflection2" className='smMinor'>Reflection: Assignment 3</Link></li>
       <li><Link to="/AfricanArt" className='smMinor'>African Art and Ethnocomputing</Link></li>
       <li><Link to="/AutocorrectBias" className='smMinor'>Autocorrection Bias</Link></li>
         <li><Link to="/AiArt" className='smMinor'>AI and Internet Artwork</Link></li>
          <li><Link to="/EssayBlog" className='smMinor'>Critical Analysis Essay</Link></li>

      </ul>


      <ul className='smUL'>
          <Link to="DesignSelection" className='smMP'>Design</Link>
        <li><Link to="/StyleGuide" className='smMinor'>Style Guide</Link></li>
        <li><Link to="/Wireframes" className='smMinor'>Wireframes</Link></li>
        <li><Link to="/IXD" className='smMinor'>IXD Process</Link></li>
        <li><Link to="/UXReflection2" className='smMinor'>UX/UI Reflection</Link></li>

      </ul>
      </main>
      </>
    )
  }
}
