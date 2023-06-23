import React, { Component } from 'react';

import { HashLink } from 'react-router-hash-link';



import '../styles/homeForm.css';
export default class homeForm extends Component {
  render() {
    return (
      <main>
        <form action="" className='homeForm'>
            <h2 className='formH2'>Create an Account</h2>
            <h3 className='formH3'>username</h3>
            <input type="text" className='homeInput' name="username" id='username'/>
             <h3 className='formH3'>email</h3>

             <section className='emailInput'>

             <input type="text" className='homeInput' />
             <select name="host" id="" className='homeInput' >
              <option value="iCloud">icloud</option>
              <option value="HotMain">HotMail</option>
              <option value="gmail">gmail</option>
              <option value="outlook">outlook</option>
            </select>


            <select name="url" id="emailDot" className='homeInput'>
            <option value="com">.com</option>
            <option value="uk">.uk</option>
            <option value="net">.net</option>
            <option value="web">.web</option>
            <option value="za">.za</option>

</select>
             </section>
             <HashLink className='nextA' smooth to="/NameForm#formstart"> NEXT  </HashLink>
             <HashLink to='/Submit'> Submit</HashLink>

        </form>
      </main>
    )
  }
}
