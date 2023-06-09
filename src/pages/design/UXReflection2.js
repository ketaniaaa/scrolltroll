import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import EssayBanner from '../../images/blogimages/reflection.JPG';
import icon from '../../images/icon.png';

import '../../styles/blogTemplate.css';
import BackButton from '../../components/EntryBackButton';
import { Helmet } from 'react-helmet';
export default class UXReflection2 extends Component {
  render() {
    return (
     <main className='e-content blogEntryMain' id='#top'>
       
<Helmet>
  
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
        <title> Essay</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="Reflection on UX and UI"/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Reflection on UX and UI" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/#/UXReflection2"/>
       <meta name="keywords" content="Ux practice, ux guidelines, ui guidelines, uxui, ixd, reflection"/>
      </Helmet>

       <BackButton/>
        <img src={EssayBanner} alt="blah" className='u-photo entryImage' />


        <section className='h-card blogIconandButton'>
        <img src={icon} alt="..sndns" className='blogTempIcon' />

       <button className='nextButton'><Link to={'/'} className='blogNextButton'>Share Post</Link></button> 
        </section>


        <section className='e-content blogTempMain'>

        <h1 className='blogTitle p-name'>Reflection on UX and UI </h1>
        <h2 className='blogAuthor p-author'>@Ketania</h2>
        <p className='p-summary blogDescription'> A Critical Analysis of the UX and UI of Scroll Troll for Assignment 3. </p>
        <p className='dt-published blogTempDate'> 4.34PM. 9 June, 2023</p>
        
        <ul className='tabList navigation'>
          <li className='blogTab tab activeTab'><HashLink to='#blogID' id='blogTab'>Blog</HashLink></li>
            <li className='blogRefTab tab'><HashLink smooth to="#refList" id='refTab'>References</HashLink></li>

        </ul>

        <section className='h-card blogContentContainer' id='blogID'>
        <article className='e-content blogActiveContent bfCont'>
       <p>Scroll Troll is a unique site to write about in regard to UX and UI due to the artwork aiming to subvert UX rules. I believe the site as it stands for assignment 3 is of acceptable UX standards and is highly useable. The site makes use of a plain background in order to make use of negative space. The selection pages are organized into a grid to that a user is able to take in more information without feeling overwhelmed and the entries contain negative space on the sides of the content which in turn creates a container for the content. The negative space also allows for the user&rsquo;s attention to be focused on actual content as the background and empty space cannot compete with the bolder colours of images, text and inputs.</p>
<p>The components that ensure useability are the navigation bar and footer. The navigation stays consistent throughout the site and it&apos;s largely of similar design across devices. I do believe that I broke the convention of using a collapsable menu for this assignment. I chose to forgo this element because I only have two other pages apart from the home page. I will admit that this was a design mistake as I have not come across many websites on mobile that use a normal navigation bar similar to desktop and this lack of implementation causes the site to feel underdeveloped and not considerate of different form factors. This is therefore a high priority for the exam. This feature also provides an opportunity to display more technical skills in terms of the ability to use states. In the navigation bar, I have not created a link that says home. Instead, I have made use of the navigation convention by making the title a link back to the home page. This establishes familiarity with the user as they are likely to be familiar with clicking the title for redirection.</p>
<p>The navigation can be further improved for mobile by becoming sticky so that the user does not have to scroll back up to find the navigation. Another major feature to include is highlighting page links in the navigation bar to show the active content. This would allow for more information to the user of where they are.&nbsp;</p>
<p>The footer remains the same across the site as well. In my last assignment, I had hidden the footer which negated the purpose of having a footer. For this reason, I have added a simple universal footer that is visible on every page and in all states of the website. This gives the user information that the page is at its end, which can be especially helpful when engaging with longer posts such as essays or on mobile when text is narrower and the screen is therefore longer. A suggested feature of the footer by Whitenton (2015) is the inclusion of a site map. A site map can easily allow for the user to navigate through all pages from a single screen. This can create a more accessible experience and will the implemented for the next assignment.&nbsp;</p>
<p>In terms of navigation, I have tried to lessen the cognitive load of the user by creating simple navigation. According to JustInMind.com, one should not provide the user with more than 5 things to do and therefore navigation across the site should not take too many steps to get to any page. In Scroll Troll, I have ensured that each page is accessible within 3 clicks eg. home-design-wireframes and wireframes-blog-essay. This does not include the actual artwork as forms are not usually things that users interact with more than once. I have tentatively included a scroll-to-top button to allow the user to return to the top of a page to reduce the work of scrolling through blog posts. Within my entries, I have added tabs for easy navigation through sections of posts. This feature is useable, however, the design can be vastly improved. Tabs usually hid one piece of information and display another. I had technical difficulty regarding the state changes between sections and quickly change course so that the links work like anchor tags with hrefs as section ids. This makes the quick navigation of the entries workable and eases the user&apos;s strain to get to the relevant section of their choice but breaks convention in a way that I did not intend. This therefore should be fixed to perform like a normal tab section with styling that highlights the title of the active section and recolours the inactive content titles in a less emphasized manner.&nbsp;</p>
<p>Another feature that I believe is of high importance in order to elevate my UX and UI for the exam is the addition of further blog navigation. This would take the form of buttons to move between the previous and next blog when the user reaches the end of the entry. This allows users to stay engaged with the site for longer. Despite this, links and buttons all possess hover effects so that the user is aware that they are able to interact with the component. This hover effect is the same as the hover effect for cards thus showing design coherence. This aids in the experience as the user is not confused regarding navigation. Position on the website is further supported by browser tab titles. The user is then able to look at their browser tab to see where on the website they are exactly and quickly get an idea of the content that is on the screen.&nbsp;</p>
<p>The initial issue that I faced regarding the creation of the site was responsiveness. I will admit that the unit sizings in CSS can go over my head. I usually use pixels to resize fonts though after some reading realized that em would be more appropriate. I also struggle to maintain the aspect ratio with images on resizing. I think that my main issue lies in learning the correct unit cases in CSS for different components so that my site is inherently responsive. Due to my style of coding, I had to work from desktop down to mobile. For the blog, design and home page I have catered for 3 distinct form factors which include desktop, mobile and tablet. This use of breakpoints and media queries allows for a more responsive website that has high accessibility due to its ease of use across devices. In the future and for the exam I would like to work towards reworking my CSS so that it is responsive first rather than designing just for the screen that I am coding on initially.&nbsp;</p>
<p>I believe that the blog cards work well and stay reliable throughout the website. The consistent design of the cards for both the design and blog section allows for familiarity and consistency. The user is therefore aware that the posts on both pages are long-form content of similar nature. I have also created a main template for the entries. This ensures that the user is used to the thematic choices of the site and the pages have a coherent look and feel. The card design and template design also mimic social media layouts. This aids in solidifying the theme of Scroll Troll as a parody social media site. The design of the site enables a more enriching experience by fully immersing the user in social media. &nbsp;A feature that can be adjusted to create a more dynamic experience is including different icons for the blog posts as opposed to using the same image throughout. This could allow for the site to feel more realistic and less like a student project.&nbsp;</p>
<p>Throughout the site, I have used size and contrast to establish an information hierarchy. On the card selection pages, I have used the largest font to display the page title. This ensures that the title is eye-catching to inform the user of their position on the website. The second biggest text is the title of the entries. This allows for the user&apos;s gaze to be focused on the title of each card after viewing the images. I have used images on the blog cards as the visual anchor. This is because images are easier to process than words and therefore the user is able to see an image related to the entry and decided more rapidly whether or not they want to engage with the post. The second feature of the cards that the viewer sees is the title. I ensured that the titles of the cards were in large font size as the emphasis of this text. The title is what allows the user to decide on reading it or not. The next most important information on the cards is the description. While of a smaller size and calmer font, the use of colour for this information allows it to be focused more on than the author handles, social media interactions or blog date and time. The dark blue contrasts against the other text, therefore, making the description easier for the user to read. The text in lighter blue is less important information that I did not want to prioritize and therefore blends more into the background due to lower contrast.&nbsp;</p>
<p>The entry template follows a similar design. I have used the display font &lsquo;Scroll Troll&rsquo; for headings to capture the user&apos;s attention while keeping the actual writing in a simple sans-serif font that is highly accessible and allows for easier reading. This is to balance the site and ensure that content does not look too maximalist. A feature of the entry template that can be adjusted for better UX is the sizing of the blog image. The image tends to take up most of the screen causing the user to scroll down a bit to read the blog title. This can easily be amended to ensure that the important information such as the blog title is prioritized by being included at the top of the page.&nbsp;</p>
<p>The final part of this reflection focuses on the home page. I believe that the hero could have a stronger call to action by possessing further information on the contents of the site. This can be done to ensure that the user is enticed to sign up for a Scroll Troll account and is therefore more likely to engage with the form format internet artwork. A small tweak across the site that can largely improve the experience is micro-interactions in the form of transition animations and after, before and hover effects. Streamlining these interactions can reduce strain on the user and allow for the website to feel more natural.&nbsp;</p>
<p>In conclusion, I have identified aspects of Scroll Troll which have demonstrated good user interface design and enjoyable user experiences yet also highlighted downfalls in this assignment while providing solutions to these design issues for the exam submission. As all good design requires interaction, I believe that the shortfallings of the current design allow the opportunity for insight regarding better design for the next and final iteration of Scroll Troll.</p>
        </article>



 
        <ol className='h-card blogReferenceSection'>
      
   <h3 className='p-name referenceList' id='refList'>References</h3>
      <li className='author'><em>10 Guidelines For Navigation Usability</em> (2015) <em>Usability Geek</em>. Available at: <a href="https://usabilitygeek.com/10-guidelines-for-navigation-usability/" className='u-url refA'>https://usabilitygeek.com/10-guidelines-for-navigation-usability/</a> (Accessed: 9 June 2023).</li>
      <li className='author'>Experience, W.L. in R.-B.U. (no date) <em>Menu Design: 15 UX Guidelines to Help Users</em>, <em>Nielsen Norman Group</em>. Available at: <a href="https://www.nngroup.com/articles/menu-design/" className='u-url refA'>https://www.nngroup.com/articles/menu-design/</a> (Accessed: 9 June 2023).</li>
      <li className='author'><em>Navigation design: Almost everything you need to know</em> (no date). Available at: <a href="https://www.justinmind.com/blog/navigation-design-almost-everything-you-need-to-know/" className='u-url refA'>https://www.justinmind.com/blog/navigation-design-almost-everything-you-need-to-know/</a> (Accessed: 9 June 2023).</li>
       </ol>
      
        </section>
</section>
<HashLink smooth to="#top"> Back to top</HashLink>
     </main>
    )
  }
}
