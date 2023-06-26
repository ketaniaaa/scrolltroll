import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link';

import EssayBanner from '../../images/blogimages/reflection3.png';
import icon from '../../images/icon.png';


import '../../styles/blogTemplate.css';
import BackButton from '../../components/EntryBackButton';
import ShareButton from '../../components/ShareButton';
import SubscribeButton from '../../components/SubscribeButton';
import TopButton from '../../components/BlogToTop';

import { Helmet } from 'react-helmet';

export default class ExamRationale extends Component {
 
      constructor(props) {
    super(props);
    this.state = {
    activeTab: 0,
    };
  }

  handleTabClick = (index) => {
  this.setState({ activeTab: index });
  };
  render() {
     const { activeTab } = this.state;
    return (
     <main className='e-content blogEntryMain' id='#top'>
       
<Helmet>
  
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
        <title> Final UX and UI Reflection</title>
        <meta name='author' content='Ketania Govender'/>
        <meta name="description" content="A final critical analysis of the user experience of Scroll Troll"/>
        <meta property="og:site_name" content="Scroll Troll" />
        <meta property="og:title" content="Final UX and UI Reflectio" />
        <meta property="og:type" content="website" />
        <meta property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
        <meta property="og:image:alt" content="Scroll Troll Logo" />
        <meta property="og:url" content="https://ketaniaaa.github.io/scrolltroll/#/EssayBlog"/>
        <meta name="keywords" content="development, web dev, dev struggles, relfection Internet Art, AI art, african art, digital art, ethnocomputing, forms, bad ux , bad ui, parody, developer humor, design humor, user experience, user interface design, racial bias in technology, algoritmic bias, african development, tech in africa"/>
        </Helmet>


       {/* Entry Header that includes back button, essay banner, Title, description, Publishing date and sharing options */}
         <BackButton/>
         <img src={EssayBanner} alt="A mirror with a reflection" className='u-photo entryImage' />
         <section className='h-card blogIconandButton'>
         <img src={icon} alt="..sndns" className='blogTempIcon' /> 
         <ShareButton/>
         </section>

        <section className='e-content blogTempMain'>
        <h1 className='blogTitle p-name'>Final UX and UI Reflection</h1>
        <h2 className='blogAuthor p-author'>@Ketania</h2>
        <p className='p-summary blogDescription'> A final critical analysis of the user experience and interaction design of Scroll Troll</p>
        <p className='dt-published blogTempDate'> 11.41PM. 25 June, 2023</p>
         <ul className="tabList navigation">
                <li ><button onClick={() => this.handleTabClick(0)} className={`tabButton ${activeTab === 0 ? 'activeTab' : 'inactive'}`}> Blog</button></li>
                <li ><button onClick={() => this.handleTabClick(1)} className={`tabButton ${activeTab === 1 ? 'activeTab' : 'inactive'}`}> References</button></li>
         </ul>


        {/* Blog Content with references */}
        <section className='h-card blogContentContainer' id='blogID'>
        <article className={`e-content blogActiveContent bfCont ${activeTab === 0 ? 'activeSection' : 'inactiveSection'}`}>
      
      <p>The forms for my internet artwork have been harder to develop than I initially expected. I don&rsquo;t think my React skills are of a high enough standard for me to write code confidently. In vanilla Javascript, I think I have created a stable enough foundation to demonstrate my style of code and a flow that feels intuitive. In React, I have found myself second-guessing most things that are more complicated than a simple state change for toggling between two pieces of information. I underestimated the amount of skill required for my react site. There were aspects of creating the forms that I have had ease with regarding sliders, modals and other pre-made components which I mostly found on MUI.&nbsp;</p>
<p>The issues started presenting themselves when I decided to add more complex inputs that required a higher level of logic. I initially wanted to create a pong game for the user&apos;s age input but I quickly abandoned this idea, replacing it with a snake instead. I did assume that I could apply a similar strategy to developing in JSX as I do in C# using Unity but due to my utter inexperience, this was not the case. I wanted to make pong in React as I have never made a game in any language other than C# and believed that this was an achievable feature. The physics of pong however gave me a plethora of issues - React unfortunately doesn&rsquo;t have handy built-in box colliders like Unity. I was not getting this pong right as I could not seem to get it to stay within the bounds of the box while resetting the bounce velocity so I changed tactics. While I wanted to make the form annoying, I did not want to give the user a very complicated game to play to reach their age so I looked at other retro games which can easily be played on the browser while not requiring too many assets or experience developing games in JSX. I concluded that I could either implement Tetris or Snake as an alternative though the procedural generation of different pieces for Tetris blocks made this too big or a feat considering the time limit. The snake was chosen as the snake uses the same shape for everything and there is no complicated physics. The game can also be scaled down to a small size to fit onto the form and still be playable. I found an article by Umangshrestha (2021) that provided an easy-to-understand tutorial on how to create a simple snake game which I modified so that the user was updated on age instead of a game score.</p>
<p>The second issue I ran into was the creation of a sketching canvas. I must admit that I was quite naive when approaching this topic. I thought that creating a place to make pixel art would be quick and simple but I quickly realized that I was in over my head. I instead opted to use a premade sketch box package as I felt that demonstrating my ability to make a drawing application was unnecessary and the message of the sketch box was of higher importance.&nbsp;</p>
<p>The last issue that I struggled with was a lot less complicated than the other components but I think highlights a grey area in my fundamental knowledge. This was the styling of input areas, specifically on errors. This was faced when I tried to make an error message for the name input. I wanted the text to appear red though understanding different event triggers was ultimately what prevented the successful styling of this aspect. I do, however, believe that the labels provide enough information.&nbsp;</p>
<p>Despite the issues that I have faced, I did enjoy developing something using React. I found the packages quite exciting and I am looking forward to using them again for future personal projects I hope to make a bigger internet artwork after this course since I have realized that I do like developing for the web but I haven&apos;t been paying much attention to net art before this course. I think this is one area in which I require more practice within my own time since one academic block is not enough for me to call myself proficient in React. My next approach is to solidify the fundamentals because I can make something useable but I often don&rsquo;t understand the mistakes I am making as console errors go over my head and my attitude has been &lsquo;if it works then the errors don&apos;t matter&rsquo;. I hope that I can improve my skills but this internet artwork has pushed my development skills in the sense that I had to abstract tutorials and react snippets to create a creative piece that goes against internet norms.</p>
        </article>



          {/* Reference Section*/}
        <ol className={`h-card blogReferenceSection ${activeTab === 1 ? 'activeSection' : 'inactiveSection'}`}>
        <h3 className='p-name referenceList' id='refList'>References</h3>
        <li className='author'>
            Ansari, S. (2022) <em>Best practices for form design</em>, <em>Medium</em>. Available at: <a href="https://uxdesign.cc/best-practices-for-form-design-ff5de6ca8e5f" className="u-url refA">https://uxdesign.cc/best-practices-for-form-design-ff5de6ca8e5f</a> (Accessed: 11 June 2023).
        </li>
      <li className='author'><em>Form Design Principles: 13 Empirically Backed Best Practices | CXL</em> (no date). Available at: <a href="https://cxl.com/blog/form-design-best-practices/" className="u-url refA">https://cxl.com/blog/form-design-best-practices/</a> (Accessed: 11 June 2023).<em>How to Build a Quiz With React Hooks - Beginner React Project</em> (2021). Available at: <a href="https://www.youtube.com/watch?v=lI_ReTTUFU0">https://www.youtube.com/watch?v=lI_ReTTUFU0</a> (Accessed: 23 June 2023).</li>
      <li className='author'>Nitin (no date) <em>A Complete Guide to Form Validations in React</em>, <em>Locofy Blogs</em>. Available at: <a href="https://www.locofy.ai/blog/react-form-validation" className="u-url refA">https://www.locofy.ai/blog/react-form-validation</a> (Accessed: 22 June 2023).</li>
      <li className='author'>Umangshrestha (2021) <em>Create a Snake Game in React</em>, <em>Medium</em>. Available at: <a href="https://javascript.plainenglish.io/create-snake-game-in-react-10d7ddbff52f" className="u-url refA">https://javascript.plainenglish.io/create-snake-game-in-react-10d7ddbff52f</a> (Accessed: 18 June 2023).</li>
    
      
        </ol>
       </section>
      
        {/* Related Articles for easy navigation*/}
        <section className='p-related relatedContent'>
        <h4 className='relatedTitle'>Related Articles</h4>
        <section className='relatedSpan h-card'>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'>Exam Rationale </h5>
        <p className='relatedSummary p-summary'> The run down on what my internet artwork is about and why I have chosen it!</p>
        <HashLink to='/ExamRationale#top' className='readMoreLink u-url'> Read More</HashLink>
        </article>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'>African Digital Art and Ethnocomputing </h5>
        <p className='relatedSummary p-summary'> This week I discuss the readings regarding African digital art and the idea of ethnocomputing for empowerment of the African identity.</p>
        <HashLink to='/AfricanArt#top' className='readMoreLink u-url'> Read More</HashLink>
        </article>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'>Preparatory Work  </h5>
        <p className='relatedSummary p-summary'> This blog post explores the development and design for my internet artwork.</p>
        <HashLink to='/PrepBlog#top' className='readMoreLink u-url'> Read More</HashLink>
        </article>
        </section>

        <section className='emailSubscribe'>
        <input type="email" name="email" id="subEmail" placeholder='email@example.com' />
        <SubscribeButton/>
        <TopButton/>
        </section>
        </section>  {/* End Related Section */}

</section>

     </main>
    )
  }
}