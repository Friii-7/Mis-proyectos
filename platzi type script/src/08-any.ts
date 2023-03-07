(() => {
  let myDynimicVar: any;
  myDynimicVar = 100;
  myDynimicVar = null;
  myDynimicVar = {};
  myDynimicVar = '';

  myDynimicVar = 'hola';
  const rta = (myDynimicVar as string).toLocaleLowerCase();
  console.log(rta);

  myDynimicVar = 123;
  const rta2 = (<number>myDynimicVar).toFixed();
  console.log(rta2);
})();
