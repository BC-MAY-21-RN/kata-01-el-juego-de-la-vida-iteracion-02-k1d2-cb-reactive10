class Board {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.table = new Array();
        
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

    findCells(){
        let cellsToKill = []
        let cellsToRevive = []
        for (let i = 0; i < this.y; i++) {
            for (let j = 0; j < this.x; j++) {
            
                if(this.table[i][j] == 1){
                    let neighbours = findNeighbours(i,j,this.table)
                    if(neighbours > 3 || neighbours < 2){
                        cellsToKill.push([i,j])
                    }
                }
                else{
                    if(findNeighbours(i,j,this.table)== 3){
                        cellsToRevive.push([i,j])
                    }
                }
            }
        }
        return {cellsToKill,cellsToRevive}
    }

    nextGen(){
        let found = this.findCells();

        found.cellsToKill.forEach(cell => {
            const [x, y] = cell 
            this.this.table[x][y] = 0
        })

        found.cellsToRevive.forEach(cell => {
            const [x, y] = cell
            this.this.table[x][y] = 1
        })
    }
}

class Cell{
    
    findNeighbours(x,y,board){
        let cont = 0
        for (let i = x-1; i <= x+1; i++) {
            for (let j = y-1; j <= y+1; j++) {
                if(i < 0) i= 0
                if(j <0) j=0 
                if(i > board.x) break
                if(j > board.y) break 

                if([i][j] == 1){
                    if(i != x || j != y){
                        cont++
                    }
                }
            } 
        }
        return cont
    }
}

let firstGen = new Board(4, 8);

console.table(firstGen.table);



