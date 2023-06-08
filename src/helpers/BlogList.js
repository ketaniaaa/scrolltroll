import BlogImgA from '../images/blogimages/ai.JPG';
import BlogImgB from '../images/blogimages/essay.JPG';
import BlogImgC from '../images/blogimages/ethno.JPG';
import BlogImgD from '../images/blogimages/name.JPG';
import BlogImgE from '../images/blogimages/process.JPG';
import BlogImgF from '../images/blogimages/reflection.JPG';
import icon from '../images/navLogo.png';



export const BlogList =[
    {
    name: "Reflection",
    user: "@ketania",
    description: "A reflection on the design and development of TrollScroll for assignment 3.",
    icon: icon,
    image: BlogImgF,
    date: "2:05PM. 5 June, 2023",
    platform: "ScrollTroll Desktop",
    alt: 'Drawing of a handheld mirror',
    route: "/Reflection2",

},
{
    name: "Autocorrect and Bias",
    user: "@ketania",
    description: "How does natural language processing effect BIPOC internet users daily? A look at web technology and digital colonialism through spellcheck and non-european names.",
    icon: icon,
    image: BlogImgD,
    date: "8:40PM. 1 June, 2023",
    platform: "ScrollTroll Desktop",
    alt: 'the words what is in a name with a red squiggly line to represent autocorrect underlining the sentence'
     ,route: "/AutocorrectBias"
},
{
    name: "African Digital Artwork and Ethno-computing",
    user: "@ketania",
    description: "A look into the role and ethics of using AI for making artwork",
    icon: icon,
    image: BlogImgC,
    date: "3:05AM. 26 May, 2023",
    platform: "ScrollTroll Desktop",
    alt: 'Silouette of Africa with some code brackets in white on the image'
     ,route: "/AfricanArt"
},
{
    name: "AI and Art",
    user: "@ketania",
    description: "A look into the role and ethics of using AI for making artwork",
    icon: icon,
    image: BlogImgA,
    date: "7:45PM. 13 May, 2023",
    platform: "ScrollTroll Desktop",
    alt: 'rendering of a simple neutral network with the words AI in the middle'
 ,route: "/AiArt"
},
{
    name: "Critical Analysis Essay: POEMPORTRAITS",
    user: "@ketania",
    description: "This essay investigates the work POEMPORTRAITS by Es Devlin and Google Arts and Culture in relation to net artwork and artifical intelligence",
    icon: icon,
    image: BlogImgB,
    date: "12:15PM. 2 May, 2023",
    platform: "ScrollTroll Desktop",
    alt: 'Drawing of a Troll in a POEMPORTRAIT like the original by Es Devlin'
 ,route: "/EssayBlog"
},


{
    name: "TrollScroll: The Making Of",
    user: "@ketania",
    description: "Prepatory work and inspiration for the creation of TrollScroll",
    icon: icon,
    image: BlogImgE,
    date: "11:45AM. 1 May, 2023",
    platform: "ScrollTroll Desktop",
   
    alt: 'Drawing of a compute with the image of a troll face inbetween two curly brackets on the screen of the laptop'
,route: "/PrepBlog"
},


];