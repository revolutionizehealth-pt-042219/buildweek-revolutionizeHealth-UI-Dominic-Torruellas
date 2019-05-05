import './about.css';
import { Render } from '../utils/dom-tools';

import Cards from '../components/about-card/Card';

document
  .querySelector('.hamburger')
  .addEventListener('click', () =>
    document.querySelector('.nav-links').classList.toggle('visible')
  );

Render('#cards', Cards);
