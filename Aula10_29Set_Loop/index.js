const larissaObj = {
    firstname: "Larissa",
    lasName: "Queiroz",
    birthYear: 1993,
    friends: ["Natalia", "Camila", "Pedro"],
    hasCateiraMotorista: true,
    calcAge: function () {
        return 2021 - this.birthYear;        
    },

    calcAgeMelhor: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    }
};


const larissaObjMelhorado = {
    firstname: "Larissa",
    lasName: "Queiroz",
    birthYear: 1993,
    friends: ["Natalia", "Camila", "Pedro"],
    hasCateiraMotorista: true,
    calcAgeMelhor: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    }
};

console.log(larissaObjMelhorado.calcAgeMelhor());
larissaObj.calcAge();

// chamar o Melhorado
//Tem que chamar primeiro o método, para ser construído
console.log(larissaObjMelhorado.calcAgeMelhor());
console.log(larissaObjMelhorado.age);

//Task Aula
// Escreva um método dentro do objeto 
// que vai retornar a string;

//'Larissa tem 28 anos, é professora e possui carteira
// de motorista';

const larissaObjRetornaString = {
    firstname: "Larissa",
    lasName: "Queiroz",
    birthYear: 1993,
    friends: ["Natalia", "Camila", "Pedro"],
    hasCateiraMotorista: true,
    /* job = "professora",
     */
    calcAgeMelhor: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    retornaString: function () {
        return `${this.firstname} tem 
        ${this.age} anos e é ${this.job} além de 
        ${this.hasCateiraMotorista ? "possuir" : "não possuir" } 
        carteira de motorista`;  
    }
};

const mark = {
    nomeCompleto: "Mark Millher",
    peso: 78,
    altura: 1.69,

    calcIMC: function () {
        this.imc = this.peso/this.altura**2;
        return this.imc;
        /*a necessida de criar uma 
        propriedade é para o item guardar
        esse novo valor e não precisar
        ser calculado todas as vezes
        */
    }
}

const jonh = {
    nomeCompleto: "Jonh Smith",
    peso: 92,
    altura: 1.95,
    
    calcIMC: function () {
        this.imc = this.peso/this.altura**2;
        return this.imc;
        /*a necessida de criar uma 
        propriedade é para o item guardar
        esse novo valor e não precisar
        ser calculado todas as vezes
        */
    }
}

mark.calcIMC();
jonh.calcIMC();
console.log(mark.imc, jonh.imc);

if (mark.imc > jonh.imc) {
    console.log(`
    O IMC de ${mark.nomeCompleto} 
    (${mark.imc.toFixed(2)}) é maior do que o IMC
    de ${jonh.imc.toFixed(2)}`);
} else {
    console.log(`
    O IMC de ${jonh.nomeCompleto} 
    (${jonh.imc.toFixed(2)}) é maior do que o IMC
    de ${mark.imc.toFixed(2)}`);
}

// DESESTRUTURAÇÃO DE OBJETOS

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };

  const {name, openingHours, categories} = restaurant;
  console.log(name, openingHours, categories);

  const {
      name: restaurantName,
      openingHours: hours,
      categories: tags,
  } = restaurant;
  console.log(restaurantName, hours, tags);

  /*
LOOOOOOOOP
LOOOOOOOOP
LOOOOOOOOP

  */

for (let rep =1; rep <=10; rep++) {
    console.log(`Levantando pesos repetição ${rep}`);
}

  /*
LOOP EM ARRAYS, BREAK E CONTINUE
  */

const larissaArray = [
    "Larissa",
    "Queiroz",
    2021-1993,
    "professora",
    ["Pedro", "Natalia", "Camila"],
    "larissaqueiroz.p@gmail.com",
];

for (let i = 0; i < larissaArray.length; i++) {
    console.log(larissaArray);
}

const types = [];

for (let i = 0; i < larissaArray.length;i++){
    types.push(typeof larissaArray[i]);
}

console.log(types);

// Exemplo:

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length;i++){
    ages.push(2021 - years[i]);
}

console.log(ages);

// EXEMPLO DE CONTA COM LOOPS E ARRAYS

const contas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const gorjetas = [];
const totais = [];
let gorjeta;
let conta;

const calcGorjeta1 = function(conta) {
    return conta >= 50  && conta <= 300
    ? conta * 0.15 : conta * 0.2;
}

for (let i = 0; i<10; i++) {
    conta = contas[i];
    
   const gorjeta = calcGorjeta1(contas[i]);
   gorjetas.push(gorjeta);
   
   totais.push(gorjeta + contas[i]);
}

const calcMedia = function (arr) {
    let soma = 0;

    for (let i=0; i<arr.length; i++) {
        soma = soma + arr[i];
    }

    return soma / arr.length;
};

console.log(calcMedia(totais));

