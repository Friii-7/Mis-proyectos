// Declarativas

// function miFunction() {
//   return 30;
// }

//Expresion

// const miFunction = function (a, b) {
//   return a + b;
// };
// miFunction(7, 9);

// function suladarEstudiante(estudiante) {
//   console.log(`hola ${estudiante}`);
// }
// suladarEstudiante("farzin");

// function sualudFarsi(persa) {
//   console.log(`salam${persa}`);
// }
// sualudFarsi("farzin");

// function mejorlenguaje(js, py) {
//   console.log(`mi lenguaje favorito es : ${js}, ${py}`);
// }
// mejorlenguaje("javascript", "python");

// function sumar(a, b) {
//   var resultado = a + b;
//   return resultado;
// }
// // sumar(7, 9);
// console.log(sumar(7, 9));

// function suludar(nombre) {
//   console.log(`holaaa ${nombre}`);
// }
// suludar("farzim");

// var nombre = function (nombre) {
//   console.log(`Holaaaa ${nombre}`);
// };
// nombre("farzad");

// var miNumbre = "farzin7";
// function nombre() {
//   var apelido = "Jimenez";
//   console.log(miNumbre + " " + apelido);
// }
// nombre();

// // var saludo = "HOLA";

// // function scopes() {
// //   if (true) {
// //     console.log(saludo);
// //   }
// // }
// // scopes();

// var miNumbre = "Farzin";
// function nombre() {
//   //   miNumbre = "farzad";
//   return miNumbre;
// }
// nombre();
// console.log(miNumbre);

// var miNumbre = "farzin";

// function nombre() {
//   var miApellido = "jimenez";
//   return console.log(miNumbre + " " + miApellido);
// }
// nombre();

// console.log(miNumbre);
// // console.log(miApellido);

// var miNumbre = "Ali";

// function nombre(usuario) {
//   //   miNumbre = usuario;
//   var miNumbre = usuario;
//   console.log(miNumbre);
// }
// nombre("farzin");

// console.log(`mi nombre es ${miNumbre}, como estas?`);
// function solution(secreto) {
//   return console.log(secreto > 5);
// }
// solution(1);
// solution(5);
// solution(10);

// let edad = 18;
// if (edad >= 18) {
//   console.log("Puedes conducir");
// } else {
//   console.log("No puedes conducir");
// }

// var numero = 1;
// var resultado = numero === 1 ? "si soy uno " : "no soy uno";
// console.log(resultado);

// var op1 = "papel";
// var op2 = "tijera";
// var op3 = "piedra";

// var resultado = function (user, cpu) {
//   if (cpu != user) {
//     if (user === op1 && cpu === op3) {
//       console.log("el usuario gano con el" + op1);
//     } else if (user === op2 && cpu === op1) {
//       console.log("el usuario gano con el" + op2);
//     } else if (user === op3 && cpu === op2) {
//       console.log("el usuario gano con el" + op3);
//     } else {
//       console.log("gano cpu!!");
//     }
//   } else if (user === cpu) {
//     console.log("empate");
//   }
// };
// resultado(op1, op3);

// var far = "piedra";
// var tir = "tijera";
// var khar = "papel";

// var resultado = function (user, cpu) {
//   if (user != cpu) {
//     if (user === far && cpu === khar) {
//       console.log("el cpu gano con:" + khar);
//     } else if (user === tir && cpu === khar) {
//       console.log("el user gano con:" + tir);
//     } else if (user === tir && cpu === far) {
//       console.log("el cpu gano con:" + far);
//     } else {
//       console.log("la cpu gano!");
//     }
//   } else if (user === cpu) {
//     console.log("empate");
//   }
// };

// var far = ["farxin", "farzad"];
// console.log(far.push("marjan"));

var estudiantes = ["farzin", "farzad", "Yisel", "nana"];

// function saludarEstudiantes(estudiante) {
//   console.log(`holaa ${estudiante}`);
// }
// while (estudiantes.length > 0) {
//   var farzin = estudiantes.shift();
//   saludarEstudiantes(farzin);
// }
// for (var i = 0; i < estudiantes.length; i++) {
//   saludarEstudiantes(estudiantes[i]);
// }
// for (var estudiante of estudiantes) {
//   saludarEstudiantes(estudiantes);
// }
// while (estudiantes.length > 0) {
//   console.log(estudiantes);
//   var estudiante = estudiantes.shift();
//   saludarEstudiantes(estudiante);
// }
// var miAuto = {
//   marca: "Toyota",
//   modelu: "GT",
//   año: 2020,
//   detalle: function (caro) {
//     console.log(`Auto ${this.modelu} ${this.año} ${this.modelu}`);
//   },
// };
// miAuto.detalle();

// function auto(marca, modelo, año) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.año = año;
// }
// var autoNuevo = new auto("Tesla", "modelo 3", 2020);
// console.log(autoNuevo);

// function solution(car) {
//   // Tu código aquí 👈
//   if (car.licensePlate) {
//     car.drivingLicense = true;
//   } else {
//     car.drivingLicense = false;
//   }
//   return car;
// }
// console.log(
//   solution({
//     color: "red",
//     brand: "Kia",
//   })
// );

// var autoNuevo2 = new auto("Mazerati", "s.p.a", 2022);
// var autoNuevo3 = new auto("tesla", "modeloX", 2032);
// console.log(autoNuevo2, autoNuevo3);

var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];
// var nombreArticulos = articulos.filter(function (articulo) {
//   return articulo.costo <= 500;
// });

// var nombreArticulos = articulos.map(function (articulo) {
//   return articulo.nombre;
// });

// var encotrarArticulos = articulos.find(function (articulo) {
//   return articulo.nombre === "Laptop";
// });
// var alguArticulo = articulos.find(function (articulo) {
//   return (articulo.nombre = "Libro");
// });

// articulos.forEach(function (articulo) {
//   return console.log(articulo);
// });

var articuloBarato = articulos.some(function (articulo) {
  return console.log(articulo.costo <= 700);
});

var numero = 1;
while (numero <= 10) {
  console.log(numero);
  numero++;
}

// var edad = Number(prompt("Ingresa un valor:"));
// while (edad > 18 || edad <= 0) {
//   edad = Number(prompt("Ingresa un valor correcto:"));
//   console.log(`Gracias por ingresa su edad: ${edad}`);
// }
// 30;
