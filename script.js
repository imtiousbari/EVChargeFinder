function show(btn, classifier,name) {
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
function getLocation(fun,page) {
    var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome/') > -1;
    console.log(is_safari, is_chrome);
    if (navigator.geolocation && (!is_safari || is_chrome)) {
        navigator.geolocation.getCurrentPosition(function(loc) {
          fun(loc.coords.latitude, loc.coords.longitude);
        })
    }
    else {
        alert("Geolocation is not supported by this browser.");     // location defaults to central Bristol
        fun(page,51.454514, -2.587910);
    }
}

// Load map with lat, lon query string
function loadMap(page,lat,lon) {
    location.href=page+"?lat="+lat+"&lon="+lon;
}
