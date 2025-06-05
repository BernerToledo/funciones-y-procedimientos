const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function palabraMasLarga(texto) {
  const palabras = texto.split(' ');
  let palabraLarga = palabras[0];

  for (let palabra of palabras) {
    if (palabra.length > palabraLarga.length) {
      palabraLarga = palabra;
    }
  }

  return palabraLarga;
}

// Función para generar un número aleatorio
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mostrar opciones al usuario
console.log('¿Qué quieres hacer?');
console.log('1️) Buscar la palabra más larga en una frase');
console.log('2) Generar un número aleatorio entre dos valores');

rl.question('Escribe 1 o 2 y presiona Enter: ', (opcion) => {
  if (opcion === '1') {
    rl.question('Escribe una frase: ', (frase) => {
      const palabra = palabraMasLarga(frase);
      console.log(`🔍 La palabra más larga es: "${palabra}"`);
      rl.close();
    });
  } else if (opcion === '2') {
    rl.question('Ingresa el valor mínimo: ', (minInput) => {
      rl.question(' Ingresa el valor máximo: ', (maxInput) => {
        const min = parseInt(minInput);
        const max = parseInt(maxInput);

        if (isNaN(min) || isNaN(max) || min > max) {
          console.log('Valores inválidos. Asegúrate de que ambos sean números y que el mínimo sea menor o igual al máximo.');
        } else {
          const aleatorio = numeroAleatorio(min, max);
          console.log(` Número aleatorio generado entre ${min} y ${max}: ${aleatorio}`);
        }

        rl.close();
      });
    });
  } else {
    console.log(' Opción no válida. Ejecuta el programa de nuevo.');
    rl.close();
  }
});
