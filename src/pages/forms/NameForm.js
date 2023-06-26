import React from 'react';
import {Link} from "react-router-dom";
import Snake from '../../components/Snake';
import ProgressBar from '../../images/formimages/progresssvg.svg';
import '../../styles/forms.css';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Helmet } from 'react-helmet';
//I have used functions instead of Class components for the forms because I felt that the use of state and vanilla JS was easier for me to grasp in this format as opposed to using constructors.

export default function NameForm() {

  //Most common surnames in the UK and US for the MUI autocomplete feature.
const surnames = [
  { title: "Smith" },
  { title: "Johnson" },
  { title: "Williams" },
  { title: "Brown" },
  { title: "Jones" },
  { title: "Miller" },
  { title: "Davis" },
  { title: "Wilson" },

  { title: "Anderson" },
  { title: "Taylor" },
  { title: "Martin" },

  { title: "Thomas" },
  { title: "Lee" },
  { title: "White" },
  { title: "Clark" },
  { title: "Harris" },
  { title: "Lewis" },
  { title: "Allen" },
  { title: "Young" },
  { title: "Ernst" },
  { title: "King" },
  { title: "Walker" },
  { title: "Wright" },
  { title: "Hill" },
  { title: "Adams" },
  { title: "Nelson" },
  { title: "Hall" },
  { title: "Edwards" },
  { title: "Wood" },
  { title: "Cooper" },
  { title: "Day" },
  { title: "Hopkins" },
  { title: "Yates" },
  { title: "Ford" },
  { title: "Watkins" },
  { title: "Harper" },
  { title: "Ross" },
  { title: "Gibson" },
  { title: "O'Brien" },
  { title: "Grant" },
  { title: "Wallace" },
  { title: "George" },
  { title: "O'Neill" },
  { title: "Byrne" },
  { title: "Slater" },
  { title: "Oliver" },
  { title: "Yeats" },
  { title: "Matthews" },
 
];

  

  

  
  



  const [
    state,
    setState,
  ] = React.useState(false);

  const inputError = () => {
    setState(true);
  };
const[
  inputState, 
  setInputState
] = React.useState(true);
const inputBox =() => setInputState(false);
  return (
    <main>
        <Helmet>
  
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
        <title> Name</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="name information form "/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Name form" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/"/>
       <meta name="keywords" content="intentionally bad ux, bad ux, parody, twitter meme, ux game, design tips"/>
      </Helmet>

      <img
        src={ProgressBar}
        alt="progressbar"
        className="progressBar u-photo"
        id="#formstart"
      />
      {/* <Steps/> */}
      <form className="formContainer form h-card">
        <h1 className="p-label formTitle">Tell us a bit about yourself</h1>

        <form action="" className="nameSection">
          <section className="input nameSe">
            <p className="inputTitles p-label">first name *</p>
            <input
              type="text"
              onInputCapture={inputError}
              id="fname"
              name="fname"

              className={`inputsA p-given-name${inputBox ? "errorInput" : ""}`}
            />
            {/* An error message will be rendered when the user types. I have used state to check if the input has changed via the inputError function */}
            {!!state && (
              <p className="errorMessage">ERROR: choose a more normal name</p>
            )}
          </section>

          <section className="input nameSe">
            <p className="inputTitles p-label">last name *</p>
            <Autocomplete
            className='p-family-name'
              id="surnameComplete"
              options={surnames.map((option) => option.title)}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
          </section>
        </form>

        <form action="" className="nameSection">
          <section className="input nameSe">
            <p className="inputTitles">Birthday *</p>
            <form action="">
              <select name="month" id="months" className="inputsB">
                <option value="January">November</option>
                <option value="August">August</option>
                <option value="Februaryy">February</option>
                <option value="May">May</option>
                <option value="September">September</option>
                <option value="January">January</option>
                <option value="June">June</option>
                <option value="December">December</option>
                <option value="April">April</option>
                <option value="October">October</option>
                <option value="July">July</option>
                <option value="March">March</option>
              </select>
              <input type="number" placeholder="day" className="inputsC" />
            </form>
          </section>

          <section className="input nameSe">
            <p className="inputTitles">Zodiac Sign *</p>
            <select name="zodiac" id="zodiac" className="inputsA">
              <option value="Aries">Aries</option>
              <option value="Taurus">Taurus</option>
              <option value="Gemini">Gemini</option>
              <option value="Cancer">Cancer</option>
              <option value="Leo">Leo</option>
              <option value="Virgo">Virgo</option>
              <option value="Libra">Libra</option>
              <option value="Scorpio">Scorpio</option>
              <option value="Sagittarius">Sagittarius</option>
              <option value="Capricorn">Capricorn</option>
              <option value="Aquarius">Aquarius</option>
              <option value="Pisces">Pisces</option>
            </select>
            <p className='psa'>*better for suggested posts </p>
          </section>
        </form>
       
        <Snake />
        <Link to="/Country" className="nameNext">
          {" "}
          Do Not Quit <br />
          <em className="nameSubButton">proceed</em>
        </Link>
      </form>
    </main>
  );
}
