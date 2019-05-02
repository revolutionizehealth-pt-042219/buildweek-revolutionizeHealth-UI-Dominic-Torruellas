import './about.css';

document
  .querySelector('.hamburger')
  .addEventListener('click', () =>
    document.querySelector('.nav-links').classList.toggle('visible')
  );
