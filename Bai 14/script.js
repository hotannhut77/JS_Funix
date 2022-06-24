class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getAge1() {
    return 2022 - this.birthYear;
  }
}

class StudentCl extends PersonCl {
  constructor(name, birthYear, id) {
    super(name, birthYear);
    this.id = id;
  }
  // // ghi đè phương thức
  // getAge1() {
  //   console.log(`Tuổi của ${this.name} là : ${2022 - this.birthYear}`);
  // }

  getInfo() {
    console.log("OK");
  }
}

const hsCl = new StudentCl("ABC", 2010, 19925);
const hsCl2 = new StudentCl("XYZ", 2012, 13325);
console.log(hsCl);
console.log(hsCl2);

console.log(hsCl.getAge1());
hsCl.getInfo();
