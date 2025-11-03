/* Voto Consciente*/

let idade = 15

if (idade >= 16){

    console.log("Pode votar");

} else {

    console.log('Não tem idade suficiente');

}

/*  Análise Numérica*/

let numero = prompt("Digite um numero")

if(numero > 0){
    alert("Seu número é positivo")
} else if(numero < 0){
    alert("Seu numero é negativo")
} else {
    alert("Seu numero é igual a zero")
}

/*Acesso Restrito*/

let nomeCorreto = "Stefany Leandra"
let senhaCorreta = "123456789"

let nome = prompt("Digite seu nome")
let senha = prompt("Digite sua senha")

if (nome === nomeCorreto && senha === senhaCorreta){
    alert("Login realizado com sucesso")
} else{
    alert("Usuario ou senha incorretos, tente novamente")
}

/* Calendário Automatizado*/

let algarismo = parseInt(prompt("Digite um numero de 1 a 7"))

let diaDaSemana;

switch(algarismo){
    case 1:
    alert(diaDaSemana = "Domingo");
    break;
    case 2:
    alert(diaDaSemana = "Segunda");
    break;
    case 3:
    alert(diaDaSemana = "Terça");
    break;
    case 4:
    alert(diaDaSemana = "Quarta");
    break;
    case 5:
    alert(diaDaSemana = "Quinta");
    break;
    case 6:
    alert(diaDaSemana = "Sexta");
    break;
    case 7:
    alert(diaDaSemana = "Sabado");
    break;
    default:
        alert("Número inválido! Digite um valor entre 1 e 7.");
}

/* Classificador de Números*/

let onumero = parseInt(prompt("Digite um número:"))

if(onumero % 2 === 0){
    alert("O número" + onumero + "é par")
} else{
    alert("O número" + onumero + "é impar")
}

/*Sistema de Notas*/ 

let notas = parseInt(prompt("Digite um numero de 0 a 100"))

if(notas >= 90){
    alert("Sua nota é A")
} else if(notas >= 80){
    alert("Sua nota é B")
} else if(notas >= 70){
    alert("Sua nota é C")
} else if(notas >= 60){
    alert("Sua nota é D")
} else{
    alert("Sua nota é F")
}
/*Promoção Inteligente */

let valorCompra = parseFloat(prompt("Digite o valor da compra (em R$):"))
let valorFinal;

if (valorCompra >= 100){
    valorFinal = valorCompra * 0.9
    alert("Você ganhou 10% de desconto!")
} else{
    valorFinal = valorCompra
    alert("Sem desconto.")
}

/*Identificador de Triângulo*/

let a = parseFloat(prompt("Digite o valor do lado A:"));
let b = parseFloat(prompt("Digite o valor do lado B:"));
let c = parseFloat(prompt("Digite o valor do lado C:"));

if (a < b + c && b < a + c && c < a + b){

    if(a === b && b === c){
         alert("É um triângulo EQUILÁTERO (todos os lados iguais).");
} else if(a === b || a === c || b === c){
     alert("É um triângulo ISÓSCELES (dois lados iguais).");
} else{
     alert("É um triângulo ESCALENO (todos os lados diferentes).");
}
}else{
    alert("As medidas informadas NÃO formam um triângulo.");
}

/*Classificação Etária */

let faixaEtaria = parseInt(prompt("Digite sua idade"))

if(faixaEtaria <= 12){
    alert("Você é uma criança")
}else if(faixaEtaria > 12 && faixaEtaria <= 17){
    alert("Você é um adolescente")
}else if(faixaEtaria >= 18 && faixaEtaria <= 59){
    alert("Você é uma adulto")
}else if(faixaEtaria >= 60 && faixaEtaria <= 100){
    alert("Você é um idoso")
}

/*Mini Calculadora */

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let operador = prompt("Digite o operador (+, -, *, /):");
let num2 = parseFloat(prompt("Digite o segundo número:"));

let resultado;

switch(operador){
    case'+':
    resultado = num1 + num2
    alert(`resultado: ${num1} + ${num2} = ${resultado}`)
    break;
    case'-':
    resultado = num1 - num2
    alert(`resultado: ${num1} - ${num2} = ${resultado}`)
    break;
    case'*':
    resultado = num1 * num2
    alert(`resultado: ${num1} * ${num2} = ${resultado}`)
    break;
    case'/':
    if(num2 === 0){
        alert("Erro: divisão por zero não é permitida!")
    }else{
        resultado = num1 / num2
        alert(`resultado: ${num1} / ${num2} = ${resultado}`)
    }
    break;

     default:
        alert("Operador inválido! Use apenas +, -, * ou /.");
}
