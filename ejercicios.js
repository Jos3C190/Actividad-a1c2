
//variables
let contador = 0; // pueden ser reasignadas pero no redeclaradas dentro del mismo bloque.
/*const contador = 0; no pueden ser reasignadas una vez se ha asignado su valor, es decir, su valor no puede cambiar. */

contador = contador + 1;
contador = contador + 1;

console.log(contador);


// condicional if-else
let edad = 16;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

//Objetos
const persona = {
  nombre: "Jose",
  apellido: "Lopez",
  edad: 21,
};
persona.nombre = "Carlos";
console.log(persona.nombre);


//Objetos literales
const frutas = ["pera", "manzana", "sandia"];
console.log(frutas[2]);


//Objetos literales, no indexados
const animal = {
    color : "naranja",
    nombre : "Simba",
    rugiendo : true
}
console.log("Este leon es de color " + animal.color);
console.log("Su nombre es " + animal.nombre);
console.log(animal["rugiendo"]);


const tareas = {
    "2359-34561gfd3gf32" : {
        title : "tarea 1",
    }
}
console.log(tareas["2359-34561gfd3gf32"].title);


const animal1 = {
    color : "naranja",
    nombre : "Simba",
    rugiendo : true,
    favorito : {
        dia : {
            ok : true
        },
        noche : {
            ok : false
        }
    }
}
console.log(animal1.favorito?.dia?.ok);


//guardar el valor de la propiedad color en una constante
const color = animal1.color;
const nombre = animal1.nombre;
console.log("color: " + color + ", animal: " + nombre);



const animal2 = {
    color_animal2 : "azul",
    nombre_animal2 : "Torogoz",
    volando_animal2 : true
}

//desestructuración
const {color_animal2, nombre_animal2, volando_animal2} = animal2;
console.log("color: " + color_animal2 + ", animal: " + nombre_animal2);

//arrays indexados
const frutas2 = ["pera", "manzana", "sandia"];

//desestructuring arrays
const [pera, manzana, sandia] = frutas2;
console.log("El "+ nombre_animal2 + " come " + pera );