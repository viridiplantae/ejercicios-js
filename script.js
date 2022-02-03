// Modificado por Viri J. Quintero

const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

// vamos a realizar el primer ejercicio
console.log(`Respuesta al primer ejercicio:`);
for (let primo = 0; primo < ejercicio1.length; primo++) {
  let esPrimo = true;
  for (let i = 2; i < ejercicio1[primo]; i++) {
    if (ejercicio1[primo] % i == 0) {
      esPrimo = false;
    }
  }
  if (esPrimo) {
    console.log(`${ejercicio1[primo]} es primo`);
  }
}

// vamos a realizar el segundo ejercicio
console.log(`Respuesta al segundo ejercicio:`);
for (let j = 0; j < ejercicio2.length; j++) {
  if (ejercicio2[j].edad >= 18 && ejercicio2[j].esFamiliar == true) {
    console.log(`${ejercicio2[j].nombre}`);
  }
}

// Vamos a realizar el tercer ejercicio
console.log(`Respuesta al tercer ejercicio:`);
let n1 = 0;
let n2 = 1;
let n3 = 0;

console.log(n2);
for (let k = 0; k < 49; k++) {
  n3 = n1 + n2;
  console.log(n3);
  n1 = n2;
  n2 = n3;
}
