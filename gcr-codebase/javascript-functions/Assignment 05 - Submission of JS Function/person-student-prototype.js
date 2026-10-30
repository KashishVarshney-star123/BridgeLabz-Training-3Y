function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function () {
  console.log(`Hi, I am ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  console.log(`${this.name} studies ${this.branch}`);
};

const student1 = new Student("Kashish", "AI & Data Science");

student1.introduce();
student1.showBranch();

console.log("student1 instanceof Student:", student1 instanceof Student);
console.log("student1 instanceof Person:", student1 instanceof Person);
console.log("name is own property:", student1.hasOwnProperty("name"));
console.log("branch is own property:", student1.hasOwnProperty("branch"));
console.log("introduce is own property:", student1.hasOwnProperty("introduce"));
console.log("student1 -> Student.prototype:", Object.getPrototypeOf(student1) === Student.prototype);
console.log("Student.prototype -> Person.prototype:", Object.getPrototypeOf(Student.prototype) === Person.prototype);