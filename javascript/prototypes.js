class Dog {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    speak() {
        console.log(`Woof! My name is ${this.name}`)
    }

    function Walk(location, distance) {
        this.distance = distance;
        this.location = location;
    }

    Dog.prototype.Walk = function() {
        console.log(`${this.name} walked for ${this.distance} km at ${this.location}`)
    }

    displayWalks() {
        console.log(this.name, this.location, this.displayWalks)
    }

    totalDistance() {
        console.log(`${this.name} has walked ${this.distance}`)
    }
}