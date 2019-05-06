// Curry function borrowed from:
// https://mostly-adequate.gitbooks.io/mostly-adequate-guide/appendix_a.html
// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

const createElement = curry((type, props, children) => {
  const { className, attr, events } = props ? props : {};
  const newElement = document.createElement(type);
  if (className) {
    if (Array.isArray(className)) {
      className.forEach(classItem => newElement.classList.add(classItem));
    } else {
      newElement.classList.add(className);
    }
  }

  if (attr) {
    if (Array.isArray(attr[0])) {
      attr.forEach(([key, value]) => newElement.setAttribute(key, value));
    } else {
      const [key, value] = attr;
      newElement.setAttribute(key, value);
    }
  }

  if (events) {
    if (Array.isArray(events[0])) {
      events.forEach(([event, cb]) => newElement.addEventListener(event, cb));
    } else {
      const [event, cb] = events;
      newElement.addEventListener(event, cb);
    }
  }

  if (children) {
    if (typeof children === 'string') {
      newElement.textContent = children;
    } else if (Array.isArray(children)) {
      children.forEach(child => newElement.appendChild(child));
    } else {
      newElement.appendChild(children);
    }
  }

  return newElement;
});

const Render = (selector, elements) => {
  if (Array.isArray(elements)) {
    elements.forEach(element =>
      document.querySelector(selector).appendChild(element)
    );
  } else {
    document.querySelector(selector).appendChild(elements);
  }
};

const Img = ({ src, ...options }) =>
  createElement('img', { ...options, attr: ['src', src] }, null);

const Link = ({ href, ...options }, children) => {
  const newElement = createElement(
    'a',
    {
      ...options,
      attr: ['href', href],
    },
    children
  );
  return newElement;
};

const Div = createElement('div');

const Footer = (options, children = null) =>
  createElement('footer', options ? options : {}, children);

const P = (options, children = null) =>
  createElement('p', options ? options : {}, children);

const Ul = (options, children = null) =>
  createElement('ul', options ? options : {}, children);

const Li = (options, children = null) =>
  createElement('li', options ? options : {}, children);

const Header = (options, children = null) =>
  createElement('header', options ? options : {}, children);

const Nav = (options, children = null) =>
  createElement('nav', options ? options : {}, children);

const H2 = (options, children = null) =>
  createElement('h2', options ? options : {}, children);

const Section = (options, children = null) =>
  createElement('h2', options ? options : {}, children);

export {
  createElement,
  Render,
  Div,
  Img,
  Link,
  Footer,
  P,
  Ul,
  Li,
  Header,
  Nav,
  H2,
  Section,
};
