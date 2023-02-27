import { solveSudokuOuter } from "./sudokuArray.js";
let solveButton = document.getElementById("solveBtn");
let submitButton = document.getElementById("submitBtn");
let resetButton = document.getElementById("resetBtn");

solveButton.addEventListener("click", solveBtn);
submitButton.addEventListener("click", submitBtn);
resetButton.addEventListener("click", resetBtn);

let unsolvedSudokuArr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let solved = solveSudokuOuter([
  [Math.floor(Math.random() * 9) + 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
// console.log(solved);
const cells = document.querySelectorAll(".cell");

// console.log(cells);
let row = 0,
  col = 0;
let r1 = Math.floor(Math.random() * 9) + 1;
let r2 = Math.floor(Math.random() * 9) + 1;
let r3 = Math.floor(Math.random() * 9) + 1;

cells.forEach((cell) => {
  unsolvedSudokuArr[row][col] = solved[row][col];
  if (row == (r1 || r2 || r3) || col == (r1 || r2 || r3)) {
    unsolvedSudokuArr[row][col] = " ";

    // r1 = Math.floor(Math.random() * 9) + 1;
    // r2 = Math.floor(Math.random() * 9) + 1;
    // r3 = Math.floor(Math.random() * 9) + 1;
  }

  cell.innerText = unsolvedSudokuArr[row][col];
  if (row == (r1 || r2 || r3) || col == (r1 || r2 || r3)) {
    cell.bgColor = "#d4bebe";
    cell.contentEditable = true;
    r1 = Math.floor(Math.random() * 9) + 1;
    r2 = Math.floor(Math.random() * 9) + 1;
    r3 = Math.floor(Math.random() * 9) + 1;
  }
  if (col == 8) {
    col = 0;
    row += 1;
  } else {
    col++;
  }

  cell.addEventListener("input", (ele) => {
    let value = cell.innerText;
    // console.log(value);

    //  const input = prompt("Enter a number from 1 to 9:", "");
    if (
      value !== null &&
      value !== "" &&
      !isNaN(value) &&
      value >= 1 &&
      value <= 9
    ) {
      // Set value of cell to inputted number
      cell.innerText = value;
    } else {
      cell.innerText = "";
      alert("Enter Digit Between 1-9");
    }
  });
});

function solveBtn() {
  console.log("hi");
  let row = 0,
    col = 0;
  cells.forEach((cell) => {
    cell.innerText = solved[row][col];
    if (col == 8) {
      col = 0;
      row += 1;
    } else {
      col++;
    }
  });
}
function submitBtn() {
  let flag = 1;
  let row = 0,
     col = 0;
   cells.forEach((cell) => {
    if( cell.innerText != solved[row][col]){
      flag =0;
      cell.bgColor ="red";
    }
     if (col == 8) {
       col = 0;
       row += 1;
     } else {
       col++;
     }
   });
   if(flag == 1){
   
    document.querySelectorAll(".cell").forEach((ele)=>{
      ele.bgColor = "#bdffc5";
    })
    console.log("All correct!");
   }
    document.querySelector(".board-container").classList.add("sudoku-win");
}
function resetBtn() {
  solved = solveSudokuOuter([
    [Math.floor(Math.random() * 9) + 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
   r1 = Math.floor(Math.random() * 9) + 1;
   r2 = Math.floor(Math.random() * 9) + 1;
   r3 = Math.floor(Math.random() * 9) + 1;
  row = 0,
    col = 0;
  cells.forEach((cell) => {
    cell.bgColor = "#eafbff";
  unsolvedSudokuArr[row][col] = solved[row][col];
  if (row == (r1 || r2 || r3) || col == (r1 || r2 || r3)) {
    unsolvedSudokuArr[row][col] = " ";
  }

  cell.innerText = unsolvedSudokuArr[row][col];
  if (row == (r1 || r2 || r3) || col == (r1 || r2 || r3)) {
    cell.bgColor = "#d4bebe";
    cell.contentEditable = true;
    r1 = Math.floor(Math.random() * 9) + 1;
    r2 = Math.floor(Math.random() * 9) + 1;
    r3 = Math.floor(Math.random() * 9) + 1;
  }
  if (col == 8) {
    col = 0;
    row += 1;
  } else {
    col++;
  }

});
document.querySelector(".board-container").classList.remove("sudoku-win");
// document.querySelector(".board-container").bgColor = "#";
}

