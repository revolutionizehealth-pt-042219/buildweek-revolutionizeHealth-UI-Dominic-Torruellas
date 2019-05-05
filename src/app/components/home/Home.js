import './Home.css';
import { Div, Section, H2, Img, P } from '../../utils/dom-tools';

import microscopeImg from '../../assets/images/doctor-microscope.jpg';
import doctorImg from '../../assets/images/doctor.jpg';
import docLaptopImg from '../../assets/images/doctor-laptop.jpg';

const mainConent = [
  {
    header: 'Find the right care',
    img: microscopeImg,
    content: [
      `With the Rev-Health app, you can find the right care for the
    right price thanks to our crowd-sourced price estimate
    algorithm! Before this app, the cost you have out of pocket
    would totally blindside you. Well not anymore! Doctors and
    hospitals from all over the world will have pricing shown and
    verified in our app.`,
    ],
  },
  {
    header: `Help keep pricing honest`,
    img: doctorImg,
    content: [
      `Let everyone around you know what you paid. Whether you have
    insurance, the procedure you had done, and the doctor you saw.
    When you provide this data, you are helping people in your
    community find the best doctors they can afford.`,
    ],
  },
  {
    header: `Revolutionizing Health`,
    img: docLaptopImg,
    content: [
      `Here at Rev-Health app, we are working to revolutionize the health
      industry by providing real people with real costs. Without our app
      you have no idea what a hospital is charging you or your insurance
      for the healthcare you need.`,
      `When everyone participates in our crowd-sourced pricing app, the
      doctors and hospitals are kept honest! Everyone will have a choice
      and no surprise when it comes time to get the bill. We think
      everyone should have a choice in their health, please help us
      acheive this goal!`,
    ],
  },
];

const MainCard = ({ header, img, content }) =>
  Section({ className: 'main-card' }, [
    H2({ className: 'main-card-header' }, header),
    Img({ className: 'main-card-img', src: img }),
    MainCardContent(content),
  ]);

const MainCardContent = content => {
  const mainClass = 'main-card-content';
  const className = content.length === 1 ? mainClass : [mainClass, 'two-p'];
  return Div({ className }, content.map(text => P(null, text)));
};

const HomeContent = ([card1, card2, card3]) => [
  Div({ className: 'card-container-2w' }, [MainCard(card1), MainCard(card2)]),
  Div({ className: 'bottom-card' }, MainCard(card3)),
];

export default HomeContent(mainConent);
