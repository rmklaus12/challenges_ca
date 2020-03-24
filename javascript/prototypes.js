class Dog {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    speak() {
        console.log(`Woof! My name is ${name}`)
    }

    Dog.walk = function(location, distance) {
        return this.location;
    }

    displayWalks() {
        console.log(this.location, this.displayWalks)
    }
}