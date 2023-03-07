(() => {
  let productTitle = 'My amazing prodsuct';
  // productTitle = null
  // productTitle = () => {}
  // productTitle = 123
  productTitle = 'My amazing prodsuct changed';
  console.log('productTitle', productTitle);

  const prodsuctDescription = "I'm blablakjkkaljkakl";
  console.log('prodsuctDescription', prodsuctDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${productTitle}
  description: ${prodsuctDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;

  console.log(summary);

  const myString: string = '';
})();
