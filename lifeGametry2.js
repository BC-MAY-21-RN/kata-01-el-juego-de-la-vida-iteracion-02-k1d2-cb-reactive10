class Board {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
}

let firstGen = new Board(4, 8)

console.table(firstGen.createDimensions())

