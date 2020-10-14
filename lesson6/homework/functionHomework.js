function Robot() {
	let thiss = this;

	thiss.work = "Я Robot – я просто працюю";

	thiss.getWork = function() {
		return thiss.work;
	}

	thiss.setWork = function(value) {
		thiss.work = value;
	}
};

function CoffeeRobot() {
	Robot.call(this);

	let thiss = this;

	work = "Я CoffeRobot – я варю каву";

	thiss.getWork = function() {
		return work;
	}

};

function DancerRobot() {
	Robot.call(this);
};
function CoockerRobot() {
	Robot.call(this);
};

let robot = new Robot();
console.log(robot.getWork());

let coffee = new CoffeeRobot();
console.log(coffee.getWork());

let dancer = new DancerRobot();
dancer.setWork("Я DancerRobot – я просто танцюю");
console.log(dancer.getWork());

let cook = new CoockerRobot();
cook.setWork("Я RobotCoocker – я просто готую");
console.log(cook.getWork());

console.log("___________________________________________")

let arr = [];
arr.push(robot, coffee, dancer, cook);

for (let i = 0; i < arr.length; i++) {
	let array_element = arr[i];
	console.log(array_element.getWork());
}