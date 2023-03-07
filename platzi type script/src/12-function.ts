(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  // function createProductJson(
  //   title: string,
  //   createdAt: Date,
  //   stock: number,
  //   size: Sizes
  // ) {
  //   return {
  //     title,
  //     createdAt,
  //     stock,
  //     size
  //   };
  // }
  // const product1 = createProductJson('P1', new Date(), 12, 'XL');
  // console.log(product1);
  // console.log(product1.title);
  // console.log(product1.stock);
  // console.log(product1.size);

  const createProductJsonv2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,          
      createdAt,
      stock,
      size,
    };
  };
  const product2 = createProductJsonv2('P1', new Date(), 12);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.stock);
  console.log(product2.size);
})();
