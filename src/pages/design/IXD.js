import React, { Component } from 'react'


import EssayBanner from '../../images/designimages/ixd.JPG';
import icon from '../../images/kicon.png';
import '../../styles/blogTemplate.css';
import BackButton from '../../components/EntryBackButton';
import ShareButton from '../../components/ShareButton';


import Screens from '../../images/designimages/screens.png';
import Flows from '../../images/designimages/flow.png';
import Journey from '../../images/designimages/journey.png';
import Map from '../../images/designimages/map.png';

import SubscribeButton from '../../components/SubscribeButton';
import TopButton from '../../components/BlogToTop';
import { HashLink } from 'react-router-hash-link';


import { Helmet } from 'react-helmet';

export default class IXD extends Component {
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
        <title>IxD Process</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="User experience and interaction design process of Scroll Troll"/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="Ixd Process" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/"/>
       <meta name="keywords" content="wireframes, lf, hf ,high fidelity wireframes, low fidelity wireframes, app design , web design , ux design , ui design , uxui, flow chart,emotional journey, ixd, user experience design , ucd , user centered design "/>
      </Helmet>
        <BackButton/>
        <img src={EssayBanner} alt="blah" className='u-photo entryImage' />


        <section className='h-card blogIconandButton'>
        <img src={icon} alt="..sndns" className='blogTempIcon' />
<ShareButton/>
        </section>


        <section className='e-content blogTempMain'>

        <h1 className='blogTitle p-name'> IxD Process </h1>
        <h2 className='blogAuthor p-author'>@Ketania</h2>
        <p className='p-summary blogDescription'> The process of curating the interaction and user experiences of Scroll Troll. </p>
        <p className='dt-published blogTempDate'>  3.50PM 24 June, 2023</p>
        
       <ul className="tabList navigation">
                <li ><button onClick={() => this.handleTabClick(0)} className={`tabButton ${activeTab === 0 ? 'activeTab' : 'inactive'}`}> Site Architecture</button></li>
                <li ><button onClick={() => this.handleTabClick(1)} className={`tabButton ${activeTab === 1 ? 'activeTab' : 'inactive'}`}> User Flows</button></li>
                 <li ><button onClick={() => this.handleTabClick(2)} className={`tabButton ${activeTab === 2 ? 'activeTab' : 'inactive'}`}> Emotional Journey</button></li>
                   <li ><button onClick={() => this.handleTabClick(3)} className={`tabButton ${activeTab === 3 ? 'activeTab' : 'inactive'}`}> References</button></li>
             </ul>


        <section className='h-card blogContentContainer' id='blogID'>
             { activeTab === 0 &&
       <article className={`e-content designActiveContent bfCont ${activeTab === 5 ? 'activeSection' : 'inactiveSection'}`}>
 <h3 className='p-name wireframeTitle'>Site Architecture</h3>
<img src={Map} alt="Grid layout example" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  >
     When approaching the site map, I wanted a very clean-cut website with minimal sections and pages for ease of navigation. I knew that I did not want to make a separate page linked in the navigation bar for the internet artwork as I wanted to ensure that the internet artwork was inherent to the website and presented to the user upon first entry of Scroll Troll. This is why I decided to feature the internet artwork on the homepage, leaving the other main pages for the navigation bar the blog section and the design section. This is because I knew that the artwork itself would be quite intense and abrasive and therefore opted for a minimalist design regarding the other pages. All main pages that a required for the exam can be accessed via the navigation bar which holds links to the homepage via the logo and the site name and to theory and blog work via the links. I have added extra links that are not inherent to the rubric in the footer because I still view these pages as important. The footer allows the user to interact with my original design documents in Figma and access my GitHub repository. I have also added a site map for the exam for heightened accessibility. 
     </p>
   <p className='e-content wireframeP'  > 
    </p>
      </article>}
        { activeTab === 1 &&
       <article className={`e-content designActiveContent bfCont ${activeTab === 5 ? 'activeSection' : 'inactiveSection'}`}>
 <h3 className='p-name wireframeTitle'>User Flows</h3>
<img src={Flows} alt="Scroll Troll flow chart" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  >The user flow is quite simple in the fact that a user can get from entry of the site to any entry or page in three clicks or less which is vital for reducing the strain to find information. The internet artwork is available on the homepage which is the entry point for the website. My internet artwork is the interactions with the forms via sign-up for Scroll Troll. I have also ensured that this section can be accessed via a single click from anywhere on the page through the static sign-up button on the navigation bar and on entries via the ‘share post’ button. The reason that I have a prioritized flow to this section is that the basis of this project is to create an internet artwork. This means that my user will likely be interacting with Scroll Troll for the artistic experience over everything else and therefore this feature must be made apparent as often as possible to the user. According to Kalbach (2007, pp. 20), in order to create a good website, the navigation is of utmost importance as the navigation should consider the kind of user and their intentions for the website in order to adhere to user-centred design (UDC) principles. I feel that Scroll Troll embodies just this as I have prioritized navigation to my internet artwork. I also know that markers should be able to find relevant information easily and therefore the theory and design sections are easy to find and clearly laid out. </p>
  <img src={Screens} alt="Screens of Scroll troll and the flows between them" className='u-photo styleImg'/>
   <p className='e-content wireframeP'  > Since the internet artwork is long and intentionally hard to get through with additional steps, I have tried to ensure that interaction with non-artwork aspects of the site is highly useable. As seen above, the flow from screens is quite linear. The design and blog sections have the same layouts and use the same design template so these pages also have the exact same flow from the home page to the selection page and finally to the blog page. This is because I have set up expectations through the use of the same design and therefore the interactions should match the design. 
</p>
   <p className='e-content wireframeP'>The longest journey from starting on the home page is the internet artwork. This can be seen as bad UI because I have segmented a form and made the process of creating an account incredibly long which can deter a user from wanting to interact with a site. Doherty and Sorenson support this sentiment by arguing that successful user flows ensure that a process takes up the least amount of time possible because a good experience does not weigh heavily on a user’s attention span (pp 4387, 2015).  It is my intention to subvert this core principle of user experience and therefore I have segmented screens to create a longer experience of the artwork. This flow also intentionally creates a specifically intended emotional journey for the user which is discussed in the next section.
</p>
      </article>}
        { activeTab === 2 &&
       <article className={`e-content designActiveContent bfCont ${activeTab === 5 ? 'activeSection' : 'inactiveSection'}`}>
 <h3 className='p-name wireframeTitle'>Emotional Journey</h3>
<img src={Journey} alt="Emotional Journey of Scroll Troll user" className='u-photo styleImg'/>
     <p className='e-content wireframeP'  > 
The emotional journey of a website usually aims to predict the feelings of the user in hopes that the reactions of the user are positive. In my emotional journey, there is a disconnect as I am to provide the user with two different feelings depending on their position on the website. For the entirety of the website, excluding my internet artwork, I wanted to create a positive experience for markers as a core skill that is taught in the course is how to produce workable products. This is reflected in the interaction with entries and navigation.
</p>
   <p className='e-content wireframeP'  > The second journey is more nefarious as I aim to curate an experience that gets worse and worse through the progression of the journey. This takes place with the interaction with my internet artwork. The user is gently introduced to the intentionally bad UI and UX and the experience aims to become more and more annoying throughout the form in order to result in utter dissatisfaction by the end of the artwork. This building anger is what I think leverages the subversion of UX principles as I used good UX and UI to lure the user into signing up to begin the assault of bad design.  </p>
      </article>}
  { activeTab === 3 &&
 <ul className={`h-card blogReferenceSection ${activeTab === 3 ? 'activeSection' : 'inactiveSection'}`}>
    <h3 className='p-name referenceList' id='refList'>References</h3>
    <li className='author'>Doherty, R.A. and Sorenson, P. (2015) &lsquo;Keeping Users in the Flow: Mapping System Responsiveness with User Experience&rsquo;, <em>Procedia Manufacturing</em>, 3, pp. 4384&ndash;4391. Available at: <a href="https://doi.org/10.1016/j.promfg.2015.07.436" className='u-url refA'>https://doi.org/10.1016/j.promfg.2015.07.436</a>.</li>
    <li className='author'>&nbsp; &nbsp;<div>Kalbach, J. (2007) <em>Designing Web Navigation: Optimizing the User Experience</em>. O&rsquo;Reilly Media, Inc.</div>&nbsp;</li>
  </ul>}
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
        <h5 className='relatedArticle p-name'> Wireframes </h5>
        <p className='relatedSummary p-summary'> Low-fidelity Wireframes for Scroll Troll.</p>
        <HashLink to='/Wireframes' className='readMoreLink u-url'> Read More</HashLink>
        </article>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'>UX and UI Exam Reflection </h5>
        <p className='relatedSummary p-summary'> This blog post explores UX and UI implementation of Scroll Troll.</p>
        <HashLink to='/UXReflection3#top' className='readMoreLink u-url'> Read More</HashLink>
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
