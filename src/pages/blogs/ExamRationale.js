import React, { Component } from 'react'

import { HashLink } from 'react-router-hash-link';

import EssayBanner from '../../images/blogimages/rationale.png';
import icon from '../../images/kicon.png';
import Name from '../../images/designimages/nameform.png';
import Country from '../../images/designimages/country.png';
import Password from '../../images/designimages/password.png';
import Captcha from '../../images/designimages/recaptcha.png';
import Post from '../../images/designimages/post.png';


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
        <title> Exam Rationale: Internet Artwork</title>
        <meta name='author' content='Ketania Govender'/>
        <meta name="description" content="Rationale for Internet Artwork"/>
        <meta property="og:site_name" content="Scroll Troll" />
        <meta property="og:title" content="Rationale for Internet Artwork" />
        <meta property="og:type" content="website" />
        <meta property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
        <meta property="og:image:alt" content="Scroll Troll Logo" />
        <meta property="og:url" content="https://ketaniaaa.github.io/scrolltroll/#/EssayBlog"/>
        <meta name="keywords" content="Internet Art, AI art, african art, digital art, ethnocomputing, forms, bad ux , bad ui, parody, developer humor, design humor, user experience, user interface design, racial bias in technology, algoritmic bias, african development, tech in africa"/>
        </Helmet>


       {/* Entry Header that includes back button, essay banner, Title, description, Publishing date and sharing options */}
         <BackButton/>
         <img src={EssayBanner} alt="drawing of the African content with these symbols: </> to indicate code on the continent" className='u-photo entryImage' />
         <section className='h-card blogIconandButton'>
         <img src={icon} alt="..sndns" className='blogTempIcon' /> 
         <ShareButton/>
         </section>

        <section className='e-content blogTempMain'>
        <h1 className='blogTitle p-name'>Exam Rationale: Internet Artwork</h1>
        <h2 className='blogAuthor p-author'>@Ketania</h2>
        <p className='p-summary blogDescription'> The run down on what my internet artwork is about and why I have chosen it!  </p>
        <p className='dt-published blogTempDate'> 11.00AM. 26 June, 2023</p>
         <ul className="tabList navigation">
                <li ><button onClick={() => this.handleTabClick(0)} className={`tabButton ${activeTab === 0 ? 'activeTab' : 'inactive'}`}> Blog</button></li>
                <li ><button onClick={() => this.handleTabClick(1)} className={`tabButton ${activeTab === 1 ? 'activeTab' : 'inactive'}`}> References</button></li>
         </ul>


        {/* Blog Content with references */}
        <section className='h-card blogContentContainer' id='blogID'>
        <article className={`e-content blogActiveContent bfCont ${activeTab === 0 ? 'activeSection' : 'inactiveSection'}`}>
       <p className = 'e-content'>Scroll Troll aims to subvert the rules of UX and UI in order to create a sub-optimal experience. As I have become more familiar with designing digital products, I have had to become aware of the clear conventions used in UX and UI. This is discussed by Mailloux (1983, pp 400) as Mailloux refers to the convention as a repetitive practice that results in expectations of an experience by a viewer or user. I wanted to focus on UX and UI as I believe that design is inherent to digital creation. Internet experiences on the internet are curated and designed with the user&rsquo;s comfort in mind. I wanted to do the opposite and create an experience that is unpleasant for the user by demonstrating how simple UI choices can make an experience on the internet a negative one. I feel that I learn UI the best when I am visually shown what is right and what is wrong because UI design can be so subtle. An example of this is the debate of whether a primary button should be on the left or on the right. I wanted to create a sort of UX learning game that can demonstrate to a designer what not to do. By experiencing my internet artwork, one is able to pinpoint the interactions that can leave a nasty taste in a user&rsquo;s mouth.</p>
    <p className = 'e-content'>I initially wanted to make the entire website a plethora of bad designs but ultimately decided against this because this exam does require the final product to be usable. This meant that Scroll Troll would be segmented into one highly useable side which are the blog and design sections and one terrible-to-use side: the internet artwork. As the experience of the entire website is not uniform in interaction, I decided to prioritize the design elements to unify the website.&nbsp;</p>
    <p className = 'e-content'>In order to avoid making the internet artwork feel disconnected from the rest of the site, I decided to create a theme for the Bad UI and UX that could be repeated across Scroll Troll. This idea was a social media website. I knew that I wanted to make my internet artwork a form as forms offer many opportunities in a small section of an app to demonstrate how UI can affect a process on the internet. I did not want to create a form with no purpose and inspected where on the internet I most often encounter forms. My conclusion was via social media because social media requires an account to be created before you can interact with the main content of these websites. The creation of a parody social media website thus gave the user a reason to&nbsp;want&nbsp;to interact with the internet artwork that was more subtle than giving a user a random form on the internet. I also chose social media as the type of website to parody due to the recent acquisition of Twitter by Elon Musk which has demonstrated the effect of not understanding one&apos;s users and their needs. This is why I have emulated a Twitter layout with more childish, hand-drawn elements to reflect the genre of parody. I also felt that forms can be some of the things that I interact with on the internet the most that can have elements that are confusing and annoying and therefore I wanted to highlight these issues in my artwork. I also feel that forms are a vital aspect of interaction on the internet as forms are the gatekeepers of the majority of the content that people want to access. This struggle with signing up is a known battle of internet users and therefore demonstrates the manner in which this artwork is inherent to the nature of the internet as a medium and is critical of internet practice.&nbsp;</p>
    <p className = 'e-content'>Upon entry onto Scroll Troll, the user is immediately directed towards the sign-up page. I have noted that in all social media, the home page directs users to sign up and the user cannot navigate the website without a reminder to either sign up or log in. I, therefore, replicated this by making my homepage a selling point for social media. I have created a hero that gives the user an idea of what social media is about and how it differs from other social media websites by highlighting the internet &lsquo;trolling&rsquo; capabilities of Scroll Troll. I then provide a video regarding the functionality of the site to draw the user in. The home page finally ends with a sign-up form which can be accessed via a link on the hero and a link in the navigation bar. The user is also reminded to sign up when interacting with blog posts as the user is reminded to create an account when attempting to share posts. This constant reminder of the sign-up page, therefore, emphasises this component to the user. The UI and UX principles have been followed as I have implemented reduced actions for navigation, visual structure and accessibility to direct the user towards the form. The user is also likely to get through the form due to the promise of using an innovative social media platform.&nbsp;</p>
    <p className = 'e-content'>When initial interaction with the form, I decided to deploy less annoying UI faux-pas so that the user is less likely to abandon the interaction on the first step. The intentionally bad UI elements that I have deployed are incorrect feedback, visual hierarchy and colour connotations. I have made the title of the form look like the buttons seen elsewhere on the site. This sets the expectation to the user that this plain text is actually a functional component. The user is provided with further incorrect feedback when hovering over this element as the button turns red. The second aspect is a mildly annoying email input. Email inputs are usually on a text field that allows a user to type their entire email address out though in my form I allow the user to only enter the first part of their email and provide selections of domain providers and URLs. This can annoy the user as this breaks convention and dismisses the known user expectations. The final bad design element on this page is the use of a visual hierarchy to style the progress button. Actions and components leading to future status should be highly visible yet I have chosen to make mine the hardest part of the form to see with its small size and plain styling.&nbsp;</p>
    <p className = 'e-content'>I knew that I wanted to create an emotional rollercoaster for the user which is discussed in more detail in my IxD process. I wanted to gradually add more annoying features while scaling it back in other ways.&nbsp;</p>
    <p className = 'e-content'>The second part of my internet artwork is the name and age part of the form. According to the basic principles of User Interface Design, a process should reduce the cognitive loads as much as possible. I wanted to heighten the cognitive load there and extended a form that could easily be presented on a single page. To demonstrate this, I have included a progress bar that shows that the user is on the third step of the form when they are on the second. I have also aligned the progress bar so that it is cut off by the screen and the user is, therefore, unaware of how long this process will be. The next issue which is not only a reference to UX but also NLP, is autocorrect. When approaching the name input, I have decided to make this input result in an error to highlight the annoyance of facing autocorrect when entering a non-European name into text fields. The second nod to this idea of internet tools prioritizing functionality for Western users is the surname selection in which the user is given a text box with an autocomplete function. I have used a list of the top surnames in the United States of America and the United Kingdom to create my autocomplete. This means that a user cannot submit a non-European surname as the application explicitly demonstrates a lack of accommodation for minority groups. This injustice often found in NLP is further discussed in my blog post about Autocorrect bias.&nbsp;</p>
    <p className = 'e-content'>I have also added in a feature for the age input that is a game of the traditional snake. I wanted to make a bizarre input for a form and this is just that. While bizarre, the game can provide entertainment for the user and not be too annoying that the user is physically incapable of continuing. Finally, on this form, I have used the incorrect UI for a navigational button. I have used red for a button that should be in green, thus breaking the expectations of the user and creating confusion. This also elongates the process of navigation because the user must take longer to read the copy of the button clearly (Whitenton, 2021).&nbsp;</p>
    <figure className='u-photo blogFigure'>
          <img src={Name} alt="High Fidelity wireframe of name form" className='blogFigure u-photo'/> 
          <figcaption className='p-caption figCap'>  <em>Figure 1:</em> Name and Age form
          </figcaption>
          </figure>
    <p className = 'e-content'>The third part of my artwork is a locational form. This form is simple in the fact that it gives the user an option to select their country though only provides &lsquo;first-world&rsquo; countries. If the user is not from a country listed, they are forced to draw the flag and are given a notice that content will not be available in their region. This feature pays homage to the theory covered in this course regarding the importance of ethnocomputing. This feature demonstrates the manner in which software on the internet is prioritized for users in the global north. This is an experience that South Africans can relate to because I have often come across videos on Youtube or features on Tiktok can I cannot access because they have not been made available in South Africa. This interaction on the internet seems like a lame excuse to me and I therefore wanted to make note of it in my internet artwork.&nbsp;</p>
    <p className = 'e-content'>I further break convention in this form by providing an option to choose one province through the user with a provincial coat of arms rather than names. This means the user is forced to take more time to choose the correct option as the coat of arms is not the standard for identifying one&rsquo;s province. I have also added a slider for the input of a user&apos;s phone number instead of a text field, which means sliding to one&apos;s cellphone number is incredibly difficult. The navigation is again difficult to understand. I have used vague language and unnecessary conversational terms (<a href="https://www.nngroup.com/articles/author/page-laubheimer/">Laubheimer</a>, 2023) to confuse the user and again used incorrect colours for progress and backtracking.&nbsp;</p>
   <figure className='u-photo blogFigure'>
          <img src={Country} alt="High Fidelity wireframe of location form" className='blogFigure u-photo'/> 
          <figcaption className='p-caption figCap'>  <em>Figure 2:</em> Location form
          </figcaption>
          </figure>
    <p className = 'e-content'>In the security section of the page, I really aim to start frustrating the user. I have used a standard text input for the password but made the required elements of the password outrageous. While testing and styling this component, I had to add a link to the next step because this password was such an annoyance to create. For password validation, I break the rules of internet safety by simply asking the user if the password is okay or not instead of making them retype their password. I have also added security questions for account recovery. I think that the nature of account recovery questions is notorious for how bizarre they can be in order to ensure the user is the only person with the answers. This can be seen in Apple&rsquo;s recovery questions that ask things like &ldquo;What was the name of your first teacher&rdquo;. These questions are often about details minuscule enough for me not to remember so I wanted to make the questions on this form extremely bizarre. I also further diminish the users&apos; trust in the site by asking for their ID numbers.&nbsp;</p>
    <figure className='u-photo blogFigure'>
          <img src={Password} alt="High Fidelity wireframe of password form" className='blogFigure u-photo'/> 
          <figcaption className='p-caption figCap'>  <em>Figure 3:</em> Security form
          </figcaption>
          </figure>
    <p className = 'e-content'>In the final form, I have created a reCaptcha form. CAPTCHA is an acronym for &lsquo;Completely Automated Public Turing Test to Tell Computers and Humans Apart&rsquo;. Google&rsquo;s reCAPTCHA is the most common form of test that is encountered by internet users and is notorious for being confusing. According to Collins (2022), 19% of users have abandoned processes because of confusing CAPTCHA. This is obviously an issue and therefore I felt that it was appropriate to comment on in my internet artwork. I wanted to make an already annoying process even more annoying. To do this, I first added a timer to put the user under pressure. The presence of a timer tells the user that there is a likely consequence of not finishing the questions. When the timer stops, an annoying song will start playing which further distracts the user. The second aspect of this form that I have added is the nature of the questions. I used screenshots of past matric maths exams and edited them to look a bit fuzzy like the pictures provided in real reCAPTCHA forms which make the questions hard to read. In order to correctly fill out the form, the answers should be incorrect because it would be near impossible for the average person to complete equations correctly in 30 seconds and correctly remember information from high school. I also further confuse the user by using the correct styling of navigation buttons which breaks expectations set out in earlier forms.</p>
   <figure className='u-photo blogFigure'>
          <img src={Captcha} alt="High Fidelity wireframe of reCAPTCHA form" className='blogFigure u-photo'/> 
          <figcaption className='p-caption figCap'>  <em>Figure 4:</em> reCAPTCHA form
          </figcaption>
          </figure>
    <p className = 'e-content'>To end the internet artwork, I have created a mock social media feed page. The user is prompted to make a post but when adding text, the user is notified that the site has been sued for parody and therefore cannot sign users up. This final disappointment means that the reason for putting oneself through this terrible form is for nothing and therefore effort was wasted. The end of the artwork, therefore, feels like a cruel joke to the user as the product promised is not delivered.&nbsp;</p>
   <figure className='u-photo blogFigure'>
          <img src={Post} alt="High Fidelity wireframe of Scroll Troll Dashboard" className='blogFigure u-photo'/> 
          <figcaption className='p-caption figCap'>  <em>Figure 5:</em> Post Area
          </figcaption>
          </figure>
    <p className = 'e-content'>This blog has ultimately discussed the intentions for my internet artwork and its relation to the conventions of internet UX design and common experiences by users. This rationale has also provided detail about my artwork and given justification for different elements of the artwork. Scroll Troll aims to make parody of bad social media practices and highlight prevalent prejudice that is still present on the internet with commentary on the disconnect between North and South. This artwork also highlights current pain points of design for common internet components in hopes to demonstrate the need to design ideation of convention.</p>
        </article>



          {/* Reference Section*/}
        <ol className={`h-card blogReferenceSection ${activeTab === 1 ? 'activeSection' : 'inactiveSection'}`}>
        <h3 className='p-name referenceList' id='refList'>References</h3>
        <li className='author'>Collins, B. (2022) <em>Annoying CAPTCHA is still big for Google and e-commerce in bot battle, and likely to stay that way</em>, <em>CNBC</em>. Available at: <a href="https://www.cnbc.com/2022/12/17/why-annoying-captcha-is-still-big-for-google-e-commerce-in-bot-battle.html" className='u-url refA'>https://www.cnbc.com/2022/12/17/why-annoying-captcha-is-still-big-for-google-e-commerce-in-bot-battle.html</a> (Accessed: 26 June 2023).</li>
        <li className='author'>Doherty, R.A. and Sorenson, P. (2015) &lsquo;Keeping Users in the Flow: Mapping System Responsiveness with User Experience&rsquo;, <em>Procedia Manufacturing</em>, 3, pp. 4384&ndash;4391. Available at: <a href="https://doi.org/10.1016/j.promfg.2015.07.436" className='u-url refA'>https://doi.org/10.1016/j.promfg.2015.07.436</a>.</li>
         <li className='author'>Experience, W.L. in R.-B.U. (no date) <em>3 Common IA Mistakes (that Are All Due to Low Information Scent)</em>, <em>Nielsen Norman Group</em>. Available at: <a href="https://www.nngroup.com/articles/3-ia-mistakes/" className='u-url refA'>https://www.nngroup.com/articles/3-ia-mistakes/</a> (Accessed: 26 June 2023).</li>
         <li className='author'>Kalbach, J. (2007) <em>Designing Web Navigation: Optimizing the User Experience</em>. O&rsquo;Reilly Media, Inc.</li>
        <li className='author'>Mailloux, S. (1983) &lsquo;Convention and Context&rsquo;, <em>New Literary History</em>, 14(2), pp. 399&ndash;407. Available at: <a href="https://doi.org/10.2307/468693" className='u-url refA'>https://doi.org/10.2307/468693</a>.</li>
        <li className='author'><em>Using Fitts&rsquo;s Law to Make Links and Buttons Easier to Click</em> (2021). Available at: <a href="https://www.youtube.com/watch?v=R3TdamGweKw" className='u-url refA'>https://www.youtube.com/watch?v=R3TdamGweKw</a> (Accessed: 26 June 2023).</li>
        <li className='author'>Yablonski, J. (2020) <em>Laws of UX: Using Psychology to Design Better Products &amp; Services</em>. O&rsquo;Reilly Media, Inc.</li>
        </ol>
       </section>
      
        {/* Related Articles for easy navigation*/}
        <section className='p-related relatedContent'>
        <h4 className='relatedTitle'>Related Articles</h4>
        <section className='relatedSpan h-card'>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'>Autocorrection Bias </h5>
        <p className='relatedSummary p-summary'> An exploration of bias in the autorrect spellcheckers that we use on the internet and its effects on the Global South.</p>
        <HashLink to='/AutocorrectBias#top' className='readMoreLink u-url'> Read More</HashLink>
        </article>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'>African Digital Art and Ethnocomputing </h5>
        <p className='relatedSummary p-summary'> This week I discuss the readings regarding African digital art and the idea of ethnocomputing for empowerment of the African identity.</p>
        <HashLink to='/AfricanArt#top' className='readMoreLink u-url'> Read More</HashLink>
        </article>

        <article className='h-card relatedCard'>
        <h5 className='relatedArticle p-name'>Preparatory Work and Rationale </h5>
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