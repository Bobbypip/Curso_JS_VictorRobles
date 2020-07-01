type alfanumerico = string|number;

//string
let cadena: alfanumerico = "victorroblesweb.es";

cadena = 3;

//number
let numero: number = 12;

// Boleano
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = 'hola';
cualquiera = 77;

// Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

let years: any[] = ["DOCE", 13 ,14]

//let a nivel de bloque
//var a nivel global


console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);