class Board {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.table = this.createDimensions();
    }
    createDimensions() {
        let array1 = [];
        let array2 = [];
        for (let i = 0; i < this.y; i++) {
            for (let j = 0; j < this.x; j++) {
                let x = Math.floor(Math.random() * 2);
                array2.push(x);
            }
            array1.push(array2);
            array2 = [];
        }
        this.table = array1
        return this.table
    }

    findCells() {
        let cellsToKill = []
        let cellsToRevive = []
        for (let i = 0; i < this.y; i++) {
            for (let j = 0; j < this.x; j++) {
                let neighbours = new Cell(i, j)
                let count = neighbours.findNeighbours(this.table)
                if (this.table[i][j] == 1) {
                    if (count > 3 || count < 2) {
                        cellsToKill.push([i, j])
                    }
                }
                else {
                    if (neighbours.findNeighbours(this.table) == 3) {
                        cellsToRevive.push([i, j])
                    }
                }
            }
        }
        return { cellsToKill, cellsToRevive }
    }

    nextGen() {
        let found = this.findCells();

        found.cellsToKill.forEach(cell => {
            const [x, y] = cell
            this.table[x][y] = 0
        })

        found.cellsToRevive.forEach(cell => {
            const [x, y] = cell
            this.table[x][y] = 1
        })
    }
}

class Cell {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    findNeighbours(board) {
        let cont = 0
        for (let i = this.x - 1; i <= this.x + 1; i++) {
            for (let j = this.y - 1; j <= this.y + 1; j++) {
                if (i < 0) i = 0
                if (j < 0) j = 0
                if (i > board.x) break
                if (j > board.y) break

                if (board[i][j] == 1) {
                    if (i != this.x || j != this.y) {
                        console.log(i + ' ' + j)
                        cont++
                    }
                }
            }
        }
        console.log(cont);
        return cont
    }
}

let firstGen = new Board(4, 4);

console.table(firstGen.table)
firstGen.nextGen()
console.table(firstGen.table);


