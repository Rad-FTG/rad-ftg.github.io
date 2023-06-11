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

const clickHandler = (() => {
  let lastClickTime = 0;
  let isCodeRunning = false;

  function playSound(audioName) {
    let audio = new Audio(audioName);
    audio.loop = false;
    audio.play();
  }

  function handleClick(elementId, audioFile, label) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - lastClickTime;

    if (!isCodeRunning && elapsedTime >= 1000) {
      isCodeRunning = true;
      playSound(audioFile);

      document.getElementById("board-js").innerHTML = label;

      setTimeout(function () {
        document.getElementById("board-js").innerHTML = "Board";
        isCodeRunning = false;
      }, 1000);

      lastClickTime = currentTime;
    }
  }

  return {
    hcClick: () => {
      handleClick("#hc", "audio/hc.mp3", "HC");
    },
    lcClick: () => {
      handleClick("#lc", "audio/lc.mp3", "LC");
    },
    scClick: () => {
      handleClick("#sc", "audio/sc.mp3", "SC");
    },
  };
})();

const hc = document.querySelector("#hc");
hc.onclick = clickHandler.hcClick;

const lc = document.querySelector("#lc");
lc.onclick = clickHandler.lcClick;

const sc = document.querySelector("#sc");
sc.onclick = clickHandler.scClick;

// cookie alert

const cookieBox = document.querySelector(".wrapper"),
  acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = () => {
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  } else {
    //if cookie not set then alert an error
    alert(
      "Cookie can't be set! Please unblock this site from the cookie setting of your browser."
    );
  }
};
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1
  ? cookieBox.classList.add("hide")
  : cookieBox.classList.remove("hide");

// Login page

function wyswietlKomunikat() {
  alert("Logowanie udane! Witaj w naszym serwisie!");
}

var loggedInUser = localStorage.getItem("username");

function showLoginPage() {
  document.querySelector(".backdrop").style.display = "block";
  document.querySelector(".login-page").style.display = "block";
}

function hideLoginPage() {
  document.querySelector(".backdrop").style.display = "none";
  document.querySelector(".login-page").style.display = "none";
}

function showPricePage() {
  document.querySelector(".jebanakurwa").style.display = "block";
  document.querySelector(".price-page").style.display = "block";
}

function hidePricePage() {
  document.querySelector(".jebanakurwa").style.display = "none";
  document.querySelector(".price-page").style.display = "none";
}

function saveLoginData() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Sprawdzenie poprawności logowania i odpowiednie działania

  // Jeśli logowanie jest prawidłowe
  loggedInUser = username;
  updateNavigation();
  hideLoginPage();
}

wyswietlKomunikat();

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  // Jeśli wylogowano
  loggedInUser = null;
  updateNavigation();
}

function updateNavigation() {
  var navlist = document.querySelector(".navlist");

  // Usuń istniejące elementy nawigacyjne
  while (navlist.firstChild) {
    navlist.removeChild(navlist.firstChild);
  }

  // Dodaj elementy nawigacyjne w zależności od stanu logowania
  var navigationItems = [
    { text: "Home Page", href: "#home" },
    { text: "About us", href: "#about" },
    { text: "Board", href: "#board" },
    { text: "Contact", href: "#contact" },
  ];

  if (loggedInUser) {
    // Jeśli zalogowano
    for (var i = 0; i < navigationItems.length; i++) {
      var item = navigationItems[i];
      var listItem = document.createElement("li");
      var link = document.createElement("a");
      link.textContent = item.text;
      link.href = item.href;
      listItem.appendChild(link);
      navlist.appendChild(listItem);
    }

    // Dodaj przycisk "Sign out"
    var PriceItem = document.createElement("li");
    var PriceLink = document.createElement("a");
    PriceLink.textContent = "Price";
    PriceLink.addEventListener("click", showPricePage);
    PriceItem.appendChild(PriceLink);
    navlist.appendChild(PriceItem);

    // Dodaj przycisk "Sign out"
    var signOutItem = document.createElement("li");
    var signOutLink = document.createElement("a");
    signOutLink.textContent = "Sign out";
    signOutLink.onclick = logout;
    signOutItem.appendChild(signOutLink);
    navlist.appendChild(signOutItem);
  } else {
    // Jeśli nie zalogowano
    for (var i = 0; i < navigationItems.length; i++) {
      var item = navigationItems[i];
      var listItem = document.createElement("li");
      var link = document.createElement("a");
      link.textContent = item.text;
      link.href = item.href;
      listItem.appendChild(link);
      navlist.appendChild(listItem);
    }

    // Dodaj przycisk "Login"
    var loginItem = document.createElement("li");
    var loginLink = document.createElement("a");
    loginLink.textContent = "Login";
    loginLink.href = "#";
    loginLink.onclick = showLoginPage;
    loginItem.appendChild(loginLink);
    navlist.appendChild(loginItem);
  }
}

// Aktualizuj nawigację przy załadowaniu strony
updateNavigation();

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
