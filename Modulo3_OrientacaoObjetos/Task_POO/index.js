// QUESTÃO 1

/* class Dog {
    constructor (name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    }

    bark(){
        console.log('Au au');
    }

    getSummary(){
        console.log(` O cachorro ${this.name} possui ${this.age} anos e é um ${this.breed}`);
    }

}

const viraLata = new Dog('Carimbo', 12, 'Vira-Lata');
const puddle = new Dog('Docinho', 2, 'Puddle');

viraLata.bark();
puddle.getSummary(); */

// QUESTÃO 2

class Animal {
    constructor (especie, quantidade_patas, tamanho_cm) {
        this.especie = especie;
        this.quantidade_patas = quantidade_patas;
        this.tamanho_cm = tamanho_cm;
    }

    getSummary(){
        console.log(`Este animal é da espécie ${this.especie} possui ${this.quantidade_patas} e tem ${this.tamanho} centímetros`);
    }

    testeDePorte(){
        this.tamanho_cm > 100 ? console.log('Este animal é de grande porte') : console.log('Este animal é de pequeno porte');

    }

    printEspecie () {
        console.log(`A espécie ${this.especie} é muito interessante`);
    }

}

class Dog extends Animal {
    constructor (especie, quantidade_patas, tamanho_cm, nome) {
        super(especie, quantidade_patas, tamanho_cm);
        this.nome = nome;
    }

    getSummary (){
        console.log(`Este é o ${this.nome} da espécie ${this.especie} possui ${this.quantidade_patas} e tem ${this.tamanho} centímetros`);

    }

}

class Cat extends Animal {
    constructor (especie, quantidade_patas, tamanho_cm, nome) {
        super(especie, quantidade_patas, tamanho_cm);
        this.nome = nome;
    }

    getSummary (){
        console.log(`Este é o ${this.nome} da espécie ${this.especie} possui ${this.quantidade_patas} e tem ${this.tamanho} centímetros`);

    }
    
}

const gato = new Cat('Gato', 4,30,'Bolota');
gato.getSummary();
gato.printEspecie();
gato.testeDePorte();

const cachorro = new Dog('Cachorro', 4,30,'Nino');
cachorro.getSummary();
cachorro.printEspecie();
cachorro.testeDePorte();

/*
POLIMORFISMO: Polimorfismo é quando queremos que os filhos se comportem diferente dos seus pais, ou seja, temos os mesmo métodos, com os mesmos nomes mas com diferentes comportamentos.
A explicação é da internet, mas coloquei por achar muito boa a simplicidade da frase.
*/

class Account {
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency; 
      this.pin = pin; 
      this.movements = [];
      this.locale = navigator.language;
  
      console.log(`Obrigada por abrir sua conta, ${owner}`);
    }
  
    deposit(val) {
      this.movements.push(val);
    }
  
    withdraw(val) {
      this.deposit(-val);
    }
  
    approveLoan(val) {
      return true;
    }
  
    requestLoan(val) {
      if (this.approveLoan(val)) {
        this.deposit(val);
        console.log(`Emprestimo aprovado`);
      }
    }
  }

  /* ========================================= */

  class Admin {
      #numeroTelefone;
      #senha;

    constructor (userName, senha,numeroTelefone){
        this.userName = userName;
        this.#senha = senha;
        this.#numeroTelefone = numeroTelefone;

    }

    editarInformacoesAnimais(){
        console.log('Eu editei as informações dos animais');
    }

    #adicionarExcluirAnimais (){
        console.log('Eu consigo adicionar e excluir animais');
    }
  }

  class User extends Admin {
      constructor (userName, senha){
          super (userName);
          this.senha = senha;
      }
  }

  const usuario = new User('lhss',1234);
  usuario.editarInformacoesAnimais();