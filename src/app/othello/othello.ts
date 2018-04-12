export class Othello {

  MAX_ROWS = 8;
  MAX_COLS = 8;
  PLAYER_RED = 1;
  PLAYER_BLUE = -1;
  PLAYER_NONE = 0;
  currentPlayer = 0;

  constructor(
    public cells = [[]],
    public redScore = 2,
    public blueScore = 2
  ) {
    this.cells = Array(this.MAX_ROWS).fill(0).map(() => Array(this.MAX_COLS).fill(this.PLAYER_NONE));
    this.cells[3][3] = this.PLAYER_RED;
    this.cells[4][4] = this.PLAYER_RED;
    this.cells[3][4] = this.PLAYER_BLUE;
    this.cells[4][3] = this.PLAYER_BLUE;
    this.currentPlayer = this.PLAYER_RED;
    console.log(this.cells);
  }

  takeTurn(row, col) {
    if (!this.cells[row][col]) {
      this.cells[row][col] = this.currentPlayer;
      this.checkFlanks(row, col);
      this.currentPlayer *= -1;
      this.calcScores();
    }
  }

  calcScores() {
    const flat = this.cells.reduce((a, b) => a.concat(b));
    this.redScore = flat.filter(cell => cell === this.PLAYER_RED).reduce((a, b) => a + b);
    this.blueScore = flat.filter(cell => cell === this.PLAYER_BLUE).reduce((a, b) => a + b) * -1;
  }

  checkFlanks(row, col) {
    this.checkVert(row, col);
    this.checkHoriz(row, col);
    this.checkDiag(row, col);
  }

  checkVert(row, col) {
    const start = row;
    let end = row;
    while (--row >= 0) {
      if (!this.cells[row][col] || this.cells[row][col] === this.PLAYER_NONE) {
        row = start;
        break;
      } else if (this.cells[row][col] === this.currentPlayer) {
        break;
      }
    }
    if (row >= 0) {
      end = row;
      for (let y = start - 1; y > end; y--) {
        this.cells[y][col] *= -1;
      }
    }

    row = start;

    while (++row < this.MAX_ROWS) {
      if (!this.cells[row][col] || this.cells[row][col] === this.PLAYER_NONE) {
        row = start;
        break;
      } else if (this.cells[row][col] === this.currentPlayer) {
        break;
      }
    }
    if (row < this.MAX_ROWS) {
      end = row;
      for (let y = start + 1; y < end; y++) {
        this.cells[y][col] *= -1;
      }
    }
  }

  checkHoriz(row, col) {
    const start = col;
    let end = col;
    while (--col >= 0) {
      if (!this.cells[row][col] || this.cells[row][col] === this.PLAYER_NONE) {
        col = start;
        break;
      } else if (this.cells[row][col] === this.currentPlayer) {
        break;
      }
    }
    if (col >= 0) {
      end = col;
      for (let x = start - 1; x > end; x--) {
        this.cells[row][x] *= -1;
      }
    }

    col = start;


    while (++col < this.MAX_COLS) {
      if (!this.cells[row][col] || this.cells[row][col] === this.PLAYER_NONE) {
        col = start;
        break;
      } else if (this.cells[row][col] === this.currentPlayer) {
        break;
      }
    }
    if (col < this.MAX_COLS) {
      end = col;
      for (let x = start + 1; x < end; x++) {
        this.cells[row][x] *= -1;
      }
    }
  }

  checkDiag(row, col) {
    const startCol = col;
    const startRow = row;
    let endCol = col;
    let endRow = row;

    while (++col < this.MAX_COLS && ++row < this.MAX_ROWS) {
      if (!this.cells[row][col] || this.cells[row][col] === this.PLAYER_NONE) {
        col = startCol;
        row = startRow;
        break;
      } else if (this.cells[row][col] === this.currentPlayer) {
        break;
      }
    }
    if (col < this.MAX_COLS && row < this.MAX_ROWS) {
      endCol = col;
      endRow = row;
      for (let x = startCol + 1, y = startRow + 1; x < endCol && y < endRow; ) {
        this.cells[y][x] *= -1;
        x++;
        y++;
      }
    }


    col = startCol;
    row = startRow;

    while (--col >= 0 && ++row < this.MAX_ROWS) {
      if (!this.cells[row][col] || this.cells[row][col] === this.PLAYER_NONE) {
        col = startCol;
        row = startRow;
        break;
      } else if (this.cells[row][col] === this.currentPlayer) {
        break;
      }
    }
    if (col >= 0 && row < this.MAX_ROWS) {
      endCol = col;
      endRow = row;

      for (let x = startCol - 1, y = startRow + 1; x > endCol && y < endRow; ) {
        this.cells[y][x] *= -1;
        x--;
        y++;
      }
    }

    col = startCol;
    row = startRow;

    while (++col < this.MAX_COLS && --row >= 0) {

      if (!this.cells[row][col] || this.cells[row][col] === this.PLAYER_NONE) {
        col = startCol;
        row = startRow;
        break;
      } else if (this.cells[row][col] === this.currentPlayer) {
        break;
      }
    }
    if (col < this.MAX_COLS && row >= 0) {
      endCol = col;
      endRow = row;

      for (let x = startCol + 1, y = startRow - 1; x < endCol && y > endRow; ) {
        this.cells[y][x] *= -1;
        x++;
        y--;
      }
    }

    col = startCol;
    row = startRow;

    while (--col >= 0 && --row >= 0) {
      if (!this.cells[row][col] || this.cells[row][col] === this.PLAYER_NONE) {
        col = startCol;
        row = startRow;
        break;
      } else if (this.cells[row][col] === this.currentPlayer) {
        break;
      }
    }
    if (col >= 0 && row >= 0) {
      endCol = col;
      endRow = row;

      for (let x = startCol - 1, y = startRow - 1; x > endCol && y > endRow; ) {
        this.cells[y][x] *= -1;
        x--;
        y--;
      }
    }
  }
}
