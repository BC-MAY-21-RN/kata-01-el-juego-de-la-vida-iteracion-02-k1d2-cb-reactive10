class Board {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        table = this.createDimensions();
        
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
        return array1
    }

    findCells(){
        let cellsToKill = []
        let cellsToRevive = []
        for (let i = 0; i < this.y; i++) {
            for (let j = 0; j < this.x; j++) {
            
                if(table[i][j] == 1){
                    let neighbours = findNeighbours(i,j,table)
                    if(neighbours > 3 || neighbours < 2){
                        cellsToKill.push([i,j])
                    }
                }
                else{
                    if(findNeighbours(i,j,table)== 3){
                        cellsToRevive.push([i,j])
                    }
                }
            }
        }
        return{cellsToKill,cellsToRevive}
    }
}

class Cell{
    constructor(x,y) {
        this.x = x
        this.y = y
    }
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

let firstGen = new Board(4, 8)
console.table(firstGen.createDimensions())

