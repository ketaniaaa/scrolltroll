import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

import EssayBanner from "../../images/blogimages/process.JPG";
import icon from "../../images/kicon.png";
import EssayPic1 from "../../images/blogimages/progressbar.png";
import EssayPic3 from "../../images/blogimages/phonenumber.png";
import EssayPic2 from "../../images/blogimages/dob.png";
import EssayPic4 from "../../images/blogimages/name.png";
import EssayPic5 from "../../images/blogimages/trollinghehe.png";
import Inspo from '../../images/blogimages/inspo.png'

import "../../styles/blogTemplate.css";
import BackButton from "../../components/EntryBackButton";
import ShareButton from "../../components/ShareButton";
import SubscribeButton from "../../components/SubscribeButton";
import TopButton from "../../components/BlogToTop";
import ImageHover from "../../components/ImageHover";

import { Helmet } from "react-helmet";
export default class PrepBlog extends Component {
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
      <main className="e-content blogEntryMain" id="#top">
        <Helmet>
          {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
          <title> Preparatory Work for Scroll Troll</title>
          <meta name="author" content="Ketania Govender" />
          <meta
            name="description"
            content="Preperation, rationale and research for my internet artwork"
          />

          <meta property="og:site_name" content="Scroll Troll" />
          <meta property="og:title" content="Preparatory Work for Scroll Troll" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"
          />
          <meta property="og:image:alt" content="Scroll Troll Logo" />
          <meta
            property="og:url"
            content="https://ketaniaaa.github.io/scrolltroll/#/EssayBlog"
          />
          <meta
            name="keywords"
            content="Internet Art, AI art, ethics of ai art, poemportraits, google arts and culture, google experiments, poemportraits, essay"
          />
        </Helmet>

        <BackButton />
        <img
          src={EssayBanner}
          alt="Drawing of a trolls poem portrait"
          className="u-photo entryImage"
        />
        <ImageHover imageUrl={EssayBanner} />

        <section className="h-card blogIconandButton">
          <img src={icon} alt="..sndns" className="blogTempIcon" />

          {/* <button className='nextButton'><Link to={'/'} className='blogNextButton'>Share Post</Link></button>  */}
          <ShareButton />
        </section>

        <section className="e-content blogTempMain">
          <h1 className="blogTitle p-name">
            Preparatory Work and for my Internet Artwork{" "}
          </h1>
          <h2 className="blogAuthor p-author">@Ketania</h2>
          <p className="p-summary blogDescription">
            {" "}
            This blog post explores the development and design for my internet
            artwork.{" "}
          </p>
          <p className="dt-published blogTempDate"> 2.12AM. 6 June, 2023</p>
          <ul className="tabList navigation">
            <li>
              <button
                onClick={() => this.handleTabClick(0)}
                className={`tabButton ${
                  activeTab === 0 ? "activeTab" : "inactive"
                }`}
              >
                {" "}
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => this.handleTabClick(1)}
                className={`tabButton ${
                  activeTab === 1 ? "activeTab" : "inactive"
                }`}
              >
                {" "}
                References
              </button>
            </li>
          </ul>
          <section className="h-card blogContentContainer" id="blogID">
            <article
              className={`e-content blogActiveContent bfCont ${
                activeTab === 0 ? "activeSection" : "inactiveSection"
              }`}
            >
              <p className = 'e-content'>
                When approaching the design of Scroll Troll, I was largely
                influenced by the subreddit &lsquo;Intentionally Bad UI&rsquo;
                or &lsquo;r/badUIbattles&rsquo;. This subreddit explores fun and
                interesting ways to create the most annoying user interfaces. I
                wanted to use this inspiration to create a sort of learning
                material for how not to design interfaces.&nbsp; I was also largely inspired by this site: <a href="https://sharepointlist.com/" target='_blank' rel="noreferrer" >Service Never</a>
                which is a help desk that will never help you. This site is hilarious in the ways that it demonstrates bad UI while paying homage to 
                the design style of internet pages in the late 90s/ early 2000's. 
              </p>
                <figure className='u-photo blogFigure'>
          <img src={Inspo} alt="collage/moodbard of inpiration" className='blogFigure u-photo'/> 
          <figcaption className='p-caption figCap'>  <em>Figure 1:</em> Inspiration
          </figcaption>
          </figure>
              <p className = 'e-content'>
                My vision for the site is to create a form to sign-up for a
                parody social media website using intentionally bad UI that
                mimics the home pages of many other major social media sites.
                The use of a parody theme works hand-in-hand with the key
                concept of the website as I am parodying the design itself. I
                have named the website Scroll Troll because I am therefore
                &lsquo;trolling&rsquo; the user.
              </p>
             
              <p className = 'e-content'>
                The artwork will be contained on the homepage. I have chosen to
                include it on the homepage initially rather than on a separate
                page because I want to ensure thematic consistency between the
                site and artwork. This also allows for the other sections of the
                site that are important for grading such as blogs and designs
                are still accessible and usable by a marker in a non-invasive
                manner. I have largely maintained acceptable UI practice across
                these sections in order to meet the criteria for the
                assignment&rsquo;s UX and UI components. In order to still
                maintain the essence of parody, I have deployed my design
                schema. I wanted to ensure that the design is still relevant.
                Juke Box Print outline some trending UI themes for 2023 as flat
                design, branded illustrations and anti-design (2022). I have
                made use of the anti-design core tenements as well as
                neo-dadaist design in Scroll Troll as I believe that these
                design movements reflect the subject matter of the website.
                Anti-design and neo-dadaism in terms of graphic design have come
                to refer to meme culture (Nordstrom, 2022) and trolling is an
                essential aspect of internet meme culture. Trends I have seen
                within these movements make use of traditional graphic faux-pas
                such as the use of MS Paint drawings rather than high-quality
                vectors and childish fonts such as &lsquo;Comic Sans&rsquo;. I
                have translated this onto Scroll Troll by using a custom
                handwritten font and using hand-drawn images using pencil
                brushes to give the drawings a more juvenile feeling. This is
                elaborated on in the site&rsquo;s style guide.
              </p>
             
              <p className = 'e-content'>
                Social media sites often make use of eye-catching heroes on the
                home page to entice a user to sign up as an account is required
                to make use of the social function. I have looked at many sites
                that I use regularly such as Twitter, Pinterest, Instagram,
                Snapchat and even Google applications and have noticed that
                every site has a short call-to-action which prompts a user to
                create an account (Alypara &amp; Roynava, 2023). With a social
                media website, an account is essential and therefore I have
                decided to make Scroll Troll a social media website. I wanted to
                create a form that depicts this bad UI but I did not want the
                user to feel like they are filling in a sole form with no
                purpose. By providing context for the form artwork, I am also
                creating a more encompassing experience. This convention of
                social media inherently directs the user to want to sign up to
                see more content. The promise of engaging in content post form
                may also urge the user to complete it as I would like my user to
                experience each intended feature of the artwork form.
              </p>
              
              <p className = 'e-content'>
                The artwork would include scenarios such as wrong progression
                bars to confuse the user about where they are and swapping the
                design of buttons and headings so that convention is broken.
                Essentially I want to break the fundamental design principles
                that allow for smooth interaction with the site. The components
                I would like to add to my internet artwork will be further
                discussed below through an exploration of UI design principles.
                The main technical concern that I have is the handling of forms
                as I have not worked with forms before. In order to make this project do-able for me
                I have decided that form validation is not required for each instance of the artwork as the point is 
                to disappoint the user at the end when they are told that Scroll Troll cannot support users. 
                The important technical lessons to revise for my interent artwork are the state lectures since I am almost entirely relient on information provided by the user. 
              </p>
             
              <p className = 'e-content'>
                According to Fleck (2021), a key component of good UI design is
                avoiding complexity. This reduces the user&rsquo;s cognitive
                load and therefore makes the experience more enjoyable. This can
                be done through easy navigation and short forms. For my artwork,
                I would like to subvert this by creating an unnecessarily long
                form. This will be done by segmenting the form into many steps.
                This segmentation both adhered to UI rules and breaks them. I am
                adhering to guidelines by providing the user with minimal
                information on a page so as not to overload them so I aim to
                create inputs that transfer the load by being high-effort to
                complete. Another way to do this is to add a progress bar that
                is long and shows incorrect steps to both confuse the user and
                make it seem like the form is lengthy.&nbsp;
              </p>
             
                <figure className="u-photo blogFigure">
                  <img src={EssayPic1} alt="" className="blogFigure u-photo" />
                </figure>
              

              <p className = 'e-content'>
                This image is a prototype of a progress bar. In order to create
                this, I will images or SVG's. I did contemplate using the MUI stepper 
                though considering that I do not want a stepper that actually does its intended job 
                of correctly informing the user, swapping an image for each pages works fine. 
                This
                allows me to access the previous state and position on the site
                to update the colours of the progress bar. 
              . This bar will be an unordered list displayed as an
                inline flex with certain children having a green colour to
                indicate where in the form the user is. The progress bar will
                further break UI guidelines with styling. I am to shift the
                progress bar so it is not centred on the page. This means that
                steps will be cut off and the user is not aware of how long the
                form actually is. This also negates the proper use of negative
                space and grid alignment. &nbsp;I will further switch between
                form segments with a next button.&nbsp;
              </p>
              <p className = 'e-content'>
                The styling of the next button is simple in its rule-breaking: I
                will style the navigation link to have a smaller font size and
                swop cursors for normal text having a selection cursor while the
                link contains a highlight cursor. This breaks the convention of
                creating a visual hierarchy as the form progression links will
                not be emphasised and the user&apos;s expectation of a pointer
                cursor for links is broken.&nbsp;
              </p>
              <p className = 'e-content'></p>
              <p className = 'e-content'>
                Fleck also mentions that good UI should avoid over-complication.
                I aim to do just this in my artwork. Users have conventions for
                filling out forms and aspects of forms such as dates. For the
                birthday form input, I aim to overcomplicate this by creating a
                drop-down options menu. This follows convention but the
                convention will be broken by reordering numbers and months so
                that they are not in ascending. This will force the user to
                spend a bit of extra time trying to find the correct options for
                the input. This can be done by using the MUI components text
                input feature found here:&nbsp;
                <a href="https://mui.com/material-ui/react-text-field/">
                  https://mui.com/material-ui/react-text-field/
                </a>
                . This package will allow me to create most of the forms.
              </p>
             
                <figure className="u-photo blogFigure">
                  <img src={EssayPic2} alt="" className="blogFigure u-photo" />
                </figure>
              
              <p className = 'e-content'>
                Another key element is entering a phone number. Often users can
                type in a number and the only suggested input is the area code
                due to the length of phone numbers. I aim to complicate this
                process by using a slider with a range of 000 000 0000 - 999 999
                9999. This means that a large range of numbers is encapsulated
                in a small area of a slider. This is frustrating because the
                user is unable to easily find their number. This again will be
                created using MUI and will simply be change to include and min and max prop on the component.&nbsp;
              </p>
              
                <figure className="u-photo blogFigure">
                  <img src={EssayPic3} alt="" className="blogFigure u-photo" />
                </figure>
              
              <p className = 'e-content'>
                Addresses are often part of forms as they provide geographical
                information about a user. On social media sites, a user&apos;s
                country location allows for country-specific content such as on
                Twitter, trending topics can include the latest news about South
                Africa. I want to include this on my website by adding a field
                to enter a country. A concept that has been covered in
                interactive media is information geography. I want to highlight
                the lack of accommodation for the global south in Scroll Troll
                by introducing two input fields that focus on this. The first is
                country selection. The section will start off by asking you to
                choose your country though the options only consist of
                first-world countries and another option. If other is selected
                the user is navigated to a second form section where they are
                presented with a canvas box and prompted to draw their flag.
                This highlights the additional effort required for users, not in
                the UK or the US. This will be supplemented with an error
                message once the step has been submitted to inform the user that
                certain content will not be available in their region. Graham et
                al (2015, pp 91) suggest that due to colonial powers, the global
                south has not been empowered to add to information stores such
                as the Internet. This can be seen in the catering toward the
                global north in functionality and prioritization of features.
                Due to this inequality in information access, features are not
                catered towards the global south. Therefore, this feature of my
                artwork makes commentary on the lack of accommodation for
                countries such as South Africa and the rest of the global south.
                The artwork forces users no in the global north to access the
                information later due to added steps and insinuates that a
                product has not been developed with users from this region in
                mind. This will be created using Canvas which is outlined in
                this tutorial:&nbsp;
                <a href="https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258">
                  https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
                </a>{" "}
                . While this might be hard to create a drawing app myself, there are packages available such as ReactSketchCanvas which 
                provides a simple canvas for the user to draw on. This might be the approach I need to take as I am unsure of if I will have the time to learn
                how to create my own drawing app for one section of my artwork. This package therefore will save me time and allow me to adjust the sketching canvas with simple props for default colour and brush.
              </p>
             
              <p className = 'e-content'>
                The second feature I wanted to implement that comments on
                technological bias is auto-correct. Spellcheck or autocorrect is
                a form of machine learning called (Natural Language Processing)
                NLP (Kadlaskar, 2021). Hovy and Prabhumoye (2021,pp3) suggest
                that autocorrect is inherently biased because it prioritizes
                high-resource languages which tend to be European languages.
                This therefore means that text-correct often fails to account
                for regional dialects and names. If you have a non-English name
                such as my own you are already familiar with the constant red
                underlining for your name. I want to highlight this ML bias in
                my work by using the React AutoCorrect Input package found
                here:&nbsp;
                <a href="https://reactmaker.github.io/react-autocorrect-input/#/">
                  https://reactmaker.github.io/react-autocorrect-input/#/
                </a>{" "}
                to create an underline for none English names. This will be
                accompanied by MUI&rsquo;s error message ability for input
                fields. When a name is entered, it will be underlined in red and
                an error message saying &ldquo;Try another more normal
                name&rdquo; will appear. I can also create the error message with a simple 
                state detection that renders all names an error onInputChange. 
                 The autocorrect package allows the
                developer to create a list from which autocorrection is applied.
                I will make this feature by creating a simple list of two names
                for each letter that is suggested when a user puts in their
                name. For example, when I add &ldquo;Ketania&rdquo; as my input
                the autocorrect will suggest an English name such as
                &ldquo;Kate&rdquo;. Another option may be to create an autocomplete list which is supported by MUI which only 
                requires a simple plain JS list of names.
              </p>
            
                <figure className="u-photo blogFigure">
                  <img src={EssayPic4} alt="" className="blogFigure u-photo" />
                </figure>
             
              <p className = 'e-content'>
                The other feature that I plan on implementing is a
                &ldquo;troll&rdquo; button which propagates images across the
                screen on trolls using the CSS property to toggle between hidden
                and shown. A further feature planned to be included is a fake
                captcha. This captcha will use a simple function to check in the
                input answer is the correct provided answer. This captcha will
                ask the user for the solution to a complex equation but will
                only let the user progress in the answer is wrong.&nbsp;
              </p>
             
                <figure className="u-photo blogFigure">
                  <img src={EssayPic5} alt="" className="blogFigure u-photo" />
                </figure>
             
              <p className = 'e-content'>
                Other features to implement are a floating submit button. When
                the user reaches the end of the form, they will be presented
                will a button that is translated 20px on the Y and X on hover
                based on the user&apos;s cursor location.&nbsp;
              </p>
              <p className = 'e-content'>One feature that I think is crucial is a password input. This will require me to 
                look at REGEX notation in order to set password parameters. I believe that this is within my capabilities as 
                I have used regex for hashing and authorization in last years D3 project. 
              </p>
              <p className = 'e-content'>One feature that I should study up on is a quiz capability to create a mock reCAPTCHA. State in react can confuse me as I am used to using vanilla just and jQuery 
                or simple DOM access of elements via ids so checking an input against a set answer is something that I need to learn how to do. Lucky, there 
                are a vast number of Youtube videos that can aid me in my development of this feature. 
              </p>
              <p className = 'e-content'>
                A feature that proves difficult to implement given my skill is
                an input to scroll function inspired by this website. Ideally, I
                can implement a similar feature with bigger parameters that
                detects scrolling and a modal appears asking the user to input
                the Y-axis pixel scroll they desire.&nbsp;
              </p>
              <p className = 'e-content'>
                <a href="https://fibbery.herokuapp.com/scrodal/">
                  https://fibbery.herokuapp.com/scrodal/
                </a>
                .&nbsp;
              </p>
            </article>

            <ol
              className={`h-card blogReferenceSection ${
                activeTab === 1 ? "activeSection" : "inactiveSection"
              }`}
            >
              <h3 className="p-name referenceList" id="refList">
                References
              </h3>
              <li className="author">
                0 Fundamental UI Design Principles You Need to Know |
                Dribbble&nbsp;(no date). Available at:
                <a
                  href="https://dribbble.com/resources/ui-design-principles"
                  className="u-url refA"
                >
                  &nbsp;https://dribbble.com/resources/ui-design-principles
                </a>{" "}
                (Accessed: 4 June 2023)..
              </li>
              <li className="author">
                A Full Guide to How to Create a Social Media Website&nbsp;(no
                date)&nbsp;Cleveroad Inc. - Web and App development company.
                Available at:
                <a
                  href="https://www.cleveroad.com/blog/how-to-create-a-social-media-website/"
                  className="u-url refA"
                >
                  &nbsp;https://www.cleveroad.com/blog/how-to-create-a-social-media-website/
                </a>{" "}
                (Accessed: 4 June 2023).
              </li>
              <li className="author">
                Biggest Graphic Design Trends for 2023 - Jukebox Print&nbsp;(no
                date). Available at:
                <a
                  href="https://www.jukeboxprint.com/blog/15-of-the-Biggest-Graphic-Design-Trends-for-2023"
                  className="u-url refA"
                >
                  &nbsp;https://www.jukeboxprint.com/blog/15-of-the-Biggest-Graphic-Design-Trends-for-2023
                </a>{" "}
                (Accessed: 4 June 2023).
              </li>
              <li className="author">
                GEO: Geography and Environment - Wiley Online Library&nbsp;(no
                date). Available at:
                <a
                  href="https://rgs-ibg.onlinelibrary.wiley.com/doi/full/10.1002/geo2.8"
                  className="u-url refA"
                >
                  &nbsp;https://rgs-ibg.onlinelibrary.wiley.com/doi/full/10.1002/geo2.8
                </a>{" "}
                (Accessed: 4 June 2023).
              </li>
              <li className="author">
                Hovy, D. and Prabhumoye, S. (2021) &lsquo;Five sources of bias
                in natural language processing&rsquo;,&nbsp;Language and
                Linguistics Compass, 15(8), p. e12432. Available at:
                <a
                  href="https://doi.org/10.1111/lnc3.12432"
                  className="u-url refA"
                >
                  &nbsp;https://doi.org/10.1111/lnc3.12432
                </a>
                .
              </li>
              <li className="author">
                Miranda, L. (2020) &lsquo;Canvas with
                React.js&rsquo;,&nbsp;Medium, 25 March. Available at:
                <a
                  href="https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258"
                  className="u-url refA"
                >
                  &nbsp;https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
                </a>{" "}
                (Accessed: 7 June 2023)
              </li>
              <li className="author">
                {" "}
                Nordstrom, G. (2022) &lsquo;Shitposts as a Neo-Dadaist
                Movement&rsquo;,&nbsp;Mountaineer Undergraduate Research Review,
                7(1). Available at:
                <a
                  href="https://researchrepository.wvu.edu/murr/vol7/iss1/5"
                  className="u-url refA"
                >
                  &nbsp;https://researchrepository.wvu.edu/murr/vol7/iss1/5
                </a>
              </li>
              <li className="author">
                painfullymoronic (2023) &lsquo;reddit bad
                ui?&rsquo;,&nbsp;r/badUIbattles. Available at:
                <a
                  href="https://doi.org/www.reddit.com/r/badUIbattles/comments/13p9y3v/reddit_bad_ui/"
                  className="u-url refA"
                >
                  &nbsp;www.reddit.com/r/badUIbattles/comments/13p9y3v/reddit_bad_ui/
                </a>{" "}
                (Accessed: 9 June 2023).
              </li>
            </ol>
          </section>
          {/* Related Articles for easy navigation*/}
          <section className="p-related relatedContent">
            <h4 className="relatedTitle">Related Articles</h4>
            <section className="relatedSpan h-card">
              <article className="h-card relatedCard">
                <h5 className="relatedArticle p-name">African Digital Art </h5>
                <p className="relatedSummary p-summary">
                  {" "}
                  The importance of African digital art and ethnocomputing.
                </p>
                <HashLink to="/AfricanArt#top" className="readMoreLink u-url">
                  {" "}
                  Read More
                </HashLink>
              </article>

              <article className="h-card relatedCard">
                <h5 className="relatedArticle p-name">
                  {" "}
                  Final Development Reflection{" "}
                </h5>
                <p className="relatedSummary p-summary">
                  {" "}
                  The latest dev blog regarding the exam changes of Scroll
                  Troll.
                </p>
                <HashLink
                  to="/DevBlog#top"
                  className="readMoreLink u-url"
                >
                  {" "}
                  Read More
                </HashLink>
              </article>

              <article className="h-card relatedCard">
                <h5 className="relatedArticle p-name">Exam UXUI Reflection </h5>
                <p className="relatedSummary p-summary">
                  An updated reflection of the UX and UI of Scroll Troll and all
                  the changes made.
                </p>
                <HashLink to="/ExamReflection#top" className="readMoreLink u-url">
                  {" "}
                  Read More
                </HashLink>
              </article>
            </section>

            <section className="emailSubscribe">
              <input
                type="email"
                name="email"
                id="subEmail"
                placeholder="email@example.com"
              />
              <SubscribeButton />
              <TopButton />
            </section>
          </section>{" "}
          {/* End Related Section */}
        </section>
      </main>
    );
  }
}
