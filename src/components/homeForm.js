import React, { Component } from 'react';


import {Link} from "react-router-dom";


import '../styles/homeForm.css';
export default class homeForm extends Component {
  render() {
    return (
      <main>
        <form action="" className='homeForm'>
            <h2 className='formH2'>Create an Account</h2>
            <h3 className='formH3'>username</h3>
            <input type="text" className='homeInput'/>
             <h3 className='formH3'>email</h3>
             <input type="text" className='homeInput' />
             <Link className='nextA'> NEXT  </Link>

        </form>
      </main>
    )
  }
}
