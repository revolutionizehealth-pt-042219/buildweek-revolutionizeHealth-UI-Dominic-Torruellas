parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vKFU":[function(require,module,exports) {

},{}],"+g4Y":[function(require,module,exports) {
"use strict";function r(r,s){return n(r)||t(r,s)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function t(r,e){var t=[],n=!0,s=!1,o=void 0;try{for(var a,i=r[Symbol.iterator]();!(n=(a=i.next()).done)&&(t.push(a.value),!e||t.length!==e);n=!0);}catch(u){s=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(s)throw o}}return t}function n(r){if(Array.isArray(r))return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Nav=exports.Header=exports.Li=exports.Ul=exports.P=exports.Footer=exports.Link=exports.Img=exports.Div=exports.Render=exports.createElement=void 0;var s=function(e,t){var n=t.classes,s=t.attributes,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=document.createElement(e);if(n&&(Array.isArray(n)?n.forEach(function(r){return a.classList.add(r)}):a.classList.add(n)),s)if(Array.isArray(s[0]))s.forEach(function(e){var t=r(e,2),n=t[0],s=t[1];return a.setAttribute(n,s)});else{var i=r(s,2),u=i[0],c=i[1];a.setAttribute(u,c)}return o&&("string"==typeof o?a.textContent=o:Array.isArray(o)?o.forEach(function(r){return a.appendChild(r)}):a.appendChild(o)),a};exports.createElement=s;var o=function(r,e){Array.isArray(e)?e.forEach(function(e){return document.querySelector(r).appendChild(e)}):document.querySelector(r).appendChild(e)};exports.Render=o;var a=function(r,e){return s("div",{classes:r},e)};exports.Div=a;var i=function(r,e){return s("img",{classes:r,attributes:["src",e]})};exports.Img=i;var u=function(r,e,t){return s("a",{classes:r,attributes:["href",e]},t)};exports.Link=u;var c=function(r,e){return s("footer",{classes:r},e)};exports.Footer=c;var l=function(r,e){return s("p",{classes:r},e)};exports.P=l;var p=function(r,e){return s("ul",{classes:r},e)};exports.Ul=p;var f=function(r,e){return s("li",{classes:r},e)};exports.Li=f;var d=function(r,e){return s("header",{classes:r},e)};exports.Header=d;var v=function(r,e){return s("nav",{classes:r},e)};exports.Nav=v;
},{}],"hRoU":[function(require,module,exports) {

},{"./../../assets/images/top-banner.jpg":[["top-banner.9c45f878.jpg","d5c1"],"d5c1"]}],"j3hj":[function(require,module,exports) {
module.exports="/Logo.ef67c17d.svg";
},{}],"LFrD":[function(require,module,exports) {
module.exports="/Hamburger.1ae5dde3.svg";
},{}],"Pobb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("./Header.css");var e=require("../../utils/dom-tools"),a=r(require("../../assets/images/Logo.svg")),n=r(require("../../assets/images/Hamburger.svg"));function r(e){return e&&e.__esModule?e:{default:e}}var i=(0,e.Header)("banner",(0,e.Nav)("nav",[(0,e.Div)("nav-container",[(0,e.Div)("logo-container",(0,e.Link)(null,"/index.html",(0,e.Img)("logo",a.default))),(0,e.Div)("hamburger-container",(0,e.Img)("hamburger",n.default))]),(0,e.Div)("nav-links",[(0,e.Link)("nav-link","/index.html","Home"),(0,e.Link)("nav-link","/about/about.html","About Us"),(0,e.Link)("nav-link","#","Login")])])),t=i;exports.default=t;
},{"./Header.css":"hRoU","../../utils/dom-tools":"+g4Y","../../assets/images/Logo.svg":"j3hj","../../assets/images/Hamburger.svg":"LFrD"}],"KaxQ":[function(require,module,exports) {

},{"./../../assets/images/footer-image.jpg":[["footer-image.8fb1c969.jpg","yE5t"],"yE5t"]}],"pwXZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("./Footer.css");var o=require("../../utils/dom-tools"),e=t(require("../../assets/images/Logo.svg"));function t(o){return o&&o.__esModule?o:{default:o}}var r=(0,o.Div)("footer-card",[(0,o.Div)("footer-card-header","Rev-Health"),(0,o.Div)("footer-card-content",(0,o.P)(null,"Taking on the health industry by exposing pricing in every\n          location on the globe."))]),i=(0,o.Div)("footer-card",(0,o.Ul)("footer-links",[(0,o.Li)(null,(0,o.Link)(null,"/index.html","Home")),(0,o.Li)(null,(0,o.Link)(null,"/about/about.html","About us")),(0,o.Li)(null,(0,o.Link)(null,"#","Login"))])),n=[(0,o.Div)("footer-card-container",(0,o.Div)("footer-cards",[r,(0,o.Img)("footer-logo",e.default),i])),(0,o.Div)("copyright","Copyright 2019")],l=(0,o.Footer)("footer",(0,o.Div)("footer-background-container",(0,o.Div)("footer-container",n))),u=l;exports.default=u;
},{"./Footer.css":"KaxQ","../../utils/dom-tools":"+g4Y","../../assets/images/Logo.svg":"j3hj"}],"Focm":[function(require,module,exports) {
"use strict";require("./index.css");var e=require("./utils/dom-tools"),r=o(require("./components/header/Header")),t=o(require("./components/footer/Footer"));function o(e){return e&&e.__esModule?e:{default:e}}(0,e.Render)("#header",r.default),(0,e.Render)("#footer",t.default),document.querySelector(".hamburger").addEventListener("click",function(){return document.querySelector(".nav-links").classList.toggle("visible")});
},{"./index.css":"vKFU","./utils/dom-tools":"+g4Y","./components/header/Header":"Pobb","./components/footer/Footer":"pwXZ"}]},{},["Focm"], null)
//# sourceMappingURL=/app.a97764ba.js.map