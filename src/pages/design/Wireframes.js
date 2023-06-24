import React, { Component } from 'react'


import EssayBanner from '../../images/designimages/wireframes.JPG';
import icon from '../../images/icon.png';
import '../../styles/blogTemplate.css';
import BackButton from '../../components/EntryBackButton';
import ShareButton from '../../components/ShareButton';

import WireframeHome from '../../images/designimages/lfhome.png';
import WireframeSelection from '../../images/designimages/lfselection.png';
import WireframeCard from '../../images/designimages/lfcard.png'
import WireframeEntry from '../../images/designimages/lftemplate.png';

import MobileHome from '../../images/designimages/lfhomemobile.png';
import MobileMenu from '../../images/designimages/mobilemenulf.png';
import MobileSel from '../../images/designimages/lfmobileselection.png';
import MobileTemp from '../../images/designimages/blogtempmobilelf.png';

import OutdatedHome from '../../images/designimages/lowfidelity-home-desktop.png';
import OutdateSelection from '../../images/designimages/lowfidelity-blog-design-desktop.png';
import OutdateTemplate from '../../images/designimages/lowfidelity-blog-template-desktop.png';

import SubscribeButton from '../../components/SubscribeButton';
import TopButton from '../../components/BlogToTop';
import { HashLink } from 'react-router-hash-link';


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
     <main className='e-content blogEntryMain' id='#top'>
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
        <p className='p-summary blogDescription'> The Low-fidelty wireframes of Scroll Troll. </p>
        <p className='dt-published blogTempDate'> Initially Published 1.19PM. 5 June, 2023, Updated 2.22PM 24 June, 2023</p>
        
       <ul className="tabList navigation">
                <li ><button onClick={() => this.handleTabClick(0)} className={`tabButton ${activeTab === 0 ? 'activeTab' : 'inactive'}`}> Desktop Wireframes</button></li>
                <li ><button onClick={() => this.handleTabClick(1)} className={`tabButton ${activeTab === 1 ? 'activeTab' : 'inactive'}`}> Mobile Wireframes</button></li>
                 <li ><button onClick={() => this.handleTabClick(2)} className={`tabButton ${activeTab === 2 ? 'activeTab' : 'inactive'}`}> Outdated Wireframes</button></li>
             </ul>


        <section className='h-card blogContentContainer' id='blogID'>
          { activeTab === 0 &&
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
 <p className='e-content wireframeP'> 
Navigation <br />
For the navigation bar, I have kept the design of it quite simple since I only have two other pages that are not inherent to the homepage. On the left, I have positioned the logo and the site's name as users will read from right to left. This means that the user initially looks at the title which heightens their knowledge of where they are. This positioning establishes a visual hierarchy as the title and logo are first seen. This is supported by the title being in a larger font and a darker colour for higher contrast. 
The navigation links are on the right side of the navigation bar. This follows the convention of many navigation bars, allowing the user to understand how to navigate between pages quickly. These links have a lower contrasted colour as I wanted to avoid drawing attention to this initially. I have added onHover events so that the colour becomes darker and the user is therefore given information that the text is a link.
 </p> </li>

       <li className='wireframeLi'>
        <p className='e-content wireframeP'>
Nav Bar Button <br />
   I have added a sign-up button to the navigation bar. As my internet artwork is in the sign-up section, I wanted to encourage the user to use the sign-up feature as often as possible. The navigation bar seemed like the best place as this stay consistently visible on every page of the website and therefore acts as a constant reminder to sign up. This button also acts as further navigation to the sign-up section so that the user does not have to find it on the home page only, ultimately reducing cognitive strain. I have visually separated this button by giving it a border background which is consistent with the other buttons across the site in order to establish familiarity and uniformity regarding different inputs.

        </p>
       </li>

 <li className='wireframeLi'>
        <p className='e-content wireframeP'>
Hero Image <br />
For the exam, I have changed the hero. The previous hero seemed too broad and was not informative enough as the entice the user to sign up. This image acts as a visual anchor for the user as images are registered at a faster pace than text. 

        </p>
       </li>
        <li className='wireframeLi'>
        <p className='e-content wireframeP'>
Hero Copy <br />
The hero copy consists of text regarding the nature of the Scroll Troll. This gives the user an idea of what the site is about and the fact that it is a social media site. This text will also include features of the site that are only available if the user has an account, therefore urging the user to signup. This, therefore, furthers my intention for the user to be directed to the signup section. 

        </p>
       </li>
        <li className='wireframeLi'>
        <p className='e-content wireframeP'>
I have added a button on the copy so that the user can immediately be directed to the section on the homepage with the form once they have been enticed to sign up.

        </p>
       </li>
        <li className='wireframeLi'>
        <p className='e-content wireframeP'>
Video Section <br />
The video section of the homepage is a further call-to-action confirmation as the video will consist of the social media functionality of Scroll Troll. This allows the user to become more informed about the website in a quick and visual-first manner. The user is therefore more likely to want to sign up.

        </p>
       </li>
        <li className='wireframeLi'>
        <p className='e-content wireframeP'>
Sign up form <br />
The sign-up form is where the user begins to interact with the internet artwork. I have introduced the idea of intentionally bad ui tentatively in this form. This is done so that the user is only mildly confused during the first part of the form and is not immediately presented with overwhelmingly bad UI that defers them from signing up. This is done through the title of the form being styled as a button and the next button being very small which negated the correct use of visual hierarchy. The progress button should be highly visible to users so that navigation stress is reduced and therefore making this button small breaks convention.

        </p>
       </li>
        <li className='wireframeLi'>
        <p className='e-content wireframeP'>
Footer <br />
The footer is another consistent component that remains the same throughout the website. The footer acts as an indication that the user is at the end of the page and consists of the author's name on the left side and links to the right. This mirrors the design of the navigation bar, ultimately reinforcing familiarity and consistency in the design of these components. The user is made aware that the behaviour of the navigation menu bar and footer are essentially the same.


        </p>
       </li>
        </ol>
          <h3 className='p-name wireframeTitle'>Internet Artwork Form A </h3>
         <img src={WireframeSelection} alt="Wireframe of the name and age input form" className='u-photo designImg'/>
        <ol className='wireframeAnList'>
             
            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Page Title - The page title is in large font size and centred at the top of the page below the navigation bar. This positioning is clear and obvious to the user in order to immediately inform the user of where they are on the site The format of both the blog and design selection pages are the same in order to maintain uniformity.</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Cards - The blog and design card has been designed to look like a tweet. This design choice is further reflected in the blog and design templates and the card design is the same for both content selection pages. This design choice has been implemented in order to convey the theme of a social media site that is Scroll Troll. I have designed Scroll Troll to be a parody of social media like Twitter. The use of this theme establishes uniformity and coherence. 
</p>
            </li>
            </ol>


         <h3 className='p-name wireframeTitle'>Selection Pages </h3>
         <img src={WireframeSelection} alt="Wireframe of the blog and design selection pages" className='u-photo designImg'/>
        <ol className='wireframeAnList'>
             
            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Page Title - The page title is in large font size and centred at the top of the page below the navigation bar. This positioning is clear and obvious to the user in order to immediately inform the user of where they are on the site The format of both the blog and design selection pages are the same in order to maintain uniformity.</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Cards - The blog and design card has been designed to look like a tweet. This design choice is further reflected in the blog and design templates and the card design is the same for both content selection pages. This design choice has been implemented in order to convey the theme of a social media site that is Scroll Troll. I have designed Scroll Troll to be a parody of social media like Twitter. The use of this theme establishes uniformity and coherence. 
</p>
            </li>
            </ol>


 <h3 className='p-name wireframeTitle'>Selection Cards </h3>
 <img src={WireframeCard} alt="Wireframe of the selection cards" className='u-photo designImg'/>
<ol className='wireframeAnList'>
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
            <p className='e-content wireframeP'> 
Back button - This button stores the user's history and can easily redirect them back to the article or selection page that they were previously on. This allows the user to easily navigate without looking for the page that they were already on. 
</p>
            </li>
 <li className='wireframeLi'>
            <p className='e-content wireframeP'>
              Entry Image - Again, the entry template mimics Twitter UI. I have designed the entry template to look like the profile section of a social media site in which the blog image acts as the header. This allows the user to also be provided with a visual element that sets the tone of the article they are about to read.
            </p>
            </li>

             <li className='wireframeLi'>
            <p className='e-content wireframeP'>
              Icon - as the site is parodying Twitter, this icon acts as a profile picture on a Twitter profile page and will display an icon of the author as the author's name is listed in the form of a username handle.
            </p>
            </li>

             <li className='wireframeLi'>
            <p className='e-content wireframeP'>
              Share Button - The share button is highly contrasted in order to draw the user's attention to it. This, therefore, urges the user to click on it. This will result in a pop-up that notifies the user that they can only share the post on the Scroll Troll social media to further encourage them to interact with the internet artwork.
            </p>
            </li>
             <li className='wireframeLi'>
            <p className='e-content wireframeP'>
Title - The title of the entry is the largest text on the page. This established visual hierarchy as the other text cannot compete with the user's attention. This gives navigational context to the user so that they are aware of what page they are on.

            </p>
            </li>

                 <li className='wireframeLi'>
            <p className='e-content wireframeP'>
              Author Handle - this text gives the user information regarding the author of the content. This is presented as a username because, on twitter, a user would be the author of the content found on their profile page. 

            </p>
            </li>
             <li className='wireframeLi'>
            <p className='e-content wireframeP'>
              Description - A brief summary of the entry contents so that the user is able to decide if they want to continue reading. This section also provides additional information such as the publishing date.

            </p>
            </li>

             <li className='wireframeLi'>
            <p className='e-content wireframeP'>
              Time - This provides information regarding when the post was published. 

            </p>
            </li>

               <li className='wireframeLi'>
            <p className='e-content wireframeP'>
              Entry Tabs - The tab selection allows the user to easily toggle between the blog and reference sections. This provides information in an easy-to-find format. This also reduces the amount of information on the screen so that the user is not flooded with a lot of information that is unnecessary and the user is allowed to choose what information to prioritize for themselves.
              This design also mimics Twitter profiles as it is similar to the toggle between tweets and likes on a user's page.

            </p>
            </li>




            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Content - The content is in a highly contrasted colour in order to allow for an easier reading experience. </p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> Related Section - I have added this section in order to provide the user with additional navigation ability. This allows users to use the site for longer if they are presented with related content. If the user enjoys the post, they can similar content easily. This also is helpful for markers are related theory posts can easily be accessed.</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'>Related Cards- the related content is formatted using an inline-flex so that more information can be presented in a small space and reduces unnecessary scrolling. These cards include a title and a short description, followed by a link to the said article.
</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'>
Subscribe - this aspect is purely to follow the convention of blogs which allows the user to be emailed regarding new posts. This, however, on Scroll Troll acts as a means to reiterate the parody theme by giving the user a sarcastic pop-up when interacting with it. 

            </p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> 
            This button allows the user to scroll to the top of the page and also reduces navigation fatigue. The user can also be quicky be redirected to the top of the page to toggle between information with ease.
</p>
            </li>
         

        </ol>
        </article>}


{ activeTab === 1 &&
 
        <section className={`e-content designActiveContent bfCont ${activeTab === 1 ? 'designActiveSection' : 'designInactiveSection'}`}>
      
   <h3 className='p-name wireframeTitle' > Mobile Home</h3>

       
         <img src={MobileHome} alt="Wireframe of the blog and design selection pages" className='u-photo designImg'/>
        <ol className='wireframeAnList'>
             
            <li className='wireframeLi'>
            <p className='e-content wireframeP'> The home page on mobile largely stays the same as desktop. The main change is in the navigation bar as I have removed the links and the name of the website. Instead, this information is stored in a hamburger menu. The sign up button remains in the nav bar as this is a convention I have seen on the mobile sites of social media's</p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> The other difference is that the hero is now displayed as a column as an inline block would make the content hard to read due to sizing.  
           </p>
            </li>
            </ol>

               <h3 className='p-name wireframeTitle' > Mobile Menu</h3>
         <img src={MobileMenu} alt="Wireframe of the blog and design selection pages" className='u-photo designImg'/>
        <ol className='wireframeAnList'>
             
            <li className='wireframeLi'>
            <p className='e-content wireframeP'> 
              The menu stays consistent around the website. I have made it a full screen overlay so that all the links have ample space. The top of menu has the name of the site in order to ensure the user is always aware of what website they are on.
            </p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> 
            close button - As the menu is full screen, the x icon allows the user to exit the menu and return back to the page that they were originally on.
            </p>
            </li>

            <li className='wireframeLi'>
            <p className='e-content wireframeP'> 
            Links - the links are formatted as a list and these is an additional link that will say home as to make mobile navigation easier. I have also noted that many mobile menus clearly have a home link which differs from desktop convention.
            </p>
            </li>

           
            </ol>
                      <h3 className='p-name wireframeTitle' > Mobile Selection Pages</h3>
         <img src={MobileSel} alt="Wireframe of mobile blog and design selection pages" className='u-photo designImg'/>
        <ol className='wireframeAnList'>
             
            <li className='wireframeLi'>
            <p className='e-content wireframeP'> 
The card design stays the same on mobile as on desktop, the only difference is the grid format. On mobile only one card is show in a row as opposed to the three on desktop.            </p>
            </li>
            </ol>

             <h3 className='p-name wireframeTitle' > Mobile Entry Template</h3>
         <img src={MobileTemp} alt="Wireframe of the mobile entry selection" className='u-photo designImg'/>
        <ol className='wireframeAnList'>
             
            <li className='wireframeLi'>
            <p className='e-content wireframeP'> 
The entry template is also the same as desktop, the only change is to the formatting of the related content. 
</p>
            </li>

                <li className='wireframeLi'>
            <p className='e-content wireframeP'> 
The related content is the only change on mobile as this is now present as a column instead of an inline object.
</p>
            </li>
            </ol>

            

      
       </section>}

       { activeTab === 2 &&
      <section className={`h-card blogReferenceSection ${activeTab === 2 ? 'designActiveSection' : 'designInactiveSection'}`}>
         <h3 className='p-name referenceList' id='refList'>Outdated Home Wireframe</h3>
         <img src={OutdatedHome} alt="old home wireframe" className='u-photo outdatedWireframe'/>
           <h3 className='p-name referenceList' id='refList'>Outdated Selection Wireframe</h3>
         <img src={OutdateSelection} alt="old blog and design selection wireframe" className='u-photo outdatedWireframe'/>
           <h3 className='p-name referenceList' id='refList'>Outdated Template Wireframe</h3>
         <img src={OutdateTemplate} alt="old entry template wireframe" className='u-photo outdatedWireframe'/>



      </section>}

        </section>
  {/* Related Articles for easy navigation*/}
        <section className='p-related relatedContent'>
        <h4 className='relatedTitle'>Related Articles</h4>
        <section className='relatedSpan h-card'>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'>Style Guide </h5>
        <p className='relatedSummary p-summary'> 
        Design elements that have formed Scroll Troll</p>
        <HashLink to='/StyleGuide#top' className='readMoreLink u-url'> Read More</HashLink>
        </article>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'> IXD </h5>
        <p className='relatedSummary p-summary'> All about the user interactions on the site along with flows and personas.</p>
        <HashLink to='/IXD' className='readMoreLink u-url'> Read More</HashLink>
        </article>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'>UX and UI Exam Reflection </h5>
        <p className='relatedSummary p-summary'> This blog post explores UX and UI implementation of Scroll Troll.</p>
        <HashLink to='/UXReflection2#top' className='readMoreLink u-url'> Read More</HashLink>
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
