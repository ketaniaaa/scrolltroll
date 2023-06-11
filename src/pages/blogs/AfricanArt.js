import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import EssayBanner from '../../images/blogimages/essay.JPG';
import icon from '../../images/icon.png';
import EssayPic from '../../images/blogimages/poem-portrait.png';
import '../../styles/blogTemplate.css';
import BackButton from '../../components/EntryBackButton';
import { Helmet } from 'react-helmet';
export default class BlogEssay1 extends Component {
  render() {
    return (
     <main className='e-content blogEntryMain' id='#top'>
       
<Helmet>
  
        {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
        <title> African Digital Art and Ethnocomputing</title>
        <meta name='author' content='Ketania Govender'/>
          <meta name="description" content="African Digital Art and Ethnocomputing"/>
   
    <meta property="og:site_name" content="Scroll Troll" />
    <meta property="og:title" content="African Digital Art and Ethnocomputing" />
    <meta property="og:type" content="website" />
     <meta
      property="og:image"content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"/>
    <meta property="og:image:alt" content="Scroll Troll Logo" />
    <meta
      property="og:url" content="https://ketaniaaa.github.io/scrolltroll/#/EssayBlog"/>
       <meta name="keywords" content="Internet Art, AI art, ethics of art, african art, digital art, ethnocomputing, critical race theory, racial bias in technology, algoritmic bias, african development, tech in africa"/>
      </Helmet>

       <BackButton/>
        <img src={EssayBanner} alt="blah" className='u-photo entryImage' />


        <section className='h-card blogIconandButton'>
        <img src={icon} alt="..sndns" className='blogTempIcon' />

       <button className='nextButton'><Link to={'/'} className='blogNextButton'>Share Post</Link></button> 
        </section>


        <section className='e-content blogTempMain'>

        <h1 className='blogTitle p-name'>African Digital Art and Ethnocomputing </h1>
        <h2 className='blogAuthor p-author'>@Ketania</h2>
        <p className='p-summary blogDescription'> This week I discuss the readings regarding African digital art and the idea of ethnocomputing for empowerment of the African identity  </p>
        <p className='dt-published blogTempDate'> 5.34PM. 26 May, 2023</p>
        
        <ul className='tabList navigation'>
          <li className='blogTab tab activeTab'><HashLink to='#blogID' id='blogTab'>Blog</HashLink></li>
            <li className='blogRefTab tab'><HashLink smooth to="#refList" id='refTab'>References</HashLink></li>

        </ul>

        <section className='h-card blogContentContainer' id='blogID'>
        <article className='e-content blogActiveContent bfCont'>
<p>This week in theory we approach the topic of African Digital Art and Ethnocomputing. This topic is essential considering that this course focuses on creating a piece of Internet artwork as a South African.&nbsp;</p>
<p>Let me first elaborate on what ethnocomputing is. K&auml;hk&ouml;nen et al. (2006, pp128) raise the issue of cultural and technological overlap in computer sciences. Computer science which has resulted in the creation of the internet has largely been approached as an objective field considering its roots in mathematics and science. This sentiment, however, is incorrect. According to K&auml;hk&ouml;nen et al.,&nbsp;&lsquo;science is not constructed by scientists alone but is negotiated among several agents&rsquo;(pp 129). This refers to the idea that the science that has created the internet has been inherently biased by its creators who are a part of a culture and therefore negating the role of cultural context when approaching computing is unjust. I have discussed the role of technological bias in my blog entry regarding my internet artwork <Link to="/BlogEssay">rationale</Link>. To give a summation of the bias that affects countries such as South Africa and the global South at large is a historic lack of access to information. This lack of information has resulted in these regions being barred from participating equally in the progression of technology. For further understanding, I highly recommend that you refer to the above-linked entries. This lack of inclusion has subsequently resulted in the creation of ethnocomputing. Ethnocomputing refers to the re-constitution of the link between computing and culture in order to negate the reproduction of colonial ideas when approaching computational technology (Allen et. al. 2021, pp4). This idea of ethnocomputing is vital as it enables marginalized regions to engage on a higher level in a global zeitgeist.&nbsp;</p>
<p>According to Bisschoff (2017, pp264), engagement with Ethnocomputing allows for global connectivity that allows for the wider spread of the African identity. The internet as a medium is therefore a powerful tool to generate content regarding the content as it allows for heightened accessibility over traditional media and art forms. The creation of African digital art is not only helpful for affirming identity in the global community but has economic value for the continent. As previously discussed, the South accounts for a proportionally small amount of the world&rsquo;s wealth and this has further denied these communities from accessing information and tools for adding to global information (Pijnake &amp; Spronk 2017, pp342). Therefore, strengthening economies further solidifies African voices in an age of globalization. &nbsp;Examples of this include the creation of comic genres such as Afrofuturism and film industries like Nollywood. This demonstration of African digital art allows for Africans to re-represent themselves on their terms which is inherently empowering when battling the dissolution of colonial identities.&nbsp;</p>
<p>When approaching the creation of African digital art one must consider the socio-economic position of the culture. Bischoff gives evidence that Africans are more likely to engage in content that is mobile-friendly as cellular devices are more readily available than desktops. This insinuates that this constraint must be considered when creating digital art. In regards to my project, this would mean that it is vital to consider mobile functionality so that my internet artwork can be accessible to fellow Africans. This blog has largely discussed why the creation of African digital art and ethnocomputing is beneficial but there are constraints regarding the production.</p>
<p>A further issue with African digital art is its legitimacy. Vezi (2011) argues that digital art has not been approached as a substantial art form. This has resulted in digital and internet art not being given the same exhibition opportunities as traditional media as it is less often institutionalised in galleries and museums (pp42). As a result, this has prevented the preservation and curation of &nbsp;African digital art. This problem raises two questions for me: what defines art&nbsp;as&nbsp;art&nbsp;and does the institutionalisation of African art not reaffirm coloniality? The topic of the definition of art is constantly being reworked to accommodate new media as seen with photography and film and now digital and internet artwork. I think that considering the current trajectory of art research this issue will be amended in time. The second question I have raised refers to the nature of museums. Petty (2006) raises the issue that Western museums have often treated African art as an object of curiosity and have marked artwork from the continent as primitive, often negating works that highlight the identity of Africa and creating a less accessible space for Africans to view these works. This issue requires a rework of the curatorial process of galleries and museums but this also confirms the notion that the internet is a more potent space for the exhibition of African digital art due to its ability for wider accessibility.&nbsp;</p>
<p>&nbsp;As mentioned, hardware limitations prove legitimate but so do other lack of resources. In order to be able to display an African identity through art and computing, the African population requires literacy, internet access and opportunity. This issue again is the result of colonial pasts though this essay has demonstrated why this sector is of importance for funding. This week&apos;s readings have been of incredulous interest as I intend to investigate this topic further. Please look forward to the next blog regarding how I address enthnocomputing in my artwork and the historical injustice of computing specifically in NLP and Autocorrection bias.&nbsp;</p>
        </article>



 
        <ol className='h-card blogReferenceSection'>
      
   <h3 className='p-name referenceList' id='refList'>References</h3>
   <li className='author'>Bisschoff, L. (2017) &lsquo;The future is digital: an introduction to African digital arts&rsquo;, <em>Critical African Studies</em>, 9(3), pp. 261&ndash;267. Available at: <a href="https://doi.org/10.1080/21681392.2017.1376506" className='u-url refA'>https://doi.org/10.1080/21681392.2017.1376506</a>.</li>
   <li className='author'>Foy, M.L., Briana Green, Madison C. Allen, Lakisha (2021) &lsquo;Ethnocomputing and Computational Thinking&rsquo;, in <em>Computational Thinking in Education</em>. Routledge.</li>
   <li className='author'>Petty, N. (2006) &lsquo;African Art in Western Museums: Issues and Perspectives&rsquo;, <em>HIM 1990-2015</em> [Preprint]. Available at: <a href="https://stars.library.ucf.edu/honorstheses1990-2015/548" className='u-url refA'>https://stars.library.ucf.edu/honorstheses1990-2015/548</a>.</li>
   <li className='author'>Pijnaker, T. and Spronk, R. (2017) &lsquo;Africa&rsquo;s Legends: digital technologies, aesthetics and middle-class aspirations in Ghanaian games and comics&rsquo;, <em>Critical African Studies</em>, 9(3), pp. 327&ndash;349. Available at: <a href="https://doi.org/10.1080/21681392.2017.1371617" className='u-url refA'>https://doi.org/10.1080/21681392.2017.1371617</a>.</li>
   <li className='author'>K&auml;hk&ouml;nen, E. <em>et al.</em> (2006) &lsquo;Ethnocomputing: ICT in cultural and social context&rsquo;, <em>Communications of the ACM</em>, 49(1), pp. 126&ndash;130. Available at: <a href="https://doi.org/10.1145/1107458.1107466" className='u-url refA'>https://doi.org/10.1145/1107458.1107466</a>.</li>
   <li className='author'><em>Vezi - 2011 - Challenges facing artists and institutions when sh.pdf: WSOA4175A - Interactive Media IV-2023-SM1</em> (no date). Available at: <a href="https://ulwazi.wits.ac.za/courses/49205/files/4500288?wrap=1" className='u-url refA'>https://ulwazi.wits.ac.za/courses/49205/files/4500288?wrap=1</a> (Accessed: 26 May 2023).</li>

       </ol>
      
        </section>
</section>
<HashLink smooth to="#top"> Back to top</HashLink>
     </main>
    )
  }
}