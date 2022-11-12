//Escriba un programa que convierta un número dado a horas y minutos. Ej 220 = 3 horas y 40 minutes

function Tiempo() {
  let tiempo = 220;
  let hora = Math.floor(tiempo/60);
  let minutos = tiempo - (hora * 60);  
  
  console.log("En " + tiempo + " hay " + hora + " horas y " + minutos + " minutos.");
}

Tiempo();
