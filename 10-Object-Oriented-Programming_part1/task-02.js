function CoffeeMachine(power, capacity) {
	let powerAmount=power;
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
    };
    
    this.getPower=function(){
        return powerAmount;
    }
}

const coffeeMachine = new CoffeeMachine(100, 50)

console.log(coffeeMachine.getPower())
