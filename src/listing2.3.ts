const age = 25;

function getTax(income: number): number {
  return income * 0.15;
}

let yourTax = getTax(50000);
console.log({ yourTax });
let name3: 'John Smith';
// name3 = 'Mary Lou'; => compile error
