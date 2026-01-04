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




// ===========================


// about hero section 

window.addEventListener('DOMContentLoaded', () => {
    const heroTl = gsap.timeline();

    // 1. Initial State
    gsap.set(".left-panel", { xPercent: -100 });
    gsap.set(".right-panel", { xPercent: 100 });
    gsap.set(".meta-box", { scale: 0, opacity: 0 });

    // 2. The Reveal Sequence
    heroTl
        .to(".left-panel, .right-panel", {
            xPercent: 0,
            duration: 1.5,
            ease: "expo.inOut"
        })
        .to(".hero-main-img", {
            scale: 1,
            filter: "grayscale(0.5) brightness(0.7)",
            duration: 2,
            ease: "power2.out"
        }, "-=1")
        .from(".reveal-text", {
            yPercent: 100,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        }, "-=1")
        .to(".hero-line", {
            width: "100px",
            duration: 0.8
        }, "-=0.5")
        .to(".meta-box", {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)"
        }, "-=0.8");
});

// Parallax effect on mouse move
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX - window.innerWidth / 2) * 0.02;
    const y = (e.clientY - window.innerHeight / 2) * 0.02;
    
    gsap.to(".hero-main-img", {
        x: x,
        y: y,
        duration: 2,
        ease: "power2.out"
    });
});

















gsap.registerPlugin(ScrollTrigger);

/* FULL WIDTH ORIGIN ENTRANCE */
gsap.from(".origin-left", {
  scrollTrigger: {
    trigger: ".origin-full",
    start: "top 75%",
    toggleActions: "play none none reverse"
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".origin-right", {
  scrollTrigger: {
    trigger: ".origin-full",
    start: "top 75%",
    toggleActions: "play none none reverse"
  },
  x: 100,
  opacity: 0,
  duration: 1.4,
  ease: "power4.out"
});

/* CONTINUOUS MOTION */
gsap.to(".origin-bg-text", {
  x: 120,
  duration: 15,
  ease: "none",
  repeat: -1,
  yoyo: true
});

gsap.to(".origin-lines", {
  backgroundPosition: "200px 200px",
  duration: 20,
  ease: "none",
  repeat: -1
});


























/* PROCESS SECTION ENTRANCE */

gsap.registerPlugin(ScrollTrigger);

/* ===============================
   METHOD SECTION ANIMATION
   =============================== */

gsap.from(".method-header", {
  scrollTrigger: {
    trigger: ".method-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".method-card", {
  scrollTrigger: {
    trigger: ".method-grid",
    start: "top 85%",
    toggleActions: "play none none reverse"
  },
  y: 80,
  opacity: 0,
  stagger: 0.25,
  duration: 0.9,
  ease: "power3.out"
});

























gsap.registerPlugin(ScrollTrigger);

/* ===============================
   PROGRAMS REDESIGN ANIMATION
   =============================== */

const programsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".programs-redesign",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// Header animation
programsTl.from(".programs-header", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Cards animation
programsTl.from(".program-card", {
  y: 90,
  opacity: 0,
  rotateX: 10,
  stagger: 0.15,
  duration: 1,
  ease: "power4.out"
}, "-=0.4");

// Background word subtle motion
// gsap.to(".programs-bg-text", {
//   y: -60,
//   duration: 18,
//   ease: "none",
//   repeat: -1,
//   yoyo: true
// });

























gsap.registerPlugin(ScrollTrigger);

/* ===============================
   FINAL CTA ANIMATION
   =============================== */

const ctaTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".final-cta",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

// content reveal
ctaTl.from(".cta-inner", {
  y: 80,
//   opacity: 0,
  duration: 1.1,
  ease: "power4.out"
});

// buttons pop
ctaTl.from(".cta-btn", {
  y: -20,
//   opacity: 0,
  stagger: 0.15,
  duration: 0.6,
  ease: "power3.out"
}, "-=0.5");

// subtle background drift
gsap.to(".cta-bg-word", {
  y: -80,
  duration: 20,
  ease: "none",
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