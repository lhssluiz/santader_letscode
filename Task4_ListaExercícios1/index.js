
let a = 5;
const b = 10;
let c = 2;

a = 6;

const d = (a + b)/c;

console.log(d);

// _________

const volumeAgua = 1.2 * 3 * 5;
const produtoMililitros = volumeAgua * 1.5;
console.log(produtoMililitros); // 27ml

const qualquer = '1' + 2 - 3 + parseInt('10') + '5' - 2 + '3'; //1933
console.log(qualquer);

const qualquer1 = '1' + 2 - 3 + 10 + '5' - 2 + '3'; //1933
console.log(qualquer1);

/// -------

const weekDays = [
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
    "domingo",
  ];

  console.log(weekDays[0])

  //// LISTAR COMIDAS
/*
Escreva uma função nomeada listarComidas que receba esses dois arrays 
(frutas e vegetais) e implemente as operações solicitadas abaixo.

x a) Remova o primeiro item do array de vegetais
x b) Remova o último item do array de frutas
x c) Use um método para encontrar a posição de Mamão no array de frutas
x d) Adicione o número encontrado na letra c no começo do array de frutas
x e) Use a propriedade length para encontrar o tamanho do array de frutas
x f) Adicione o número encontrado na letra e no final do array de frutas.
x g) Junte esses dois arrays em um só. Vegetais primeiro. Chame o novo array de comidas.
x h) Atribua 3 elementos do seu novo array a outro array chamado melhoresComidas começando do index 2.
x i) Verifique com um método se o elemento "Maçã" existe no array melhoresComidas. 
x Se não existe, mostre no console a mensagem "Maçã não é uma das melhores comidas".
x Se existe, mostre no console: "Maçã é uma das melhores comidas".
x j) Inverta o array melhoresComidas.
k) Retorne o array melhoresComidas na função.
*/

const frutas = ["Maçã", "Mamão", "Melão", "Banana"];
const vegetais = ["Cenoura", "Couve", "Brócolis", "Alface"];
const melhoresComidas = [];
/* 
function listarComidas(arrVegetais, arrFrutas ) {
    arrVegetais.shift();
    arrFrutas.pop();
    posicaoMamao = arrFrutas.indexOf("Mamão");
    arrFrutas.unshift(posicaoMamao);
    tamanhoFrutas = arrFrutas.length;
    arrFrutas.push(tamanhoFrutas);
    comidas = [...arrVegetais,...arrFrutas];
    
    for (let i = 2; i < 5; i++) {
        melhoresComidas = comidas[i];
    }
    
    posicaoMaca = melhoresComidas.indexOf("Maça");
    if (posicaoMaca < 0) {
        console.log("Maçã não é uma das melhores comidas");
    } else {
        console.log("Maçã é uma das melhores comidas");
    };
    
    melhoresComidas.reverse;

    return melhoresComidas;
    
}

const chamadaFuncao = listarComidas(vegetais, frutas); */

/// QUESTÃO ACIMA COM CONSOLE.LOG()

function listarComidas(arrVegetais, arrFrutas ) {
    arrVegetais.shift();
    console.log(arrVegetais); //1
    arrFrutas.pop();
    console.log(arrFrutas); //2
    posicaoMamao = arrFrutas.indexOf("Mamão");
    console.log(posicaoMamao); //3
    arrFrutas.unshift(posicaoMamao);
    console.log(arrFrutas); //4
    tamanhoFrutas = arrFrutas.length;
    arrFrutas.push(tamanhoFrutas);
    console.log(arrFrutas); // 5
    comidas = [...arrVegetais,...arrFrutas];
    console.log(comidas); //6
    
    for (let i = 2; i < 5; i++) {
        melhoresComidas.push(comidas[i]);
    }

    console.log(melhoresComidas); 
    
    posicaoMaca = melhoresComidas.indexOf("Maçã");
    if (posicaoMaca < 0) {
        console.log("Maçã não é uma das melhores comidas"); // 7
    } else {
        console.log("Maçã é uma das melhores comidas"); // 7
    };
    
    console.log(melhoresComidas); // 8
    melhoresComidas.reverse;
    console.log(melhoresComidas); // 9

    return melhoresComidas;
    
}

const chamadaFuncao = listarComidas(vegetais, frutas);

/// EXERCÍCIO 7

console.log("______________________")

const venda = {
    produto: "ventilador",
    marca: "Arno",
    loja: "Amazon",
    quantidade: 5,
    preco: 500,
    calcDesconto: function () {
        if (this.preco > 450) {
            return this.hasDesconto = true;
        } else {
            return this.hasDesconto = false;
        }
    },

    calcularValorFinal: function () {
        if (this.hasDesconto == true) {
            this.precoFinal = this.preco - this.preco * 0.10;
            return this.precoFinal;
        } else {
            this.precoFinal = this.preco;
            return this.precoFinal;
        }
    }
};

venda.calcDesconto();
venda.calcularValorFinal();

console.log(`[${venda.loja}] - [${venda.produto} ${venda.marca}] - [${venda.quantidade}] - [ Valor total da Venda = ${venda.precoFinal}]`);

/// EXERCÍCIO 8

console.log("______________________")

const alunos = [
    ["João", 30, "Python", "Data Science"],
    ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
    ["Pedro", 40, "Java", "Mobile"],
    ["Luciana", 25, "C#", "Web Full Stack - Backend"]
]

console.log(...alunos[3]);
console.log(alunos[1][1]);
alunos[2][3] = "Data Science";
console.log(alunos[2][3]);

/// EXERCÍCIO 9

console.log("______________________")

const average = 8;

if (average >= 9) {
    console.log("Parabéns - você está na lista de alunos destaque do curso!");
} else {
    console.log("Desculpe, você não entrou na lista de alunos destaque");
}

/// EXERCÍCIO 10

console.log("______________________")


function atividadesSugeridas(temperatura) {
    if (temperatura >= 26) {
        console.log("A atividade indicada para essa temporatura é Natação");
    } else if (temperatura >= 15 && temperatura < 26) {
        console.log("A atividade indicada para essa temporatura é Tênis");
    } else if (temperatura >= 5 && temperatura < 15){
        console.log("A atividade indicada para essa temporatura é Golfe");
    } else {
        console.log("A atividade indicada para essa temporatura é Esqui");
    }
}

atividadesSugeridas(16);

/// EXERCÍCIO 11

console.log("______________________")

/* function somaNumeros(valor) {
    i = 0;
    aux = 0;
    final = 0;
    valor = prompt("Insira um valor maior que 50");
        
    if (valor > 50) {
        while (i <= valor) {
            final = i + aux;
            aux = final;
            i++;
        }
        return final;
    } else {
        return console.log("Você não adicinou um valor maior que 50 ")
    }
}

console.log(somaNumeros()); */

console.log("______________________")
console.log("______________________")

/* function geraTriangulo(n) {
    espacoEmBranco = " ";
    n = prompt("Insira a quantidade de Linhas: ");
    let decrescimento = (n-1); 

    for (i=1; i <= n; i++) {
        espacoEmBranco = espacoEmBranco.trim();
        espacoEmBranco = ' '.repeat(decrescimento) + espacoEmBranco + (i > 1 ? ' ' : '') + '*';
        console.log(espacoEmBranco);
        decrescimento--;
    } 
    
}

 console.log(geraTriangulo()); */

console.log("______________________")

/* function geraIsoceles(w) {
    w = prompt("Insira a quantidade de Linhas: ");
    for (i = 1; i < w; i++){


    }

    
} */

/* function numerosPares(pArray) {
    i=0;
    pArray = [1,2,3,4,5,6,7,8,9,10];
    let newArray = [];
    i=0;
    while (i < pArray.length){
        if (pArray[i] % 2 === 0){
            console.log(pArray[i]);
        }
    i++;
    }
}
console.log(numerosPares()); */

// EX: 14

/* function turnUpperCase(letra, palavra) {
    palavra = prompt("Digite uma palavra: ");
    letra = prompt("Digite a letra que quer mudar na palavra: ");
    let newArray = [...palavra];

    for (i=0; i < palavra.length; i++){
        if (letra == newArray[i]){
            newArray[i] = newArray[i].toUpperCase();
        }
    }
    return console.log(...newArray);
}

teste = turnUpperCase(); */


function mostraMaiorMenorTemperatura(umArray) {
    let maior = 0;
    let menor = 0;
    
    for (i=0; i < umArray.length; i++) {
        if (umArray[i] > umArray[i+1]) maior = umArray[i+1];
    }
    
    for (i=0; i < umArray.length; i++) {
        if (umArray[i] < umArray[i+1]) menor = umArray[i];
    }
    
    return console.log(`A maior temperatura é: ${maior} e a menor temperatura é  ${menor}. `);
}

arrayDeTemperaturas = [];
quantidadeDeTemperatura = prompt("Quantas temperaturas deseja inserir? ");

for (i = 0; i < quantidadeDeTemperatura; i++){
    auxiliar = prompt(`Indique a temperatura ${i+1}: `);
    auxiliar = parseInt(auxiliar);
    arrayDeTemperaturas.push(auxiliar);
    console.log(arrayDeTemperaturas);
}

teste = mostraMaiorMenorTemperatura(arrayDeTemperaturas);