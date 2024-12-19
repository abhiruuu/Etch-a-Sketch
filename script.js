const generateGrid = document.querySelector("#generate-grid");

generateGrid.addEventListener("click", () => {
  const container = document.querySelector(".square-container");
  container.innerHTML = "";

  const noOfSquares = 16 * 16;
  for (let i = 0; i < noOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#303041";
    });
    container.appendChild(square);
  }
});
