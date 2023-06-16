import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Password() {

  const navigate = useNavigate();

  const [
    state,
    setState,
  ] = React.useState({
    errorMessage: '',
    password: '',
  });

  const validatePassword = () => {

    let valid = true;
    let errorMessage = '';

    if (!state.password.includes('28061914')) {
      valid = false;
      errorMessage = 'Needs to include WW1 date';
    }

    if (!state.password.includes('hello')) {
      valid = false;
      errorMessage = `${errorMessage}\n Needs to include hello date`;
    }

    if (!/[^a-zA-Z0-9\s]{3,}/.test(state.password)) {
      valid = false;
      errorMessage = `${errorMessage}\n Needs to special chars`;
    }

    if (valid) {
      navigate('/Submit');
    } else {
      setState((prevState => ({
        ...prevState,
        errorMessage,
      })));
    }

  };

  return (
    <main>
      <h1>Password</h1>
          {/* <Link to='/Submit'> continue</Link> */}
          <button onClick={validatePassword}>Submit</button>


      <input 
        className={`passwordInput ${state.errorMessage.length > 0
          ? 'passwordError'
          : ''}`}
        type='password' onInput={(e) => setState((prevState => ({
          ...prevState,
          password: e.target.value,
          })))}></input>


        { state.errorMessage.length > 0 &&

          <p className='passwordError' style={{'white-space': 'pre-line'}}>{state.errorMessage}</p>

        }

    </main>
  )
}
