var LivingCreature = require("./LivingCreature")

module.exports = class Grass extends LivingCreature{
    constructor(x, y,) {
       super(x, y);
    }
    mul() {
        super.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.lenght)]
        console.log(newCell, "Grass");
        if (newCell && this.multiply >= 3) {
            var newX = newCell[0];
            var newY = newCell[1];
            var ng = new Grass(newX, newY, 1);
            grassArr.push(ng);
            this.multiply = 0;
    }
      
        }
    
    

}