const canvas = document.querySelector(".canvas");

// create 16x16 grid of squares in the canvas
function init() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      canvas.appendChild(cell);
    }
  }
}

init();
