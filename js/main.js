alert('¡Hola! 👋 Esta página está en construcción ⚠️, ten un poco de paciencia que pronto estará lista... ✈️');

let nameAirPlanes = prompt('¿Qué fabricante de aviones te gusta más, Airbus o Boeing?');

if (nameAirPlanes.toLowerCase() === 'airbus' || nameAirPlanes.toLowerCase() === 'boeing') {
  prompt('Buena elección, también hubiera elegido ' + nameAirPlanes);
} else {
  alert('¡Elige alguna de las dos opciones para continuar, por favor!');
}

const airPlanes = [
  {name: 'Airbus A319', type: 'comercial', factory: 'Airbus', capacity: 150 },
  {name: 'Airbus A320', type: 'comercial', factory: 'Airbus', capacity: 180 },
  {name: 'Airbus A330', type: 'comercial', factory: 'Airbus', capacity: 440 },
  {name: 'Boeing 737', type: 'comercial', factory: 'Boeing', capacity: 200 },
  {name: 'Boeing 777', type: 'comercial', factory: 'Boeing', capacity: 390 },
  {name: 'Boeing 747', type: 'comercial', factory: 'Boeing', capacity: 520 }
];

function filterAirPlane() {
  const manufacturer = prompt('¿Quieres que te muestre datos de ' + nameAirPlanes + '?');
  const filteredPlanes = airPlanes.filter(plane => plane.factory.toLowerCase() === nameAirPlanes.toLowerCase());
  
  if (manufacturer.toLowerCase() === 'si') { 
    prompt(JSON.stringify(filteredPlanes));  
    return filteredPlanes;
  } else if (manufacturer.toLowerCase() === 'no') {
    alert('¡Hasta luego!');
  } else {
    alert('Por favor, escribe "si" o "no" para continuar');
  }
}

filterAirPlane();










