import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from "../../images/formimages/completedbar.svg";
import RecaptchaIcon from '../../images/formimages/recaptcha.png';
import TextField from '@mui/material/TextField';


import SolveX from '../../images/formimages/solvex.png';
import SolveP from '../../images/formimages/solvep.png';
import SolveG from '../../images/formimages/solvet.png';
import Timer from '../../components/Timer';
import { Helmet } from 'react-helmet';

export default function Submit() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);
  const [xAnswer, setXAnswer] = React.useState('');
  const [pAnswer, setPAnswer] = React.useState('');
  const [tAnswer, setTAnswer] = React.useState('');
  const [xAnswerCorrect, setXAnswerCorrect] = React.useState(false);
  const [pAnswerCorrect, setPAnswerCorrect] = React.useState(false);
  const [tAnswerCorrect, setTAnswerCorrect] = React.useState(false);

  const toggleRecaptcha = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleAnswerChange = (event, field) => {
    const answer = event.target.value;
      const correctXAnswers = ['3 or -1', 'x = 3 or x =-1', 'x = -1 or x =-3' ,'-1 or 3'];
    const correctPAnswer = '-1';
    const correctTAnswer = '3';

    let isCorrect = false;

    if (field === 'xAnswer') {
 isCorrect = correctXAnswers.includes(answer);
       setXAnswerCorrect(isCorrect);
    } else if (field === 'pAnswer') {
      isCorrect = answer === correctPAnswer;
      setPAnswerCorrect(isCorrect);
    } else if (field === 'tAnswer') {
      isCorrect = answer === correctTAnswer;
      setTAnswerCorrect(isCorrect);
    }

    if (field === 'xAnswer') {
      setXAnswer(answer);
    } else if (field === 'pAnswer') {
      setPAnswer(answer);
    } else if (field === 'tAnswer') {
      setTAnswer(answer);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (xAnswerCorrect && pAnswerCorrect && tAnswerCorrect) {
      
      navigate('/Submit'); 
    } else {
      
      navigate('/Post'); 
    }
  };

  return (
    <main>
       <Helmet>
  
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
        <title>reCaptcha form</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="name information form "/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Submit  form" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/#/Wireframes"/>
       <meta name="keywords" content="intentionally bad ux, bad ux, parody, twitter meme, ux game, design tips, recaptcha"/>
      </Helmet>
      <img src={ProgressBar} alt="progressbar" className="progressBar" id="#formstart" />
      <form className="formContainer form" onSubmit={handleSubmit}>
        <h1 className="p-name formTitle">Let's talk OUR safety.</h1>
        <section className="recaptchaButton input">
          <input
            type="checkbox"
            name=""
            id=""
            onChange={toggleRecaptcha}
            className="checkmark"
          />
          <p className="recaptchaCopy p-content">I am not a robot</p>
          <img src={RecaptchaIcon} alt="reCAPTCHA icon" className="recaptchaIcon" />
        </section>
        <section className={`recaptchaQuiz ${isOpen ? 'openQuiz' : 'closeQuiz'}`}>
          <h2 className="quizPrompt p-name">Type the answer to the question below</h2>
          <Timer/>
<form className='submitForm'>
          <img src={SolveX} alt="solve for x if x^2 - 4x + 3 =0" className='submitPic u-photo'/>
          <TextField
            className="solvep"
            value={xAnswer}
            placeholder="Solve for X"
            onChange={(event) => handleAnswerChange(event, 'xAnswer')}
            error={xAnswerCorrect}
             fullWidth
             sx={{ color: xAnswerCorrect ? 'error' : 'success' }}
            helperText={xAnswerCorrect ? 'Okay, we get it, you paid attention during maths' : 'That is incorrect! You seem human'}
          />

          <img src={SolveP} alt="solve for p if math stuff" className='submitPic u-photo' />
          <TextField
            className="solveP"
            value={pAnswer}
            placeholder="Solve for P"
            onChange={(event) => handleAnswerChange(event, 'pAnswer')}
            error={pAnswerCorrect}
              sx={{ color: pAnswerCorrect ? 'error' : 'success'  }}
              fullWidth
            helperText={
              pAnswer ? (pAnswerCorrect ? 'How did you do that?' : 'Wrong, but that seems like a human mistake') : null
            }
          />
          
          <img src={SolveG} alt="solve for t if math stuff" className='submitPic u-photo' />
          {/* t= 3 */}
          <TextField
            className="solveT"
            value={tAnswer}
            placeholder="Solve for t"
            onChange={(event) => handleAnswerChange(event, 'tAnswer')}
            error={tAnswerCorrect}
             fullWidth
              sx={{ color: tAnswerCorrect ? 'error' : 'success' }}
          helperText={
              tAnswer ? (tAnswerCorrect ? 'You are a robot!' : 'Yeah, no human could get that right') : null
            }
          />
          </form>
        </section>

        <section className="passwordNav">
          <button type="submit" className='back'>Finish</button>
          <Link to="/Submit" className='passwordSubmit'> do not finish</Link>
        </section>
      </form>
    </main>
  );
}
