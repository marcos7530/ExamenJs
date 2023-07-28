let num = 603;

console.log(multipleOfThree(num));

function multipleOfThree(number) {
  let sum = 0;

  //hago un arreglo de los digitos ingresados
  let digits = number.toString().split("");

  //recorro el arreglo y sumo sus elementos
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }

  if (sum > 9) {
    multipleOfThree(sum); //funcion recursiva x si el numero ingresado tiene mas de 1 digito
  } else {
    return sum === 3 || sum === 6 || sum === 9; //condicion para que el numero sea multiplo de 3
  }
}
