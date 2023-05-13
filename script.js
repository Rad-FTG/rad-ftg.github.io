let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "65px",
  duration: 3000,
  delay: 500,
  reset: false,
});

sr.reveal(".logo", { delay: 250, origin: "top" });
sr.reveal("header", { delay: 250, origin: "top" });
sr.reveal(".hero-text", { delay: 250, origin: "top" });
sr.reveal(".hero-img", { delay: 250, origin: "top" });
sr.reveal(".icons", { delay: 250, origin: "left" });
sr.reveal(".scroll-down", { delay: 250, origin: "right" });
sr.reveal("#menu-icon", { delay: 250, origin: "right" });
sr.reveal(".scroll-up", { delay: 250, origin: "right" });
sr.reveal(".scroll-down-2", { delay: 250, origin: "right" });
