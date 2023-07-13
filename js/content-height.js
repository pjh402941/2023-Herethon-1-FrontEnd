var header = document.querySelector("header.hd");
var bd = document.querySelector(".bd");
var content = document.querySelector(".content");

function setBdHeight() {
  var windowHeight = window.innerHeight;
  var headerHeight = header.offsetHeight;
  var minHeight = windowHeight - headerHeight;

  bd.style.height = Math.max(minHeight) + "px";
  content.style.height = bd.style.height;
}

setBdHeight();

window.addEventListener("resize", setBdHeight);
