/* =========================================
   DENFILUX — JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

  });


  /* Close menu when a navigation link is clicked */

  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.textContent = "☰";

    });

  });

}


/* =========================================
   PRODUCT ORDER BUTTONS
========================================= */

const productButtons =
  document.querySelectorAll(".product-btn");

productButtons.forEach((button) => {

  button.addEventListener("click", (event) => {

    /*
      At the moment these buttons link to
      the Contact section.

      Later we can turn this into a complete
      shopping/order system.
    */

    console.log(
      "DENFILUX product selected"
    );

  });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
  ".product-card, .value-card, .about-content, .about-image, .contact-content, .contact-form"
);


/* Add initial class */

revealElements.forEach((element) => {

  element.classList.add("reveal");

});


/* Observer */

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("revealed");

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
  document.querySelector(".footer-bottom p");

if (yearElement) {

  const currentYear =
    new Date().getFullYear();

  yearElement.innerHTML =
    `© ${currentYear} DENFILUX. All rights reserved.`;

}


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "DENFILUX website initialized successfully."
);
