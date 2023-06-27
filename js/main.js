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
  const option = prompt('¿Qué avión te gustaría ver? "Airbus", "Boeing" o "Cantidad de pasajeros"');
  
  if (option.toLowerCase() === 'airbus') {
    const filterPlanes = airPlanes.filter(plane => plane.factory.toLowerCase() === 'airbus');
    console.log(filterPlanes);
    return filterPlanes;
  } else if (option.toLowerCase() === 'boeing') {
    const filterPlanes = airPlanes.filter(plane => plane.factory.toLowerCase() === 'boeing');
    console.log(filterPlanes);
    return filterPlanes;
  } else if (option.toLowerCase() === 'cantidad') {
    const numCapacity = prompt('Ingresa la cantidad de pasajeros:');
    const filterPlanes = airPlanes.filter(plane => plane.capacity >= parseInt(numCapacity));
    console.log(filterPlanes);
    return filterPlanes;
  } else {
    alert('Opción no válida');
  }
}

filterAirPlane();









