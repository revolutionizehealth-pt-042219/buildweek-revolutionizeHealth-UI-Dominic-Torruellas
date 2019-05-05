import './index.css';
import { Render } from './utils/dom-tools';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

Render('#header', Header);
Render('#footer', Footer);

document
  .querySelector('.hamburger')
  .addEventListener('click', () =>
    document.querySelector('.nav-links').classList.toggle('visible')
  );
