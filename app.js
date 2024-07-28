// 4. Classes
// Class with properties and methods
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a noise."));
    };
    return Animal;
}());
// Creating an instance of the class
var dog = new Animal("Dog");
dog.speak();
