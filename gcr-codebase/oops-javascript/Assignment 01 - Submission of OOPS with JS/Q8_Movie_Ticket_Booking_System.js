
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
    
    printTicket() {
        console.log("Movie Name:", this.movieName);
        console.log("Seat Number:", this.seatNo);
        console.log("Ticket Price:", this.price);
    }
}

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let t1 = new OnlineTicket("Avengers", "A10", 250, 30);
let t2 = new OnlineTicket("Avatar", "B12", 300, 40);

console.log("----- Ticket 1 -----");
t1.printTicket();
console.log("Convenience Fee:", t1.convenienceFee);
console.log("Total Amount:", t1.getTotalAmount());

console.log("----- Ticket 2 -----");
t2.printTicket();
console.log("Convenience Fee:", t2.convenienceFee);
console.log("Total Amount:", t2.getTotalAmount());
