let container = document.querySelector('.container');
container.style.display = 'none';

let gameTime = 60 ;

let start = document.querySelector('#start') ;

let userInput = document.querySelector('#user-input') ;

let answer = 8 ;

let marks = 0 ;

let firstNumber , secondNumber , operator ;

const oper = ['+' , '-' , '*' , '/' , '%'] ;

let firstNumberUI = document.querySelector('#firstNumberUI') ;
let secondNumberUI = document.querySelector('#secondNumberUI') ;
let operatorUI = document.querySelector('#operatorUI') ;

let finalScore = document.querySelector('#finalScore'); 

let scoreUI = document.querySelector('#score') ;

let response = document.querySelector('#response') ;

start.addEventListener('click',function(){

    finalScore.style.display = 'none' ;
    container.style.display = 'block';
    start.style.display = 'none';
    

    timer ();

})

userInput.addEventListener('keypress',function(e){
    if(e.which === 13){
        // Evaluate the answer
        if(answer === Number(userInput.value)){
            // update score
            marks = marks + 2;
            response.innerHTML = `<h2 style="color:#0f9b0f;font-weight: 600;font-size: 4vw;">Correct</h2>` ;
        }else{
            marks = marks + 0 ;
            response.innerHTML = `<h2 style="color:#FF0000;font-weight: 600;font-size: 4vw;">Wrong</h2>` ;
        }
        userInput.value = '' ;
        // Generate new question
        firstNumber = Math.floor(Math.random() * 100) ;
        secondNumber = Math.floor(Math.random() * 100) ;
        operator = oper[Math.floor(Math.random() * oper.length)] ;

        firstNumberUI.textContent = firstNumber ;
        secondNumberUI.textContent = secondNumber ;
        operatorUI.textContent = operator ;

        // Update the answer
        if(operator === '+'){
            answer = firstNumber + secondNumber ;
        }else if(operator === '-'){
            answer = firstNumber - secondNumber ;
        }else if(operator === '*'){
            answer = firstNumber * secondNumber ;
        }else if(operator === '/'){
            answer = firstNumber / secondNumber ;
        }else{
            answer = firstNumber % secondNumber ;
        }

        // Update the score
        scoreUI.textContent = marks ;
    }
})

function timer (){

    let x = setInterval(function(){
        if (time.textContent > 0){
            let newTime = time.textContent - 1 ;
            time.textContent = newTime ;
        }else{
            clearInterval (x) ;

            // Close the container
            container.style.display = 'none';

            // reset the timer
            time.textContent = gameTime ;

            // Show the start button
            start.style.display = 'block';

            // Display the Score
            finalScore.style.display = 'block' ;
            finalScore.innerHTML = `<h1 style="font-size:7vw">You scored ${marks}</h1>`

            // Reset the Score
            marks = 0 ;
            response.innerHTML = '' ;
        }
    },1000)
}