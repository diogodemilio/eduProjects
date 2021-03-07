const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass/this.height ** 2;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass/this.height ** 2;
  },
};

mark.calcBMI();
john.calcBMI();

console.log (`${mark.fullName}'s BMI (${mark.BMI}) is `, mark.BMI > john.BMI ? "higher" : "lower", `than John Smith's (${john.BMI})`);