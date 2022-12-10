let variable1ejercicio1 = 6;
let variable2ejercicio1 = [];

let variable1ejercicio2 = [1, 2, 3, 4];
let variable2ejercicio2 = [5, 4, 2, 1];

function ejercicio1(variable1, variable2) {

  for (let i = 0; i < variable1; i++) {
    let array = [];
    for (let j = 0; j < variable1; j++) {
      if (i == j || j + i == variable1 - 1) {
        array.push("X");
      } else {
        array.push("");
      }
    }
    variable2.push(array);
  }
  return variable2;
}

function ejercicio2 (variable1, variable2) {
  variable1.sort();
  variable2.sort();
  let diferentes = [];
  for (i = 0; i < variable1.length; i++) {
    if (variable1[i] !== variable2[i]) {
      diferentes.push(variable1[i], variable2[i]);
    }
  }
    
  if (diferentes.length < 1) {
    return console. log("Los arreglos contienen los mismos elementos.");
  } else { 
    return console. log("Los arreglos no contienen los mismos elementos y los elementos diferentes son: " + diferentes)
  }
}

function main () {
  let primerejercicio = ejercicio1(variable1ejercicio1, variable2ejercicio1);
  console.log(primerejercicio);  
  
  ejercicio2(variable1ejercicio2, variable2ejercicio2);
}

main();