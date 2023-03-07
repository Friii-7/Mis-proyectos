(() => {
  let prices = [1, 2, 2, 1, 1, 212, 'hola', true];
  // prices.push('assas');
  // prices.push(true);
  // prices.push({});
  prices.push(1212121);

  let prodsucts = ['hola', true];
  prodsucts.push(false);

  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = ['as'];
  numbers.map((item) => item * 2);
})();
