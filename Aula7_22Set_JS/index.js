const pesoMark = 78;
const alturaMark = 1.69;
const pesoJohn = 92;
const alturaJohn = 1.95;

const IMCMark = pesoMark/(alturaMark * alturaMark);
const IMCJohn = pesoJohn / (alturaJohn * alturaJohn);
const markMaiorIMC = IMCMark > IMCJohn;

console.log("IMC Marck: " + IMCMark);
console.log("IMC John: "  + IMCJohn);
console.log(markMaiorIMC);

// CONDICIONAIS IF/ELSE

const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log("Larissa pode tirar a carteira de motorista");
} else {
    const yearsLeft = 18 - age;
    console.log(`Larissa é muito nova. Espere mais ${yearsLeft} anos:)`);
}

const birthYear = 1993;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// EXEMPLO LARISSA

if (markMaiorIMC > IMCJohn) {
    console.log(`O IMC de Mark ${IMCMark} é maior que o de John ${IMCJohn.toFixed(2)}`);
} else {
    console.log(`O IMC de Mark ${IMCMark} não é maior que o de John ${IMCJohn.toFixed(2)}`);
}

// Conversão: É quando manualmente, nós trocamos o tipo da variável
// Coerção: é quando o Javascript converter automaticamente
// os tipos por detrás dos panos

const inputYear = "1991";
console.log(inputYear + 18);

// CONVERSÃO DE TIPOS
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(String(IMCMark.toFixed(1)));

// COERÇÃO DE TIPO

console.log("Eu tenho " + 28 + " anos");
console.log("Eu tenho " + "28" + " anos");

// Operadores de igualdade == vs. ===

const age2 = 18;
if (age2 === 18) console.log('Você virou adulto'); //Quando só tem 1 linha não precisa de chaves
if (age2 == 18) console.log('Você virou adulto'); //Quando só tem 1 linha não precisa de chaves

/* A boa prática é sempre utilizar o === e não o == porque o primeiro
e não converte automaticamente, ou seja, não é coercitivo. Com isto ele
só comparar o valor*/ 

const numFavorito = prompt("Qual o seu número favorito?");
console.log(numFavorito);

/// TESTE PARA OPERADORES

const mediaDolphins = (110 + 108 + 89)/3
const mediaKoalas = (110 + 108 + 89)/3

if (mediaDolphins > mediaKoalas) {
    console.log(`Os Dolphins com ${mediaDolphins.toFixed(2)} venceram os Koalas!!`)
} else {
    console.log(`Os Koalas com ${mediaKoalas} venceram os Dolphins!!`)
}

// BONUS

if (mediaDolphins > mediaKoalas && mediaDolphins > 100) {
    console.log(`Os Dolphins com ${mediaDolphins.toFixed(2)} venceram os Koalas!!`);
} else if (mediaKoalas > mediaDolphins && mediaKoalas > 100) {
    console.log(`Os Koalas com ${mediaKoalas} venceram os Dolphins!!`);
} else if (mediaKoalas === mediaDolphins && mediaDolphins > 100 && mediaKoalas > 100) {
    console.log(`Houve empate porque a média foi igual a:  ${mediaDolphins.toFixed(2)}`);
} else {
    console.log(`Não houveram vencedores já que os requisitos não são atingidos`);
}

// SWITCH

