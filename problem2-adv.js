timeFromTheThird();

function timeFromTheThird() {
  const ARGENTINA_CHAMPION_DATE = new Date("2022-12-18");
  let actualDate = new Date();

  let differenceBetweenDates =
    actualDate.getTime() - ARGENTINA_CHAMPION_DATE.getTime();

  let days = Math.floor(differenceBetweenDates / (1000 * 60 * 60 * 24)); //numero de milisegundos en dias, el metodo floor redondea hacia abajo

  differenceBetweenDates -= days * (1000 * 60 * 60 * 24); // a la diferencia le resto los milisegundos de los dias

  let hours = Math.floor(differenceBetweenDates / (1000 * 60 * 60)); //numero de milisegundos en  horas

  differenceBetweenDates -= hours * (1000 * 60 * 60); // a la diferencia le resto los milisegundos de lashoras

  let minutes = Math.floor(differenceBetweenDates / (1000 * 60)); //numero de milisegundos en minutos

  console.log(
    `Pasaron ${days} días, ${hours} horas y ${minutes} minutos desde el Domingo, 18 de diciembre de 2022`
  );
}
