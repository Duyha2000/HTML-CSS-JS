let hideText = document.getElementById("hideText");
let title = document.getElementById("title");
hideText.addEventListener("click", function () {
  title.style.display = "none";
});

let showText = document.getElementById("showText");
showText.addEventListener("click", function () {
  title.style.display = "flex";
});
let clikP = document.getElementById("iconx");
let boxnone = document.getElementById("box");
clikP.addEventListener("click", function () {
  boxnone.style.display = "none";
});
let clickboxon = document.getElementById("clickboxon");
clickboxon.addEventListener("click", function () {
  boxnone.style.display = "flex";
});

let boxcontainer = document.getElementById("boxcontainer");
let clickbox1 = document.getElementById("box1");
let clickbox2 = document.getElementById("box2");
let clickbox3 = document.getElementById("box3");
clickbox1.addEventListener("click", function () {
  boxcontainer.style.backgroundColor = "yellow";
});
clickbox2.addEventListener("click", function () {
  boxcontainer.style.backgroundColor = "rgb(11, 222, 88)";
});
clickbox3.addEventListener("click", function () {
  boxcontainer.style.backgroundColor = "rgb(167, 163, 163)";
});
