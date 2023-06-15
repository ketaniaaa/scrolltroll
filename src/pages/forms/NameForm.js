import React from 'react';
import {Link} from "react-router-dom";

export default function NameForm() {
  return (
    <main>
        <h1>Name Form</h1>
       <form action="">
        <p>name</p>
        <input type="text" />
        <p>date of birth</p>
        <input type="text" />
       </form>
       <Link to='/Country'> continue</Link>
       
    </main>
  )
}
