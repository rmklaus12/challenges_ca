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

        console.log(`${this.name} walked for ${this.distance} at ${this.location}`)
    }

    displayWalks() {
        console.log(this.location, this.displayWalks)
    }
}