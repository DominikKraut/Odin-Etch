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
