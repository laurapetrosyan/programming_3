var LivingCreature = require("./LivingCreature")

module.exports = class GrassEater extends LivingCreature{
    constructor(x, y) {
       super(x, y);
        
       
    }

    move(){

      var emptyCells = super.chooseCell(0);
      var newCell = emptyCells[Math.floor(Math.random() * emptyCells.lenght)]

      if (newCell)  {

           var newX = newCell[0];
           var newY = newCell[1];


           matrix[newY][newX] = matrix[this.x][this.y];
           matrix[this.x][this.y] = 0;


        this.x = newX;
        this.y = newY;
      }

    this.energy--;
    if (this.energy <= 0){

      this.die();

    }

      }
    

      eat() {

    var grassCells = super.chooseCell(1);
    var newCell = grassCells[Math.floor(Math.random() * grassCells.lenght)]

        if (newCell) {

        var newX = newCell[0];
        var newY = newCell[1];

        matrix[newX][newY] = matrix[this.x][this.y];
        matrix[this.x][this.y] = 0;

        this.x = newX;
        this.y = newY;
        this.energy++;

        if(this.energy >= 14) {

        //  console.log(this.energy);
         this.multiply();

        }
        
        else {

          this.move();

        }

        }

    }

    mul() {
       
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.lenght)]
 
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            var ngEater = new GrassEater(newX, newY, 2)
            GrassEaterArr.push(ngEater)
                   this.energy = 6;
           
    }
}

die() {

       matrix[this.y][this.x] = 0;

}

      
 }