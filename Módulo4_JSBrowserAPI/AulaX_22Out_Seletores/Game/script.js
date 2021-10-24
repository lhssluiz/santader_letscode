// setar as condições iniciais
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');




//condições iniciais
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const scores = [0,0];
let playing = true;

const swithPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
/*         current0El.textContent = 0; */
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
    // 1. Gerar um número randômico para o dado

    const dice = Math.trunc(Math.random() * 6) +1;
    console.log(dice);
    // 2. Mostrar o dado

    diceEl.classList.remove('hidden');
        //2.1 Como mudar um atributo do próprio html
        diceEl.src = `dice-${dice}.png`;

    // 3. Check se o número do dado é 1. Se for, mudar parao próximo

    if (dice !== 1) {
        //Adicionar o dado a pontuação atual
        currentScore += dice;

        current0El.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        swithPlayer();
        
        
/*         document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
//         current0El.textContent = 0; 
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        // toggle nega através de uma ação.
        // Se tem eele tira, se não tem ele adiciona
*/
    
    }

});

btnHold.addEventListener('click',function(){
    //1. Adicionar o score atual para o score do player qu tá ativo
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check se o player score >=100

    if ( scores[activePlayer] >= 20) {
        //acaba o jogo
        diceEl.classList.add('hidden');
    } else {
        swithPlayer();
    }

} )