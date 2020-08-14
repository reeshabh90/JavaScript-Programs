var carFactory = function (make, model, year) {
    const tempCarObj = {};
    tempCarObj.make = make;
    tempCarObj.model = model;
    tempCarObj.year = year;

    tempCarObj.printCarDetails = function () {
        console.log('Car make: ', this.make);
        console.log('Car model: ', this.model);
        console.log('Car year: ', this.year);
    }
    return tempCarObj;
}

const car1 = carFactory('Ford', 'Mustang', 1969);
const car2 = carFactory('Fiat', 'Punto', 1990);

car1.printCarDetails(); // Car make: Ford Car model: Mustang Car year: 1969
car2.printCarDetails(); // Car make: Fiat Car model: Punto Car year: 1990

// Constrcutor Pattern

function Car(make, model, year, engineSpec) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engineSpec = engineSpec;
}

function Engine(name, capacity) {
    this.name = name;
    this.capacity = capacity;
}

const engine1 = new Engine('Ultra', '1.3L');

const mycar = new Car('Jeep', 'Compass', 2016, engine1);

console.log('Car name: ', mycar.make + 'Car Engine Name: ', mycar.engineSpec.name);
// Car name: Jeep Car Engine Name: Ultra

// Prototype Pattern

const personProto = function () {

};

personProto.prototype.name = 'Ram';
personProto.prototype.age = '24';
personProto.prototype.address = 'Ayodhya';

personProto.prototype.printDetails = function () {
    console.log('Name ', this.name + 'Age: ', this.age);
}

console.dir(personProto);

const newPerson = new personProto();
// newPerson.name = 'Krishna';
newPerson.age = 25;
newPerson.address = 'Mathura';

console.log('name: ', newPerson.name); // Ram 

// Dynamic Prototype Pattern

const dynamicPerson = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    if (typeof this.printDetails !== 'function') {
        dynamicPerson.prototype.printDetails = function () {
            console.log('Name ', this.name + 'Age: ', this.age);
        }
    }
}

const dynamicPerson1 = new dynamicPerson('Sita', 24, 'Mithla');

// Object.create()

const randomObj = { val: 20 };
//randomObj --> Object.prototype --> null
const anotherObj = Object.create(randomObj);
// anotherObj --> randomObj --> Object.prototype --> null
console.log(anotherObj.val) // 20, since randomObj is now prototype of anotherObj
anotherObj.val = 40
console.log(anotherObj.val) // 40, since anotherObj now has its own property  val, it does not
// check onto the prototype chain
const nullObj = Object.create(null);
// nullObj --> null

const temp = function () {

};
console.dir(temp);

function Emp1(name, age, year) {
    this.name = name;
    this.age = age;
    this.year = year
    
}