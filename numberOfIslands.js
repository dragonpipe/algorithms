let grid = [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 1],
  ];
console.log(numberOfIslands(grid));


function numberOfIslands(grid) {
  let resul = 0;
  let booleanGrid = fillBooleanGrid(grid);
  console.log(booleanGrid);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1 && !booleanGrid[i][j]) {
        booleanGrid[i][j] = true;
        booleanGrid = countIsland(i, j, grid, booleanGrid);
        resul++;
      }
    }
  }
  return resul;
}

function countIsland(fil, col, grid, booleanGrid) {
  //countIsland returns the booleanGrid modified
  booleanGrid[fil][col] = true;

  if (col != grid.length - 1) {
    if (grid[fil][col + 1] == 1 && !booleanGrid[fil][col + 1]) {
      booleanGrid = countIsland(fil, col + 1, grid, booleanGrid);
    }
  }

  if (fil != grid.length - 1) {
    if (grid[fil + 1][col] == 1 && !booleanGrid[fil + 1][col]) {
      booleanGrid = countIsland(fil + 1, col, grid, booleanGrid);
    }
  }

  if (col != 0) {
    if (grid[fil][col - 1] == 1 && !booleanGrid[fil][col - 1]) {
      booleanGrid = countIsland(fil, col - 1, grid, booleanGrid);
    }
  }

  if (fil != 0) {
    if (grid[fil - 1][col] == 1 && !booleanGrid[fil - 1][col]) {
      booleanGrid = countIsland(fil - 1, col, grid, booleanGrid);
    }
  }

  return booleanGrid;
}

function fillBooleanGrid(grid) {
  let falseGrid = [];
  for (let i = 0; i < grid.length; i++) {
    falseGrid[i] = [];
    for (let j = 0; j < grid[0].length; j++) {
      falseGrid[i][j] = false;
    }
  }

  return falseGrid;
}

