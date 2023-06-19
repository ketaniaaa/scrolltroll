import React, { Component } from 'react'
import {Link} from "react-router-dom";


import EssayBanner from '../../images/designimages/wireframes.JPG';
import icon from '../../images/icon.png';
import '../../styles/blogTemplate.css';
import BackButton from '../../components/EntryBackButton';
import ShareButton from '../../components/ShareButton';

import WireframeHome from '../../images/designimages/lowfidelity-home-desktop.png';
import WireframeSelection from '../../images/designimages/lowfidelity-blog-design-desktop.png';
import WireframeEntry from '../../images/designimages/lowfidelity-blog-template-desktop.png';

import { Helmet } from 'react-helmet';

export default class Wirefames extends Component {
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
     <main className='e-content blogEntryMain'>
       <Helmet>
  
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
        <title> Wireframes</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="Wireframes for Scroll Troll"/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Wireframes" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/#/Wireframes"/>
       <meta name="keywords" content="wireframes, lf, hf ,high fidelity wireframes, low fidelity wireframes, app design , web design , ux design , ui design , uxui"/>
      </Helmet>
        <BackButton/>
        <img src={EssayBanner} alt="blah" className='u-photo entryImage' />


        <section className='h-card blogIconandButton'>
        <img src={icon} alt="..sndns" className='blogTempIcon' />
<ShareButton/>
        </section>


        <section className='e-content blogTempMain'>

        <h1 className='blogTitle p-name'> Wireframes </h1>
        <h2 className='blogAuthor p-author'>@Ketania</h2>
        <p className='p-summary blogDescription'> The first iteration of low-fidelty wireframes for Assignment 3. </p>
        <p className='dt-published blogTempDate'> 1.19PM. 5 June, 2023</p>
        
       <ul className="tabList navigation">
                <li ><button onClick={() => this.handleTabClick(0)} className={`tabButton ${activeTab === 0 ? 'activeTab' : 'inactive'}`}> Desktop Wireframes</button></li>
                <li ><button onClick={() => this.handleTabClick(1)} className={`tabButton ${activeTab === 1 ? 'activeTab' : 'inactive'}`}> Mobile Wireframes</button></li>
                 <li ><button onClick={() => this.handleTabClick(2)} className={`tabButton ${activeTab === 2 ? 'activeTab' : 'inactive'}`}> Outdated Wireframes</button></li>
             </ul>


        <section className='h-card blogContentContainer' id='blogID'>
             <article className={`e-content designActiveContent bfCont ${activeTab === 0 ? 'designActiveSection' : 'designInactiveSection'}`}>
     <h3 className='p-name wireframeTitle'>Home Page </h3>
     <img src={WireframeHome} alt="wireframe of the homepage" className='u-photo designImg'/>
     <ol className='wireframeAnList'> 
        <li className='wireframeLi'>
            <p className='e-content wireframeP'>Navigation - The title of the header is positioned on the left-hand side of the screen, this is in a large font so that it is clearly visible and the user is aware of what site they are on. I have positioned it on the left side of the screen in order to mimic the reading convention, therefore the user's gaze starts at the left and moves to the right where there are links and navigation to other pages.
        As this header does not have a home button, the user is able to click on the title to return home. This is a convention clearly seen on many websites.
        </p>
        </li>

         <li className='wireframeLi'>
            <p className='e-content wireframeP'> Navigation Links - The navigation links are off to the right side so that they are the second thing a user sees after the title. These links redirect the user to the blog and design pages as the artwork is on the homepage.

            </p>
             <p className='e-content wireframeP'> This navigation bar remains consistent across the website in order to maintain consistency. This static header makes it easy for the user to find links to navigate across the website from every page, therefore, establishing design consistency

            </p>
             </li>

         <li className='wireframeLi'>
            <p className='e-content wireframeP'> Home Banner - As Scroll Troll aims to mimic a fake social media site, the home page contains a banner which entices the user to sign up for the website which leads them to the form which is my internet artwork. This banner includes an image that will contain snippets of the abilities of the social media site such as posts and sharing ability. The copy on the banner includes a call to action followed by a button that allows the user to easily access the signup which is advertised in the call to action. The use of a quick redirect button allows for the call to action to be more effective as the user is immediately presented with the opportunity to take advantage of the offer. This also reduces user decision and navigation fatigue by plainly setting out the intentions of the artwork.
        </p>
        <p className='e-content wireframeP'>This banner was created following the convention of the home pages of multiple social media sites that I looked at for inspiration such as Instagram, Facebook, Snapchat and Pinterest. These sites set up the expectations of using the site in the banner while urging sign-up to be able to interact with more content.</p>
        </li>
        <li className='wireframeLi'>
            <p className='e-content wireframeP'> Sign-up Form - The sign-up form is positioned in the middle of the page and is therefore not hard to find. The use of darker colours against a light background makes use of negative space to highlight the form. The contrasting colours allow for the user's attention to be focused on the form and is placed in a position that is eye-catching.</p>
            <p className='e-content wireframeP'>The form itself has intentionally bad UI as the Sign Up text which is a heading is styled like a button to confuse the user. The actual button to progress the sign-up process is styled like normal text and is not emphasised to break convention. This, therefore, is the initial introduction to my internet artwork which breaks UI/UX convention.
            </p>
            <p className='e-content wireframeP'>Following the next link, the icons shown on this wireframe refers to social media buttons. Often on sign-up forms, sites offer users the ability to sign up using pre-existing social media such as Facebook, Google or others. This convention is therefore adhered to in this form.
            </p>
        </li>

        <li className='wireframeLi'>
            <p className='e-content wireframeP'> Footer - This simple footer is also the same across the site. The footer acts as an indication that the user has reached the end of the page. The contents of the footer are the credits to the creator of the site and links to external pages that are not inherent to the assignment. These links allow the user to interact with links related to the development of the site such as Figma, GitHub and references. This allows markers to see original dev files but this content is not something I wanted to highlight as key content pages of the site. Therefore placing these links in the footer still allows them to be easily found yet they are not emphasised pages such as the home, blog and design pages.
            </p>
        </li>
        </ol>


         <h3 className='p-name wireframeTitle'>Selection Pages </h3>
         <img src={WireframeSelection} alt="Wireframe of the blog and design selection pages" className='u-photo designImg'/>
        <ol className='wireframeAnList'>
             
            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Page Title - The page title is in large font size and centred at the top of the page below the navigation bar. This positioning is clear and obvious to the user in order to immediately inform the user of where they are on the site.</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Cards - The blog and design card has been designed to look like a tweet. This design choice is further reflected in the blog and design templates and the card design is the same for both content selection pages. This design choice has been implemented in order to convey the theme of a social media site that is Scroll Troll. I have designed Scroll Troll to be a parody of social media like Twitter. The use of this theme establishes uniformity and coherence. 
</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Icon - The icon contains a profile picture of the author of the post, like the picture of a user in a tweet.
</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Title - The entry title is the largest font on the card component. This is to emphasise the text on the blog so that the user is able to quickly read which entry they are clicking on. This allows the user to easily chose what entry they want to read without confusion</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Author Handle - The author's name is in smaller font size and in a lighter colour so as not to draw too much attention to it and reinforce information hierarchy. The smaller less obvious text therefore notifies the user that the entry title is of higher importance
</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Entry Description - The description is in the same high-contrast colour as the entry title. The font size, however, is smaller than the title and author handle. This allows the user to easily find the information while ensuring the description does not compete with the title. The use of colour also indicates that this text is of higher importance than the text in a lighter colour.
The description of the entry allows the user to quickly get an idea of the content of the blog so that they are able to make a better-informed choice regarding whether or not they want to read the post.
</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Image - The image of the entry is centred on the card and acts as a visual anchor for the user. As imagery can be more powerful than text, the card utilises a picture that is related to the entry content to draw the attention of the user to the card.</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Entry Date - The date and time of the entry are featured on the card in order to inform the user of when the entry was published, allowing the user to easily sort through the newest and oldest posts. The ScrollTroll for Desktop text is another reference to Twitter layouts.
The use of colour is again utilised to create an information hierarchy as this information is not as important as text in bolder colours.
</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Social Media Interactions - This is a purely decorative feature of the card to make it look more like a social media post.
</p>
            </li>
        </ol>

        <h3 className='p-name wireframeTitle'>Entry Template</h3>
        <img src={WireframeEntry} alt="A wireframe of the entry templates of scroll troll" className='u-photo designImg'/>
        <ol className='wireframeAnList'>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Entry Image - Again, the entry template mimics Twitter UI. I have designed the entry template to look like the profile section of a social media site in which the blog image acts as the header.</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Back Icon - This button allows the user to quickly navigate back to the selection page without forcing the user to look for navigation</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Share Button - The share button is highly contrasted in order to draw the user's attention to it. This, therefore, urges the user to click on it
</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Description - A brief summary of the entry contents so that the user is able to decide if they want to continue reading. This section also provides additional information such as the publishing date.</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Entry Tabs - The tab selection allows the user to easily toggle between the blog and reference sections. This provides information in an easy-to-find format.
</p>
            </li>

        </ol>
        </article>



 
        <section className={`h-card  ${activeTab === 1 ? 'designActiveSection' : 'designInactiveSection'}`}>
      
   <h3 className='p-name designActiveContent' > Mobile Wireframes</h3>
   <p>blah blah blah</p>
      
       </section>
      <section className={`h-card blogReferenceSection ${activeTab === 2 ? 'designActiveSection' : 'designInactiveSection'}`}>
         <h3 className='p-name referenceList' id='refList'>Wireframes will be updated for exam</h3>
      </section>
        </section>
 
</section>
     </main>
    )
  }
}
