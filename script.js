// telephone menu

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

// preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// gdzie ta muza kur

const whereisthismusic = document.querySelector(".logo");
let lastClickTime = 0;

whereisthismusic.onclick = () => {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - lastClickTime;

  if (elapsedTime >= 10000) {
    function playSound(audioName) {
      let audio = new Audio(audioName);
      audio.loop = false;
      audio.play();
    }
    playSound("audio/Where-is-this-music.mp3");

    // zmiana loga
    document.getElementById("changeText").innerHTML = "Where is this music?!";

    setTimeout(function () {
      document.getElementById("changeText").innerHTML = "RAD-FTG";
    }, 10000);

    lastClickTime = currentTime;
  }
};

// Board easter egg

const lc = document.querySelector("#lc");
lc.onclick = () => {
  function playSound(audioName) {
    let audio = new Audio(audioName);
    audio.loop = false;
    audio.play();
  }
  playSound("audio/lc.mp3");

  document.getElementById("board-js").innerHTML = "Siema";
};

// scroll reveal

const sr = ScrollReveal({
  distance: "50px",
  duration: 3000,
  delay: 500,
  reset: false,
});

sr.reveal(".logo", { delay: 250, origin: "top" });
sr.reveal("header", { delay: 250, origin: "top" });
sr.reveal(".hero-text", { delay: 500, origin: "top" });
sr.reveal(".hero-img", { delay: 500, origin: "top" });
sr.reveal(".icons", { delay: 250, origin: "left" });
sr.reveal(".hero-text-last", { delay: 250, origin: "bottom" });
sr.reveal("#menu-icon", { delay: 250, origin: "top" });
sr.reveal(".hero-map", { delay: 500, origin: "top" });
sr.reveal(".hero-ceo", { delay: 500, origin: "top" });
// sr.reveal(".scroll-down-pg1", { delay: 250, origin: "right" });
// sr.reveal(".scroll-up-pg2", { delay: 250, origin: "right" });
// sr.reveal(".scroll-down-pg2", { delay: 250, origin: "right" });
// sr.reveal(".scroll-up-pg3", { delay: 250, origin: "right" });
// sr.reveal(".scroll-down-pg3", { delay: 250, origin: "right" });
// sr.reveal(".scroll-up-pg4", { delay: 250, origin: "right" });
// sr.reveal(".scroll-down-pg4", { delay: 250, origin: "right" });
