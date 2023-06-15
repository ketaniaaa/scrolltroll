import React, { Component } from 'react'
import '../styles/blog.css';

import {DesignList} from '../helpers/DesignList';
import DesignItem from '../components/DesignItem';

import { Helmet } from 'react-helmet';
export default class Design extends Component {
  render() {
    return (
     <main className='blogMain h-feed'>
      <Helmet>
  
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}

        <title> Design</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="The design process of Scroll Troll"/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Design" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/#/DesignSelection"/>
       <meta name="keywords" content="style guide, wireframes, lowfidelity wireframes, user flows, ixd"/>
      </Helmet>

      
        <h1 className='blogTitle blogSelectionTitle p-name'>Design</h1>


     <section className='blogGrid'>

      {DesignList.map((designItem, value)=>{
        return(
          <DesignItem className='entryItem'
          name={designItem.name}
          user={designItem.user}
          description={designItem.description}
              icon={designItem.icon}
          image={designItem.image}
           date={designItem.date}
           platform={designItem.platform}
           alt={designItem.alt}
           route ={designItem.route}/>
      

        )
      }
      )}
     </section>
      </main>
    )
  }
}
