const username: string = 'friapachi';
const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 7);

class person {
  constructor(private age: number, public lastName: string) {}
}

const nico = new person(15, 'farzin');
