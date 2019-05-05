import './Footer.css';
import { Footer, Div, Img, Link, P, Ul, Li } from '../../utils/dom-tools';
import footerImg from '../../assets/images/Logo.svg';

const LeftFooterCard = Div('footer-card', [
  Div('footer-card-header', 'Rev-Health'),
  Div(
    'footer-card-content',
    P(
      null,
      `Taking on the health industry by exposing pricing in every
          location on the globe.`
    )
  ),
]);

const RightFooterCard = Div(
  'footer-card',
  Ul('footer-links', [
    Li(null, Link(null, '/', 'Home')),
    Li(null, Link(null, '/about', 'About us')),
    Li(null, Link(null, '#', 'Login')),
  ])
);

const FooterContent = [
  Div(
    'footer-card-container',
    Div('footer-cards', [
      LeftFooterCard,
      Img('footer-logo', footerImg),
      RightFooterCard,
    ])
  ),
  Div('copyright', 'Copyright 2019'),
];

const FooterElement = Footer(
  'footer',
  Div('footer-background-container', Div('footer-container', FooterContent))
);

export default FooterElement;
