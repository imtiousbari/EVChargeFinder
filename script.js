function show(btn, classifier, name) {
  // black out the other buttons in the menu bar
  var tabs = document.getElementsByClassName("w3-bar-item");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("w3-grey");
    tabs[i].classList.add("w3-black");
  }
  // colour this button
  btn.classList.remove("w3-black");
  btn.classList.add("w3-grey");

  // hide all the elements in the class
  var x = document.getElementsByClassName(classifier);
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // show the element identified
  var panel = document.getElementById(name);
  panel.style.display = "block";

  // refresh the iframe
  var iframe = panel.getElementsByTagName("iframe");
  iframe[0].src = iframe[0].src;
}

// Request user geolocation and callback with lat, lon
function getLocation(fun, page) {
  var is_safari = navigator.userAgent.toLowerCase().indexOf("safari/") > -1;
  var is_chrome = navigator.userAgent.toLowerCase().indexOf("chrome/") > -1;
  console.log(is_safari, is_chrome);
  if (navigator.geolocation && (!is_safari || is_chrome)) {
    navigator.geolocation.getCurrentPosition(function (loc) {
      fun(loc.coords.latitude, loc.coords.longitude);
    });
  } else {
    alert("Geolocation is not supported by this browser."); // location defaults to central Bristol
    fun(page, 51.454514, -2.58791);
  }
}

// Load map with lat, lon query string
function loadMap(page, lat, lon) {
  location.href = page + "?lat=" + lat + "&lon=" + lon;
}
document.getElementById("homeclick-btn").addEventListener("click", function () {
  const buttonContainer = document.getElementById("home-slider");
  buttonContainer.style.transform = "translateY(-100%)";
  const mainContent = document.getElementById("main-content");
  mainContent.style.display = "block";
  setTimeout(function () {
    mainContent.style.transform = "translateY(0)";
  }, 50);
});

const loading = document.getElementById("loading");
setTimeout(() => {
  loading.style.display = "none";
}, 5000);

function hideHomeSlider() {
  document.getElementById("home-slider").style.display = "none"; // Hides the home slider
}

const text = "Hello...!!";
let index = 0;
const textElement = document.getElementById("animated-text");

function typeLetter() {
  if (index < text.length) {
    const letter = document.createElement("span");
    letter.textContent = text[index];
    if (text[index] === "!") {
      letter.style.color = "green";
    }

    letter.style.display = "inline-block";
    letter.style.opacity = 0;
    letter.style.animation = "appear 0.5s ease-in-out forwards";
    textElement.appendChild(letter);
    index++;
  } else if (index === text.length) {
    setTimeout(() => {
      textElement.innerHTML = "";
      index = 0;
    }, 0);
  }
}

setInterval(typeLetter, 500);

const style = document.createElement("style");
style.innerHTML = `
  @keyframes appear {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
