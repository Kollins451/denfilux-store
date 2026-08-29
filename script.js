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
   CONTACT FORM
========================================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", (event) => {

    const name = document
      .querySelector("#name")
      ?.value.trim();

    const email = document
      .querySelector("#email")
      ?.value.trim();

    const phone = document
      .querySelector("#phone")
      ?.value.trim();

    const message = document
      .querySelector("#message")
      ?.value.trim();


    /* Basic validation */

    if (!name || !email || !message) {

      event.preventDefault();

      alert(
        "Please complete your name, email address, and message."
      );

      return;

    }


    /* Email validation */

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

      event.preventDefault();

      alert(
        "Please enter a valid email address."
      );

      return;

    }


    /*
      Validation passed.

      IMPORTANT:
      We do NOT use event.preventDefault()
      here.

      This allows the form to submit normally
      to FormSubmit.
    */

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
