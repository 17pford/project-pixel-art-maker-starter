// Select color input
// Select size input

var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()

function makeGrid() {
function makeGrid(heigth, width) {
  for (let y = 0, y < height; y++) {
    let row = canvas.insertRow(y);
    for (let x = 0, x < width: x++) {
      let box = canvas.insertBox(x);
      box.addEventListener("mousedown", function(evt) {
        box.style.backgroundColor = color.value;
      box.addEventListener("contextmenu", function(evt) {
        evt.preventDefault();
        cell.style.backgroundColor = "white";
      })
      })
    }
  }
};

// Your code goes here!

}
sizePicker.addEventListener("submit", function(evt) {
    evt.preventDefault();
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(height.value, width.value);
});
