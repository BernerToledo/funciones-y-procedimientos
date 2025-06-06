const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Elige un ejercicio para ejecutar:
1. Calcular precios con IVA (map)
2. Filtrar estudiantes aprobados (filter)
3. Contar cantidad de aprobados (reduce)
4. Unir palabras en una frase (reduce)
5. Ordenar productos por precio (sort)
6. Agregar producto al catálogo (push)
7. Priorizar tarea (unshift)
8. Remover último cliente (pop)
9. Retirar primera canción (shift)
10. Convertir respuesta en arreglo (Array.from)
11. Combinar listas de compra (concat)
12. Recortar imagen (slice)
13. Gestionar empleados (splice)
14. Ubicación del paquete (indexOf)
15. Verificar tesoro (includes)
16. Verificar descuento (some)
17. Enviar correo de confirmación (forEach)
Ingresa el número de la opción: `;

rl.question(menu, (opcion) => {
  switch (opcion) {
    //primera hoja de ejrcicios
    case '1':
      function aplicarIVA(precios) {
        return precios.map(precio => +(precio * 1.21).toFixed(2));
      }
      console.log("Precios con IVA:", aplicarIVA([100, 250, 75]));
      break;

    case '2':
      function obtenerAprobados(estudiantes) {
        return estudiantes.filter(est => est.nota >= 60);
      }
      console.log("Estudiantes aprobados:", obtenerAprobados([
        { nombre: "Ana", nota: 85 },
        { nombre: "Luis", nota: 45 },
        { nombre: "Carla", nota: 70 }
      ]));
      break;

    case '3':
      function contarAprobados(estudiantes) {
        return estudiantes.reduce((total, est) => est.nota >= 60 ? total + 1 : total, 0);
      }
      console.log("Cantidad de aprobados:", contarAprobados([
        { nombre: "Ana", nota: 85 },
        { nombre: "Luis", nota: 45 },
        { nombre: "Carla", nota: 70 }
      ]));
      break;

    case '4':
      function unirPalabras(palabras) {
        return palabras.reduce((frase, palabra) => frase + " " + palabra);
      }
      console.log("Frase unida:", unirPalabras(["Hola", "mundo", "esto", "es", "JS"]));
      break;

    case '5':
      function ordenarPorPrecio(productos) {
        return productos.sort((a, b) => a.precio - b.precio);
      }
      console.log("Productos ordenados:", ordenarPorPrecio([
        { nombre: "Mouse", precio: 20 },
        { nombre: "Monitor", precio: 150 },
        { nombre: "Teclado", precio: 50 }
      ]));
      break;


      //Segunda hoja de ejrcicios
    case '6':
      const catalogo = [];
      function agregarProducto(catalogo, nombre, precio) {
        catalogo.push({ nombre, precio });
        console.log("Catálogo actualizado:", catalogo);
      }
      agregarProducto(catalogo, "Mouse", 25);
      agregarProducto(catalogo, "Teclado", 45);
      break;

    case '7':
      const tareas = ["Lavar platos", "Sacar basura"];
      function priorizarTarea(tareas, nuevaTarea) {
        tareas.unshift(nuevaTarea);
        console.log("Tareas actualizadas:", tareas);
      }
      priorizarTarea(tareas, "Preparar presentación");
      break;

    case '8':
      const cola = ["Carlos", "Ana", "Luis"];
      function removerUltimoCliente(cola) {
        const cliente = cola.pop();
        console.log("Cliente removido:", cliente);
        console.log("Cola actual:", cola);
      }
      removerUltimoCliente(cola);
      break;

    case '9':
      const canciones = ["Intro", "Hit Song", "Outro"];
      function empezarConCancionDestacada(lista) {
        const destacada = lista.shift();
        console.log("Canción destacada:", destacada);
        console.log("Lista actualizada:", lista);
      }
      empezarConCancionDestacada(canciones);
      break;

    case '10':
      function convertirRespuestaEnArreglo(respuesta, letrasCorrectas) {
        const arreglo = Array.from(respuesta);
        const contiene = letrasCorrectas.every(letra => arreglo.includes(letra));
        console.log("Respuesta convertida:", arreglo);
        console.log("¿Contiene letras correctas?:", contiene);
      }
      convertirRespuestaEnArreglo("javascript", ["j", "s", "c"]);
      break;


      
    //tercera hoja de ejrcicios
    case '11':
      function combinarListasDeCompra(lista1, lista2) {
        const resultado = lista1.concat(lista2);
        console.log("Lista combinada:", resultado);
      }
      combinarListasDeCompra(["Leche", "Pan"], ["Huevos", "Queso"]);
      break;

    case '12':
      function recortarImagen(imagen, fi, ff, ci, cf) {
        const recorte = imagen.slice(fi, ff).map(fila => fila.slice(ci, cf));
        console.log("Sección recortada:", recorte);
      }
      recortarImagen([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ], 1, 3, 1, 3);
      break;

    case '13':
      function gestionarEmpleados(lista) {
        lista.push("NuevoEmpleado");
        lista.splice(1, 1);
        lista.splice(2, 1, "EmpleadoReemplazo");
        console.log("Lista de empleados actualizada:", lista);
      }
      gestionarEmpleados(["Ana", "Luis", "Carlos", "Marta"]);
      break;

    case '14':
      function ubicacionDelPaquete(recorrido, actual) {
        const i = recorrido.indexOf(actual);
        console.log("Ubicación:", i);
      }
      ubicacionDelPaquete(["Bodega", "Centro", "Ruta", "Entrega"], "Ruta");
      break;


      //Cuarta hoja de ejrcicios
    case '15':
      function verificarTesoro(mapa, tesoro) {
        const ok = mapa.includes(tesoro);
        console.log("¿Tesoro encontrado?:", ok);
      }
      verificarTesoro(["Cueva", "Río", "Bosque"], "Bosque");
      break;

    case '16':
      function verificarDescuento(cursos) {
        const tiene = cursos.some(c => c.descuento > 0);
        console.log("¿Hay descuento?:", tiene);
      }
      verificarDescuento([
        { nombre: "JS", descuento: 0 },
        { nombre: "Python", descuento: 10 }
      ]);
      break;

    case '17':
      function enviarCorreoConfirmacion(asistentes) {
        asistentes.forEach(a => console.log("Correo enviado a:", a));
      }
      enviarCorreoConfirmacion(["Laura", "Carlos", "Mónica"]);
      break;

    default:
      console.log("Opción inválida");
  }

  rl.close();
});
