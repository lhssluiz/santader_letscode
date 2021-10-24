/*
1. Funcções puras: 
- Não tem efeitos colaterais
- Mesmo input -> mesmo output
*/

// EX: FUNÇÃO IMPURA ____
const array = [1,2,3];

function mutateArray (arr) {
    arr.pop();
}

function mutateArray2(arr) {
    arr.forEach(item => {
        arr.push(1)
    });
}

console.log(mutateArray2(array));
console.log(mutateArray(array)); // undefined
console.log(array);



function b() {
    console.log("oi");
}
b();

// _________ FIM FUNÇÃO IMPURA

//EX: FUNÇÕES PURAS _________

function a(num) {
    if (num > 5) {
        return num;
    } else {
        return num;
    }
}

a(4);

function b2(num1, num2) {
    return num1 + num2;
}

b2(3,4);
b2(3,4);
// Referential transparency
// Com o mesmo input, sempre se tem o mesmo output

function c(num) {
    return num*2;
}

console.log(c(7));

// ______ FIM FUNÇÃO PURA 

/* Como escrever uma função perfeita
1. A função faz uma coisa só
2. A função retorna algo (return)
3. A função deve ser pura
4. Não deve compartilhar estado (
    algo de fora da função, a não ser que seja
    constante
)
5. Utilizar imutabilidade
    // nunca modificar o estado global
    (variáveis globais)
6. Deve ser viável compor
7. Previsível
*/

// _______________________________

// IMPERATIVA
for (let i=0; i<5; i++) {
    console.log(i);
}
    // Você escreve mais próximo da linguagem
    // do computador

// DECALARATIVA
[1,2,3].forEach(item => console.log(item));
    // Você utiliza funções mais prontas

// _______________________________


// 3. Imutabilidade
// Não mudar os dados
// poo:  clases que podemos mudar propriedade 'nome';
// fp: não muda o estado, cópias do estado e
// retorna um novo estado toda vez

const obj = {name: "Larissa"};
//console.log(obj);

function clone(obj) {
    return {...obj}; // isso é uma função pura
}

// obj.name = 'Eduarda'; // mudando o estado
// console.log(obj);

function updateName(obj){
    const obj2 = clone(obj);
    obj2.name = 'Eduarda';

    return obj2;
}

updateName(obj);
console.log(obj);

const updateObj = updateName(obj);
console.log(updateObj);

// 4. HighOrderFunctions
// Funcções que recebem e retornam funções
// como resultado
// ou os dois

const hof = () => () => 5;
console.log(hof());
console.log(hof()());

const hof2 = (fn) => fn(5);
hof2(function(x){
    return x;
})

// CLOSURE
// Para criar uma closure, 
// você coloca uma função dentro de outra
// e expõe essa função interna, retornando ela
// é como se tivesse uma memória

// EX CLOSURE
// Esse é um modo de modificar um estado

const closure = function(){ // Essa função é impura
    let count = 0;

    return function incremento(){
        count++;
        return count;
    }
}

console.log(closure());
const incrementoFn = closure();
console.log(incrementoFn());


const closure2 = function(){ //Essa função é limpa
    let count = 55;

    return function getCounter(){
        return count;
    }
}

const getCounter = closure2();
console.log(getCounter());
console.log(getCounter());
console.log(getCounter());



/*
Curry
Aplicação parcial
Funções puras
Referential transparency
compose
pipe
Funções parciais
Composição de funçõe
*/