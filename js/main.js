/**
* Template Name: Mentor
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

})();


function filterGallery(category) {
  var items = document.getElementsByClassName('gallery-item');
  for (var i = 0; i < items.length; i++) {
    if (category === 'all' || items[i].classList.contains(category)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}

// Filter Function
function filterGallery(category) {
  var items = document.getElementsByClassName('gallery-item');
  var buttons = document.querySelectorAll('.filter-buttons button');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  for (var i = 0; i < items.length; i++) {
    if (category === 'all' || items[i].classList.contains(category)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}

// Show all items by default on page load
window.onload = function () {
  filterGallery('all');
};


function filterGallery(category, button = null) {
  var items = document.getElementsByClassName('gallery-item');
  var buttons = document.querySelectorAll('.filter-buttons button');

  // Remove 'active' from all buttons
  buttons.forEach(btn => btn.classList.remove('active'));

  // Add 'active' to the clicked button (if available)
  if (button) {
    button.classList.add('active');
  }

  // Show or hide items
  for (var i = 0; i < items.length; i++) {
    if (category === 'all' || items[i].classList.contains(category)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}

// Show all items by default on page load
window.onload = function () {
  filterGallery('all');
};

function filterEvents(category, button = null) {
  const cards = document.querySelectorAll('.event-card');
  const buttons = document.querySelectorAll('.event-filters button');

  buttons.forEach(btn => btn.classList.remove('active'));
  if (button) button.classList.add('active');

  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Show all events by default
window.onload = () => {
  filterEvents('all', document.querySelector('.event-filters button'));
};