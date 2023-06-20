import React from 'react';
import {Link} from "react-router-dom";
import Snake from '../../components/Snake';

export default function NameForm() {

  const [
    state,
    setState,
  ] = React.useState(false);

  const inputError = () => {
    setState(true);
  };

  return (
    <main>
        <h1>Name Form</h1>
       <form action="">
        <p>name</p>
        <input type="text" onBlur={inputError}/>

        { !!state &&

          <p>Error</p>

        }

        <p>date of birth</p>
        <input type="text" />
       </form>
<Snake/>
       <Link to='/Country'> continue</Link>
       
    </main>
  )
}
