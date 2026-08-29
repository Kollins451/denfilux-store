/* =========================================
   DENFILUX — JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".mobile-menu-btn");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

  });


  /* Close menu when navigation link is clicked */

  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
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

    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const phoneInput = contactForm.querySelector("#phone");
    const messageInput = contactForm.querySelector("#message");


    const name = nameInput
      ? nameInput.value.trim()
      : "";

    const email = emailInput
      ? emailInput.value.trim()
      : "";

    const phone = phoneInput
      ? phoneInput.value.trim()
      : "";

    const message = messageInput
      ? messageInput.value.trim()
      : "";


    /* =========================================
       BASIC VALIDATION
    ========================================= */

    if (!name || !email || !message) {

      event.preventDefault();

      alert(
        "Please complete your name, email address, and message."
      );

      return;

    }


    /* =========================================
       EMAIL VALIDATION
    ========================================= */

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
      IMPORTANT:

      We DO NOT use event.preventDefault()
      after successful validation.

      This allows the browser to submit
      the form directly to the FormSubmit
      action in the HTML.

      The HTML action should be:

      https://formsubmit.co/oladimejikollins07@gmail.com

      FormSubmit will then process the form.
    */

    console.log("DENFILUX form submitting...");

    console.log({
      name,
      email,
      phone,
      message
    });

  });

}


/* =========================================
   PRODUCT BUTTONS
========================================= */

const productButtons =
  document.querySelectorAll(".product-link");

productButtons.forEach((button) => {

  button.addEventListener("click", () => {

    console.log(
      "DENFILUX product enquiry selected."
    );

  });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
  ".product-card, .value-card, .about-content, .about-image, .contact-content, .contact-form"
);


revealElements.forEach((element) => {

  element.classList.add("reveal");

});


if ("IntersectionObserver" in window) {

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

} else {

  /* Fallback for older browsers */

  revealElements.forEach((element) => {

    element.classList.add("revealed");

  });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
  document.querySelector(".footer-bottom p");

if (yearElement) {

  const currentYear =
    new Date().getFullYear();

  yearElement.textContent =
    `© ${currentYear} DENFILUX. All rights reserved.`;

}


/* =========================================
   DENFILUX INITIALIZATION
========================================= */

console.log(
  "DENFILUX website initialized successfully."
);
