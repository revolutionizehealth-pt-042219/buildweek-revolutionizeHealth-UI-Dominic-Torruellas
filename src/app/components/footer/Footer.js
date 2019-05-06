import './Footer.css';
import { Footer, Div, Img, Link, P, Ul, Li } from '../../utils/dom-tools';
import footerImg from '../../assets/images/Logo.svg';

const footerCardPText = `Taking on the health industry by exposing pricing in every
location on the globe.`;

const LeftFooterCard = Div({ className: 'footer-card' }, [
  Div({ className: 'footer-card-header' }, 'Rev-Health'),
  Div({ className: 'footer-card-content' }, P(null, footerCardPText)),
]);

const RightFooterCard = Div(
  { className: 'footer-card' },
  Ul({ className: 'footer-links' }, [
    Li(null, Link({ href: '/index.html' }, 'Home')),
    Li(null, Link({ href: '/about/about.html' }, 'About us')),
    Li(
      null,
      Link({ href: 'https://zealous-turing-8929f5.netlify.com/' }, 'Login')
    ),
  ])
);

const FooterContent = [
  Div(
    { className: 'footer-card-container' },
    Div({ className: 'footer-cards' }, [
      LeftFooterCard,
      Img({ className: 'footer-logo', src: footerImg }),
      RightFooterCard,
    ])
  ),
  Div({ className: 'copyright' }, 'Copyright 2019'),
];

const FooterElement = Footer(
  { className: 'footer' },
  Div(
    { className: 'footer-background-container' },
    Div({ className: 'footer-container' }, FooterContent)
  )
);

export default FooterElement;
