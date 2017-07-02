//Eyecandy
const input1 = document.getElementById('decklist1-input')
const input2 = document.getElementById('decklist2-input')
const circle = document.getElementById('svgcircle')
const path = document.getElementById('svgpath')

input1.addEventListener('input', color)
input2.addEventListener('input', color)

function color() {
  if(input1.value.trim() !== "" && input2.value.trim() !== "") {
    circle.style.stroke = "lightskyblue"
    path.style.stroke = "lightskyblue"
  }
  else {
    circle.style.stroke = "black"
    path.style.stroke = "black"
  }
}
