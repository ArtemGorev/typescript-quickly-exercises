class Person1 {
  name: string;

  constructor() {
    this.name = '1';
  }
}

class Employee1 extends Person1 {
  department: number = 1;

  constructor() {
    super();
    this.department = 1;
  }

}

class Animal1 {
  name: string = '';
  breed: string = '';
}

const workers1: Array<Person1> = [];
workers1[0] = new Person1();
workers1[1] = new Employee1();
workers1[2] = new Animal1(); //
workers1[3] = { name: 'Mary ' };


console.log({ workers1 });

// listing 4.10

interface Comparator<T> {
  compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {
  constructor(private width: number, private height: number){};
  compareTo(value: Rectangle): number {
    return this.width * this.height - value.width * value.height;
  }
}

const rect1:Rectangle = new Rectangle(2,5);
const rect2: Rectangle = new Rectangle(2,3);

rect1.compareTo(rect2) > 0
  ? console.log("rect1 is bigger")
  : rect1.compareTo(rect2) == 0
      ? console.log("rectangles are equal")
      : console.log("rect1 is smaller");

// class Triangle implements Comparator<Triangle> {
//   compareTo(value: Triangle): number {
//     // the algorithm of comparing triangles goes here
//   }
// }

// listing 4.13

function printMe<T> (content: T): T {
  console.log(content);
  return content;
}

const a = printMe<string>("Hello");

class Person3 {
  constructor(public name: string) { }
}

const b = printMe<Person3>(new Person3("Joe"));


