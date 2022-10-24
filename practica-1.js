let variable1ejercicio1 = [1,2,3,4,5];
let variable2ejercicio1 = 0;

let variableejercicio2 = "amolapaloma";

let variable1ejercicio3 = [[1,0,0], [0,1,1], [0,1,0]];
let variable2ejercicio3 = 0;

let variable1ejercicio4 = [1,1,2,3,3,4,5,5].sort();
let variable2ejercicio4 = [];

let variable1ejercicio5 = 8;
let variable2ejercicio5 = '';

function ejercicio1(variable1,variable2) {
  for(i = 0; i < variable1.length; i++) {
    if (variable1[i] > variable2) {
      variable2 = variable1[i];
    }
  }
  return variable2;
}

function ejercicio2(variable) {
  for(i = 0; i < variable.length; i++) {
    if (variable[i] == variable[variable.length - i - 1]) {
      return true;
    }
  }
  return false;
}

function ejercicio3(variable1,variable2) {
  for(i = 0; i < variable1.length; i++) {
    for (j = 0; j < variable1.length; j++) {
      if (variable1[i][j] == 0) {
        variable2 += 1;
      }
    }
  }
  return variable2;
}

function ejercicio4(variable1,variable2) {
  for(i = 0; i < variable1.length; i++) {
      if (variable1[i] == variable1[i+1]) {
        variable2.push(variable1[i]);
    }
  }
  if(variable2.length === 0) {
    return ("No se encontraron números repetidos en la lista de números recibida.");
  }else {
    return variable2;
  }
}

function ejercicio5(variable1, variable2) {
  for(i = 0; i < variable1; i++) {
    for(j = 1; j <= 1; j++) {
      variable2 += '* ';
    }
    console.log(variable2);
  }
}

function main() {
  let primerejercicio = ejercicio1(variable1ejercicio1, variable2ejercicio1);
  console.log(primerejercicio);
  
  let segundoejercicio = ejercicio2(variableejercicio2);
  console.log(segundoejercicio);
  
  let tercerejercicio = ejercicio3(variable1ejercicio3, variable2ejercicio3);
  console.log(tercerejercicio);
  
  let cuartoejercicio = ejercicio4(variable1ejercicio4, variable2ejercicio4);
  console.log(cuartoejercicio);
  
  ejercicio5(variable1ejercicio5, variable2ejercicio5);
}

main();