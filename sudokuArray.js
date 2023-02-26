 
export function solveSudokuOuter(grid){
  function solveSudokuInner(grid) {
   // Helper function to check if a value is valid in a given position
   function isValid(row, col, num) {
     // Check row
     for (let c = 0; c < 9; c++) {
       if (grid[row][c] == num) {
         return false;
       }
     }

     // Check column
     for (let r = 0; r < 9; r++) {
       if (grid[r][col] == num) {
         return false;
       }
     }

     // Check sub-grid
     const subGridRowStart = Math.floor(row / 3) * 3;
     const subGridColStart = Math.floor(col / 3) * 3;
     for (let r = 0; r < 3; r++) {
       for (let c = 0; c < 3; c++) {
         if (grid[subGridRowStart + r][subGridColStart + c] == num) {
           return false;
         }
       }
     }

     // Value is valid
     return true;
   }

   // Helper function to find the next unassigned cell
   function findUnassigned() {
     for (let row = 0; row < 9; row++) {
       for (let col = 0; col < 9; col++) {
         if (grid[row][col] == 0) {
           return [row, col];
         }
       }
     }
     // No unassigned cell found
     return null;
   }

   // Main function to solve the Sudoku grid using backtracking
   function solve() {
     const unassigned = findUnassigned();
     if (!unassigned) {
       // All cells have been assigned
       return true;
     }
     const [row, col] = unassigned;
     for (let num = 1; num <= 9; num++) {
       if (isValid(row, col, num)) {
         grid[row][col] = num;
         if (solve()) {
           return true;
         }
         grid[row][col] = 0;
       }
     }
     // Backtrack
     return false;
   }

   // Call the solve function to solve the Sudoku grid
  
   return solve();
 }
 solveSudokuInner(grid)
 return grid;
}
//  console.log( solveSudoku([
//   [Math.floor(Math.random() * 9) + 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ]));
