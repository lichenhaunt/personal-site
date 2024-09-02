let card = document.getElementsByClassName("card");
let front = document.getElementById("front");
let back = document.getElementById("back");
let flipFront = document.getElementById("front-btn");
let flipBack = document.getElementById("back-btn");

function frontFlip() {
  front.style.display = "inline-block";
  back.style.display = "none";
  flipFront.onclick = front;
  flipBack.onclick = backFlip();
}

function backFlip() {
  back.style.display = "inline-block";
  front.style.display = "none";
  flipFront.onclick = frontFlip();
  flipBack = back;
}
