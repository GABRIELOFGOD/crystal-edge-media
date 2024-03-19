import { TbBrandAdobe } from "react-icons/tb";
// import { GiNewspaper } from "react-icons/gi";
// import { FcAdvertising } from "react-icons/fc";
// import { GiVideoConference } from "react-icons/gi";
import { DiHtml5Multimedia } from "react-icons/di";
import { IoShareSocial } from "react-icons/io5";
import { FaSearchengin } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa6";
import { MdEditNote } from "react-icons/md";
import { MdOutlineModelTraining } from "react-icons/md";
import { ContextUser } from "./ReusableFunctions";

// const { displayServices } = ContextUser();

// USER IMAGES
const gab = '/images/gab-min.jpg'


export const navlist = [
    {
        name: 'home',
        path: ''
    },
    {
        name: 'Our services',
        onclick: true
    },
    {
        name: 'Our Team',
        path: 'team'
    },
    {
        name: 'About us',
        path: 'about'
    }
]

export const services = [
  {
    icon: <TbBrandAdobe />,
    name: "Brand Management",
    def: "Brand Reputation Management is the cornerstone of success in todays competitive landscape. To stay relevant, businesses and organisations must safeguard their most valuable asset – reputation. Through strategic planning",
    path: "brand-management",
    feature: ['Product management', 'product design', 'brand consultaion']
  },
  {
    icon: <DiHtml5Multimedia />,
    name: "Media Relations",
    def: "Media Relations is the art of fostering meaningful connections between organizations and the media, which is important for effective communication and brand visibility. We assist brands and organisations cultivate fruitful partnership with the media",
    path: "media-relations",
    feature: ['Televison broadcasting', 'radio presentation', 'Newspapper']
  },
  {
    icon: <IoShareSocial />,
    name: "Social Media Management",
    path: "media-management",
    def: "Without doubt, effective social media management not only enhances brand visibility but also fosters connections with targeted audience, driving lasting impact and growth. We help brands and organisations manage their online presence across various social platforms",
    feature: ['Facebook management', 'Instagram management', 'Twitter management', 'Thread account', 'Youtube']
  },
  {
    icon: <FaSearchengin />,
    name: "Search Engine Optimisation (SEO)",
    path: "search-engine",
    def: "Search Engine Optimization (SEO) is the art and science of enhancing a website's visibility and ranking in search engine results. By optimizing content, keywords, and technical elements, businesses can improve their online presence and attract more organic traffic, ultimately leading to increased visibility, engagement, and conversions",
    feature: ['Google search engine', 'bing search', 'wikipedia']
  },
  {
    icon: <FaWordpressSimple />,
    name: "Website Development",
    def: "With careful attention to detail and a focus on innovation, we help organisations build effective website that ensures seamless navigation, accessibility, and conversion",
    path: "web-dev",
    feature: ['word press', 'front-end', 'back-end', 'full stack']
  },
  {
    icon: <MdEditNote />,
    name: "Editing/ Proofreading",
    def: "We provide editing and proofreading services that enhance the quality and credibility of written materials, ensuring they meet clarity, accuracy, coherence, and resonate effectively with the intended audience",
    path: "editing",
    feature: ['Video editing', 'photo editing', 'graphic designing']
  },
  {
    icon: <MdOutlineModelTraining />,
    name: "Media Training",
    def: "We offer media trainings for individuals and organizations, empowering them with the skills to effectively engage with the media, convey key messages, and handle challenging situations with finesse",
    path: "training",
    feature: ['Social media management', 'video editing', 'graphic design', 'videography', 'photography', 'and lots more']
  }
]

export const partners = [
    {
        image: '/public/images/Webfala.png',
        name: ''
    },
    {
        image: '/images/NIWA.jpg',
        name: ''
    },
    {
        image: '/images/BBYDI.png',
        name: ''
    },
    {
        image: '/images/RCF.jpg',
        name: ''
    },
    {
        image: '/images/pristine_sacc_logo.jpg',
        name: ''
    },
    {
        image: '/images/public interest development logo.png',
        name: ''
    },
    {
        image: '/images/Kwara govt.png',
        name: ''
    },
    {
        image: '/images/Apeks.jpg',
        name: ''
    },
    {
        image: '/images/d (1).jpg',
        name: ''
    },
    {
        image: '/images/careergrill.png',
        name: ''
    },
    
]

export const team = [
  {
    name: "Alex Man",
    image: gab,
    country: "South Africa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
  {
    name: "Alex Man",
    image: "",
    country: "South Africa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
  {
    name: "Alex Man",
    image: "",
    country: "South Africa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
  {
    name: "Alex Man",
    image: "",
    country: "South Africa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
  {
    name: "Alex Man",
    image: "",
    country: "South Africa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
  {
    name: "Alex Man",
    image: "",
    country: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
  {
    name: "Alex Man",
    image: "",
    country: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
];

export const mission = ['']