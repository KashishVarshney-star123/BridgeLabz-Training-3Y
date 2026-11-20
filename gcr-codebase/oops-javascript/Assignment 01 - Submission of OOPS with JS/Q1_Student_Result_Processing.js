
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        let avg = this.calculateAverage();

        if (avg >= 80) {
            return "A";
        } else if (avg >= 60) {
            return "B";
        } else if (avg >= 40) {
            return "C";
        } else {
            return "F";
        }
    }
}

let s1 = new Student("Aman", [85, 90, 80]);
let s2 = new Student("Rahul", [65, 70, 60]);
let s3 = new Student("Rohit", [30, 35, 40]);

let students = [s1, s2, s3];

students.forEach(student => {
    console.log("Name:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("------------------");
});
