function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function () {
  console.log(`Hi, I am ${this.name}`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
  console.log(`${this.name} works in the ${this.department} department`);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function () {
  console.log(`${this.name} teaches ${this.subject}`);
};

const professor1 = new Professor("Dr. Sharma", "Computer Science", "Machine Learning");

professor1.introduce();
professor1.showDepartment();
professor1.teach();

console.log("Own properties:", Object.keys(professor1));
console.log("introduce is own property:", professor1.hasOwnProperty("introduce"));
console.log("showDepartment is own property:", professor1.hasOwnProperty("showDepartment"));
console.log("teach is own property:", professor1.hasOwnProperty("teach"));
console.log("instanceof Professor:", professor1 instanceof Professor);
console.log("instanceof Faculty:", professor1 instanceof Faculty);
console.log("instanceof Person:", professor1 instanceof Person);
console.log("Professor.prototype -> Faculty.prototype:", Object.getPrototypeOf(Professor.prototype) === Faculty.prototype);
console.log("Faculty.prototype -> Person.prototype:", Object.getPrototypeOf(Faculty.prototype) === Person.prototype);