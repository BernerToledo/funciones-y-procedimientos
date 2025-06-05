const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tipoCambioUSD = 0;
let tipoCambioEUR = 0;

function mostrarMenu() {
  console.log("\n--- MENÚ DE OPCIONES ---");
  console.log("1. Registro de Ventas");
  console.log("2. Conversión de Divisas");
  console.log("3. Cálculo de Intereses");
  console.log("4. Salir");

  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        registroVentas();
        break;
      case "2":
        conversionDivisas();
        break;
      case "3":
        calculoIntereses();
        break;
      case "4":
        rl.close();
        break;
      default:
        console.log("Opción no válida");
        mostrarMenu();
    }
  });
}

function registroVentas() {
  rl.question("¿Cuántos productos vendió? ", (cantidad) => {
    let total = 0;
    let contador = 0;

    function pedirProducto() {
      rl.question(`Precio del producto ${contador + 1}: Q`, (precio) => {
        rl.question(`Cantidad vendida: `, (cantidadVendida) => {
          total += parseFloat(precio) * parseInt(cantidadVendida);
          contador++;
          if (contador < parseInt(cantidad)) {
            pedirProducto();
          } else {
            console.log(`\nTotal de ventas: Q${total.toFixed(2)}`);
            mostrarMenu();
          }
        });
      });
    }

    pedirProducto();
  });
}

function conversionDivisas() {
  if (tipoCambioUSD === 0 || tipoCambioEUR === 0) {
    rl.question("Ingrese tipo de cambio de USD a GTQ: ", (usd) => {
      rl.question("Ingrese tipo de cambio de EUR a GTQ: ", (eur) => {
        tipoCambioUSD = parseFloat(usd);
        tipoCambioEUR = parseFloat(eur);
        realizarConversion();
      });
    });
  } else {
    realizarConversion();
  }

  function realizarConversion() {
    rl.question("¿Qué moneda desea convertir? (USD/EUR): ", (moneda) => {
      rl.question("¿Cuánto desea convertir?: ", (monto) => {
        let resultado = 0;
        if (moneda.toUpperCase() === "USD") {
          resultado = parseFloat(monto) * tipoCambioUSD;
        } else if (moneda.toUpperCase() === "EUR") {
          resultado = parseFloat(monto) * tipoCambioEUR;
        } else {
          console.log("Moneda no válida.");
          return mostrarMenu();
        }
        console.log(`Resultado: Q${resultado.toFixed(2)}`);
        mostrarMenu();
      });
    });
  }
}

function calculoIntereses() {
  const costoStand = 300;
  const interesDiario = 0.02;

  rl.question("Cantidad de stands alquilados: ", (cantidad) => {
    rl.question("Días de retraso: ", (dias) => {
      cantidad = parseInt(cantidad);
      dias = parseInt(dias);
      let total = cantidad * costoStand;

      if (dias > 2) {
        let diasConInteres = dias - 2;
        let interes = total * (1 + interesDiario) ** diasConInteres;
        console.log(`Monto total a pagar con interés: Q${interes.toFixed(2)}`);
      } else {
        console.log(`Monto total a pagar (sin interés): Q${total.toFixed(2)}`);
      }

      mostrarMenu();
    });
  });
}

mostrarMenu();
