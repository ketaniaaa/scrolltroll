import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link';

import EssayBanner from '../../images/blogimages/reflection3.png';
import icon from '../../images/kicon.png';
import OldHero from '../../images/designimages/oldhero.png';
import Sign from '../../images/blogimages/navbar.png';
import Related from '../../images/blogimages/related.png';

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
        
    <p>The integration of good UX and UI has been difficult for this project because of the nature of my internet artwork. Upon the start of this project, I identified two distinct experiences that I wanted to emulate because of the nature of the website. This, therefore, meant that I identified two goals. I wanted to create an experience that was negative for the user via the internet artwork though I wanted to create a positive experience when interacting with the rest of the site for marking purposes. This was the first step towards the development of the site.&nbsp;</p>
    <p>The experience that I wanted to prioritize was the internet artwork and I therefore wanted to direct the user towards signing up. In the last assignment, there were two main issues in fulfilling the goal of directing the user towards the sign-up link. This was the weak hero used on the home page and the lack of implementation of the Von Restorff Effect (Goldberg, 2020). The Von Restorff Effect refers to the fact that users are likely to pay more attention to components that are visually different from other elements. In my previous submission, I styled the signup links just as I styled the other buttons. Therefore this important link that I had intended to emphasise in order to fulfil my goal alignment, had been visually minimised. For the exam, I created a custom button purely for sign-up with a different background colour and a larger font to visually separate this button and ultimately emphasize it. I also maintained Fitt&rsquo;s Law with the new position of the sign-up button on the navigation bar and additional links on the home page and entry pages. This is because Fitt&rsquo;s Law refers to the relationship between the time it takes a pointer to reach an object and the intended interaction (Budiu, 2022). I have ensured that the sign-up button is bigger than other links, therefore, making the hitbox easier to reach. I have also added sign-up links on each entry page and the home page to ensure the user can easily click on the link and be navigated to the intended page in a short amount of time. The position of the button is always on the menu that is on the top of the page. This is helpful because according to Serial Position Effect, the user is more likely to remember something at the start and end of a page (Goldberg, 2020). This, therefore, demonstrates the manner in which I have better achieved my intended goal by prioritising visibility on the signup links and buttons.</p>
      <figure className="u-photo blogFigure">
                  <img src={Sign} alt="sign up button" className="blogFigure u-photo" />
                </figure>
    <p>The other aspect that I mentioned regarding the alignment of my goals and direction of user flows that was weak in the last assignment was my hero. In the last assignment, I used a hero image that was incredibly vague. This image can be seen below and simply hits at these troll characters chatting with each other. The previous copy also stated a simple &lsquo;Welcome to Troll Scroll&rsquo; which didn&apos;t give the user much information regarding the use of the website. This negatively impacted my goal of getting users to sign up because users are less likely to interact with a page if they are not motivated to sign up. I believe that the new hero and copy is a lot stronger as the call-to-action outlines the similarities to traditional social media but the copy also identifies the manner in which Scroll Troll is unique. The unique selling point of the call-to-action has a higher chance of persuading a user to sign up. I have also conveniently placed a sign-up link on the hero in order to allow the user to rapidly navigate to the sign-up. I have also given the user further information regarding the capabilities of the website by adding a video of fake usability. This makes the website seem more legitimate and therefore has better influence over a user.&nbsp;</p>
      <figure className="u-photo blogFigure">
                  <img src={OldHero} alt="old hero" className="blogFigure u-photo" />
                </figure>
              
    <p>In regard to the pages that I wanted to create a positive UX, I believe I have made much-needed changes in order to achieve this. The initial change that was mentioned in my last reflection, was the lack of change between desktop and mobile navigation. I initially thought that keeping the navigation the same between mobile and desktop would be okay as I only had two links and the homepage link via the logo and website title. This navigation bar scaled very well for mobile but the links were harder to click because the hitbox was quite small. This became a bigger issue when I decided to add the sign-up button to the navigation bar. I, therefore, decided that a different collapsable menu was vital for mobile because I wanted to maintain the sign-up button on mobile. I created a simple hamburger menu button that shows a full-screen overlay menu. I do question my positioning of the menu button. There is debate regarding the optimal position of the menu and Microsoft (2023), in Fluent Design, tends to position buttons on the left for English reading users as these users naturally look from left to right and will thus see the button first. Apple (2023), however, says the opposite in their Human Interface Guidelines (HGI) and positions primary buttons on the right because this emulates the positioning of enter buttons on a keyboard. I ultimately decided to follow the HGI for design decisions on the site. The new mobile menu allows for links to be easily pressed and does not strain the user&rsquo;s vision due to text that is too small, fundamentally improving the experience on mobile. A potential change that could have made the mobile menu even more useable was the use of the word &lsquo;menu&rsquo; on the button instead of a hamburger icon. According to Dalvi (2020), the use of icons can make the site less accessible even with alt tags as there can be users who are not familiar with the convention of icons. This means that spelling out the word menu could be more useful. I ultimately decided against this design decision. This is because I assumed that my users are likely to be fellow designers and developers who are supposed to be familiar with iconography as this internet artwork aims to demonstrate bad design methods.&nbsp;</p>
    <p>I have also added a related content section in the entry posts. This allows the user to quickly access related content when they reach the end of a post so that they do not have to go back to the selection and sift through content that they perceive as related. This lessens the cognitive load and reinforces the 3-click rule because a user can access a new blog in even fewer steps. Another new addition is the inclusion of a scroll-to-top button that smooths to the top of a page when the user reaches the end of the page. This allows the user to reduce their movement on the page and therefore I have created an easier experience. With long content, it is likely that the user would want to revisit something at the top or use the back button for navigation, this scroll-to-top button is therefore helpful. This button also makes the use of tabs on entry posts a lot more useful.&nbsp;</p>
      <figure className="u-photo blogFigure">
                  <img src={Related} alt="related section" className="blogFigure u-photo" />
                </figure>
    <p>This feature was definitely a non-conventional choice and started off as purely aesthetic as the tabs mimic the tweets and like tabs on Twitter profiles. This I do believe is functional because I find that this approach can reduce cognitive overload. This is because the user can see information in chunks and therefore is not presented with super long articles. The user is also given convenient static navigation tools that allow the user to easily choose what piece of information in an entry, they want to read. This is especially helpful on wireframe and design pages where posts can be very long due to images. The segmentation of information is also useful because the user is shown that information in different tabs is of different subject matter. I am not sure if this will be successful because this does break convention and the user might feel like they are used to seeing the references below an article. In the previous assignment, these tabs were simply HashLinks to different IDs on the document and did not actually work like tabs. I believed that the lack of a true tab function broke users&apos; expectations of how a group of tabs should behave. I have used conditional rendering that only adds a tab section to the DOM tree when said tab has been selected. If this was a commercial product, I think this is a feature that I would like to do AB testing on to see if this break of blog convention is successful and actually does prevent overload instead of confusing users.&nbsp;</p>
    <p>The next change that I made was changing the use of the share button. The share button now results in a modal telling the user that they must create an account in order to share the post. This ultimately reinforces my goal of directing the user towards signing up. The design of this modal can be quite annoying but this aspect is intentionally bad due to the link to my internet artwork.&nbsp;</p>
    <p>A change that I mentioned in my previous reflection was reducing the size of entry images. I do believe that these images should actually be changed because the title of the entry should be visible on the initial loading of the page as this can confuse the user regarding the position on the website. Unfortunately, I did not prioritize this change for the exam as it meant I would need to redraw or edit every entry image and I felt that I did not have the time for this because of my work on my internet artwork. This is an aspect that I think reduces my UX on entry pages where I wanted to curate a positive experience.A further issue that I have noticed is the amount of cards displayed on the selection pages. It would have been better to add a 'show more' button and limit the amount of cards shown. This is because the extensive grid can be overwhelming and hard to users to sort through the most recent cards. This is a feature I would have implemented given more time.&nbsp;</p>
    <p>The final change that I implemented on the entry and selection pages was the change of icons for cards. In the last reflection, I mentioned that the use of the same image for the author icon can seem boring and make the site seem less believable as all of these posts are written by one person. It seemed counter-intuitive to create fake profile pictures when the author stays the same. Instead, I created an icon that represents me as a troll. This also clearly shows that the picture is of the author rather than a random icon because I am no longer using the Troll Scroll logo.&nbsp;</p>
    <p>In regards to the sections of the website that are intended to be a positive UX, I believe I have achieved this for the most part. This is demonstrated by the responsive design which caters for 3 distinct form factors and has design decisions catered for each device type. The content is also easy to navigate and aims to predict users&apos; intentions and needs. I have still left some grey spots due to time constraints and these elements do reduce the user&apos;s experience a bit.&nbsp;</p>
    <p>For my internet artwork, as discussed in my rationale, I wanted to create a negative experience for the user. In the previous reflection, I had not developed my internet artwork so I could not comment on it. I mention in detail in my IxD process via emotional journey mapping the intended experience for the artwork. I wanted to start the artwork off slowly and gradually ramp up the bad design so that the user is more likely to get through the form. The rules that I have broken are Fitt&rsquo;s law as I have made progression buttons small and hard to reach. I have also implemented bad UI in the navigation by using incorrect colours and long text which can strain the user. On the second part of the form regarding name and age, I have largely kept the UI clean and focused the bad design on the actual content of the inputs. This is to avoid the user from feeling entirely frustrated. The inputs are large and rounded to reflect the aesthetic of the rest of the site and the snake game uses the website&apos;s colour palette and border styling seen across Scroll Troll. The areas that I deployed bad design are in the error messages which are small and have low contrasted colour making them hard to read. The navigation is also bad in the sense that it does not follow the colour expectations for primary buttons.</p>
    <p>The second form uses even more bizarre design elements to create an unpleasant experience. I have used a draw box for country selection, a drop-down of images instead of text and a slider for phone number input. These input choices were chosen because they are exactly the opposite of the information asked for. Countries are often selected via text input or a drop-down selection that consists of words. Phone numbers are always entered via text input because of the large range of telephone numbers, therefore, making a slider nearly impossible for the user to select the correct number. Finally, the navigation is also confusing because of vague text and incorrect colour use. The button has no real use but is a fun surprise.&nbsp;</p>
    <p>The next step in the sign-up is a bit less annoying in terms of the ambiguity of functionality. This is to give the user a bit of a reprieve from hard-to-fill-in inputs so that they are more likely to continue with the form. This form uses language to create a bad experience as the questions asked are invasive and of unnecessary detail for a sign-up. The password also requires an extremely long and complicated password which means the user is highly unlikely to remember it and is subsequently at risk of losing their password. The error message for the password is also bad design because I have made this green, which traditionally has the connotation of success which can confuse the user about the nature of the error messages.</p>
    <p>The next step of internet artwork is the reCAPTCHA form. The elements that I have included to make the experience bad are the timer and song and questions. The timer puts pressure on the user to finish the questions very fast and the song that blasts at the end of the timer is extremely loud and annoying, ultimately putting a lot of cognitive strain on the user. The questions create a bad experience because they look complicated to answer and so the user is more likely to feel panicked. The user is also unaware at this point that the system requires all answers to be wrong in order for the form to be submitted which reverses the user&rsquo;s expectations. The form has a final twist by having correctly designed navigational buttons which can confuse the user if they have become used to expecting the progress buttons to be designed wrong.&nbsp;</p>
    <p>The final part of the artwork is simple in its bad design. I have created a fake dashboard but when the user tries to make use of it via an attempt to post, the user is made aware that the site actually has not signed them up and cannot perform like a social media site. This, therefore, negates the promise made in the call to action and renders the form ultimately useless.&nbsp;</p>
    <p>I believe that my attempt to make the user frustrated was through the deployment of a bad UI design. I think that I could definitely add more elements but the methods that I have used breaks the user&apos;s expectations in order to trick the user. There are also elements that are clearly not mistakes but aim to utterly anger the user. The use of intentionally bad design also highlights important digital divides, ultimately resulting in a site that teaches design through the breaking of rules.&nbsp;</p>
    <p>While there are some improvements that I would have hoped for, I ultimately think that Scroll Troll has been successful in achieving the goals I have set out. This was only achieved by method of interaction and a deeper dive into the design process with the creation of IxD posts.&nbsp;</p>

        </article>



          {/* Reference Section*/}
        <ol className={`h-card blogReferenceSection ${activeTab === 1 ? 'activeSection' : 'inactiveSection'}`}>
        <h3 className='p-name referenceList' id='refList'>References</h3>
        <li className='author'>
        <em>Buttons</em> (no date) <em>Apple Developer Documentation</em>. Available at: <a href="https://developer.apple.com/design/human-interface-guidelines/buttons" className="u-url refA">https://developer.apple.com/design/human-interface-guidelines/buttons</a> (Accessed: 25 June 2023).
        </li>
          <li className='author'>
       Budiu, M. (2022) <em>10 Usability Heuristics for User Interface Design</em>, <em>Nielsen Norman Group</em>. Available at: <a href="https://www.nngroup.com/articles/ten-usability-heuristics/" className="u-url refA">https://www.nngroup.com/articles/ten-usability-heuristics/</a> (Accessed: 25 June 2023).
        </li>
         <li className='author'>
        Dalvi, C. (2020) <em>Accessibility of the navigation menu of web application</em>, <em>Medium</em>. Available at: <a href="https://uxdesign.cc/accessibility-of-the-navigation-menu-8a915e4d3e51" className="u-url refA">https://uxdesign.cc/accessibility-of-the-navigation-menu-8a915e4d3e51</a> (Accessed: 25 June 2023).
        </li>
       
         <li className='author'>
        Goldberg, P (2020) - <em>IxD UI UX Process - Interactive Media.pdf: WSOA4175A - Interactive Media IV-2023-SM1</em> (no date). Available at: <a href="https://ulwazi.wits.ac.za/courses/49205/files/5120108?wrap=1" className="u-url refA">https://ulwazi.wits.ac.za/courses/49205/files/5120108?wrap=1</a> (Accessed: 25 June 2023).
        </li>
         <li className='author'>
        <em>Fluent 2 Design System</em> (no date) <em>Fluent 2 Design System</em>. Available at: <a href="https://fluent2.microsoft.design/" className="u-url refA">https://fluent2.microsoft.design/</a> (Accessed: 26 June 2023).
        </li>
         <li className='author'>
        <em>Human Interface Guidelines</em> (no date) <em>Apple Developer Documentation</em>. Available at: <a href="https://developer.apple.com/design/human-interface-guidelines" className="u-url refA">https://developer.apple.com/design/human-interface-guidelines</a> (Accessed: 25 June 2023).
        </li>
         <li className='author'>
        Kalbach, J. (2007) <em>Designing Web Navigation: Optimizing the User Experience</em>. O&rsquo;Reilly Media, Inc.
        </li>
         <li className='author'>
        <em>User experience&nbsp;-&nbsp;a research agenda: Behaviour &amp; Information Technology: Vol 25, No 2</em> (no date). Available at: <a href="https://www.tandfonline.com/doi/abs/10.1080/01449290500330331?casa_token=cbp0k3RTlFkAAAAA:pSUqg9rTcF_TCk24x7v-6TVkXb-vqgXG6rFghz0DsRKSi55ridVXtZ1yjVmsIgvnFn_nBl1xIGaXgg" className="u-url refA" >https://www.tandfonline.com/doi/abs/10.1080/01449290500330331?casa_token=cbp0k3RTlFkAAAAA:pSUqg9rTcF_TCk24x7v-6TVkXb-vqgXG6rFghz0DsRKSi55ridVXtZ1yjVmsIgvnFn_nBl1xIGaXgg</a> (Accessed: 25 June 2023).
        </li>
        
      
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
        <h5 className='relatedArticle p-name'>Assignment 3 Reflection</h5>
        <p className='relatedSummary p-summary'> Reflection on UX and UI from my previous assignment!.</p>
        <HashLink to='/Reflection2#top' className='readMoreLink u-url'> Read More</HashLink>
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