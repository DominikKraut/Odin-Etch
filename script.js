const cells = document.getElementById("grid");

const createGrid = (rows, boxes) => {
  for (let r = 0; r < rows; r++) {
    let row = document.createElement("div");
    row.classList.add("row");
    cells.appendChild(row);
    for (let c = 0; c < boxes; c++) {
      let box = document.createElement("div");
      box.innerText = c + 1;
      row.appendChild(box).className = "box";
    }
  }
};

createGrid(16, 16);

const boxes = document.querySelectorAll("div.box");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("mouseover", (e) => e.target.classList.add("coloured"));
}

const resetButton = document.getElementById("reset");
const gridSizeButton = document.getElementById("gridSize");

resetButton.addEventListener("click"); //finish this, not working, script has error cause of this
gridSizeButton.addEventListener("click", createGrid(3, 3));
