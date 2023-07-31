//console.log(timeFromTheThird());

timeFromTheThird();

function timeFromTheThird() {
  const ARGENTINA_CHAMPION_DATE = new Date("2022-12-18");
  const ACTUAL_DATE = new Date();

  let differenceBetweenDates =
    ACTUAL_DATE.getTime() - ARGENTINA_CHAMPION_DATE.getTime();

  //numero de milisegundos en dias, el metodo floor redondea hacia abajo
  let days = Math.floor(differenceBetweenDates / (1000 * 60 * 60 * 24));

  // a la diferencia le resto los milisegundos de los dias
  differenceBetweenDates -= days * (1000 * 60 * 60 * 24);

  //numero de milisegundos en  horas
  let hours = Math.floor(differenceBetweenDates / (1000 * 60 * 60));

  // a la diferencia le resto los milisegundos de las horas
  differenceBetweenDates -= hours * (1000 * 60 * 60);

  //numero de milisegundos en minutos
  let minutes = Math.floor(differenceBetweenDates / (1000 * 60));

  return `Pasaron ${days} días, ${hours} horas y ${minutes} minutos desde el Domingo, 18 de diciembre de 2022`;
}
