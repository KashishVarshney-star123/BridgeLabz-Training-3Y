
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance! Please enter a valid distance.");
        }

        let fare = this.distance * 15;
        return fare;
    }
}

let driver = new Driver("Rahul", 4.8, "Swift Dzire");

try {
    let trip = new Trip("Mathura", "Agra", 60);

    console.log("Driver Name:", driver.name);
    console.log("Driver Rating:", driver.rating);
    console.log("Vehicle:", driver.vehicle);
    console.log("From:", trip.fromLocation);
    console.log("To:", trip.toLocation);
    console.log("Distance:", trip.distance, "KM");
    console.log("Total Fare: Rs.", trip.calculateFare());

} catch (error) {
    console.log("Trip Error:", error.message);
}
