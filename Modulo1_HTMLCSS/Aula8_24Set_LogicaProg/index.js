const age = 15;

age >= 18 
    ? console.log("Eu posso beber álcool") 
    : console.log("Eu não posso beber álcool");

const drink = age >= 18 ? "Eu posso beber álcool" : "Eu gosto de beber água";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "Eu posso beber álcool";
} else {
    drink2 = "Eu gosto de beber água"
}

console.log(`Eu gosto de beber ${drink2}`);

// TASK Steven

/* const gorjeta;
const conta = 250;

conta >= 50 && conta <= 300 ? gorjeta = conta * 0.15 : gorjeta = conta * 0.15;
console.log(conta);
console.log(gorjeta);
console.log(conta + gorjeta);
 */
// FUNÇÕES

const calcAverage = (a,b,c) => (a+b+c)/3;
const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2* avgKoalas) {
        console.log(`Dolphins vencem! ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2* avgDolphins) {
        console.log(`Koalas vencem! ${avgKoalas} vs. ${avgDolphins}`);
    } else{
        console.log("Nenhum vence!");
    }
};

// INTRODUÇÃO AOS ARRAYS

dolphinScore = [44, 23, 71];
koalaScore = [65,54,49];

// Steven ainda está construindo sua calculadora de gorjeta usando
// as mesmas regras de antes: Gorjeta de 15% da conta se o valor da conta for entre
// 50 e 300, e se o valor for diferente, a gorjeta é 20%.

// Escreva uma função 'calcGorjeta' que receba qualquer valor de conta como um input
// e retorne a gorjeta correspondente, calculada baseada nas regras acima
// (você pode checar o código da primeira calculadora de gorjeta se você precisar).
// Teste a função usando o valor de conta de 100.

// Agora vamos usar arrays! Crie um Array 'contas' contendo o dado de teste abaixo.
// Crie um array 'gorjetas' contendo o valor da gorjeta para cada conta,
// calculado pela função que você criou antes.

// BONUS: Crie um array 'total' contendo os valores total, a conta + gorjeta.
// TEST DATA: 125, 555 e 44.

/* const calcGorjeta2 = (conta1) => {
     const gorjeta1 = 0;
    conta1 >= 50 && conta1 <= 300 ? gorjeta1 = conta1 * 0.15 : gorjeta1 = conta1 * 0.15;
    return gorjeta1;
} */


const calcGorjeta = function (conta) {
    return conta >=50 && conta <= 300 ? conta * 0.15 : conta * 0.2;    
}

const contas = [125, 555, 44];

const gorjetas = [
    calcGorjeta(contas[0]),
    calcGorjeta(contas[1]),
    calcGorjeta(contas[2])
]

console.log(contas);
console.log(gorjetas);

const totals = [
    gorjetas[0] + contas[0],
    gorjetas[1] + contas[1],
    gorjetas[2] + contas[2],
];

// MATRIZES

const tabela = [
    [1,2,null],
    [4,null,6],
    [7,8,9]
];

