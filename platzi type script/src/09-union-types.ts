(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'assas';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(7)}`);
    }
  }
  greeting('farzin');
  greeting(1992);
})();
