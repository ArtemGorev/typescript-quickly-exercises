function getFinalPrice(price: number, discount: number) {
  return price - price / discount;
}

console.log(getFinalPrice(100, 10));


let stringVar: string = 'Hello World';
let booleanVar: boolean = false;
let numberVar: number = 123.456;
let symbolVar: symbol = Symbol('Hello');
let anyVar: any = stringVar;
let unknownVar: unknown = anyVar;
let neverVar: never;
let voidVar: void = anyVar;

console.log(stringVar);
console.log(booleanVar);
console.log(numberVar);
console.log(symbolVar);
console.log(anyVar);
console.log(unknownVar);
// console.log(neverVar);
console.log(voidVar);

