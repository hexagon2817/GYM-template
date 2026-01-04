gsap.registerPlugin(ScrollTrigger);

// 1. Custom Cursor Movement
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: "power2.out",
  });
});

// 2. Navbar Background Change
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector(".navbar").classList.add("scrolled");
  } else {
    document.querySelector(".navbar").classList.remove("scrolled");
  }
});









const burger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".mobile-close");

let isOpen = false;

function openMenu() {
  gsap.to(mobileNav, {
    y: "0%",
    duration: 0.7,
    ease: "power4.out"
  });
  isOpen = true;
}

function closeMenu() {
  gsap.to(mobileNav, {
    y: "-100%",
    duration: 0.6,
    ease: "power4.in"
  });
  isOpen = false;
}

burger.addEventListener("click", () => {
  isOpen ? closeMenu() : openMenu();
});

closeBtn.addEventListener("click", closeMenu);

// Close when clicking any link
document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", closeMenu);
});








/* ===============================
   COLORFUL DOOR OPENING
   =============================== */

const doorTl = gsap.timeline();

// initial states
gsap.set(".left-door", { xPercent: 0 });
gsap.set(".right-door", { xPercent: 0 });
gsap.set(".door-content", { opacity: 0, y: 50 });

// DOORS OPEN
doorTl
  .to(".left-door", {
    xPercent: -100,
    duration: 1.6,
    ease: "expo.inOut"
  })
  .to(".right-door", {
    xPercent: 100,
    duration: 1.6,
    ease: "expo.inOut"
  }, "<")

  // CONTENT REVEAL
  .to(".door-content", {
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: "power4.out"
  }, "-=0.6");

/* COLOR GLOW MOTION */
gsap.to(".hero-color-glow", {
  backgroundPosition: "200px 200px",
  duration: 20,
  ease: "none",
  repeat: -1,
  yoyo: true
});



 











/* ===============================
   FORM STAGE ANIMATION
   =============================== */

const formTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-form-stage",
    start: "top 75%",
    toggleActions: "play none none reverse"
  }
});

// LEFT TEXT
formTl.from(".form-stage-text", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

// FORM BOX
formTl.from(".form-stage-box", {
  y: 120,
  opacity: 0,
  duration: 1.3,
  ease: "power4.out"
}, "-=0.8");

// BUTTON GLOW
formTl.to(".btn-glow", {
  x: "200%",
  duration: 1,
  ease: "power2.out"
}, "-=0.4");










/* ===============================
   CONTACT SIGNAL ANIMATION
   =============================== */

gsap.registerPlugin(ScrollTrigger);

// entrance
gsap.from(".signal-content", {
  scrollTrigger: {
    trigger: ".contact-signal",
    start: "top 80%"
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

// background drift
gsap.to(".signal-bg span:first-child", {
  x: 200,
  duration: 25,
  ease: "none",
  repeat: -1,
  yoyo: true
});

gsap.to(".signal-bg span:last-child", {
  x: -200,
  duration: 25,
  ease: "none",
  repeat: -1,
  yoyo: true
});

// pulse mark
gsap.to(".signal-mark .core", {
  scale: 1.6,
  opacity: 0.3,
  duration: 1.4,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut"
});


/* ===============================
   MICRO REALISM MOTION
   =============================== */

gsap.to(".lifter-image", {
  scale: 1.015,
  duration: 4,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});















// footer 
// Simple Reveal for Footer
gsap.from(".main-footer .container", {
    scrollTrigger: {
        trigger: ".main-footer",
        start: "top 90%",
    },
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out"
});