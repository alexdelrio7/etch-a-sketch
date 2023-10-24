const gridContainer = document.getElementById("grid-container");
const newGridButton = document.getElementById("new-grid-button");

function createGrid(size) {
  // Clear the existing grid
  gridContainer.innerHTML = "";

  // Calculate the width and height of each square
  const squareSize = 960 / size;

  // Create the grid
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "grid-row";
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.className = "grid-square";
      square.style.width = square.style.height = squareSize + "px";
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#000";
      });
      row.appendChild(square);
    }
    gridContainer.appendChild(row);
  }
}

newGridButton.addEventListener("click", () => {
  const newSize = prompt("Enter the number of squares per side (max 100):");
  const parsedSize = parseInt(newSize, 10);
  if (!isNaN(parsedSize) && parsedSize > 0 && parsedSize <= 100) {
    createGrid(parsedSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

// Initial grid creation
createGrid(16);
