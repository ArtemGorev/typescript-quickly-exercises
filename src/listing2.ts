'use strict';

// listing 2.6 | 2.8 | 2.9
function padLeft(value: string, padding: string | number): string {
  if (typeof padding === 'number')
    return Array(padding + 1).join(' ') + value;

  if (typeof padding === 'string')
    return padding + value;

  // never executed
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

// listing 2.7
console.log(padLeft('Hello world', 4));
console.log(padLeft('Hello world', 'John says '));
// console.log( padLeft("Hello world", true)); // => compile error

// listint 2.10 - 2.13
type Foot = number;
type Pound = number;

type Patient = {
  name: string;
  height: Foot;
  weight?: Pound;
}

let patient1: Patient = {
  name: 'Joe Smith',
  height: 5,
  weight: 100
};

let patient2: Patient = {
  name: 'Joe Smith',
  height: 5
};

console.log({ patient1 });
console.log({ patient2 });


// listing 2.15
class Block {
  readonly nonce: number;
  readonly hash: string;

  constructor(
    readonly index: number,
    readonly previousHash: string,
    readonly timestamp: number,
    readonly data: string
  ) {
    const { nonce, hash } = Block.mine();
    this.nonce = nonce;
    this.hash = hash;
  }

  private static mine() {
    return {
      nonce: 1,
      hash: 'a2f4098d6b17a8450d98dcff1c2c76023722ae32'
    };
  }
}

let block = new Block(0, '', Date.now(), '');
console.log({ block });


// listing 2.16+
interface Person {
  firstName: string;
  lastName: string;
}


class Customer {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

}

let person: Person = new Customer('Artem', 'Gorev', 30);
console.log({ person });

// Listing 2.22

export class SearchAction {
  actionType = 'SEARCH';

  constructor(readonly payload: { searchQuery: string }) {
  }
}

export class SearchSuccessAction {
  actionType = 'SEARCH_SUCCESS';

  constructor(public payload: { searchResults: string }) {
  }
}

export class SearchFailedAction {
  actionType = 'SEARCH_FAILED';
}

export type SearchActions = SearchAction | SearchSuccessAction | SearchFailedAction;

let actions: SearchActions = new SearchFailedAction();
console.log({ actions });

// Listing 2.23

interface Rectangle {
  kind: 'rectangle';   // <- discriminant
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';     // <- discriminant
  radius: number;
}

type Shape = Rectangle | Circle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'rectangle':
      return shape.height * shape.width;
    case 'circle':
      return 3.14 * shape.radius ** 2;
    default:
      return 0;
  }
}


const myRectangle: Rectangle = { kind: 'rectangle', width: 10, height: 20 };
console.log(`Rectangle's area is ${area(myRectangle)}`);
const myCircle: Circle = { kind: 'circle', radius: 10 };
console.log(`Circle's area is ${area(myCircle)}`);

// listing 2.25
type PersonType = {
  address: string
}

let personType1: PersonType;
personType1 = JSON.parse(JSON.stringify({ address: '25 Broadway' }));

const isPersonType = (object: any): object is PersonType => !!object && 'address' in object;

console.log((isPersonType(personType1)) ? personType1.address : 'Not a person type');
console.log((isPersonType({ } )) ? personType1.address : 'Not a person type');

// 2.30

class Dog {
  constructor(readonly name: string) {}

  sayHello(): string {
    return 'Dog says hello!';
  }
}

class Fish {
  constructor(readonly name: string) {
  }

  dive(howDeep: number): string {
    return `Diving ${howDeep} feet`;
  }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {
  if (pet instanceof Dog) {
    return pet.sayHello();
  } else {
    return 'Fish cannot talk, sorry';
  }
}

const myFish = new Fish("Dorry");
const myDog = new Dog('Lucky');
const something = { name: 'BlackCat' };

console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
// console.log(talkToPet(something));
