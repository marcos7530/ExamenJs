let num = 603;

console.log(multipleOfThree(num));

function multipleOfThree(numero) {

  let suma = 0;
  let digitos = numero.toString().split("");//hago un arreglo de los digitos ingresados

  for (let i = 0; i < digitos.length; i++) {
    suma += parseInt(digitos[i]);//recorro el arreglo y sumo sus elementos
  }

  if (suma > 9) {
    multipleOfThree(suma);//funcion recursiva x si el numero ingresado tiene mas de 1 digito 
  } else {
    return suma === 3 || suma === 6 || suma === 9;//condicion para que el numero sea multiplo de 3
  }
}

