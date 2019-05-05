import './about.css';
import { Render } from '../utils/dom-tools';

import Cards from '../components/about-card/Card';
import Footer from '../components/footer/Footer';

document
  .querySelector('.hamburger')
  .addEventListener('click', () =>
    document.querySelector('.nav-links').classList.toggle('visible')
  );

Render('#cards', Cards);

Render('#footer', Footer);
