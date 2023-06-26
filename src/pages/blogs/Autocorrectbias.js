import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import EssayBanner from "../../images/blogimages/name.JPG";
import icon from "../../images/icon.png";
import "../../styles/blogTemplate.css";

import BackButton from "../../components/EntryBackButton";
import ShareButton from "../../components/ShareButton";
import SubscribeButton from "../../components/SubscribeButton";
import TopButton from "../../components/BlogToTop";

import { Helmet } from "react-helmet";

export default class Autocorrectionbias extends Component {
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
          <title> Bias In NLP</title>
          <meta name="author" content="Ketania Govender" />
          <meta
            name="description"
            content="Bias in Natural Language Processing and Autocorrection."
          />

          <meta property="og:site_name" content="Scroll Troll" />
          <meta property="og:title" content="Blog" />
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
            content="Internet Art, AI art, ethics of ai, nlp, low-resouce languages, natural language processing, ai , ml, african language technology, ai bias, algoritmic bias, technological colonialism, essay"
          />
        </Helmet>

        {/* Entry Header that includes back button, essay banner, Title, description, Publishing date and sharing options */}
        <BackButton />
        <img
          src={EssayBanner}
          alt="the text what is in a name with the name underlined with a red squiggly line and highlighted"
          className="u-photo entryImage"
        />

        <section className="h-card blogIconandButton">
          <img src={icon} alt="..sndns" className="blogTempIcon" />
          <ShareButton />
        </section>

        <section className="e-content blogTempMain">
          <h1 className="blogTitle p-name">
            Bias in Natural Language Processing and Autocorrection.&nbsp;{" "}
          </h1>
          <h2 className="blogAuthor p-author">@Ketania</h2>
          <p className="p-summary blogDescription">
            {" "}
            An exploration of bias in the autorrect spellcheckers that we use on
            the internet and its effects on the Global South.{" "}
          </p>
          <p className="dt-published blogTempDate"> 2.50PM. 1 June, 2023</p>

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

          {/* Blog Content with references */}

          <section className="h-card blogContentContainer" id="blogID">
            <article
              className="e-content blogActiveContent bfCont"
              id="blogActive"
              style={{ display: activeTab === 0 ? "block" : "none" }}
            >
              <p className = 'e-content'>
                This week as the implemented vision for my internet artwork
                draws closer, I find myself interrogating the idea of
                autocorrect bias. In my rationale and prep work found{" "}
                <Link to="/PrepBlog">here</Link>, I mention wanting to add an
                autocorrection feature that underlines ethnic and non-English
                names. This stems from the years of seeing squiggly lines
                underneath my name, and the names of most people I know, in
                documents and forms. This week let us dive deeper into
                computational biases and colonialism in code that has resulted
                in technology negating the presence of many populations.&nbsp;
              </p>
              <p className = 'e-content'>
                As technology has advanced allowing for higher computational
                functions to be run on a wider spectrum of devices, machine
                learning (ML) and artificial intelligence (AI) have become
                extremely common. We all tend to have encounters with ML on a
                daily basis through our spell checkers and the content shown to
                us from the algorithms on the websites that we engage in. It
                must be initially understood that the data we engage in are
                inherently biased.&nbsp;
              </p>
              <p className = 'e-content'>
                To explain this, let us inspect Graham et al&rsquo;s (2015) idea
                that there is an information disparity between the global north
                and the global south. They propose the idea that in
                pre-technological eras, the global north with more power and
                resources could better document information thus allowing for
                data to be easily accessible. This power has been gained through
                colonialism, further running the global south dry of material
                resources. This hoard of resources allowed for a faster
                progression into the age of the internet in these areas while
                the global south followed slowly behind (pp 91). The lack of
                access to information has thus barred the global south from
                being encouraged to add to information stores because a lack of
                information results in consequences such as lower literacy
                levels and lack of hardware availability. This demonstrates the
                fundamental inequality regarding access to technology between
                the North and South. The North having access to new technology
                has subsequently meant that technology has largely been catered
                towards these communities. This is seen within the development
                of Natural Language Processing (NLP).
              </p>
              <p className = 'e-content'>
                Nobel coined the phrase &ldquo;technological redlining&rdquo; in
                her book Algorithms of Oppression (2018, pp18). This term refers
                to the embedded prejudice in the code that we interact with. As
                previously discussed, the embedded bias due to disparity in
                resources can be found often in natural language processing. To
                explain this bias, it is prudent to initially understand that
                NLP works using a corpus of training material. To train an NLP
                model, one requires a large body of documented language. This
                means that languages native to the global south become less
                documented due to the historic inability to access information
                wells. Low-resource languages therefore cannot have adequate NLP
                training subsequently resulting in an inability to use this
                feature. This, therefore, further bars these communities from
                participating in the creation and diffusion of information and
                results in heightened technological redlining. There is thus an
                inability to cater for cultural variation in NLP(Hovy &amp;
                &nbsp; Prabhumoye. 2021, pp7). This demonstrates the prejudice
                in the code that we interact with and explains the autocorrect
                of the vernacular. The issue of NLP prejudice has therefore
                become a topic of interest within my internet artwork
                endeavours.
              </p>
              <p className = 'e-content'>
                As we are now aware of the colonized nature of technology, the
                question of correction is raised. Adams (2021, pp177) suggests
                that the initial step is ensuring that marginalized communities
                have access to information by creating content. This views a
                platform for more inclusive content to be produced. It is also
                suggested that algorithmic bias is highlighted so that it is
                corrected. In order to achieve this critical theory must be
                applied to development in order to negate what Adams phrases as
                a sort of digital apartheid. Decolonization of technology would
                supplement colonial holds of oppression over the global South
                (pp181). Efforts towards approaching development with an ethical
                point-of-view have been made in the example of AI Ethics
                Guidelines to be produced.&nbsp;
              </p>
              <p className = 'e-content'>
                The second step towards more inclusive artificial intelligence
                is adapting the training methodology for NLP itself. Masakhane
                does just this as the research community has provided an
                open-source tool for creating NLP using low-resource languages
                on the continent. Masakhane further highlights the importance of
                low-resource languages through documentation of the language,
                adaptive model training and language preservation(Ahia et al.
                2019, pp2).&nbsp;
              </p>
              <p className = 'e-content'>
                While there are steps have been taken to rectify the historical
                inequality between the North/South in technology, there is still
                a far way to go. It is therefore of utmost importance for these
                racial biases in technology to be addressed and for applications
                to be developed with marginalized communities in mind.
              </p>
            </article>
            {/* Reference Section*/}

            <ol
              className="h-card blogReferenceSection"
              id="refActive"
              style={{ display: activeTab === 1 ? "block" : "none" }}
            >
              <h3 className="p-name referenceList" id="refList">
                References
              </h3>
              <li className="author">
                Adams, R. (2021) &lsquo;Can artificial intelligence be
                decolonized?&rsquo;, <em>Interdisciplinary Science Reviews</em>,
                46(1/2), pp. 176&ndash;197. Available at:{" "}
                <a
                  href="https://doi.org/10.1080/03080188.2020.1840225"
                  className="u-url refA"
                >
                  https://doi.org/10.1080/03080188.2020.1840225
                </a>
                .
              </li>
              <li className="author">
                Ahia, I. <em>et al.</em> (2020) &lsquo;Masakhane -- Machine
                Translation For Africa&rsquo;. arXiv. Available at:{" "}
                <a
                  href="https://doi.org/10.48550/arXiv.2003.11529"
                  className="u-url refA"
                >
                  https://doi.org/10.48550/arXiv.2003.11529
                </a>
                .
              </li>
              <li className="author">
                <em>GEO: Geography and Environment - Wiley Online Library</em>{" "}
                (2015). Available at:{" "}
                <a
                  href="https://rgs-ibg.onlinelibrary.wiley.com/doi/full/10.1002/geo2.8"
                  className="u-url refA"
                >
                  https://rgs-ibg.onlinelibrary.wiley.com/doi/full/10.1002/geo2.8
                </a>{" "}
                (Accessed: 1 June 2023).
              </li>
              <li className="author">
                Hovy, D. and Prabhumoye, S. (2021) &lsquo;Five sources of bias
                in natural language processing&rsquo;,{" "}
                <em>Language and Linguistics Compass</em>, 15(8), p. e12432.
                Available at:{" "}
                <a
                  href="https://doi.org/10.1111/lnc3.12432"
                  className="u-url refA"
                >
                  https://doi.org/10.1111/lnc3.12432
                </a>
                .
              </li>
              <li className="author">
                Noble, S.U. (2018) &lsquo;Algorithms of Oppression: How Search
                Engines Reinforce Racism&rsquo;, in{" "}
                <em>Algorithms of Oppression</em>. New York University Press.
                Available at:{" "}
                <a
                  href="https://doi.org/10.18574/nyu/9781479833641.001.0001"
                  className="u-url refA"
                >
                  https://doi.org/10.18574/nyu/9781479833641.001.0001
                </a>
                .
              </li>
            </ol>
          </section>
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
                  Ai Art on the Internet{" "}
                </h5>
                <p className="relatedSummary p-summary">
                  {" "}
                  How can AI and the internet be used as artisitc tools and
                  mediums?
                </p>
                <HashLink to="/AiArt" className="readMoreLink u-url">
                  {" "}
                  Read More
                </HashLink>
              </article>

              <article className="h-card relatedCard">
                <h5 className="relatedArticle p-name">
                  Preparatory Work and Rationale{" "}
                </h5>
                <p className="relatedSummary p-summary">
                  {" "}
                  This blog post explores the development and design for my
                  internet artwork.
                </p>
                <HashLink to="/PrepBlog#top" className="readMoreLink u-url">
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

            {/* End Section */}
          </section>
        </section>
      </main>
    );
  }
}
