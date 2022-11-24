let variableejercicio1 = 71;

let variable1ejercicio2 = 1;
let variable2ejercicio2 = 2;
let variable3ejercicio2 = 5;

let variableejercicio5 = [];

function ejercicio1(variable) {
  if (variable <= 1) {
    return console.log(variable + " no es un número primo.");
  } 
  
  if (variable % 2 == 0 && variable > 2) {
    return console.log(variable + " no es un número primo.");
  }
  
  for (let i= 3; i <= Math.sqrt(variable); i += 2) {
    if (variable % i === 0) {
      return console.log(variable + " no es un número primo.");
    }  
  }
  return console.log(variable + " es un número primo.");
}

function ejercicio2(variable, variable1, variable2) {
 let discriminant = (variable1 * variable1) - (4 * variable * variable2);
 let sqrdiscriminant = Math.sqrt(discriminant);
 let denominator = 2 * variable;
 let x = (-1 * variable1 + sqrdiscriminant) / denominator;
 let x1 = (-1 * variable1 - sqrdiscriminant) / denominator;
  
  if (variable == 0 && variable1 == 0 && variable2 == 0) {
    return console.log("Por favor digite valores válidos.")
  } else if (discriminant < 0) {
    return console.log("La ecucuación no tiene solución.");
  } else if (discriminant == 0) {
    return console.log("El resultado de x1 y x2 es: " + x);
  } else {
    return console.log("El resultado de x1 es: " + x + " y el de x2 es: " + x1);
  }
}

function ejercicio3() {
  for(i = 1; i <= 100; i++) {
    console.log(i)
  }
}

function ejercicio4() {
  for(i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
      console.log(i)      
    }
  }
}

function ejercicio5(variable) {
  for(i = 1; i <= 100; i++) {
    if(i % 10 == 0) {
      variable.push(i + "\n");
  } else { 
      variable.push(i);
    }
  }
  return(variable);
}

function main() {
  ejercicio1(variableejercicio1);

  ejercicio2(variable1ejercicio2, variable2ejercicio2, variable3ejercicio2);
  
  ejercicio3();
  
  ejercicio4();
  
  let quintoejercicio = ejercicio5(variableejercicio5);
  console.log(quintoejercicio);
}

main();