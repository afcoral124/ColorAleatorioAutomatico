//Digitos posibles en un código de color hexadecimal
const digitos= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

//Capturo el botón para agregarle un evento al click que defino
const botonCambiarColor = document.getElementById('botonCambiarColor');
botonCambiarColor.addEventListener('click', function (){
  //Variable que tendrá almacenado el valor del color
  let colorHexadecimalCreado ="#";

  //Llenando la variable
  for(let i=0;i<6;i++){
    //Se obtiene un digito hex aleatorio y se concatena
    colorHexadecimalCreado += digitos[obtenerPosicionAleatoria()];
  }

  //Obtengo del html aquel objeto cuyo contenido expresa el codigo de color actual
  const codigoColor = document.querySelector(".codigoColor");
  //Obtengo el objeto del contenedor principal


  //Cambio el texto al color hexadecimal obtenido
  codigoColor.textContent = colorHexadecimalCreado;
  //Cambio el color de fondo al color hexadecimal obtenido
  document.body.style.backgroundColor = colorHexadecimalCreado;

});


function obtenerPosicionAleatoria(){
  //Math.random devuelve un número aleatorio entre 0 y 0.99999999
  var numRandom=Math.random();

  //Para adaptarlo a nuestra necesidad, necesitamos escoger aleatoriamente una posición del vector o arreglo llamado "digitos", es decir 16 posibilidades (debido a que es código hexadecimal), por este motivo, multiplicamos numRandom por la longitud del arreglo "digitos"

  numRandom = numRandom * digitos.length;

  //Lo unico que falta es obtener un número entero aleatorio, hasta ahora se obtiene un número decimal, entonces se usa lo siguiente
  numRandom = Math.floor(numRandom);
  //Math.floor permite acercar al entero menor de un valor específicado, de este modo conseguimos numeros enteros entre 0 y 15, que es lo que necesitamos

  return numRandom;

}
