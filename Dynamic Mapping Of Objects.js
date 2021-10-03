const person = [
  {
    name: "Alice",
    income: 50000,
    expenditure: {
      fuel: 8000,
      rent: 2000,
      food: 4500,
    },
  },
  {
    name: "Bob",
    income: 45000,
    expenditure: {
      rent: 7000,
      gadgets: 3000,
    },
  },
];

const abc = person.map((item) => {
  var count = 0;
  for (const property in item.expenditure) {
    count += item.expenditure[property];
  }
  return item.income - count;
});
console.log(abc);
