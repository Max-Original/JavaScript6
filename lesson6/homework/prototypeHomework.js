function Robot(){	
	work = "Я Robot – я просто працюю";
}

Robot.prototype.setWork = function(value){
	work = value;
}

Robot.prototype.getWork = function(){
	return work;
}


function CoffeeRobot(){
	this.work = "default";
}
function DancerRobot(){
	this.work = "default";
}
function CookRobot(){
	this.work = "default";
}
let robot = new Robot();
console.log(robot.getWork());

let coffee = new CoffeeRobot();
let cook = new CookRobot();
let dancer = new DancerRobot();

CoffeeRobot.prototype.setWork = function(value){
	this.work = value;
}

CoffeeRobot.prototype.getWork = function(){
	return this.work;
}

CookRobot.prototype.setWork = function(value){
	this.work = value;
}

CookRobot.prototype.getWork = function(){
	return this.work;
}

DancerRobot.prototype.setWork = function(value){
	this.work = value;
}

DancerRobot.prototype.getWork = function(){
	return this.work;
}

coffee.setWork("Я CoffeRobot – я варю каву");
console.log(coffee.getWork());

dancer.setWork("Я RobotDancer – я просто танцюю");
console.log(dancer.getWork());

cook.setWork("Я RobotCoocker – я просто готую");
console.log(cook.getWork());

console.log("_______________");

let arr = [];
arr.push(cook,dancer,coffee,robot);

for (var i = 0; i < arr.length; i++) {
	var array_element = arr[i];
	console.log(array_element.getWork());
}