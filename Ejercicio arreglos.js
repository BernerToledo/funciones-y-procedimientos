const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("¿Qué número de ejercicio quieres ejecutar? (1 al 10): ", (respuesta) => {
  const opcion = parseInt(respuesta);

  switch (opcion) {
    // Ejercicio 1: Eliminar duplicados
    case 1: {
      let nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis", "Juan"];
      console.log("Arreglo original:", nombres);
      let nombresUnicos = [...new Set(nombres)];
      console.log("Ejercicio 1 - Nombres únicos:", nombresUnicos);
      break;
    }


    // Ejercicio 2: Promedio sin extremos
    case 2: {
      let notas = [8.5, 9.0, 7.5, 6.0, 10.0, 5.5];
      console.log("Notas:", notas);
      let min = Math.min(...notas);
      let max = Math.max(...notas);
      let notasFiltradas = notas.filter(n => n !== min && n !== max);
      let promedio = notasFiltradas.reduce((a, b) => a + b, 0) / notasFiltradas.length;
      console.log("Excluidas:", min, "y", max);
      console.log("Promedio sin extremos:", promedio.toFixed(2));
      break;
    }


    // Ejercicio 3: Valores positivos, negativos y ceros
    case 3: {
      let numeros = [0, -2, 5, 3, 0, -7, 9];
      console.log("Números:", numeros);
      let positivos = numeros.filter(n => n > 0).length;
      let negativos = numeros.filter(n => n < 0).length;
      let ceros = numeros.filter(n => n === 0).length;
      console.log("Positivos:", positivos);
      console.log("Negativos:", negativos);
      console.log("Ceros:", ceros);
      break;
    }


    // Ejercicio 4: Rotar elementos
    case 4: {
      let datos = [1, 2, 3, 4, 5, 6];
      console.log("Antes de rotar:", datos);
      let ultimo = datos.pop();
      datos.unshift(ultimo);
      console.log("Después de rotar:", datos);
      break;
    }


    // Ejercicio 5: Secuencia ascendente
    case 5: {
      let secuencia = [2, 4, 6, 6, 9];
      let otra = [5, 3, 8];
      function esAscendente(arr) {
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < arr[i - 1]) return false;
        }
        return true;
      }
      console.log("Secuencia 1:", secuencia, "-", esAscendente(secuencia) ? "válida" : " no válida");
      console.log("Secuencia 2:", otra, "-", esAscendente(otra) ? "válida" : " no válida");
      break;
    }


    // Ejercicio 6: Intercalar dos arreglos
    case 6: {
      let a = ["a", "b", "c"];
      let b = [1, 2, 3];
      console.log("Arreglo A:", a);
      console.log("Arreglo B:", b);
      let intercalado = [];
      for (let i = 0; i < a.length; i++) {
        intercalado.push(a[i], b[i]);
      }
      console.log("Intercalado:", intercalado);
      break;
    }


    // Ejercicio 7: Contar vocales por palabra
    case 7: {
      let palabras = ["computadora", "mesa", "silla", "mouse"];
      console.log("Palabras:", palabras);
      palabras.forEach(palabra => {
        let count = (palabra.match(/[aeiouáéíóú]/gi) || []).length;
        console.log(`${palabra}: ${count} vocales`);
      });
      break;
    }


    // Ejercicio 8: Subarreglo más largo sin ceros
    case 8: {
      let numeros = [1, 2, 0, 3, 4, 5, 0, 6, 7, 8];
      console.log("Arreglo:", numeros);
      let maxSub = [];
      let actual = [];
      numeros.forEach(n => {
        if (n !== 0) {
          actual.push(n);
          if (actual.length > maxSub.length) maxSub = [...actual];
        } else {
          actual = [];
        }
      });
      console.log("Subarreglo más largo sin ceros:", maxSub);
      break;
    }


    // Ejercicio 9: Filtrar palabras por longitud
    case 9: {
      let palabras = ["sol", "ventilador", "mesa", "lámpara", "computadora"];
      console.log("Palabras:", palabras);
      let largas = palabras.filter(p => p.length > 5);
      console.log("Palabras con más de 5 letras:", largas);
      break;
    }


    // Ejercicio 10: Buscar el número que más se repite
    case 10: {
      let datos = [3, 5, 3, 2, 3, 2, 4, 5, 5, 5];
      console.log("Datos:", datos);
      let contador = {};
      datos.forEach(num => {
        contador[num] = (contador[num] || 0) + 1;
      });
      let maxRepetido = null;
      let maxConteo = 0;
      for (let num in contador) {
        if (contador[num] > maxConteo) {
          maxConteo = contador[num];
          maxRepetido = num;
        }
      }
      console.log(`Número más repetido: ${maxRepetido} (${maxConteo} veces)`);
      break;
    }

    default:
      console.log("Opción no válida. Por favor ingresa un número del 1 al 10.");
  }

  rl.close();
});

