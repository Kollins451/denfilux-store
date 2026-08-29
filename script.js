/* =========================================
   DENFILUX — JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");

if (mobileMenuBtn && mainNav) {

  mobileMenuBtn.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("active");

    mobileMenuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    mobileMenuBtn.textContent = isOpen ? "✕" : "☰";

  });


  /* Close menu when a navigation link is clicked */

  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      mobileMenuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      mobileMenuBtn.textContent = "☰";

    });

  });

}


/* =========================================
   CONTACT FORM
   Opens the visitor's email app
   and prepares a message for DENFILUX
========================================= */

const contactForm =
  document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    /* Get form values */

    const name =
      document.getElementById("name")?.value.trim();

    const phone =
      document.getElementById("phone")?.value.trim();

    const email =
      document.getElementById("email")?.value.trim();

    const message =
      document.getElementById("message")?.value.trim();


    /* =========================================
       BASIC VALIDATION
    ========================================= */

    if (!name || !phone || !email || !message) {

      alert(
        "Please complete all the required fields."
      );

      return;

    }


    /* =========================================
       EMAIL VALIDATION
    ========================================= */

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

      alert(
        "Please enter a valid email address."
      );

      return;

    }


    /* =========================================
       TEST EMAIL
       Change this back to denfilux@gmail.com
       after the test is successful.
    ========================================= */

    const ownerEmail =
      "oladimejikollins07@gmail.com";


    /* =========================================
       EMAIL SUBJECT
    ========================================= */

    const subject =
      "New DENFILUX Website Enquiry";


    /* =========================================
       EMAIL MESSAGE
    ========================================= */

    const body =
`Hello DENFILUX,

You have received a new enquiry from your website.

Full Name: ${name}

Phone Number: ${phone}

Email Address: ${email}

Message:
${message}

--------------------------------
Sent from the DENFILUX website.`;


    /* =========================================
       CREATE EMAIL LINK
    ========================================= */

    const mailtoLink =
      "mailto:" +
      ownerEmail +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);


    /* =========================================
       OPEN EMAIL APP
    ========================================= */

    window.location.href = mailtoLink;

  });

}


/* =========================================
   PRODUCT LINKS
========================================= */

const productLinks =
  document.querySelectorAll(".product-link");

productLinks.forEach((link) => {

  link.addEventListener("click", () => {

    console.log(
      "DENFILUX product selected"
    );

  });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(
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
   CONSOLE MESSAGE
========================================= */

console.log(
  "DENFILUX website initialized successfully."
);
