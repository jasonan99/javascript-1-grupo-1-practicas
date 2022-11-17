let variableejercicio1 = 5;

let variableejercicio2 = "1996";

let variable1ejercicio3 = "esternocleidomastoideo";
let variable2ejercicio3 = "e";

let variableejercicio4 = "47"

let variableejercicio5 = "May the force be with you"

function ejercicio1(variable) {
  if(variable === 0) return 1;
    return variable * ejercicio1(variable - 1);
}

function ejercicio2(variable) {
  if (variable % 4 == 0 && (variable % 100 != 0 || variable % 400 == 0)) {
    return console.log(variable + " es un año bisiesto.");
  } else {
      return console.log(variable + " no es un año bisiesto.")
  }
}

function ejercicio3(variable,variable1) {
  let contador = 0;
  variable.split();
  
  for(i = 0; i < variable.length; i++) {
    if(variable[i] === variable1) {
      contador++;
    }
  }
  return contador;
}

function ejercicio4(variable) {
  while (true) {
    let numero = prompt("¿Cúal es el número secreto? Escriba 0 para salir.");
    if (variable === numero) {
      return console.log("¡Correcto! Ha adivinado el número secreto.");
      break;
    } else if (numero == 0){
        return console.log("Ha decidido salir sin adivinar el número secreto."); 
        break;
    }
      else if (variable > numero) {
        alert("Incorrecto. El número secreto es mayor a " + numero);
    } else if (variable < numero) {
        alert("Incorrecto. El número secreto es menor a " + numero);
    }
  }
}

function ejercicio5 (variable) {
  variable.split();
  let nuevoarray = [];
  
  for(i = 0; i < variable.length; i++) {
    if(variable[i] !== " ") {
      nuevoarray.push(variable[i]);
    }
  }
  return nuevoarray.join("");
}

function main() {
  let primerejercicio = ejercicio1(variableejercicio1);
  console.log("El factorial de " + variableejercicio1 + " es: " + primerejercicio + ".");
    
  ejercicio2(variableejercicio2);
  
  let tercerejercicio = ejercicio3(variable1ejercicio3, variable2ejercicio3);
  console.log("En la palabra " + variable1ejercicio3 + " hay " + tercerejercicio  + " '" + variable2ejercicio3 + "'.");
  
  ejercicio4(variableejercicio4);
  
  let quintoejercicio = ejercicio5(variableejercicio5);
  console.log(quintoejercicio);
}

main();