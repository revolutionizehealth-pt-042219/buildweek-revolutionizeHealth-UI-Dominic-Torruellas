import './index.css';
import { Render } from './utils/dom-tools';
import Footer from './components/footer/Footer';

document
  .querySelector('.hamburger')
  .addEventListener('click', () =>
    document.querySelector('.nav-links').classList.toggle('visible')
  );

Render('#footer', Footer);
