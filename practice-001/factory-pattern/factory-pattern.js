var Car = function(options){
	this.doors = options.doors || 4;
  	this.state = options.state || "brand new";
  	this.color = options.color || "silver";
}
var Truck = function(options){
  	this.wheelSize = options.wheelSize || "large";
  	this.state = options.state || "used";
  	this.color = options.color || "blue";
}

 var VehicleFactory = function(){

 }

 VehicleFactory.prototype.vehicleClass = Car;

 VehicleFactory.prototype.createVehicle = function(options){
 	if(options.vehicleType === 'car'){
 		this.vehicleClass = Car;
 	}else{
 		this.vehicleClass = Truck;
 	}
 	return new this.vehicleClass(options)
 }

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( { 
            vehicleType: "car", 
            color: "yellow", 
            doors: 6 } );

// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log( car instanceof Car ); 

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );

var movingTruck = carFactory.createVehicle( { 
                      vehicleType: "truck", 
                      state: "like new", 
                      color: "red", 
                      wheelSize: "small" } );

// Test to confirm our truck was created with the vehicleClass/prototype Truck

// Outputs: true
console.log( movingTruck instanceof Truck );

// Outputs: Truck object of color "red", a "like new" state 
// and a "small" wheelSize
console.log( movingTruck )