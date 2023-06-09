import React, { Component } from 'react';
import EssayBanner from '../../images/designimages/styleguide.JPG';
import icon from '../../images/kicon.png';
import '../../styles/blogTemplate.css';
import ShareButton from '../../components/ShareButton';
import BackButton from '../../components/EntryBackButton';


import Inspiration from '../../images/designimages/Inspiration.png';
import TwitterInspo from '../../images/designimages/twitterinspo.png';
import Colours from '../../images/designimages/palette.png';
import Typography from '../../images/designimages/fonts.png';
import LogoDesign from '../../images/designimages/logodesign.png';
import Inputs from '../../images/designimages/InputFields.png';
import IconDesign from '../../images/designimages/icons.png';
import MainContrast from '../../images/designimages/maintextcontrast.png';
import ButtonContrast from '../../images/designimages/sharerenamebutton.png';
import SignContrast from '../../images/designimages/signupcontrast.png';
import ModalContrast from '../../images/designimages/modalcontrast.png';
import GridLayout from '../../images/designimages/layouts.png';



import SubscribeButton from '../../components/SubscribeButton';
import TopButton from '../../components/BlogToTop';
import { HashLink } from 'react-router-hash-link';


import { Helmet } from 'react-helmet';
export default class StyleGude extends Component {
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
        <title> Style Guide</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="The style guide for Scroll Troll"/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Style Guide" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/#/StyleGuide"/>
       <meta name="keywords" content="style guide, graphic design, typography, logo design"/>
      </Helmet>


      <BackButton/>
        <img src={EssayBanner} alt="blah" className='u-photo entryImage' />


        <section className='h-card blogIconandButton'>
        <img src={icon} alt="..sndns" className='blogTempIcon' />
<ShareButton/>
        </section>


        <section className='e-content blogTempMain'>

        <h1 className='blogTitle p-name'> Style Guide </h1>
        <h2 className='blogAuthor p-author'>@Ketania</h2>
        <p className='p-summary blogDescription'> Design elements that have formed Scroll Troll </p>
        <p className='dt-published blogTempDate'> 3.33PM.  8 June, 2023</p>
        
        <ul className='tabList navigation'>
        
                <li ><button onClick={() => this.handleTabClick(0)} className={`tabButton ${activeTab === 0 ? 'activeTab' : 'inactive'}`}> Inspiration</button></li>
                <li ><button onClick={() => this.handleTabClick(1)} className={`tabButton ${activeTab === 1 ? 'activeTab' : 'inactive'}`}> Colours</button></li>
                <li ><button onClick={() => this.handleTabClick(2)} className={`tabButton ${activeTab === 2 ? 'activeTab' : 'inactive'}`}> Typography</button></li>
                <li ><button onClick={() => this.handleTabClick(3)} className={`tabButton ${activeTab === 3 ? 'activeTab' : 'inactive'}`}> Icons</button></li>
                <li ><button onClick={() => this.handleTabClick(4)} className={`tabButton ${activeTab === 4 ? 'activeTab' : 'inactive'}`}> Inputs</button></li>
                <li ><button onClick={() => this.handleTabClick(5)} className={`tabButton ${activeTab === 5 ? 'activeTab' : 'inactive'}`}> Layout</button></li>
                <li ><button onClick={() => this.handleTabClick(6)} className={`tabButton ${activeTab === 6 ? 'activeTab' : 'inactive'}`}> References</button></li>

        </ul>

        <section className='h-card blogContentContainer' >

  { activeTab === 0 &&
  
     <article className={`e-content designActiveContent bfCont ${activeTab === 0 ? 'activeSection' : 'inactiveSection'}`}>

       
     <h3 className='p-name wireframeTitle'>Inspiration </h3>
     <img src={Inspiration} alt="inspiration moodboard for Scroll Troll" className='u-photo styleImg'/>
        <p className='e-content wireframeP'  > As mentioned in my preparatory work, a large influence on the site was neo-dadaist design. This design movement encompasses meme culture. A pattern that I noticed in memes was the use of infantile fonts such as Comic Sans and images that are badly drawn. I decided to draw inspiration from these concepts on my website. I liked the child-like quality of anti-design and meme formats so I have decided to use a simple palette with primary colours, hand-drawn images when brushes that look like pencil marks and a handwriting display font.&nbsp;</p>
      <p className='e-content wireframeP'> In the anti-design poster, I noticed a trend of using pencil scribble imagery and therefore have drawn my images like this. I drew a lot of inspiration from zine design in which the product feels very handmade. I wanted to create therefore replicate this theme in Scroll Troll. This meant that I had to negate the use of icon packages and stock imagery to create my own instead.</p>

         <img src={TwitterInspo} alt="my designs versus twitter layouts " className='u-photo styleImg'/>
         <p className='e-content wireframeP'  > As Scroll Troll is a parody social media site, it was natural to draw inspiration from existing social media sites. A main inspiration regarding layouts was Twitter. I have used inspiration from the Twitter profile layout to create my entry template. The entry image acts as the header and there is a profile picture icon to imitate a user profile picture along with the author name in the format of a handle.&nbsp;</p>
          <p className='e-content wireframeP'>I then used the format of a tweet card for the entry cards. This can be seen through the use of profile pictures, handles and social media interactions. This also gives the user an idea of the social media interactions available when they sign up for Scroll Troll which furthers my intended direction for user interactions.</p>
        </article>

  }
  { activeTab === 1 &&
      
 <article className={`e-content designActiveContent bfCont ${activeTab === 1 ? 'activeSection' : 'inactiveSection'}`}>
 <h3 className='p-name wireframeTitle'>Colours </h3>
<img src={Colours} alt="colour palette" className='u-photo styleImg'/>
      <p className='e-content wireframeP'>Since I wanted to maintain a childlike feel for the UI of the site, I wanted to keep the colour palette simple. I have chosen jewel tones of the primary colours for my main colours of the site. These colours can be seen featured in the text and images of the site. These colours also are dark and therefore easy to read against a light background.</p>
       <p className='e-content wireframeP'>For my secondary colours and neutrals, I have chosen a green, a light beige and a charcoal tone. The green is featured on icons and drawings as the main logo features a green troll. The troll characters are consistently found across the site but are not used for text as the low contrast makes it hard to read. For the background, I have chosen a pale beige in the tonal family of yellow that I have chosen for the site. This tone gives a slight tint to the page while not competing with the darker blues and reds which make up the text for the site. This ensures that there is ample negative space and breathability for the user by using this colour as a background tone.&nbsp;</p>
      <h3 className='p-name wireframeTitle'>Contrast Checking </h3>
     <p className='e-content wireframeP'> The Web Content Accessibility Guidelines (WCAG) requires high contrast for colours used on pages in order to ensure accessibility. I have tested colour combinations used on Scroll Troll using their contrast checker.</p>
      <img src={MainContrast} alt="screenshot depicting the contrast between primary text and background" className='u-photo styleImg'/>
       <p className='e-content wireframeP'>This image shows the contrast between the primary text such as headings and paragraph text against the background colour of the wesbite. The WCAG requires a minimum contrast between text and background to be 4.5:1. As shown above, the main text has a contrast rating of 13.63:1 which allows for a high level of accessibility to users who are sight-impaired.</p>
            <img src={ButtonContrast} alt="screenshot depicting the contrast of buttons" className='u-photo styleImg'/>
<p className='e-content wireframeP'> The buttons also pass the tests for high contrast. This ensures that these buttons are highly visible and easy to read.</p>
   
 <img src={SignContrast} alt="screenshot depicting the contrast of the signup links and buttons" className='u-photo styleImg'/>
 <p className='e-content wireframeP'>The sign up button does have the lowest contrast across the components on the site as this colour combination does not pass the check for large text and bodies of text. This button does however pass accessibility contrast checks for UI elements such as buttons. This therefore means that the button is usable for Scroll Troll while still meeting the minimum WCAG standards.</p> 
                   <img src={ModalContrast} alt="screenshot depicting the contrast on the modals " className='u-photo styleImg'/>
   <p className='e-content wireframeP'>Finally, I have checked the contrast for the modals across the website as these pop up when interacting with the internet artwork and the 'share' buttons on entry pages. This too does pass the contrast requirements though is of less contrast than of the main text. This is acceptable as these components are far and few and mainly act as part of the internet artwork that inherently aims to be intentionally bad UI. I did still want the content to be reable in modals but I opted for colours that are a bit more abrasive to the user than the main text.</p>
     
      </article> }
        { activeTab === 2 &&

 <article className={`e-content designActiveContent bfCont ${activeTab === 2 ? 'activeSection' : 'inactiveSection'}`}>
 <h3 className='p-name wireframeTitle'>Typography </h3>
<img src={Typography} alt="list of typography and examples of fonts used" className='u-photo styleImg'/>
      <p className='e-content wireframeP'>For the display font, I have created my own font using Calligraphr. I simply drew out each letter and icon of the font and thus created Scroll Troll. I wanted a handwritten font that looked like a child had written out the letters yet upon failing to find a font that I both liked and was free to use I decided to use my own bad writing. I created the font using a 6b pencil brush in Procreate to create the rugged edges of the font. I have only used this font as a display font in headings, handles and large buttons because Scroll Troll is not suitable for long-form reading.&nbsp;</p>
       <p className='e-content wireframeP'>The body font is &lsquo;Outfit&rsquo;. I chose Outfit because it had a high rating for accessibility and I wanted long-form content to be readable. This sans-serif font pairs well with the display font while not straining the reader. I chose a sans-serif for the body as I thought the look was friendlier than a serif font as these can have a more serious denotation(Arnold, 2022). &nbsp;</p>
      </article>}
        { activeTab === 3 &&

 <article className={`e-content designActiveContent bfCont ${activeTab === 3 ? 'activeSection' : 'inactiveSection'}`}>
 <h3 className='p-name wireframeTitle'>Logo</h3>
<img src={LogoDesign} alt="logo design for scroll troll" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  > The logo design again shows the child-like drawing theme I envisioned. I wanted to create a character for the brand Scroll Troll just as Duolingo has its bird Duo. The troll would therefore be the face of Scroll Troll. I used a pencil brush again and instead of using solid colouring, I made sure that the colouring of the troll was blotchy and showed gaps to enhance the juvenile look.&nbsp;</p>
      <p className='e-content wireframeP'>I then wanted to make sure that the logo could be recognisable. To do this I made silhouettes which can be used for tab icons and badges as the shape holds up well on a small scale.</p>
        <h3 className='p-name wireframeTitle'>Icons</h3>
<img src={IconDesign} alt="icon designs" className='u-photo styleImg'/>
      <p className='e-content wireframeP'>The icons used on Scroll Troll are largely hand drawn by me. The premade icons that I found online were too high-end for the aesthetic that I wanted to achieve on Scroll Troll and therefore decided to create my own. These custom icons fit the look of the font that is used throughout the website. This therefore, aids in visual cohesion and reinforces a clear visual identity for Scroll Troll.</p>
       <p className='e-content wireframeP'>These icons are used for scroll-to-top buttons, the mobile menu and the closing of modals and pop-ups. I have also created additional icons for fabs that are commonly used on social medias to indicate home, feed and inboxes. As Scroll Troll is not actually a functioning social media, these icons have not been used on this version of the site. </p>
      </article>}
        { activeTab === 4 &&
      
 <article className={`e-content designActiveContent bfCont ${activeTab === 4 ? 'activeSection' : 'inactiveSection'}`}>
 <h3 className='p-name wireframeTitle'>Inputs</h3>
<img src={Inputs} alt="wireframe of the homepage" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  > As Spacescape is the main colour for text on the site, I wanted the input fields and the text to be coherent. For this, I have used a lighter hue of this shade of inactive inputs as this colour is lowly contrasted against the background. This change of colour also indicates to the user that there is a difference in the state because these inputs are not the same as the text colour. I have maintained convention with the error input boxes. For these, I have used red as red is conventionally used in design as a warning or error colour.&nbsp;</p>
      <p className='e-content wireframeP'>The progress bar uses green for active content as this is another convention of design. The green indicates that the user is on the right path and the grey which is of low contrast indicates lessened importance. This therefore established information hierarchy through colour.&nbsp;</p>
           <p className='e-content wireframeP'>Finally, I have used rounded buttons intentionally. Pumpkin Web Design suggests that rounded corners allow the user to focus on the content of the button because the curves redirect the user&apos;s gaze towards the centre. The rounded button also creates a more positive vibe and requires less cognitive processing than squares. I have used square buttons for links in the internet artwork to subvert this experience in order to create a higher cognitive load for the user and make buttons harder to find.</p>

      </article>}
      { activeTab === 5 &&
       <article className={`e-content designActiveContent bfCont ${activeTab === 5 ? 'activeSection' : 'inactiveSection'}`}>
 <h3 className='p-name wireframeTitle'>Layouts</h3>
<img src={GridLayout} alt="Grid layout example" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  >For the layout of Scroll Troll, I have used a grid layout. This was chosen because the simple use of grid lines allows for application of traditional design principles such as creating focal points. In Scroll Troll, I have aligned main content along grid lines to allow for negative space on the sides of entry pages for breathability. This allows for a less invasive visual of the website. This layout also allows for content to be emphasized and be place in a convenient visual position that naturally demands attention from the user. </p>
   <p className='e-content wireframeP'  > The layout is discussed in more detail in the Wireframe blog. </p>
      </article>}
  { activeTab === 6 &&
 <ul className={`h-card blogReferenceSection ${activeTab === 6 ? 'activeSection' : 'inactiveSection'}`}>
    <h3 className='p-name referenceList' id='refList'>References</h3>
    <li className='author'><em>Advantages of rounded rectangle call to action buttons - Pumpkin Web Design Manchester</em> (no date). Available at: <a href="https://www.pumpkinwebdesign.com/web-design-manchester/advantages-of-rounded-rectangle-call-to-action-buttons/"  className='u-url refA'>https://www.pumpkinwebdesign.com/web-design-manchester/advantages-of-rounded-rectangle-call-to-action-buttons/</a> (Accessed: 9 June 2023).</li>
    <li className='author'>&nbsp;Arnold, B. (2022) <em>Serif vs. Sans Serif Fonts: What&rsquo;s the Difference and When to Use</em>, <em>Vandelay Design</em>. Available at: <a href="https://www.vandelaydesign.com/serif-vs-sans-serif-fonts/"  className='u-url refA'>https://www.vandelaydesign.com/serif-vs-sans-serif-fonts/</a> (Accessed: 9 June 2023).</li>
  </ul>}
        </section>
          {/* Related Articles for easy navigation*/}
        <section className='p-related relatedContent'>
        <h4 className='relatedTitle'>Related Articles</h4>
        <section className='relatedSpan h-card'>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'>Wireframes </h5>
        <p className='relatedSummary p-summary'> 
       Low-fidelity wireframes for Scroll Troll</p>
        <HashLink to='/Wireframes#top' className='readMoreLink u-url'> Read More</HashLink>
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

