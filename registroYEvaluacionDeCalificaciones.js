const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function preguntar(pregunta) {
  return new Promise(resolve => {
    rl.question(pregunta, respuesta => resolve(respuesta));
  });
}


async function ingresarNombre(indice) {
  const nombre = await preguntar(`Nombre del estudiante ${indice + 1}: `);
  return nombre;
}


async function ingresarNotas(nombre) {
  const notas = [];
  for (let i = 0; i < 4; i++) {
    let nota;
    do {
      nota = parseFloat(await preguntar(`Nota ${i + 1} de ${nombre} (0 a 10): `));
    } while (isNaN(nota) || nota < 0 || nota > 10);
    notas.push(nota);
  }
  return notas;
}


function calcularPromedio(notas) {
  const suma = notas.reduce((acc, val) => acc + val, 0);
  return suma / notas.length;
}

async function main() {
  const estudiantes = [];
  const todasLasNotas = [];
  const promedios = [];

  let cantidad = parseInt(await preguntar("¿Cuántos estudiantes desea registrar? "));

  for (let i = 0; i < cantidad; i++) {
    console.log(`\nEstudiante ${i + 1}:`);
    const nombre = await ingresarNombre(i);
    const notas = await ingresarNotas(nombre);
    const promedio = calcularPromedio(notas);

    estudiantes.push(nombre);
    todasLasNotas.push(notas);
    promedios.push(promedio);
  }


  console.log("\n Reporte de Calificaciones:");
  let aprobados = 0;
  let reprobados = 0;

  for (let i = 0; i < estudiantes.length; i++) {
    const nombre = estudiantes[i];
    const notas = todasLasNotas[i];
    const promedio = promedios[i];
    const estado = promedio >= 7 ? "Aprobado" : "Reprobado";

    if (promedio >= 7) {
      aprobados++;
    } else {
      reprobados++;
    }

    console.log(`${nombre}: [${notas.join(", ")}] - Promedio: ${promedio.toFixed(2)} ${estado}`);
  }

  console.log("\n Resumen general:");
  console.log(`${aprobados} estudiante(s) aprobado(s)`);
  console.log(`${reprobados} estudiante(s) reprobado(s)`);

  rl.close();
}

main();
