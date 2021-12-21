const canvas = document.querySelector(".canvas");
const colorPicker = document.querySelector(".colorPicker");
const clearBtn = document.querySelector(".clearBtn");
const eraserBtn = document.querySelector(".eraserBtn");
const toggleBorderBtn = document.querySelector(".toggleBorderBtn");

const DEFAULT_COLOR = "#000000";
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let drawMode = false;
let eraserMode = false;
let borderToggle = false;

clearBtn.addEventListener("click", clearGrid);
colorPicker.onchange = (e) => setCurrentColor(e.target.value);
eraserBtn.addEventListener("click", activateEraserMode);
toggleBorderBtn.addEventListener("click", toggleBorder);

function clearGrid() {
  for (let i = 0; i < canvas.children.length; i++) {
    canvas.children[i].style.backgroundColor = "#f2f1f1";
  }
}

function toggleBorder() {
  if (!borderToggle) {
    for (let i = 0; i < canvas.children.length; i++) {
      canvas.children[i].style.border = "1px solid black";
    }
    borderToggle = true;
  } else {
    for (let i = 0; i < canvas.children.length; i++) {
      canvas.children[i].style.border = "none";
    }
    borderToggle = false;
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

function setupGrid(size) {
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", changeColor);
    cell.addEventListener("click", activateDrawMode);
    canvas.appendChild(cell);
  }
}

window.onload = () => {
  setupGrid(DEFAULT_SIZE);
};
