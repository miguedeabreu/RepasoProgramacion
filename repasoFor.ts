function arcoiris (myArray: string[])
{
    for (let i = 0 ; i < myArray.length ; i++)
    {
        if (myArray[i] == "rojo" || myArray[i] == "naranja" || myArray[i] == "amarillo" ||
            myArray[i] == "verde" || myArray[i] == "violeta" || myArray[i] == "azul" ||
            myArray[i] == "añil" || myArray[i] == "indigo")
        {
            console.log("El color " + myArray[i] + " se encuentra en el arcoiris.")
        }
    }
}

arcoiris(["negro", "rojo", "amarillo", "indigo", "celeste", "azul"]);

function nombres (myArray: string[])
{
    let resultado: boolean = true;

    for (let i = 0 ; i < myArray.length ; i++)
    {
        if (myArray[i].charAt(0) != "M")
        {
            resultado = false;
        }
    }
    return resultado;
}

console.log(nombres(["Marta","Miguel","Mario"]));
console.log(nombres(["Ricardo","Miguel","Oscar"]));
console.log(nombres(["marta","miguel","mario"]));
console.log(nombres(["Maria","Jose","Miguel"]));

function pares (myArray: number[])
{
    let resultado: boolean = false;

    for (let i = 0 ; i < myArray.length ; i++)
    {
        if (myArray[i] %2 == 0)
        {
            resultado = true;
        }
    }
    return resultado;
}

console.log(pares([1,2,3,1,3,2,1]));

function aRevertido (myArray: number[])
{
    let array:number[] = [];
    let longitud: number = myArray.length;

    for (let i = longitud-1 ; i >= 0; i--)
    {
        array.push(myArray[i]);
    }

    return array
}

console.log(aRevertido([1,2,3,4]));

export function sumaCaracteres (array:string[])
{
    let resultado: number = 0;

    for (let i = 0 ; i < array.length ; i++)
    {
        resultado = resultado + array[i].length;
    }
    return resultado;
}

import {tipoNumero} from "./repasoIf";

console.log(sumaCaracteres(["Hola","que","tal."]));

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"];


let resultado1: number = sumaCaracteres(array1);
console.log("La suma del array1 es " + resultado1);
tipoNumero(resultado1);

let resultado2: number = sumaCaracteres(array2);
console.log("\n" + "La suma del array2 es " + resultado2);
tipoNumero(resultado2);

let resultado3: number = sumaCaracteres(array3);
console.log("\n" + "La suma del array3 es " + resultado3);
tipoNumero(resultado3);
