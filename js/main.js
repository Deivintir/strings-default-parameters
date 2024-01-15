//Template literals en strings.
//ECMAScript2015 incorpora a JavaScript una funcionalidd que en muchos otros lenguajes conocemos como interpolación, implementa lectura de expresiones dentro de un string
//evita concantenar en exceso fragmentos de caracteres de este tipo de dato.
//Ejemplo:
var user = "Carlos";
var message = "¡Hola " + user + "!, bienvenido a nuestra aplicación."; //concatenamos el mensaje y la variable user para conseguir el resultado esperado.
console.log(message); //pintamos en consola.

//Ahora gracias a las template literals, podemos reescribir el mismo código de una manera más limpia de la siguiente manera:
let message2 = `¡Hola ${user}!, bienvenido a nuestra aplicación`; //Tener en cuenta el uso del acento francés para el string literals.
console.log(message2);

//Además al tratare de expresiones, dentro de ellas se puede introducir lógica; por ejemplo:
let company = "ACME S.A.";
let footerMessage = `©${new Date().getFullYear()} ${company} Todos los derechos reservados`;
console.log(footerMessage);

//Otra de las características de las template literals es que permiten añadir multilínea sin necesidad de usar secuencias de escape, por ejemplo.
let author = "Miguel de Cervantes";
let title = "El Quijote";

let bookTitles = `
Autor: ${author}
Título ${title}
`//Tener siempre en cuenta que los template literals usan el acento francés "``".
console.log(bookTitles);


//Default parameter en funciones.
//En JavaScript, antes de ECMAScript2015, los parámetros de las funciones no permitían la asignación de valores explícititamente,
//un requisito altamente demandado en programación, que se solucionaba introduciendo asignaciones dentro del cuerpo de la función.

//Con la nueva especificación, los default parameters permitenasignar valores por defecto para el caso de que en la invocación no se pasen argumentos para esos parámetros.
//Ejemplo:
function multiply(a,b){
    return a*b;
}
console.log(multiply(2));//Esta función arrojará un valor NaN (Not a Number).
//En cambio, si reescribimos la función incorporando parámetros predeterminados...
//Ejemplo:
function add(a=0, b=0){
    return a+b;
}
console.log(add(2));


//Chaining operator, nullish coalescence operator, proxies y desestructuring.
//Chaining operator.
//Antes de ECMAScript2015 cuando en JavaScript se trabajaba con propiedades de un objeto que podían existir o no, en muchas ocasiones la evaluación provocaba 
//errores que el desarrollador al realizar operaciones con esa propiedad, no advertía.
//Ejemplo:
const userone = {
    name: "Juan",
    surname: "Pérez Conde",
    address: {
        city: "Madrid",
        street: "Paseo de La Castellana, 10"
    }
}

const usertwoo = {
    name: "Pedro",
    surname: "Martín Torres",
/*    address: {
        city: "Madrid",
        street: "Paseo de La Castellana, 10" // (Descomentar para ver el ejemplo).
    }*/
}

let city1 = userone.address.city;
console.log(city1);
//let city2 = usertwoo.address.city; //(Descomentar para ver el ejemplo).
//console.log(city2);//(Descomentar para ver el ejemplo). Esta línea nos arroja un error en consola, la propiedad city no existe en el usuario 2.
//La forma de solucionar este problema consistía en introducir estructuras condicionales según si existía la propiedad.
//Ejemplo:
if(usertwoo.address){
    city2 = usertwoo.address.city;
}
//Esta solución tiene un problema, cada vez se vuelve más compleja en función de los niveles de anidamiento de los objetos, 
//lo que implica un código cada vez mas ilegible y de difícil mantenimiento.

//Para resolver esto, ECMAScript2015 incorpora el chaining operator, que usa como sintaxis el símbolo de interrogación;
//este indica al intérprete que solo ejecute la sentencia en caso de que exista la propiedad a evaluar.
//Ejemplo:
const iveco = {
    name: "Tranporte público",
    surname: "Pérez Conde",
    loadCap: {
        heigth: "5m.",
        weight: "5000kg"
    }
}

const clio = {
    name: "utilitario",
    surname: "Martín Torres",
}

let ivecoLoad = iveco.loadCap?.weight;
console.log(ivecoLoad);
let clioLoad = clio.loadcap?.weight;
console.log(clioLoad); //no se mostrará


//Nullish coalescence operator.
//Es un nuevo operador para JavaScript de la especificación ECAMScript2015 muy útil para asignar valores por defecto en programas.
//Su énfasis consiste en asignar el valor a la derecha del operador, el cual usa doble símbolo de interrogación,
//cuando el valor de la izquierda de la expresión sea "null" o "undefined".
//Ejemplo:
let plane1 = {
    name: "Boeing-747",
    fuel: "Queroseno",
    tank: "Empty",
}

let boarding = plane1.ready ?? "No embarcando";
console.log(boarding); //No embarcando. 


//Proxies en JavaScript.
//Incorporados en ECMASCcript2015 permiten, en general, implementar metaprogramación en JavaScript.
//Uno de sus usos más frecuentes es la validación de propiedades en objetos.

let plane2 = {
    name: "",
    fuel: "",
    tank: 0,
    ready:""
}
const handlerPlane = {
    set(obj, prop, value){ //la ventaja del proxy es que podemos introducir las validaciones que necesitemos en el método "set" de la funcion validadora "handlerProduct",
                           //por ejemplo, para comprobarlos tipos de datos de las propiedades y que no existen propiedades desconocidas.
    if(Object.keys(obj).indexOf(prop) === -1){
        return console.error("Propiedad inexistente.");
    }
    if(prop === "tank" && typeof value!== Int){
        return console.error("Combustible debe ser un valor numérico.");
    }
    if(prop === "name" && typeof value !== "string"){
        return console.error("El nombre debe ser un valor alfanumérico");
    }
    }
}
const readyPlane = new Proxy(plane2,{});
readyPlane.name = "Boeing-747";
readyPlane.fuel = "Queroseno";
readyPlane.tank = 50;
if(plane2.tank === 100){
    readyPlane.ready = "ready";
}else{
    readyPlane.ready = "not ready";
}
console.log(plane2);


// Desestructuring en JavaScript
//Es una de las funcionalidades de ECAMAscript2015 que más éxito ha tenido y ha sido rápidamente adoptada.
//Consiste en extraer (de ahí su nombre) los valores de las propiedades de un array u objeto, con la particularidad de que se extrae el valor y no la referencia,
//y deja inmutable el objeto de origen.
//Ejemplo con arrays:
let values = [10, 20, 30, 40, 50,];
let [value1, value2, value3, ...restValues] = values;

console.log(value1);
value1 = 15;
console.log(values);
console.log(value2);
console.log(value3);
console.log(restValues);
restValues[0] = 45;
console.log(values);
//Ejemplo con objetos:
let newUser = {
    name: "Pilar",
    surname: "Fernández López",
    age: 40
}
let {surname, age} = newUser;
console.log(surname);
surname = "García";
console.log(age);
console.log(newUser);
//En este caso también se produce el paso por referencia; de hecho si asignamos un nuevo valor a la variable "surname", 
//podemos comprobar en la consola que el objeto original "user" ha permanecido inmutable.