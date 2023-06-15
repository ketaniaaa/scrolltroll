import React, { Component } from 'react'
import '../styles/blog.css';

import {BlogList} from '../helpers/BlogList';
import BlogItem from '../components/BlogItem';

import { Helmet } from 'react-helmet';

export default class Blog extends Component {
  render() {
    return (
      <main className='blogMain h-feed'>

<Helmet>
  
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
        <title> Blog</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="Development and Theory Blogs for Scroll Troll"/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Blog" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/#/BlogSelection"/>
       <meta name="keywords" content="Blog, Africa Digital Art, AI Art, Interactive Media, Digital Art Theory"/>
      </Helmet>

        <h1 className='blogTitle blogSelectionTitle p-name'>Blog</h1>


     <section className='blogGrid'>

      {BlogList.map((blogItem, value)=>{
        return(

          <BlogItem name={blogItem.name}
          user={blogItem.user}
          description={blogItem.description}
              icon={blogItem.icon}
          image={blogItem.image}
           date={blogItem.date}
           platform={blogItem.platform}
           alt={blogItem.alt}
           route ={blogItem.route}/>
      

        )
      }
      )}
     </section>
      </main>
    )
  }
}
