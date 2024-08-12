// 1)
let jugadores = ["Bastian", "Ainara", "Zhenya", "Maria", "Maylen"];

// 2)
let puntajes = [];


for (let i = 0; i < jugadores.length; i++) {
    let puntaje = parseInt(prompt(`Introduce el puntaje de ${jugadores[i]}:`), 10);
    puntajes.push(puntaje);
}

// 3)
let puntajeMayor = Math.max(...puntajes);
let indiceMayor = puntajes.indexOf(puntajeMayor);
console.log(`El puntaje más alto es ${puntajeMayor} y corresponde a ${jugadores[indiceMayor]}.`);

// 4)
let puntajeMenor = Math.min(...puntajes);
let indiceMenor = puntajes.indexOf(puntajeMenor);
console.log(`El puntaje más bajo es ${puntajeMenor} y corresponde a ${jugadores[indiceMenor]}.`);

// 5)
let nuevoJugador = prompt("Introduce el nombre del nuevo jugador:");
let nuevoPuntaje = parseInt(prompt(`Introduce el puntaje de ${nuevoJugador}:`), 10);
jugadores.push(nuevoJugador);
puntajes.push(nuevoPuntaje);

// 6)
console.log(`Cantidad de puntajes guardados: ${puntajes.length}`);

// 7)
puntajes[puntajes.length - 2] = parseInt(prompt(`Introduce el nuevo puntaje para ${jugadores[jugadores.length - 2]}:`), 10);
puntajes[puntajes.length - 1] = parseInt(prompt(`Introduce el nuevo puntaje para ${jugadores[jugadores.length - 1]}:`), 10);

console.log("Los jugadores y sus puntajes actualizados son:");
for (let i = 0; i < jugadores.length; i++) 
    console.log(`${jugadores[i]}: ${puntajes[i]}`);
