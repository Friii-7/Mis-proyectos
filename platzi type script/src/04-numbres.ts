(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 30;
  // customerAge = customerAge + '1';// 301
  customerAge = customerAge + 1; // 301
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('hgfdghg');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }
  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b1010; //10
  console.log('bin', bin);

  const myNumber: Number = 10;
})();
