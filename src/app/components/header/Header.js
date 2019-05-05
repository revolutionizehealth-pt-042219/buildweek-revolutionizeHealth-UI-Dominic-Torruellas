import './Header.css';
import { Header, Nav, Div, Link, Img } from '../../utils/dom-tools';
import LogoImg from '../../assets/images/Logo.svg';
import HamburgerImg from '../../assets/images/Hamburger.svg';

const HeaderElement = Header(
  'banner',
  Nav('nav', [
    Div('nav-container', [
      Div('logo-container', Link(null, '/index.html', Img('logo', LogoImg))),
      Div('hamburger-container', Img('hamburger', HamburgerImg)),
    ]),
    Div('nav-links', [
      Link('nav-link', '/index.html', 'Home'),
      Link('nav-link', '/about/about.html', 'About Us'),
      Link('nav-link', '#', 'Login'),
    ]),
  ])
);

export default HeaderElement;
