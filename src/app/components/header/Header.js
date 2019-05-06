import './Header.css';
import { Header, Nav, Div, Link, Img } from '../../utils/dom-tools';
import LogoImg from '../../assets/images/Logo.svg';
import HamburgerImg from '../../assets/images/Hamburger.svg';

const HeaderElement = Header(
  { className: 'banner' },
  Nav({ className: 'nav' }, [
    Div({ className: 'nav-container' }, [
      Div(
        { className: 'logo-container' },
        Link({ href: '/index.html' }, Img({ className: 'logo', src: LogoImg }))
      ),
      Div(
        { className: 'hamburger-container' },
        Img({ className: 'hamburger', src: HamburgerImg })
      ),
    ]),
    Div({ className: 'nav-links' }, [
      Link({ className: 'nav-link', href: '/index.html' }, 'Home'),
      Link({ className: 'nav-link', href: '/about/about.html' }, 'About Us'),
      Link(
        {
          className: 'nav-link',
          href: 'https://zealous-turing-8929f5.netlify.com/',
        },
        'Login'
      ),
    ]),
  ])
);

export default HeaderElement;
