let numeros = [];

function solicitarNumero() {
  while (true) {
    let numero = prompt ("Digite un número");
    if (numero === '') {
      break;
    } else if (numero != '') {
      numeros.push(Number(numero));
    }
  }
}

function prom (numeros) {
  let medida = 0;
  let contador = 0;
  let promedio = 0;
  
  for (i = 0; i < numeros.length; i++) {
    contador = numeros[i] + contador;
    medida ++;
  }
  
  promedio = contador / medida;
  return promedio
}

function med (numeros) {
  numeros.sort();
  let medida = numeros.length;
  let mediana = Math.floor(medida / 2);
  
  if (medida % 2 != 0) {
    return numeros[mediana];
  } else {
    return (numeros[mediana - 1] + numeros [mediana]) / 2;
  }
}

function min (numeros) {
  let minimo = numeros[0];
  
  for (i = 0; i < numeros.length; i++) {
    if (minimo > numeros[i]) {
      minimo = numeros[i];
    }
  }
  return minimo;
}

function max (numeros) {
  let maximo = 0;
  
  for (i = 0; i < numeros.length; i++) {
    if (maximo < numeros[i]) {
      maximo = numeros[i];
    }
  }
  return maximo;
}

function main() {
  solicitarNumero();
  let promedio = prom(numeros);
  console.log("El promedio es: " +promedio);
  let mediana = med(numeros);
  console.log("La mediana es: " +mediana);
  let minimo = min(numeros);
  console.log("El mínimo es: " +minimo);
  let maximo = max(numeros);
  console.log("El máximo es: " +maximo);
}

main();