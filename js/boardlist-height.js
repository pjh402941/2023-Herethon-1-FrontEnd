var input = document.getElementById("search");

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-submit").click();
  }
});

var header = document.querySelector("header.hd");
var bd = document.querySelector(".bd");
var content = document.querySelector(".content");
var boardList = document.querySelector(".board-list");

function setBdHeight() {
  var windowHeight = window.innerHeight;
  var headerHeight = header.offsetHeight;
  var boardListHeight = boardList.offsetHeight;
  var minHeight = windowHeight - headerHeight;

  bd.style.height = Math.max(boardListHeight, minHeight) + "px";
  content.style.height = bd.style.height;
}

setBdHeight();

window.addEventListener("resize", setBdHeight);
