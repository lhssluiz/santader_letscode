//
// Estudar
// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes
//
//Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros
//

const Carro = function (velocidade, marca) {
    this.velocidade = velocidade;
    this.marca = marca;
};

// Na função prototype construtora, eu tô adicionando
// um método
Carro.prototype.acelerar =  function () {
    this.velocidade +=10;
    console.log(`${this.marca} está em ${this.velocidade} km/h`);
};

Carro.prototype.frear = function () {
    this.velocidade -= 5;
    console.log(`${this.marca} está em ${this.velocidade}`);
    
};

const bmw = new Carro(120, "BMW");
bmw.acelerar();
bmw.acelerar();
bmw.frear();


// CLASSES

class PersonCL {
    constructor(firstnName, birthYear) {
        this.firstnName = firstnName;
        this.birthYear = birthYear;
    }

    // Esses métodos serão adicionados 
    // a propriedade.prototype
    calcAge(){
        console.log(2021 - this.birthYear);

    }

    greet() {
        console.log(`Oi ${this.firstnName}`);
    }
}


const larissa = new PersonCL("Larissa", 1993);
console.log(larissa);
larissa.calcAge();
larissa.greet();

console.log(larissa.__proto__ === PersonCL.prototype);


// CLASSES Object.create
// É utilizado para setar manualmente
// a propriedade prototype de um objeto

const PersonProto = {
    // Criar um objeto prototype
    calcAge() {
        console.log(2021 - this.birthYear);

    },

    init(firstnName, birthYear) {
        this.firstnName = firstnName;
        this.birthYear = birthYear;
    }
}

const eduarda = Object.create(PersonProto);
console.log(eduarda);
eduarda.nome = "Eduarda";
eduarda.birthYear = 2020;
eduarda.calcAge();

console.log(eduarda.__proto__);

/* 
Ele cria um novo objeto que 
está conectado a este prototype 
*/

// CODING CHALLENGE

class Carro2 {
    constructor (velocidade, marca) {
    this.velocidade = velocidade;
    this.marca = marca;
    }

    acelerar(){
        this.velocidade +=10;
        console.log(`${this.marca} está em ${this.velocidade} km/h`);
    }

    frear(){
        this.velocidade -= 5;
        console.log(`${this.marca} está em ${this.velocidade}`);

    }

}

const carrinho = new Carro2(120,"BMW");
console.log(carrinho);
carrinho.acelerar();
carrinho.acelerar();
carrinho.frear();

///


class Carro2 {
    constructor (velocidade, marca) {
    this.velocidade = velocidade;
    this.marca = marca;
    }

    acelerar(incremento){
        this.velocidade += incremento;
        console.log(`${this.marca} está em ${this.velocidade} km/h`);
    }

    frear(incremento){
        this.velocidade -= incremento;
        console.log(`${this.marca} está em ${this.velocidade}`);

    }

}

const carrinho = new Carro2(120,"BMW");
console.log(carrinho);
carrinho.acelerar(10);
carrinho.acelerar(10);
carrinho.frear(10);

// Herança entre "classes" usando funções construtoras

const Person = function (firstnName, birthYear) {
    this.firstnName = firstnName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
}

const Student = function (firstnName, birthYear, course) {
/*     this.firstnName = firstnName;
    this.birthYear = birthYear; 
*/
// Ao invés de repetir o código acima
// vamos herdar esses valores de person

    Person.call(this, firstnName, birthYear); //Herdar de Person
 // Person.call('danilo.obj{]}, "Danilo", 1990)  
    this.course = course;
}

//Conectando os prototypes
// Propriedade prototype de Studend = Objeto vazio em que o prototype desse objeto : Person.prototype
Student.prototype = Object.create(Person.prototype);
// cria um objeto VAZIO{} em que o prototype é o Person
// Student.prototype = Prototype Person{}


Student.prototype.introduce = function () {
    console.log(`Meu nome é ${this.firstnName} e eu estudo ${this.course}`);
};

const danilo = new Student("Danilo", 1990, "Web FullStack");
console.log(danilo);
danilo.introduce();
danilo.calcAge();

// HERANÇA ENTRE CLASSES //

class StudenCl extends PersonCl {
    constructor (firstnName, birthYear, course) {
        super (firstnName, birthYear) //Person.call
        this.course = course;
    }

    introduce () {
        console.log(`Meu nome é ${this.firstnName} e eu estudo ${this.course}`);
    }

    calcAge () {
        console.log(`Sobrecrevendo o calcAge de PersonCl (polimorfismo) ${2021 - this.birthYear}`);
    }

    // ENCAPSULAMENTO
    // Por algum motivo não quero dar acesso
    // ao método abaixo
    getGrades () {
        console.log(`Notas do estudante tal`);
    }
}

const andrews = new StudentCl("Andrews", 1996, "Ciência da Computação");
andrews.introduce();
andrews.calcAge();

// ENCAPSULAMENTO

class StudenCl extends PersonCl {
    #course; // Declarar métodos privados aqui 
    constructor (firstnName, birthYear, course) {
        super (firstnName, birthYear) //Person.call
        this.#course = course;
    }

    introduce () {
        console.log(`Meu nome é ${this.firstnName} e eu estudo ${this.#course}`);
    }

    calcAge () {
        console.log(`Sobrecrevendo o calcAge de PersonCl (polimorfismo) ${2021 - this.birthYear}`);
    }

    // ENCAPSULAMENTO
    // Por algum motivo não quero dar acesso
    // ao método abaixo
}

const andrews = new StudentCl("Andrews", 1996, "Ciência da Computação");
andrews.introduce();
andrews.calcAge();

