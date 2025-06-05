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

rl.question('Escribe una frase: ', (input) => {
  const resultado = palabraMasLarga(input);
  console.log(`La palabra más larga es: ${resultado}`);
  rl.close();
});
