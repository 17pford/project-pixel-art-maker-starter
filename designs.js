//imports useful elements, and assigns them to variables
var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

function makeGrid(height, width) {
    for (let y = 0; y < height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener("mousedown", function(evt) {
                cell.style.backgroundColor = color.value;
            cell.addEventListener("contextmenu", function(evt) {
                cell.style.backgroundColor = "white";
            } )
            } )
        }
    }
}


sizePicker.addEventListener("submit", function(evt) {
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(height.value, width.value);
});


save.addEventListener("click", function(evt) {
    html2canvas(canvas).then(canvas => {
        document.body.appendChild(canvas)
    });
});
