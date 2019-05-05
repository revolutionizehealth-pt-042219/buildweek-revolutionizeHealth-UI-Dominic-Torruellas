import './about.css';
import gitHubImg from '../images/GitHub-Mark-Light-32px.png';

document
  .querySelector('.hamburger')
  .addEventListener('click', () =>
    document.querySelector('.nav-links').classList.toggle('visible')
  );

const createElement = (type, { classes, attributes }, children = null) => {
  const newElement = document.createElement(type);
  if (classes) {
    classes.forEach(classItem => newElement.classList.add(classItem));
  }

  if (attributes) {
    attributes.forEach(([key, value]) => newElement.setAttribute(key, value));
  }

  if (children) {
    if (typeof children === 'string') {
      newElement.textContent = children;
    } else {
      children.forEach(child => newElement.appendChild(child));
    }
  }

  return newElement;
};

const Render = (selector, elements) => {
  elements.forEach(element =>
    document.querySelector(selector).appendChild(element)
  );
};

const Div = (cls, children) =>
  createElement('div', { classes: [cls] }, children);
const Img = (cls, src) =>
  createElement('img', { classes: [cls], attributes: [['src', src]] });
const Link = (cls, href, children) =>
  createElement(
    'a',
    { classes: [cls], attributes: [['href', href]] },
    children
  );

class Dev {
  constructor(name, position, img, github) {
    this.name = name;
    this.position = position;
    this.img = img;
    this.github = github;
  }
}

const devs = [
  new Dev(
    'Dominic Torruellas',
    'UI Developer',
    require('../images/portraits/dominic-torruellas.jpg'),
    'https://github.com/djtorel'
  ),
  new Dev(
    'Ernesto Pena',
    'UI Developer',
    require('../images/portraits/ernesto-pena.jpg'),
    'https://github.com/ErnestoPena'
  ),
  new Dev(
    'Joseph Luna',
    'UI Developer',
    require('../images/portraits/joseph-luna.jpg'),
    'https://github.com/joeluna17'
  ),
  new Dev(
    'James Wigdor',
    'Front-End Engineer',
    require('../images/portraits/james-wigdor.jpg'),
    'https://github.com/jpwigdor'
  ),
  new Dev(
    'Reed Turgeon',
    'Front-End Engineer',
    require('../images/portraits/reed-turgeon.jpg'),
    'https://github.com/MrT3313'
  ),
  new Dev(
    'Noah Stoeckel',
    'Back-End Engineer',
    require('../images/portraits/noah-stoeckel.jpg'),
    'https://github.com/BoxOfCereal'
  ),
];

const Cards = devs.map(({ img, name, position, github }) =>
  Div('card', [
    Img('card-image', img),
    Div('card-header', name),
    Div('card-hr'),
    Div('card-sub-header', position),
    Div('card-link-section', [
      Link('card-link', github, [Img('card-link-img', gitHubImg)]),
    ]),
  ])
);

Render('#cards', Cards);
