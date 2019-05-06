import gitHubImg from '../../assets/images/GitHub-Mark-Light-32px.png';
import { Div, Img, Link } from '../../utils/dom-tools';
import './Card.css';

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
    require('../../assets/images/portraits/dominic-torruellas.jpg'),
    'https://github.com/djtorel'
  ),
  new Dev(
    'Ernesto Pena',
    'UI Developer',
    require('../../assets/images/portraits/ernesto-pena.jpg'),
    'https://github.com/ErnestoPena'
  ),
  new Dev(
    'Joseph Luna',
    'UI Developer',
    require('../../assets/images/portraits/joseph-luna.jpg'),
    'https://github.com/joeluna17'
  ),
  new Dev(
    'James Wigdor',
    'Front-End Engineer',
    require('../../assets/images/portraits/james-wigdor.jpg'),
    'https://github.com/jpwigdor'
  ),
  new Dev(
    'Reed Turgeon',
    'Front-End Engineer',
    require('../../assets/images/portraits/reed-turgeon.jpg'),
    'https://github.com/MrT3313'
  ),
  new Dev(
    'Noah Stoeckel',
    'Back-End Engineer',
    require('../../assets/images/portraits/noah-stoeckel.jpg'),
    'https://github.com/BoxOfCereal'
  ),
];

export default Div(
  { className: 'about-card-container' },
  devs.map(({ img, name, position, github }) =>
    Div({ className: 'about-card' }, [
      Img({ className: 'about-card-image', src: img }),
      Div({ className: 'about-card-header' }, name),
      Div({ className: 'about-card-hr' }),
      Div({ className: 'about-card-sub-header' }, position),
      Div({ className: 'about-card-link-section' }, [
        Link({ className: 'about-card-link', href: github }, [
          Img({ className: 'about-card-link-img', src: gitHubImg }),
        ]),
      ]),
    ])
  )
);
