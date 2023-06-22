import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from "../../images/formimages/progressbar3.svg";
export default function Password() {

  const navigate = useNavigate();

 const goBack = () => {
   navigate(-1);
 };
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
      errorMessage =
        "* password must include the assassination date of Archduke Franz Ferdinand hint: ddmmyy";
    }

    if (!state.password.includes('yourname')) {
      valid = false;
      errorMessage = `${errorMessage}\n* password must include 'yourname'`;
    }

    if (!/[0-9]{13,}/.test(state.password)) {
      valid = false;
      errorMessage = `${errorMessage}\n * password must include 13 numbers`;
    }
   
     if (
       !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{27,}/.test(
         state.password
       )
     ) {
       valid = false;
       errorMessage = `${errorMessage}\n*  password must be a minimum of 27 character and have at least 1 uppercase letter, and 1 special character`;
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
      <img
        src={ProgressBar}
        alt="progressbar"
        className="progressBar"
        id="#formstart"
      />
      <form className="formContainer form">
        <h1 className="p-name formTitle">Let's talk safety.</h1>
        <label className="inputTitles">Create a password *</label>
        <input
          className={` ${
            state.errorMessage.length > 0 ? "passwordInputError" : "inputsFull"
          }`}
          type="password"
          onInput={(e) =>
            setState((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        ></input>

        {state.errorMessage.length > 0 && (
          <p className="passwordError">{state.errorMessage}</p>
        )}
        <label className="inputTitles">confirm password *</label>
        <select
          name="passwordvalid"
          id="passwordvalid"
          className="inputsFull"
          placeholder="..."
        >
          <option value="na">-</option>
          <option value="yes">Yes, that's my password</option>
          <option value="no">No, that's not my password</option>
        </select>
        <h2 className="securityTitle">
          {" "}
          Security Questions in case you forget your password
        </h2>
        <label className="inputTitles">
          What is the exact date and time that you were concieved? *
        </label>
        <input
          type="text"
          name="birthing"
          id="birthing"
          className="inputsFull"
        />
        <label className="inputTitles">
          What is your favourite shade of red? *
        </label>
        <input
          type="text"
          name="redshare"
          id="redshade"
          className="inputsFull"
        />
        <label className="inputTitles">
          What score would you give me for this exam? ***
        </label>
        <select name="score" id="score" className="inputsFull">
          <option value="as" disabled>
            -
          </option>
          <option value="A+">A+</option>
          <option value="A+">100%</option>
          <option value="A+">90%...I'll settle</option>
        </select>
        <label className="inputTitles">
          For security purposes, please enter your SA Id number or American
          Social Security Number
        </label>
        <p className="psa">
          *if you forget your password and these answers, we can streamline the
          recovery process by getting into all of your accounts{" "}
        </p>
        <section className="idSelection">
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
          <input
            type="number"
            name="idsel"
            id="idsel"
            min="0"
            max="9"
            className="inputsE"
          />
        </section>

        <nav className="passwordNav">
          <button onClick={goBack} className="back">
            Back
          </button>
          <button onClick={validatePassword} className="passwordSubmit">
            Submit
          </button>
        </nav>
      </form>
    </main>
  );
}
