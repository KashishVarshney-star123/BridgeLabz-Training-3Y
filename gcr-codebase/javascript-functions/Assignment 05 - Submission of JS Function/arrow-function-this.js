const userWithArrow = {
  name: "Kashish",
  showName: () => {
    console.log(`Arrow function -> this.name: ${this.name}`);
  },
};

userWithArrow.showName();
console.log("this at top level of the file:", this);

const userFixed = {
  name: "Kashish",
  showName: function () {
    console.log(`Normal function -> this.name: ${this.name}`);
  },
};

userFixed.showName();