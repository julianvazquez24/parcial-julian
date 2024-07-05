// ej 1
// Crea una función que recibe un array, medidasGalpones con objetos con el siguiente formato:
// { largo: 50, ancho: 100 }
// Las medidas corresponden a diferentes galpones de un complejo industrial y estan en metros.
// La función debe calcular el área de cada galpón y devolver la suma de todas las áreas.

const medidasGalpones = [{ largo: 50, ancho: 100 },
{ largo: 70, ancho: 100},
]

function calcularMedidas(medidasGalpones){ 
    let areaTotal = 0;
    for(let i = 0; i < medidasGalpones.length; i++){
        let galpon = medidasGalpones[i];
        let areaCadaGalpon = galpon.largo * galpon.ancho;
        
        areaTotal += areaCadaGalpon;
    }
  return areaTotal;
}

console.log(calcularMedidas(medidasGalpones));

//ej 2
// Crea una función que recibe dos parametros, un número, superficieEdificio y un array maquinas de objetos con el siguiente formato:
// { nombreMaquina: "Torno Industrial", superficieDeOperacionRequerida: 40 }
// El array contiene diferentes maquinas de una fábrica y sus superficies de operación requeridas en metros cuadrados. El número superficieEdificio representa la superficie de uno de los edificios del complejo industrial en metros cuadrados.
// La función debe devolver true si al menos una de las máquinas puede ser instalada en el edificio, y false en caso contrario.

//pongo las tres opciones para que se pueda probar 
let superficieEdificio = 39;
// let superficieEdificio = 40;
//let superficieEdificio = 41;
const maquinas = [{ nombreMaquina: "Torno Industrial", superficieDeOperacionRequerida: 40 }];

function calcularSiEsApto(superficieEdificio, maquinas){
    for ( let i = 0; i < maquinas.length; i++){
        if (maquinas[i].superficieDeOperacionRequerida <= superficieEdificio){
            return true;
        }
    }
    return false;
}

console.log(calcularSiEsApto(superficieEdificio, maquinas))

// ej 3 

// Crea una función llamada filtrarInversoresVIP que recibe un array inversores con objetos con el siguiente formato:
// { nombre: "Lopez Mena", capital: 9000000 }
// Los objetos representan inversores del proyecto y cuanto capital están dispuestos a aportar.
// La función debe devolver un array solo con aquellos inversores que aportan más de 1 millon de dólares.

const inversores = [{ nombre: "Lopez Mena", capital: 9000000 },{ nombre: "Julian", capital: 100 },{ nombre: " Mr. Pedrito",capital: 1000000}];
function filtrarInversionesVIP(inversores){
 let inversoresAptos = [];
  for (let i = 0; i < inversores.length ; i++){
        if(inversores[i].capital >= 1000000){
           inversoresAptos.push(inversores[i]);
        };
    };
    console.log(JSON.stringify(inversoresAptos));
}
filtrarInversionesVIP(inversores);

// ej 4 

// Crea una función que recibe un array de objetos con el siguiente formato:
// { nombre: "Robot Triturador", cantidad: 5 }
// Los objetos representan la cantidad de robots de cada tipo que ya se han encargado a construir
// La función debe devolver un objeto <li> por cada objeto del array con el siguiente formato:
// <li class="item-encargado">Robot Triturador: 5</li>

let robotsEncargados = [{ nombre: "Robot Triturador", cantidad: 5 }];

function crearLiObjeto (robotsEncargados){
    for( let i = 0; i < robotsEncargados.length; i++){
        let li = document.createElement("li");
        li.className = "item-encargado";
        li.innerHTML = robotsEncargados[i];
    }
    return li;
}

crearLiObjeto(robotsEncargados);

//ej 5 

// Crea una clase Robot con al menos 3 propiedades, 2 métodos de instancia y 3 métodos estáticos. 
// Al menos uno de los métodos de instancia debe llamar al otro. Cada uno de los métodos estáticos debe devlover una instancia de la clase. 
// Estas instancias deben tener ya cargadas propiedades acordes a los tipos de robots mencionados al principio del documento.

const robot =[{soldador}];

class Robot {
    constructor (nombre, velocidadMax, autonomia, operacionesMax){
        nombre = this.nombre;
        velocidadMax = this.velocidadMax;
        autonomia = this.autonomia;
        operacionesMax = this.operacionesMax;
    }

    mostrarOperacionesPorHora(){
        console.log(this.operacionesPorHora)
    }

    operacionesPorHora(operacionesMax, autonomia){
        return operacionesMax / autonomia;
    }
}

mostrarOperacionesPorHora();

