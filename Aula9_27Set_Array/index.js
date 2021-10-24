//Modo de passar os valores do array para variáveis
// Desestruturação de array
const arr = [1, 2 ,3];
const [x, y, z] = arr;
console.log(x);
console.log(y);
console.log(z);




//OPERADOR SPREAD: Pega só os elementos do Array e 
// adiciona no outro array

const arr2 = [7,8,9];
const badNewArray = [1, 2, arr2[0], arr2[1], arr2[2]];
const newArray = [1, 2, ...arr2];
console.log(newArray);

// TASK
const menuRestaurante = ["Macarrão", "Sopa", "Sushi", "Pao"];
console.log(menuRestaurante);
const newMenu = [...menuRestaurante, "Pizza"];

const otherMenu = [...menuRestaurante, ...newMenu];
console.log(otherMenu);

// Exemplo Real
const fazerMacarrao = function (ingrediente1, ingrediente2, 
    ingrediente3) {
        console.log(`Macarrão com os ingredientes: ${ingrediente1}, 
        ${ingrediente2} e ${ingrediente3}`);
    
}

const ingredientes = [
    prompt("Vamos fazer Macarrão! Ingrediente 1?"), 
    prompt("Vamos fazer Macarrão! Ingrediente 2?"),
    prompt("Vamos fazer Macarrão! Ingrediente 3?")];

console.log(ingredientes);

// PARÂMETRO REST E O PADRÃO REST

