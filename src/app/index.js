import './index.css';
import $ from 'jquery';

// document
//   .querySelector('.hamburger')
//   .addEventListener('click', () =>
//     document.querySelector('.nav-links').classList.toggle('hidden')
//   );

$('.nav-links').hide();
$('.hamburger').on('click', () => {
  const links = $('.nav-links');
  if (links.css('display') === 'none') {
    links.removeClass('out');
    links.slideDown(200);
    links.addClass('active');
  } else {
    links.removeClass('active');
    links.slideUp(200);
    links.addClass('out');
  }
});
