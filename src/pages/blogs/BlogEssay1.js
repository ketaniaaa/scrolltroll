import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import EssayBanner from '../../images/blogimages/essay.JPG';
import icon from '../../images/icon.png';
import EssayPic from '../../images/blogimages/poem-portrait.png';
import '../../styles/blogTemplate.css';
import BackButton from '../../components/EntryBackButton';

export default class BlogEssay1 extends Component {
  render() {
    return (
     <main className='e-content blogEntryMain' id='#top'>
       
       <BackButton/>
        <img src={EssayBanner} alt="blah" className='u-photo entryImage' />


        <section className='h-card blogIconandButton'>
        <img src={icon} alt="..sndns" className='blogTempIcon' />

       <button className='nextButton'><Link to={'/'} className='blogNextButton'>Share Post</Link></button> 
        </section>


        <section className='e-content blogTempMain'>

        <h1 className='blogTitle p-name'>A Critical Analysis of &lsquo;POEMPORTRAITS&rsquo; by Es Devlin, Ross Goodwin, IYOIYO and Google Arts &amp; Culture.&nbsp; </h1>
        <h2 className='blogAuthor p-author'>@Ketania</h2>
        <p className='p-summary blogDescription'> An Essay exploring my chosen artwork in the context of Internet Artwork. This essay focuses on the idea of artifical intelligence and its ethical uses as an artistic tool. </p>
        <p className='dt-published blogTempDate'> 4.34PM. 14 May, 2023</p>
        
        <ul className='tabList navigation'>
          <li className='blogTab tab activeTab'><HashLink to='#blogID' id='blogTab'>Blog</HashLink></li>
            <li className='blogRefTab tab'><HashLink smooth to="#refList" id='refTab'>References</HashLink></li>

        </ul>

        <section className='h-card blogContentContainer' id='blogID'>
        <article className='e-content blogActiveContent bfCont'>
        <p>As artificial intelligence becomes more accessible to the art community, I have become more interested in using AI as a tool for creating artistic experiences. For this reason, I have chosen the net artwork ‘POEMPORTRAITS’ by Es Devlin to discuss.  Devlin’s artwork has highlighted the internet’s ability to create collective pieces that intersect visual and literary artwork. This essay will provide a critical analysis of the piece ‘POEMPORTRAITS’ in relation to the use of the internet as a medium through discussion of the artwork’s creatorship, interactive experience and aesthetic values. 
</p>
<p>‘POEMPORTRAITS’ requests users to provide a word and a webcam-generated photo of the user to create a two-word poem that is integrated onto the portrait of the user. Each portrait rendered features the poem repeated across the image to form an overlapped effect. The size of the font of the poem across the image is increased on the areas of the user's face. The original webcam photo is also recoloured with new vibrant pools of colours around the portrait. Each portrait has a unique poem with individual colourization of the user’s picture to create a one-of-a-kind artwork that is part of a larger collection. </p>
     <figure className='u-photo blogFigure'>
      <img src={EssayPic} alt="A poem portrat from Es Devlin with users portrait and the poem: This isolation of the light of the night, my wet wings break, the fresh black faces." className='blogFigure u-photo'/> 
      <figcaption className='p-caption figCap'>  <em>Figure 1:</em> My unique POEMPORTRAIT 
</figcaption>
       </figure>
     <p>Upon first interaction with &lsquo;POEMPORTRAITS&rsquo;, the viewer is made aware of the use of artificial intelligence. &nbsp;This emphasizes the need to focus on the uses of artificial intelligence in this analysis. The artwork makes use of two types of artificial intelligence; natural language processing (NLP) and image processing to create the final and unique &lsquo;poem portrait&rsquo;.&nbsp;</p>
<p>The program uses a corpus of &lsquo;19th-century poetry&rsquo; (Experiments with Google, 2019) and user-donated words to render a poem. The artwork makes use of existing poetry conventions and user-generated content to create a basis for each poem. The user, therefore, is also involved in the training of the NLP that makes &lsquo;POEMPORTRAITS&rsquo; possible by adding to the training corpus. &lsquo;POEMPORTRAITS&rsquo; also makes use of image processing that maps a user&rsquo;s face based on an image from a webcam to create the final artwork, overlapping the poem and the user&rsquo;s face. &nbsp;The program is dependent on the internet to exist as the training models are hosted online by Google Cloud AI and TensorFlow. The role of artificial intelligence in this piece categorizes it as a piece of AI artwork which provides an interesting platform to discuss the role of the artist and the validity of the artwork.&nbsp;</p>
<p></p>
<p>When approaching the topic of AI art, an initial question to ask is who is the artist? In &lsquo;POEMPORTRAITS&rsquo;, the creation of the final product is left to the user to provide input via word and image while the algorithm renders the final product. The authorship is therefore under question since the training of the algorithm is based on 25 million words from other poets and users who are not credited as the artist. Gifford et al. (2019) argue that artwork that makes use of AI should be credited to the artist based on authenticity and leveraging of tools rather than their creation of the final product (pp. 12). Authenticity is outlined by Gifford et.al as the&nbsp;intention&nbsp;behind the work of art (2019, pp. 6). Devlin rationales the piece as an attempt to create a collaborative artwork in which each viewer can possess a small part of the broader work of art. This, therefore, shows the artist&apos;s intention, where Devlin uses artificial intelligence to fulfil their vision for the piece. This clear intention via the artist disputes the idea of the AI being the creator of the work.&nbsp;</p>
<p>Jennifer Aue further supports this claim by identifying AI as a tool rather than an artist or a medium. She argues that there is currently no process for producing AI which produces art that does not involve &lsquo;human creativity&rsquo; in&nbsp;both&nbsp;the creation of the artwork and the training of the algorithm. This, therefore, means that AI in artwork can be thought of as a means to produce human expression at a scale that the artist is not physically able to. This is clear within &lsquo;POEMPORTRAITS&rsquo; as large-scale collaboration is not possible without the intervention of the artificial intelligence that has been created by Devlin and Ross to fulfil the intention of creating poetry and portraits. We see clearly in &lsquo;POEM PORTRAITS&rsquo;, that there is clear evidence that AI is a tool rather than the artist or creator.&nbsp;</p>
<p></p>
<p>The role of AI as the tool to produce &lsquo;POEMPORTRAITS&rsquo; can also confirm the internet as an intentional medium for the work. &nbsp;The user interacts and accesses the artwork via the internet which is made possible by the browser&rsquo;s use of the TensorFlow and Google Cloud &nbsp;AI APIs to render the artwork. The use of the internet can be seen as an intentional choice in this artwork as artificial intelligence does not specifically require an internet connection. The artist has deliberately chosen to use browser-friendly forms of NLP and computer vision to create &lsquo;POEMPORTRAITS&rsquo; because of their intention for collaborative artwork.&nbsp;</p>
<p></p>
<p>McLuhan (1964) highlights the fact that a medium goes above merely being a platform for interaction with an artwork, but fundamentally affects the contents and provides context to a piece. The context provided by a chosen medium, therefore, results in the convention. According to Maillioux (1983), conventions refer to &lsquo;shared practices&rsquo;. Mailloux states that the conventions of the medium &lsquo;capture an essential aspect of our everyday notion of social convention&rsquo; (pp. 402). McLuhan &amp; McLuhan further this argument by suggesting that mediums allow for the enhancement of a pre-existing interaction of society while making another facet of traditional interaction defunct (1988, pp. 32). This idea of enhancing a social convention can be clearly seen in the use of the internet as a medium as the internet can enhance aspects such as accessibility, communication and collaboration while making isolation and individualized creation obsolete (Euchner 2016, pp. 9). The overarching convention of the internet can therefore pertain to the concept of&nbsp;connection, which embodies the ideas of communication and collaboration (Adrian, 2013). &nbsp;The convention of connection is emphasised in &lsquo;POEMPORTRAITS&rsquo;.</p>
<p></p>
<p>The enhancement and discernment of the above-mentioned social interactions and conventions that are essential to Internet Art are demonstrated in the work &lsquo;POEMPORTRAITS&rsquo;. Devlin initially highlights the convention of accessibility by ensuring that an audience can exist anywhere as long as there is an internet connection. This intentional choice to use the internet has expanded the spatiotemporal modality of the artwork by extending the interactive artwork past the limitations of a single exhibition space in order to expand connection. Subsequently, the isolation of the artwork is therefore destroyed due to the conventions of the internet. &lsquo;POEMPORTAITS&rsquo; also leverages the internet&apos;s ability to amplify collaboration. This is seen in the exchange of words and pictures of the user to create a collaborative experience. This scale of collaboration would not be possible without the use of the internet as the artwork if the piece only existed within the realms of a physical gallery space and was dependent on locally stored algorithms. As the internet has become a communal space with the advent of social media (Morris and Ogan, 1996), the integral essence of the internet is highlighted in &lsquo;POEMPORTRAITS&rsquo; via both the creation of a final poem portrait and the underlying process of creating the pieces. The user is instrumental in not only creating their own portrait and poem but of aiding the creation of others. This is demonstrated through the evolution of the algorithm which depends on users&nbsp;donating&nbsp;a word that is added to the corpus. This, therefore, displays the use of the internet&rsquo;s conventions to enhance the &rsquo;POEMPORTRAITS&rsquo;.&nbsp;</p>
<p></p>
<p>The ability of browser-based APIs that enables viewers to interact with &lsquo;POEMPORTRAITS&rsquo; on a large scale subsequently allows for the mass production of individual portraits. Walter Benjamin (1936) proposes that the integral&nbsp;aura&nbsp;of artwork is destroyed when mechanical reproduction is introduced. This aura refers to a &lsquo;unique experience&rsquo; of an individual artwork that exists in a specific &lsquo;time and space&rsquo; (pp. 146). It can be argued that this concept is negated in &lsquo;POEMPORTRAITS&rsquo; as there is an idiosyncratic experience of the artwork. There is a clear sensorial and spatiotemporal experience of this piece. The user is forced to physically interact with their keyboard to provide a word and with their webcam for a picture. This interaction with the physical hardware that exists in space is a direct sensorial experience of the artwork. The spatiotemporal experience of the piece can be attributed to the processing of the picture and words. This wait for the final artwork exists in a specific space in time and therefore proves &lsquo;POEMPORTRAITS&rsquo; distinct experience in time. The artwork is also individually experienced by each user because each interaction produces a different outcome. This process of designing the interaction of the artwork shows a distinct aura that is internalized by the viewer.&nbsp;</p>
<p></p>
<p>The unique aura of &lsquo;POEMPORTRAITS&rsquo; is further legitimized by the output of the experience. The final product is an exclusive portrait. Carrier (2020, pp. 2) states that in cases of internet artwork,&nbsp;reproduction&nbsp;is what matters. This sentiment is echoed in &lsquo;POEMPORTRAITS&rsquo; as the intention of the work hinges on the intention of creating collaborative artwork. Without the mechanical intervention of the internet, the artwork&apos;s message is lost. The mass collaboration by viewers is what enables the creation of a take-away piece for each viewer for which there is an&nbsp;aura. As each experience is filled with a new set of words and digitally edited pictures, the experience of the artwork cannot be reproduced. This indicates that because the numerous experiences of the artwork cannot be replicated, there is an&nbsp;aura&nbsp;for the piece.&nbsp;</p>
<p></p>
<p>Benjamin also proposes that reproduction &ldquo;detaches &hellip; the object from the domain of tradition&rdquo; (2008, pp. 147). This can also be disputed in the case of &lsquo;POEMPORTRAITS&rsquo;. Carrier (2020) states that new media forces the artist to rework the process of art-making. Devlin makes use of a new medium - the internet - to create an interactive art piece which can be seen to adhere to traditions of interactive art. Cover (2006, pp. 141) solidifies this by defining interactive art pieces as those that allow the audience to &ldquo;co-author and re-narrate&rdquo; a work that was begun by the artist. &lsquo;POEMPORTRAITS&rsquo; is a clear example of this by allowing the audience to continue the vision of poem and portrait creation. Devlin further pays homage to the traditional craft by translating the weaving artwork of Ptolemy Mann into this digital space. The inspiration from Mann can be identified by the background imagery of the site and in the colourization of the users&rsquo; portraits. This, therefore, shows that the artwork &lsquo;POEMPORTRAITS&rsquo; demonstrates a clear connection to tradition.&nbsp;</p>
<p></p>
<p>&lsquo;POEMPORTRAITS&rsquo; by Devlin Es demonstrates the unique use of artificial intelligence as a tool for interactive artistic creation on the internet. This has been demonstrated in this essay through the initial discussion regarding the authorship of the artwork. The authorship has been raised by investigating the role of artificial intelligence as a tool to produce the artist&apos;s vision. The leveraging of the medium for &lsquo;POEMPORTRAITS&rsquo; has also been discussed in order to highlight the advantages of the internet for creating a collaborative experience. Finally, the aura of &lsquo;POEMPORTRAITS&rsquo; has been proven by an interrogation of the embodied experience of the work. To conclude this essay, Ricci&rsquo;s (2019) sentiment &apos;authenticity usually lies in the code&rsquo; reigns true in the case of Es Devlin&rsquo;s &lsquo;POEMPORTRAITS&rsquo; &nbsp;as this essay has demonstrated the manner in which code has provided a foundation for a broad collective artwork that contains the individual experience of interactive art.&nbsp;</p>
<p></p>
<p></p>
        </article>



 
        <ol className='h-card blogReferenceSection'>
      
   <h3 className='p-name referenceList' id='refList'>References</h3>
        <li className='author'>Benjamin, W. (2008)&nbsp;The Work of Art in the Age of Mechanical Reproduction. Penguin UK.</li>
<li className='author'>Carrier, D. (2020)&nbsp;The Work of Art in the Age of the Internet. Available at:<a href="https://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/" className='u-url refA'>&nbsp;https://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/</a> (Accessed: 2 May 2023).</li>
<li className='author'>Cover, R. (2006) &lsquo;Audience inter/active: Interactive media, narrative control and reconceiving audience history&rsquo;,&nbsp;New Media &amp; Society, 8(1), pp. 139&ndash;158. Available at:<a href="https://doi.org/10.1177/1461444806059922" className='u-url refA'>&nbsp;https://doi.org/10.1177/1461444806059922</a>.</li>
<li className='author'>Devlin, E. and Goodwin, R. (no date)&nbsp;POEMPORTRAITS by Es Devlin, Ross Goodwin, IYOIYO, Google Arts &amp; Culture - Experiments with Google. Available at:<a href="https://experiments.withgoogle.com/poemportraits" className='u-url refA'>&nbsp;https://experiments.withgoogle.com/poemportraits</a> (Accessed: 1 May 2023).</li>
<li className='author'> Euchner, J. (2016) &lsquo;The Medium is the Message&rsquo;,&nbsp;Research-Technology Management, 59, pp. 9&ndash;11. Available at:<a href="https://doi.org/10.1080/08956308.2016.1209068" className='u-url refA'>&nbsp;https://doi.org/10.1080/08956308.2016.1209068</a>.</li>
<li className='author'>Jennifer Aue (2019)&nbsp;The Relationship Between Art and AI | by Jennifer Aue | IBM Design | Medium. Available at:<a href="https://medium.com/design-ibm/the-role-of-art-in-ai-31033ad7c54e" className='u-url refA'>&nbsp;https://medium.com/design-ibm/the-role-of-art-in-ai-31033ad7c54e</a> (Accessed: 1 May 2023).</li>
<li className='author'>Mailloux, S. (1983) &lsquo;Convention and Context&rsquo;,&nbsp;New Literary History, 14(2), pp. 399&ndash;407. Available at:<a href="https://doi.org/10.2307/468693" className='u-url refA'>&nbsp;https://doi.org/10.2307/468693</a>.</li>
<li className='author'>McCormack, J., Gifford, T. and Hutchings, P. (2019) &lsquo;Autonomy, Authenticity, Authorship and Intention in computer generated art&rsquo;. arXiv. Available at:<a href="https://doi.org/10.48550/arXiv.1903.02166" className='u-url refA'>&nbsp;https://doi.org/10.48550/arXiv.1903.02166</a>.</li>
<li className='author'>McLuhan, M. (1964) &lsquo;The Medium is the Message (1964)&rsquo;, in&nbsp;Crime and Media. Routledge.</li>
<li className='author'>McLuhan, M., and McLuhan, E. 1988. The Laws of Media: The New Science. Toronto: University of Toronto Press.&nbsp;</li>
<li className='author'>Morris, M. and Ogan, C. (1996) &lsquo;The Internet as Mass Medium&rsquo;,&nbsp;Journal of Computer-Mediated Communication, 1(4), p. JCMC141. Available at:<a href="https://doi.org/10.1111/j.1083-6101.1996.tb00174.x" className='u-url refA'>&nbsp;https://doi.org/10.1111/j.1083-6101.1996.tb00174.x</a>.</li>
<li className='author'>POEMPORTRAITS&nbsp;(no date). Available at:<a href="https://artsexperiments.withgoogle.com/poemportraits " className='u-url refA'>&nbsp;https://artsexperiments.withgoogle.com/poemportraits</a> (Accessed: 1 May 2023).</li>
<li className='author'>Ricci, B. (2020)&nbsp;Net Art and How The Internet Has Created A New Medium,&nbsp;Artland Magazine. Available at:<a href="https://magazine.artland.com/agents-of-change-internet-net-art-how-the-world-wide-web-has-affected-the-way-we-make-art/" className='u-url refA'>&nbsp;https://magazine.artland.com/agents-of-change-internet-net-art-how-the-world-wide-web-has-affected-the-way-we-make-art/</a> (Accessed: 1 May 2023).</li>
<li className='author'>Robert Adrian X Turns 80 -&nbsp;(no date)&nbsp;Ars Electronica Blog. Available at:<a href="https://ars.electronica.art/aeblog/en/2015/02/21/robert-adrian-x-turns-80/" className='u-url refA'>&nbsp;https://ars.electronica.art/aeblog/en/2015/02/21/robert-adrian-x-turns-80/</a> (Accessed: 2 May 2023).</li>
       </ol>
      
        </section>
</section>
<HashLink smooth to="#top"> Back to top</HashLink>
     </main>
    )
  }
}
