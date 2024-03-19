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
        name: 'Brand Management',
        def: 'Brand Reputation Management is the cornerstone of success in todays competitive landscape. To stay relevant, businesses and organisations must safeguard their most valuable asset – reputation. Through strategic planning',
        path: 'brand-management'
    },
    {
        icon: <DiHtml5Multimedia />,
        name: 'Media Relations',
        def: 'Brand Reputation Management is the cornerstone of success in todays competitive landscape. To stay relevant, businesses and organisations must safeguard their most valuable asset – reputation. Through strategic planning',
        path: 'media-relations',
        feature: {
            
        }
    },
    {
        icon: <IoShareSocial />,
        name: 'Social Media Management',
        path: 'media-management',
        def: 'Brand Reputation Management is the cornerstone of success in todays competitive landscape. To stay relevant, businesses and organisations must safeguard their most valuable asset – reputation. Through strategic planning',
    },
    {
        icon: <FaSearchengin />,
        name: 'Search Engine Optimisation (SEO)',
        path: 'search-engine',
        def: 'Brand Reputation Management is the cornerstone of success in todays competitive landscape. To stay relevant, businesses and organisations must safeguard their most valuable asset – reputation. Through strategic planning',
    },
    {
        icon: <FaWordpressSimple />,
        name: 'Website Development',
        def: 'Brand Reputation Management is the cornerstone of success in todays competitive landscape. To stay relevant, businesses and organisations must safeguard their most valuable asset – reputation. Through strategic planning',
        path: 'web-dev'
    },
    {
        icon: <MdEditNote />,
        name: 'Editing/ Proofreading',
        def: 'Brand Reputation Management is the cornerstone of success in todays competitive landscape. To stay relevant, businesses and organisations must safeguard their most valuable asset – reputation. Through strategic planning',
        path: 'editing'
    },
    {
        icon: <MdOutlineModelTraining />,
        name: 'Media Training',
        def: 'Brand Reputation Management is the cornerstone of success in todays competitive landscape. To stay relevant, businesses and organisations must safeguard their most valuable asset – reputation. Through strategic planning',
        path: 'training'
    },
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
    name: "Gabriel Ayodele",
    image: "",
    country: "South Africa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
  {
    name: "Gabriel Ayodele",
    image: "",
    country: "South Africa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
  {
    name: "Gabriel Ayodele",
    image: "",
    country: "South Africa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
  {
    name: "Gabriel Ayodele",
    image: "",
    country: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
  {
    name: "Gabriel Ayodele",
    image: "",
    country: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo null.",
  },
];

export const mission = ['']