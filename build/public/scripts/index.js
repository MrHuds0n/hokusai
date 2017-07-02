'use strict';

//Eyecandy
var input1 = document.getElementById('decklist1-input');
var input2 = document.getElementById('decklist2-input');
var logo = document.getElementById('logo');
var circle = document.getElementById('svgcircle');
var path = document.getElementById('svgpath');

input1.addEventListener('input', color);
input2.addEventListener('input', color);

function color() {
  if (input1.value.trim() !== "" && input2.value.trim() !== "") {
    circle.style.stroke = "lightskyblue";
    path.style.stroke = "lightskyblue";
  } else {
    circle.style.stroke = "black";
    path.style.stroke = "black";
  }
}

logo.addEventListener('click', function () {
  location.pathname = '/' + input1.value + '/' + input2.value;
});