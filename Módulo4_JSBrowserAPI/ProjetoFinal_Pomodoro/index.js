/*
This application was developed based on the following
reference: https://betterprogramming.pub/creating-a-simple-pomodoro-web-app-a-beginners-guide-a30f98649977

- It was used the complete HTML from the reference with small changes in the names of the items
- It was deveopled a original CSS
- Also the .js was partially original, using some ideas from the reference. I searched by purpose to make it different ans mainly to use the content given in the course
*/

// # HIDE
const mainHeader = document.querySelector('.main-header');
const imagemFundo1 = document.querySelector('#imagem-fundo-init');
const topText1 = document.querySelector('#top-text1')
const description = document.querySelector('#description');
const countdownContainer = document.querySelector('#countdown-container');
const selectionContainer = document.querySelector('#selection-container');

// # SHOW
const topText2 = document.querySelector('#top-text2');
const imagemFundo2 = document.querySelector('#imagem-fundo-end');
const cancelContainer = document.querySelector('#cancel-container');
const btnGroup = document.querySelectorAll('.minute-button');
const btnCancel = document.querySelector('#cancel-button');
const textTakeBreak = document.querySelector('#descansar');


btnGroup.forEach( btn => { 
    btn.addEventListener('mouseover', function(){
        btn.style.background = "#dfe6e9";
        btn.style.borderStyle = "solid"
        btn.style.borderColor = "#ff4757";
   
        setTimeout(function(){
           btn.style.background = "";
           btn.style.borderColor = "";
           btn.style.borderStyle = ""
       }, 500);
    })
})

btnGroup.forEach( btn => { 
    btn.addEventListener('click', function(){
        hideElements(imagemFundo1, topText1, description,selectionContainer);
        showElements(topText2,imagemFundo2,cancelContainer,countdownContainer);

        let minutesChosen = listener();
        console.log(minutesChosen);
        minutesChosen = parseInt(minutesChosen);
        startCountdown(minutesChosen);
    })
})

function listener (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
    text = target.textContent || target.innerText;
    return text;
}

function hideElements(...elements){
    elements.forEach((element) => (element.hidden = true))
}

function showElements(...elements) {
    elements.forEach((element) => (element.hidden = false))
}

function startCountdown(minutesChosen) {

    let totalTimeInSeconds = minutesChosen * 60;
  
    const setCountDownInterval = setInterval(function () {
      let displaySeconds = totalTimeInSeconds % 60;
      let displayMinutes = Math.floor(totalTimeInSeconds / 60);

      displayMinutes =
        displayMinutes < 10 ? "0" + displayMinutes : displayMinutes;

      displaySeconds =
        displaySeconds < 10 ? "0" + displaySeconds : displaySeconds;
  
      countdownContainer.innerHTML = `${displayMinutes} : ${displaySeconds}`;
        
      totalTimeInSeconds--;

        if (totalTimeInSeconds < 0) {
            clearInterval(setCountDownInterval);
            takeBreak();
        }
  
        btnCancel.addEventListener("click", (evt) => {
            hideElements(topText2,imagemFundo2,cancelContainer,countdownContainer,textTakeBreak);
            showElements(imagemFundo1, topText1, description,selectionContainer);
            clearInterval(setCountDownInterval);
        });
    }, 1000);
}

function takeBreak() {
    hideElements(countdownContainer,topText2);
    showElements(textTakeBreak);
    /* topText2.textContent = "Descanse por pelo menos 5 minutos"; */
}


/*
##### REFERENCE:
- Mouse Over: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/mouseover_event
- Border Style: https://www.w3schools.com/jsref/prop_style_border.asp
- Rest Parameter: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
- Hidden Attribute: https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute
- Window.event (deprecated): https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document
- clarInterval: https://www.w3schools.com/jsref/met_win_clearinterval.asp
*/