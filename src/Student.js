import React from 'react';

export default class Student extends React.Component {
  constructor(name, rollNo) {
    super();
    this.name = name;
    this.rollNo = rollNo;
  }

  print() {
    return `Name is : ${this.name} , Roll No is: ${this.rollNo}`;
  }

  render() {

    let s1 = new Student('Prakriti', 23);
    let s2 = new Student('Saxena', 24);

    return (
      <div>
        Displaying Student Data:
        <p>Student 1: {s1.print()}</p>
        <p>Student 2: {s2.print()}</p>
      </div>
    )
  }
}
