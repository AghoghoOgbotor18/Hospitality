const navlist = document.getElementById("nav-list");
const menuBtn = document.getElementById("menu-btn");

// navbar
menuBtn.addEventListener("click", () => {
  navlist.classList.toggle("active");

  if (navlist.classList.contains("active")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

// Nav active link
const navLinks = document.querySelectorAll(".navlist li a");

// set default active (Home)
navLinks[0].classList.add("active");

navLinks.forEach(link => {
  link.addEventListener("click", () => {

    // remove active from all
    navLinks.forEach(item => item.classList.remove("active"));

    // add active to clicked one
    link.classList.add("active");

    // close mobile menu after click
    navlist.classList.remove("active");
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// hero
window.addEventListener("DOMContentLoaded", () => { 
  const heroText = document.querySelector(".hero-text"); 
  if (heroText) { 
    setTimeout(() => { 
      heroText.classList.add("show"); 
    }, 300); 
  } 
});


// FAQ
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {

    // close others
    faqs.forEach(item => {
      if (item !== faq) {
        item.classList.remove("active");
      }
    });

    // toggle current
    faq.classList.toggle("active");
  });
});


//Intersection observer(section)
const sections = document.querySelectorAll(".animate-section");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    const section = entry.target;

    // CTA section (stagger like hero)
    if (section.classList.contains("cta-section")) {
      const elements = section.querySelectorAll("h3, p, .btns");

      elements.forEach(el => el.classList.add("animate"));

      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("show");
        }, index * 200);
      });
    }

    // text animation
    const texts = section.querySelectorAll("h1, h3, h4, p");

    texts.forEach((el, index) => {
      el.classList.add("animate");

      setTimeout(() => {
        el.classList.add("show");
      }, index * 100);
    });

    // cards animation
    const cards = section.querySelectorAll(".card");

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200);
    });

    observer.unobserve(section);
  });
}, {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
});

// observe sections
sections.forEach(section => {
  observer.observe(section);
});


// Headers
const headers = document.querySelectorAll(".section-header");

const headerObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");

    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.5
});

// observe headers
headers.forEach(header => {
  headerObserver.observe(header);
});