// listing 3.1
class Gangsta {

  totalBullets = 100;

  shoot() {
    this.totalBullets--;
    console.log(`Bullets left: ${this.totalBullets}`);
  }
}

const g1 = new Gangsta();
g1.shoot();

const g2 = new Gangsta();
g2.shoot();

// listing 3.2

class AppState {
  counter = 0;
  private static instanceRef: AppState;

  private constructor() {
  }

  static getInstance(): AppState {
    if (AppState.instanceRef === undefined) {
      AppState.instanceRef = new AppState();
    }
    return AppState.instanceRef;
  }
}

const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();
appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;

console.log(appState1.counter);
console.log(appState2.counter);

// listing 3.3, 3.4
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {
  }

  sellStock(symbol: string, numberOfShares: number) {
    console.log(`Selling ${numberOfShares} of ${symbol}`);
  }
}

class Employee extends Person {
  constructor(firstName: string,
              lastName: string,
              age: number,
              public department: string) {
    super(firstName, lastName, age);
  }

  sellStock(symbol: string, shares: number) {
    super.sellStock(symbol, shares);

    this.reportToCompliance(symbol, shares);
  }

  private reportToCompliance(symbol: string, shares: number) {
    console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`);
  }
}

const empl = new Employee('Joe', 'Smith', 29, 'Accounting');

console.log({ empl });

empl.sellStock('IBM', 100);


// listing 3.5

abstract class AbstractPerson {

  constructor(public name: string) {
  }

  changeAddress(newAddress: string) {
    console.log(`Changing address to ${newAddress}`);
  }

  giveDayOff() {
    console.log(`Giving a day off to ${this.name}`);
  }

  promote(percent: number) {
    this.giveDayOff();
    this.increasePay(percent);
  }

  abstract increasePay(percent: number): void;
}


class ConcreteEmployee extends AbstractPerson {
  increasePay(percent: number) {
    console.log(`Increasing the salary of ${this.name} by ${percent}%`);
  }
}

class Contractor extends AbstractPerson {
  increasePay(percent: number) {
    console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
  }
}

const workers: AbstractPerson[] = [];
workers[0] = new ConcreteEmployee('John');
workers[1] = new Contractor('Mary');
workers.forEach(worker => worker.promote(5));


class ProductService {
  getProducts(): void;
  getProducts(id: number): void;
  getProducts(id?: number): void { // error
    if (typeof id === 'number') {
      console.log(`Getting the product info for ${id}`);
    } else {
      console.log(`Getting all products`);
    }
  }
}

const prodService = new ProductService();
prodService.getProducts(123);
prodService.getProducts();


// listing 3.13
interface A {
  toDo(a: number): number;
}

interface B {
  toDo(b: string): string;
}

class C implements A, B {
  toDo(a: number): number;
  toDo(b: string): string;
  toDo(a: number | string): number | string {
    return 'string';
  }


}


class D implements C {
  toDo(a: number): number;
  toDo(b: string): string;
  toDo(a: number | string): number | string {
    return 'undefined';
  }

}

