function calcTax(state: 'NY' | 'NJ', income: number, dependents: number) {
  if (state === 'NY') {
    return income * 0.06 - dependents * 500;
  } else if (state === 'NJ') {
    return income * 0.05 - dependents * 300;
  }
}

const tax = calcTax('NY', 100000, 10);
console.log({ tax });

