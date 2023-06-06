import React, { Component } from 'react'
import '../styles/blog.css';
import {Link} from "react-router-dom";
import {DesignList} from '../helpers/DesignList';
import DesignItem from '../components/DesignItem';
export default class Design extends Component {
  render() {
    return (
     <main className='blogMain h-feed'>
        <h1 className='blogTitle p-name'>Design</h1>


     <section className='blogGrid'>

      {DesignList.map((designItem, value)=>{
        return(
          <DesignItem name={designItem.name}
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
