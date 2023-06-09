import React, { Component } from 'react'
import '../styles/blog.css';
import {Link} from "react-router-dom";
import {BlogList} from '../helpers/BlogList';
import BlogItem from '../components/BlogItem';

export default class Blog extends Component {
  render() {
    return (
      <main className='blogMain h-feed'>
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
