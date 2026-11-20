
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is doing employee work.");
    }
}

class Manager extends Employee {
    work() {
        console.log(this.name + " is managing the " + this.department + " department.");
    }
}

let e1 = new Employee("Aman", "IT");
let e2 = new Manager("Rahul", "HR");

e1.work();
e2.work();
