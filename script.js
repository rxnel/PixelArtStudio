const canvas = document.querySelector(".canvas");
const colorPicker = document.querySelector(".colorPicker");
const clearBtn = document.querySelector(".clearBtn");
const eraserBtn = document.querySelector(".eraserBtn");
let currentColor = "#000000";
let drawMode = false;
let eraserMode = false;

clearBtn.addEventListener("click", clearGrid);
colorPicker.onchange = (e) => setCurrentColor(e.target.value);
eraserBtn.addEventListener("click", activateEraserMode);

// go through each cell and set its background color
function clearGrid() {
  for (let i = 0; i < canvas.children.length; i++) {
    canvas.children[i].style.backgroundColor = "#f2f1f1";
  }
}

function setCurrentColor(newColor) {
  eraserMode = false;
  currentColor = newColor;
}

function changeColor(cell) {
  if (drawMode) {
    if (eraserMode) {
      cell.target.style.backgroundColor = "#f2f1f1";
    } else {
      cell.target.style.backgroundColor = currentColor;
    }
  }
}

function activateDrawMode() {
  drawMode = !drawMode;
}

function activateEraserMode() {
  eraserMode = !eraserMode;
}

// create 16x16 grid of squares in the canvas
function setupGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseover", changeColor);
      cell.addEventListener("click", activateDrawMode);
      canvas.appendChild(cell);
    }
  }
}

setupGrid();
