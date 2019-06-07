function CoffeeMachine(power) {
    this.waterAmount = 0;
    this.power=power;
}
CoffeeMachine.prototype.WATER_HEAT_CAPACITY =4200;
CoffeeMachine.prototype.getTimeToBoil = function(){
		return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
	}
  	
    CoffeeMachine.prototype.run = function() {
    	setTimeout(function() {
			console.log('Coffee is ready!');
    	}, this.getTimeToBoil());
	};
	CoffeeMachine.prototype.setWaterAmount = function(amount) {
		this.waterAmount = amount;
	};


let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();