const canvas = document.querySelector(".canvas");
const colorPicker = document.querySelector(".colorPicker");
const clearBtn = document.querySelector(".clearBtn");

clearBtn.addEventListener("click", clearGrid);
colorPicker.onchange = (e) => setCurrentColor(e.target.value);

let currentColor = "#000000";
let drawMode = false;

// go through each cell and set its background color
function clearGrid() {
  for (let i = 0; i < canvas.children.length; i++) {
    canvas.children[i].style.backgroundColor = "#f2f1f1";
  }
}

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function changeColor(cell) {
  if (drawMode) {
    cell.target.style.backgroundColor = currentColor;
  }
}

function activateDrawMode() {
  console.log("click");
  drawMode = !drawMode;
  console.log(drawMode);
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
