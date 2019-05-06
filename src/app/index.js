import './index.css';
import { Render } from './utils/dom-tools';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

Render('#header', Header);
Render('#main', Home);
Render('#footer', Footer);
