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
