const createElement = (type, { classes, attributes }, children = null) => {
  const newElement = document.createElement(type);
  if (classes) {
    if (Array.isArray(classes)) {
      classes.forEach(classItem => newElement.classList.add(classItem));
    } else {
      newElement.classList.add(classes);
    }
  }

  if (attributes) {
    if (Array.isArray(attributes[0])) {
      attributes.forEach(([key, value]) => newElement.setAttribute(key, value));
    } else {
      const [key, value] = attributes;
      newElement.setAttribute(key, value);
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
};

const Render = (selector, elements) => {
  if (Array.isArray(elements)) {
    elements.forEach(element =>
      document.querySelector(selector).appendChild(element)
    );
  } else {
    document.querySelector(selector).appendChild(elements);
  }
};

const Div = (cls, children) => createElement('div', { classes: cls }, children);
const Img = (cls, src) =>
  createElement('img', { classes: cls, attributes: ['src', src] });
const Link = (cls, href, children) =>
  createElement('a', { classes: cls, attributes: ['href', href] }, children);

export { createElement, Render, Div, Img, Link };
