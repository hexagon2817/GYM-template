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


/* Navbar entrance (optional but clean) */
gsap.from(".custom-navbar", {
  y: -60,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out"
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



// 3. Hero Entrance Timeline
const tl = gsap.timeline();
tl.from(".hero-title", {
  y: 200,
  opacity: 0,
  duration: 1.5,
  stagger: 0.3,
  ease: "power4.out",
})
  .from(".hero-para", { opacity: 0, y: 20, duration: 1 }, "-=1")
  
  .to(
  ".btn-ultra",
  { y: 0,
  opacity: 1,
  duration: 1.5,
  stagger: 0.3,
  ease: "power4.out", },
  "-=0.5"
    )

  .to(".hero-bg", { scale: 1, duration: 3, ease: "power2.out" }, 0);

// 4. Scroll Reveal Animations
gsap.utils.toArray(".section-reveal").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 85%" },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});

// Parallax for the mission image

// gsap.to(".mission-img", {
//   scrollTrigger: { trigger: ".mission", scrub: true },
//   y: -100,
//   ease: "none",
// });



// about section 

gsap.registerPlugin(ScrollTrigger);

// Timeline for perfect synced reveal
const dnaReveal = gsap.timeline({
    scrollTrigger: {
        trigger: ".dna-section",
        start: "top 70%",
        toggleActions: "play none none none"
    }
});

dnaReveal
    .from(".content-wrapper", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    .from(".dna-visual-wrapper", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8") // Slight overlap for a smooth feel
    .from(".fill", {
        width: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power2.inOut"
    }, "-=0.5");




// Staggered Program Cards

// gsap.from(".prog-card-wrap", {
//   scrollTrigger: { trigger: ".programs", start: "top 70%" },
//   y: 100,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.2,
//   ease: "power3.out",
// });

// GSAP Reveal for the 6 Program Cards
gsap.from(".prog-card-wrap", {
  scrollTrigger: {
    trigger: ".programs",
    start: "top 75%", // Starts when the top of the section is 75% down the viewport
    toggleActions: "play none none none",
  },
  y: 60,
  opacity: 0,
  duration: 1.2,
  stagger: 0.15, // Delay between each card's entrance
  ease: "power4.out",
});

// 5. Pricing Cards Stagger
// Pricing Cards Staggered Reveal
gsap.from(".pricing-column", {
    scrollTrigger: {
        trigger: ".membership-section",
        start: "top 70%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// 6. Testimonial Fade
gsap.from(".testimonial-slider", {
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 80%",
  },
  opacity: 0,
  scale: 0.9,
  duration: 1.5,
  ease: "power3.out",
});

// 7. Responsive Fix: Disable cursor animation on mobile
if (window.innerWidth < 1024) {
  cursor.style.display = "none";
}

// 8. Stat Counter Animation
const stats = document.querySelectorAll(".stat-number");

stats.forEach((stat) => {
  const target = +stat.getAttribute("data-target");

  gsap.to(stat, {
    scrollTrigger: {
      trigger: stat,
      start: "top 90%",
    },
    innerText: target,
    duration: 2,
    snap: { innerText: 1 },
    ease: "power1.out",
  });
});

// 9. Reveal for Tech Text
// GSAP Parallax Floating Effect for Tiles
const techTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".tech-section",
        start: "top 75%",
    }
});

techTl.from(".reveal-left", { x: -50, opacity: 0, duration: 1 })
      .to(".data-tile", { 
          y: -70, 
          opacity: 1, 
          duration: 0.8, 
        //   stagger: 0.15, 
          ease: "power4.out" 
      }, "");

// Trainers section 
gsap.from(".trainer-card-wrap", {
    scrollTrigger: {
        trigger: ".trainers-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
});

// Title parallax for the section
gsap.to(".outline-text", {
    scrollTrigger: {
        trigger: ".trainers-section",
        scrub: true
    },
    x: 50,
    ease: "none"
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