import React, { useState } from 'react';
import { Avatar, Modal,  Fade } from '@mui/material';
import SocialNav from '../../components/SocialNav';
import gd from '../../images/formimages/gdimp.png';
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import Helmet from 'react-helmet';

export default function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
    // Handle other input change logic here
  };

  return (
    <main>
       <Helmet>
  
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
        <title> Make a Post!</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="post on scroll troll! start chatting "/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Make a post!" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/"/>
       <meta name="keywords" content="intentionally bad ux, bad ux, parody, twitter meme, ux game, design tips"/>
      </Helmet>
      <section className="postContainer h-entry">
        <SocialNav />
        <article className='userPosting'>

          <section className='header postHeader'>
            <Avatar sx={{ width: 64, height: 64 }}>JD</Avatar>
            <p className='socialP'>Your Name <br />
              <em className='usernameSocial'>@username</em>
            </p>
            <div className='fab'>
              <Fab variant="extended" className='fab'>
                <SendIcon fontSize='large' sx={{ mr: 1 }} />
                Post
              </Fab>
            </div>

          </section>
            <section className='mobileNotice'>
 <h1 className='p-name pmmTitle'>Sorry!!</h1>
                
                <p className='e-content ppmp'>Due to budget cuts and a lawsuit from Elon Musky for copying T**ter, our only developer has quit and we can’t actually sign up users. </p>
                <p className='e-content ppmp'>We are however, hiring for junior positions</p>
                <ul className='list mobDevList'>
                  <h2 className='mobmodalH2 p-name'>Graduate Developer: &lt;em className=&rsquo;hire&rsquo; annual salary of ZAR 120 (market average).</h2>
                  
                  <li className='e-content ppmp'>must be proficient in: C#, Delphy, Cobalt, Ruby, Python, PYTorch, React, Redux, Vue, Svelta, Unreal Engine, C++, R, JavaScript, MatLab</li>
                  <li className='e-content ppmp'>must have a minimum of 15 years experience.</li>
               <h2 className='mobmodalH2 p-name'>Graphic Designer</h2>
                  <img src={gd} alt="troll clip art on a rainbow gradient background" className='mgdPassion'/>
                  <li className='e-content ppmp'>OUR UX/UI TEAM IS FULL AND FUNCTIONING WELL SO NO UI/UX IMPROVEMENTS NEEDED</li>
                </ul>
          </section>
          <section className='p-content TextArea'>
            <textarea
              name=""
              id=""
              cols="30"
              rows="30"
              className='textAc'
              placeholder='make your first post!'
              onChange={handleInputChange}
            ></textarea>
          </section>
          <Modal
          className='postModal'
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            closeAfterTransition
           
          >
            <Fade in={isModalOpen}>
              <article className="modalContent postModalCont h-card">
                <h1 className='p-name postModalTitle'>Sorry!!</h1>
                
                <p className='e-content postModalP'>Due to budget cuts and a lawsuit from Elon Musky for copying T**ter, our only developer has quit and we can’t actually sign up users. </p>
                <p className='e-content postModalP'>We are however, hiring for junior positions</p>
                <ul className='list devList'>
                  <h2 className='modalH2 p-name'>Graduate Developer: &lt;em className=&rsquo;hire&rsquo; annual salary of ZAR 120 (market average).</h2>
                  
                  <li className='e-content postModalP'>must be proficient in: C#, Delphy, Cobalt, Ruby, Python, PYTorch, React, Redux, Vue, Svelta, Unreal Engine, C++, R, JavaScript, MatLab</li>
                  <li className='e-content postModalP'>must have a minimum of 15 years experience.</li>
               <h2 className='modalH2 p-name'>Graphic Designer</h2>
                  <img src={gd} alt="troll clip art on a rainbow gradient background" className='gdPassion'/>
                  <li className='e-content postModalP'>OUR UX/UI TEAM IS FULL AND FUNCTIONING WELL SO NO UI/UX IMPROVEMENTS NEEDED</li>
                </ul>
              
              </article>
            </Fade>
          </Modal>
        </article>
      </section>

    </main>
  );
}

