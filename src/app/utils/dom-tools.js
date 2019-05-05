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

export { createElement, Render, Div, Img, Link };
