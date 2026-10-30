function PersonProto(name) {
  this.name = name;
}

PersonProto.prototype.introduce = function () {
  return `Hi, I am ${this.name}`;
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.showBranch = function () {
  return `${this.name} studies ${this.branch}`;
};

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Hi, I am ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  showBranch() {
    return `${this.name} studies ${this.branch}`;
  }
}

const protoStudent = new StudentProto("Kashish", "AI & Data Science");
const classStudent = new Student("Kashish", "AI & Data Science");

console.log("Prototype version:");
console.log(protoStudent.introduce());
console.log(protoStudent.showBranch());

console.log("\nClass version:");
console.log(classStudent.introduce());
console.log(classStudent.showBranch());

console.log("\nComparison:");
console.log("introduce() same:", protoStudent.introduce() === classStudent.introduce());
console.log("showBranch() same:", protoStudent.showBranch() === classStudent.showBranch());
console.log(
  "Own properties same:",
  JSON.stringify(Object.keys(protoStudent)) === JSON.stringify(Object.keys(classStudent))
);
console.log("Class: instanceof Student:", classStudent instanceof Student);
console.log("Class: instanceof Person:", classStudent instanceof Person);
console.log("Class: introduce is own property:", classStudent.hasOwnProperty("introduce"));
console.log(
  "Class: Student.prototype -> Person.prototype:",
  Object.getPrototypeOf(Student.prototype) === Person.prototype
);
console.log("typeof Student:", typeof Student);

try {
  Student("Amit", "CSE");
} catch (error) {
  console.log(`Class called without new -> ${error.name}: ${error.message}`);
}