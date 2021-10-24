
// _____ INÍCIIOOOOO ___
// Seleciona e manipula elementos HTML >>
// document.querySelector 

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Número correto';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;
//innerHTML > pega tudo de html dento daquela classe

document.querySelector('.guess').value = 23; */
//________ FIIIIM __________

// _____ INÍCIOOO _______
// Lidar com eventos Click >>

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
} //Todo lugar que tem a mensagem, chamar essa função, com a mensagem como parâmetro

let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    //O método addEvenListener, fica atento aos eventos
    // que ocorrerem no botão
    // Ele precisa de dois argumentos:
    // 1. O que ele vai pegar nessa escuta
    // 2. A função de resposta a essa escuta
    // o que será feito
/*     document.querySelector('.message').textContent = 'Número correto';
 */
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) { // 0 é falsy value
        document.querySelector('.message').textContent = 'Nenhum número';
    
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Número correto';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            document.querySelector('.highscore').textContent = highscore;
        }
    
    } else if (guess > secretNumber) {
        if (score > 1)  {
            document.querySelector('.message').textContent = 'Muito alto';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Você perdeu o jogo';
            document.querySelector('.score').textContent = 0;
        }
    
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Muito baixo';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Você perdeu o jogo';
            document.querySelector('.score').textContent = 0;
        }
    }

});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = 'Comece a advinhar';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; //value é o valor do campo
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

//Lembrar que classes separadas por espaço
// significa que são duas classes diferentes

/* Para substituir o if else gigante lá em cima

else if {guess !== secretNumber} {
    if (secretNumber > ) {

    } else {

    }
}

*/