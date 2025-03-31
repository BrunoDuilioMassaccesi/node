// mostras un mensaje por pantalla
//console.log("hola amigos");

// Mostrar los valores de un array en la consola utilizando: Una función tradicional. Una función flecha.
let personas = [
    {
        nombre: "nico",
        gusto: "tramontana"
    },
    {
        nombre: "bruno",
        gusto: "Banana Split"
    }
];
/*function Mostrar()
{
    personas.forEach(p => {console.log(p.nombre , p.gusto)});
}
const Mostrar2 = () => {personas.forEach(p => {console.log(p.nombre , p.gusto)});}
//Mostrar()
//Mostrar2()

const agregar = () => 
{
    personas.push({nombre: 'turco', gusto: 'DDL'})
    
}
agregar()
Mostrar()




const numeros = [1,2,3,2,4,1,2,4,5,5,2,3,4,5,6,7,8,5,3,2,3,5,7,8,9,1,2,3,4,5,2,4,5,6];
const elementoABuscar = 3;
const ultimaPosicion = numeros.lastIndexOf(elementoABuscar);
const vali =-1;
if (ultimaPosicion !== vali) {
    console.log(`${elementoABuscar} aparece por última vez en la posicion ${ultimaPosicion}`);
} else {
    console.log(`${elementoABuscar} no esta en el array`);}


/*

function sumatoria() {
    let numero = 0;
    for (let i = 0; i < arraynumeros.length; i++) { 
        numero += arraynumeros[i];
    }
    console.log(numero);
}

sumatoria();
function darvuelta()
{
    console.log(arraynumeros.reverse()) 

}
darvuelta()

let arraynumeros2 = [7,5,9,12,4,8,2,3,11,21,15,18,25];
function ordenarlosnumeros ()
{
let otrosNumerosOrdenados = arraynumeros2.sort((a, b) => a - b);
console.log(otrosNumerosOrdenados);
}
ordenarlosnumeros()


function filtrar()
{
const numerosMayores = arraynumeros2.filter(n => n > 6);
console.log(numerosMayores);
}
filtrar()

*/

const numeros = [1,2,3,2,4,5,1,3,2,4,5,5,2,3,4,5,6,6,3,1,2,3,4,5,6,7,3,2,3];
const elementoABuscar = 3;
const vecesAparece = buscarCant(numeros, elementoABuscar);
function buscarCant(numeros, elementoABuscar) {
    
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === elementoABuscar) {
            contador++;
        }
    }
    return contador;
}
console.log(`${elementoABuscar} aparece ${vecesAparece} veces en el array`);

