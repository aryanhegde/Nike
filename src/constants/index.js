import {
  dentalChair,
  dentalIcon,
  facebook,
  instagram,
  smileIcon,
  toothIcon,
  twitter,
} from "../assets/icons";
import { customer1, customer2 } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
  { value: "500+", label: "Smiles Brightened" },
  { value: "500+", label: "Successful Procedures" },
  { value: "5-Star", label: "Patient Reviews" },
];

export const services = [
  {
    imgURL: dentalChair,
    label: "Advanced Dental Technology",
    subtext:
      "Experience cutting-edge technology for precise diagnostics and comfortable treatments.",
  },
  {
    imgURL: smileIcon,
    label: "Cosmetic Smile Enhancement",
    subtext:
      "Achieve your dream smile with our range of cosmetic treatments tailored to your preferences.",
  },
  {
    imgURL: toothIcon,
    label: "Personalized Treatment Plans",
    subtext:
      "Receive individualized care plans designed to address your unique dental needs and goals.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Aarav Patel",
    rating: 4.5,
    feedback:
      "Impressed with the attention to dental health and the quality of care provided. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Ananya Sharma",
    rating: 4.5,
    feedback:
      "The dental services not only met but exceeded my expectations. I'm genuinely delighted!",
  },
  {
    imgURL: "https://source.unsplash.com/1600x1000/?girl",
    customerName: "Neha Kapoor",
    rating: 5.0,
    feedback:
      "Exceptional dental care that's on par with international standards. I'm immensely satisfied!",
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const dentalServices = [
  {
    label: "Cleanings & Exams",
    icon: dentalIcon,
    subText:
      "Routine cleanings and exams help you keep your smile healthy for a lifetime.",
  },
  {
    label: "Invisalign",
    icon: dentalIcon,
    subText:
      "Get a straighter smile without bulky metal braces. Invisalign is the #1 recommended choice.",
  },
  {
    label: "Dental Fillings",
    icon: dentalIcon,
    subText:
      "Repair damaged teeth and cavities and restore the look and function of your smile.",
  },

  {
    label: "Teeth Whitening",
    icon: dentalIcon,
    subText:
      "Shine up those pearly whites with professional teeth whitening. In-office and take-home options.",
  },
  {
    label: "Gum Treatements",
    icon: dentalIcon,
    subText:
      "Treat infections in your gums and mouth tissue and remove plaque and tartar buildup.",
  },
  {
    label: "Implants",
    icon: dentalIcon,
    subText:
      "The gold standard for replacing missing or damaged teeth. Put our expertise to work for your smile.",
  },
  {
    label: "Tooth Removal",
    icon: dentalIcon,
    subText:
      "We have the expertise to comfortably remove damaged or problematic teeth so you can take back your smile",
  },
  {
    label: "Implant-Retained Dentures",
    icon: dentalIcon,
    subText:
      "The modern denture solution. Great for your health and lifestyle! Replace one or several teeth.",
  },
  {
    label: "Crowns",
    icon: dentalIcon,
    subText:
      "Crowns restore the functionality and appearance of your tooth and are often the last step of a root canal or implant.    ",
  },
  {
    label: "Veneers",
    icon: dentalIcon,
    subText:
      "Get the smile you’ve always wanted with veneers that seamlessly cover the front of damaged or discolored teeth.      ",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Invisalign", link: "/" },
      { name: "Teeth Filling", link: "/" },
      { name: "Teeth Whitening", link: "/" },
      { name: "Tooth Removal", link: "/" },
      { name: "Implants", link: "/" },
      { name: "Crowns", link: "/" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "About us", link: "#about-us" },
      { name: "FAQs", link: "/" },
      { name: "Services", link: "#services" },
      { name: "Contact Us", link: "#contact-us" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];
