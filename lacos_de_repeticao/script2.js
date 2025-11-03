/*Tabuada Simples:  */


const numero = parseInt(prompt("Digite um número para ver sua tabuada:"));


if (isNaN(numero)) {
    alert("Por favor, digite um número válido!");
} else {
    let resultado = "Tabuada do " + numero + ":\n";


    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }


    alert(resultado);
}

/*Contagem de 1 a 10:  */


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/* Contador de pares de 0 a 20 */

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) { 
        console.log(i);
    }
}

/* Contagem regressiva de 10 até 1:  */


for (let i = 10; i >= 0; i--) {
    console.log(i);
}


console.log("Lançar foguete!!!")

/* Soma até 100 */

let soma = 0;
let numerox = 1;


while (soma <= 100) {
    soma += numerox;
    numerox++;
}


alert("Soma final: " + soma + "\nÚltimo número somado: " + (numerox - 1));

/* Contagem de ímpares de 1 a 15:  */


const a = parseFloat(prompt("Digite a primeira medida:"));
const b = parseFloat(prompt("Digite a segunda medida:"));
const c = parseFloat(prompt("Digite a terceira medida:"));


function formaTriangulo(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}


if (!formaTriangulo(a, b, c)) {
    alert("Não é possível formar um triângulo com essas medidas.");
} else {
    if (a === b && b === c) {
        alert("Triângulo equilátero (todos os lados iguais).");
    } else if (a === b || a === c || b === c) {
        alert("Triângulo isósceles (dois lados iguais).");
    } else {
        alert("Triângulo escaleno (todos os lados diferentes).");
    }
}

/*Contador de Passos:  */

const totalPassos = 10;


for (let passo = 1; passo <= totalPassos; passo++) {
    console.log("Passo " + passo + " dado!");
}


console.log("Você completou 10 passos! ");

/*Adivinhe o Número */


const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite = 0;

alert("Tente adivinhar o número secreto entre 1 e 100!");


while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt("Digite seu palpite:"));

    if (isNaN(palpite)) {
        alert("Por favor, digite um número válido!");
    } else if (palpite < numeroSecreto) {
        alert("Muito baixo! Tente novamente.");
    } else if (palpite > numeroSecreto) {
        alert("Muito alto! Tente novamente.");
    } else {
        alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
    }
}
