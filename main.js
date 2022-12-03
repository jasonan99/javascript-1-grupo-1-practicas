let variable1ejercicio1 = 10;
let variable2ejercicio1 = "";
let variable3ejercicio1 = "";
let variable4ejercicio1 = "";

let variable1ejercicio2 = 2;
let variable2ejercicio2 = 3;

let variable1ejercicio3 = 3;
let variable2ejercicio3 = 5;

let variable1ejercicio4 = [1,2,3,4,5];
let variable2ejercicio4 = variable1ejercicio4.length; 

function ejercicio1(variable1, variable2, variable3, variable4) {
  for(i = 1; i <= variable1; i++ ){
    variable2 = "# ";
    variable3 += "* ";
    for (j = i + 1; j <= variable1; j++){
      variable2 += "# ";
    }
    variable4 = variable3 + variable2;
    console.log(variable4);  
  }
}

function ejercicio2(variable1, variable2) {
  let contador = 1;
  
  for(i = 0; i < variable2; i++) {
    contador *= variable1;
  }
  return contador;
}

function ejercicio3(variable1,variable2) {
  if (variable2 === 0) return 1;
  return variable1 * ejercicio3(variable1, variable2 - 1);
}

function ejercicio4(variable1, variable2) {
  if(variable2 >= 1) return ejercicio4(variable1, variable2 - 1) + variable1[variable2 - 1];
  return 0;
}

function main() {
  ejercicio1(variable1ejercicio1, variable2ejercicio1, variable3ejercicio1, variable4ejercicio1);
  
  let segundoejercicio = ejercicio2(variable1ejercicio2, variable2ejercicio2);
  console.log(variable1ejercicio2 + " elevado a la " + variable2ejercicio2 + " es igual a: " +segundoejercicio);
  
  let tercerejercicio = ejercicio3(variable1ejercicio3, variable2ejercicio3);
  console.log(variable1ejercicio3 + " elevado a la " + variable2ejercicio3 + " es igual a: " +tercerejercicio);
  
  let cuartoejercicio = ejercicio4(variable1ejercicio4, variable2ejercicio4);
  console.log("La suma de " + variable1ejercicio4 + " es igual a: " + cuartoejercicio);
}

main();