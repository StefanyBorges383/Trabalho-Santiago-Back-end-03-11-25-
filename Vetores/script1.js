/**Somar todos os elementos */


const numeros = [10, 20, 30, 40, 50];


let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}


alert("A soma dos números é: " + soma);

/*  Encontrar o maior número */


const numerosM = [15, 42, 7, 89, 23, 56];


let maior = numerosM[0];


for (let i = 1; i < numerosM.length; i++) {
    if (numerosM[i] > maior) {
        maior = numerosM[i];
    }
}


alert("O maior número do vetor é: " + maior);

/* Inverter a ordem  */

const original = [10, 20, 30, 40, 50];


const invertido = [...original].reverse();


alert("Array original: " + original.join(", "));
alert("Array invertido: " + invertido.join(", "));

/* Contar números pares  */


const numeross = [10, 15, 22, 33, 40, 51, 62, 77, 80];


let contadorPares = 0;


for (let i = 0; i < numeross.length; i++) {
    if (numeross[i] % 2 === 0) {
        contadorPares++;
    }
}


alert("O array contém " + contadorPares + " números pares.");

/* Unir dois vetores */

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];


const arrayUnido = array1.concat(array2);


alert("Array 1: " + array1.join(", "));
alert("Array 2: " + array2.join(", "));
alert("Arrays unidos: " + arrayUnido.join(", "))