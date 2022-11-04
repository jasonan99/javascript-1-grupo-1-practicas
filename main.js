let variableejercicio1 = 5;

let variableejercicio2 = 5;
let suma = 0;
let resultado = variableejercicio2;

let variableejercicio3 = "adios";
let palabra = [...variableejercicio3];
let invertida = [];

let variableejercicio4 = "esta es la entrada"
let word = [...variableejercicio4];

let variableejercicio5 = "hola"
let frase = [...variableejercicio5];

function ejercicio1(variable) {
  if (variable % 2 == 0) {
    console.log("Es par");    
  }else {
    console.log ("Es impar");
  }
  
  if (variable % 3 == 0) {
    console.log("Es divisible entre 3");
  }else {
    console.log ("No es divisible entre 3");
  }
  
  if (variable % 5 == 0) {
    console.log("Es divisible entre 5");
  }else {
    console.log ("No es divisible entre 5");
  }
}

function ejercicio2(variable) {
  for(i = 0; i < variable; i++) {
    suma += resultado;
    resultado -= 1;
  }
  return suma;
}

function ejercicio3(variable, variable2) {
  let arreglo = variable.slice();
  
  while (arreglo.length) {
    variable2.push(arreglo.pop());
  }
  return variable2.join("");
}

function ejercicio4(variable) {
  for(i = 0; i < variable.length; i++) {
    if (variable[i] === 'a' || variable[i] === 'e' || variable[i] === 'o' || variable[i] === 'u') {
      variable[i] = 'i';
    }
  }
  return variable.join("");
}

function ejercicio5(variable) {
  return variable.sort().join(""); 
}


function main() {
  ejercicio1(variableejercicio1);
  
  let segundoejercicio = ejercicio2(variableejercicio2);
  console.log(segundoejercicio);
  
  let tercerejercicio = ejercicio3(palabra, invertida);
  console.log(tercerejercicio);
  
  
  let cuartoejercicio = ejercicio4(word);
  console.log(cuartoejercicio);
  
  let quintoejercicio = ejercicio5(frase);
  console.log(quintoejercicio);
}

main();