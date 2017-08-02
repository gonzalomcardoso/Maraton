var Runner = function(name, historyPositions, sponsor) {
	this.name = name;
	this.historyPositions = historyPositions;
	this.sponsor = sponsor;

	var actualIx = 0;

	this.run = function(callback) {
	var self = this;
	setTimeout(function(){ //llama cada 1 segundo
		callback(historyPositions[actualIx]);

		actualIx += 1;
		if(actualIx < historyPositions.length) {
			self.run(callback);
		}
	}, 1000); //1 segundo
};


}
var pepe = new Runner("pepe", [
	{lng:-34.523335, lat:-58.700263},
	{lng:-34.522381, lat:-58.701786},
	{lng:-34.520684, lat:-58.700005},
	{lng:-34.521956, lat:-58.698546}]);

console.log(pepe);