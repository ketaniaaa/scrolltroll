import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import '../fonts/Scroll_troll-Regular.ttf';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer h-card'>
    
       <h5 className='p-name author' id='footerName'> Ketania Govender  <time className='time' dateTime='2023'>2023</time></h5>
      
       <ul className='footerList footer-contents'></ul>
       <li className='u-url footerLi'> <a href='https://www.figma.com/file/VbdUBOu7GZrY6F6rYrLs30/scroll-troll?type=design&node-id=0%3A1&t=4yA7QzQexZY3JUof-1' target='_blank' className='u-url footerLink' rel="noreferrer">Figma</a></li>
       <li className='u-url footerLi'> <a href='https://github.com/ketaniaaa/scrolltroll' target='_blank' className='footerLink u-url' rel="noreferrer"> Github</a></li>
       <li className='u-url footerLi'> <Link className='footerLink u-url' to='/SiteMap'>Site Map</Link> </li>
      </footer>
    )
  }
}
