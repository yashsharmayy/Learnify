gsap.registerPlugin(ScrollTrigger);

// menubar

let tl = gsap.timeline();

tl.to("#menubar", {
  right: 0,
  duration: 0.6,
  ease: "power2.out",
});
tl.from(".menubar li", {
  x: 40,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
  ease: "power2.out",
});
tl.from("#menubar i", {
  y: 70,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
});
tl.pause();

let menu = document.querySelector(".menubutton");
let close = document.querySelector("#menubar .ri-close-line");
menu.addEventListener("click", () => {
  tl.play();
});
close.addEventListener("click", () => {
  tl.reverse();
});

// nav

let navtl = gsap.timeline();

navtl.from("header", {
  duration: 0.7,
  delay: 0.7,
  stagger: 0.3,
  opacity: 0,
  ease: "power2.out",
});

navtl.from("header nav h2", {
  y: 30,
  duration: 0.7,
  delay: 0.7,
  stagger: 0.3,
  opacity: 0,
});

let heropagetl = gsap.timeline();
heropagetl.from("#heroContent", {
  y: 30,
  duration: 1,
  delay: 1,
  stagger: 0.3,
  opacity: 0,
});
heropagetl.from("#heroimg", {
  x: 150,
  duration: 1,
  opacity: 0,
  ease: "power3.out",
});
heropagetl.to("#banner", {
  opacity: 1,
});

heropagetl.to(".grp", {
  transform: "translateX(-350%)",
  repeat: -1,
  duration: 16,
  ease: "linear",
});

//page1

let animetl = gsap.timeline({
  scrollTrigger: {
    // markers: true,
    trigger: "#page1",
    start: "top 60% ",
    end: "top 30%",
    // scrub: 1,
  },
});
animetl.from(".search-courses", {
  opacity: 0,
  y: 50,
  duration: 0.7,
});
animetl.from(".Search", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  ease: "power3.out",
});
animetl.from(".img-container", {
  opacity: 0,
  x: -100,
  duration: 0.6,
  ease: "power3.out",
});
animetl.from(".container-heading", {
  opacity: 0,
  x: 100,
  duration: 0.6,
  ease: "power3.out",
});
animetl.from(".text-content", {
  opacity: 0,
  x: 100,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

//page2

animetl.from(".page2heading", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  ease: "power3.out",
});
animetl.from(".page2text", {
  opacity: 0,
  y: 50,
  duration: 0.7,
});
animetl.from(".card", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  stagger: 0.3,
});

let cards = document.querySelectorAll(".card");
let cardheader = document.querySelectorAll(".cardheader");

cards.forEach((card) => {
  let img = card.querySelector(".img1"); // ✅ correct

  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.08,
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
      duration: 0.4,
      ease: "power3.out",
    });
    gsap.to(cardheader, {});

    gsap.to(img, {
      scale: 2.5,
      opacity: 0.6,
      duration: 0.4,
      ease: "power3.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(img, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  });
});

//page3

animetl.from(".page3text", {
  opacity: 0,
  y: 50,
  delay: 0.7,
  duration: 0.7,
  stagger: 0.3,
  ease: "power3.out",
});

animetl.from("#page3 ul li , #page3 button", {
  opacity: 0,
  x: 50,
  duration: 0.7,
  stagger: 0.2,
  ease: "power3.out",
});

animetl.from("#page3 img", {
  opacity: 0,
  x: 50,
  duration: 0.7,
  ease: "power2.out",
});

// page4;

//slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});

animetl.from(".Testimonials", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  ease: "power3.out",
});

// extra page

animetl.from(".extrapage", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  ease: "power3.out",
});
animetl.from(".extrapagetext", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  stagger: 0.3,
  ease: "power3.out",
});

animetl.from(".footerleft", {
  opacity: 0,
  x: -150,
  duration: 0.7,
  stagger: 0.4,
  ease: "power2.out",
});
animetl.from(".catagories", {
  opacity: 0,
  y: 150,
  duration: 0.7,
  stagger: 0.3,
  ease: "power2.out",
});

animetl.from("footer nav a", {
  opacity: 0,
  x: 50,
  duration: 0.7,
  stagger: 0.2,
  ease: "power2.out",
});
