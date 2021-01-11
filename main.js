const prompt = require('prompt-sync')({sigint: true});

const ha = '^';
const ho = 'O';
const fi = '░';
const pa = '*';

class Field {
    constructor(field){
        this._field = field;
        this._palabras = "Animo! Todo está en orden";
        this._continuar = true;
        this._row = 0;
        this._column = 0;
    }

    set palabras(str){
        this._palabras = str;
    }

    set continuar(boo){
        this._continuar = boo;
    }

    set row(row) {
        this._row = row;
    }

    set column(col) {
        this._column = col;
    }

    get palabras() {
        return this._palabras;
    }

    get continuar() {
        return this._continuar;
    }

    get row() {
        return this._row;
    }
    get column() {
        return this._column;
    }

    modifica() {
        try {
            let height = this._field.length-1;
            let width = this._field[0].length-1;
            if (this._column<0 | this._row<0 | this._column>width | this._row>height) {
                throw Error("out of range");
            }
            switch (this._field[this._row][this._column]) {
                case ho:
                    this._continuar = false;
                    this._palabras = "Has caido en un hoyo, intenta nuevamente";
                    break;
                case ha:
                    this._continuar = false;
                    this._palabras = "Has ganado, felicitaciones!!!";
                    break;
                default:
                    this._field[this._row][this._column] = pa;
                    break;
            }
        } catch (e) {
            this._palabras = "Has caido por fuera del campo, intenta nuevamente";
            this._continuar = false;
            }
    }

    print(){
        const a = this._field.map(rows => rows.join(""));
        const actual = a.join('\n');
        console.log(actual);
    }

    // arguments: height(i.e 100), width(i.e 100), percentage(i.e 50)
    static create(height, width, percentage) {
        // field creation
        let field = [];
        for (let i = 0; i<height; i++){
            field.push(fi.repeat(width).split(""));
        }

        // filling the field with a percentage of holes
        let blocks = height*width*(percentage/100);
        let a = [];
        let comparison = []
        while (comparison.length<blocks){
            let num1 = Math.floor(Math.random()*height);
            let num2 = Math.floor(Math.random()*width);
            let sum = num1.toString() + num2.toString();
            if (!comparison.includes(sum)){
                comparison.push(sum)
                a.push([num1,num2]);
            }
        }

        a.forEach(coord => field[coord[0]][coord[1]] = ho);

        // locating the hat and the starting position
        let rand1 = Math.floor(Math.random()*height);
        let rand2 = Math.floor(Math.random()*width);
        if (rand1===0 && rand2===0) {
            rand1 = 8;
            rand2 = 8;
        }
        field[rand1][rand2] = ha;
        field[0][0] = pa;

        return field;
    }
}

// testing
const play = () =>{
    const game = new Field(Field.create(10, 10, 20));
    game.print();
    while (game.continuar){
        game.palabras = "Animo! Todo está en orden";
        let paso = prompt("Cuál será tu siguiente paso? (i,d,a,ab)");
        paso==="a"? game.row = game.row - 1 : paso==="ab"? game.row = game.row + 1 : paso==="d"? game.column = game.column + 1 : paso==="i"? game.column = game.column - 1 : game.palabras = "la dirección ingresada no es valida, intenta con i(izquierda), d(derecha), a(arriba), o ab(abajo)";
        game.modifica(game.row, game.column);
        game.print();
        console.log(game.palabras);
    }
}

play();
