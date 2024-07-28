// 4. Classes

// Class with properties and methods
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

// Creating an instance of the class
let dog = new Animal("Dog");
dog.speak();