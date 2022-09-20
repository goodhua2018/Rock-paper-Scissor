var choices = ['rock', 'paper', 'scissor'];
var userText = document.querySelector('.userText');
var computerText = document.querySelector('.computerText');
var pElement = document.querySelector('.text');
var buttons = document.querySelectorAll('button');
var imgLeft = document.querySelector('.left');
    var imgRight = document.querySelector('.right');

var userChoice = '';
var computerChoice = '';
var winCount = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        imgLeft.classList.remove('show-animation')
        imgRight.classList.remove('show-animation')
        userChoice = choices[i];
        userText.textContent = "Your choice is: " + userChoice;
        computerChoose();
        compareChoice();  
        imgLeft.src = `./images/${userChoice}.jpg`
        imgRight.src = `./images/${computerChoice}.jpg`
        imgLeft.classList.add('show-animation')
        imgRight.classList.add('show-animation')

    })
}
function showImages () {
    
   
}

function computerChoose() {
    var randomIndex = Math.floor(Math.random() * 3 );
    computerChoice = choices[randomIndex];
    computerText.textContent = "The computer's choice is: " + computerChoice;
    
} 

function compareChoice(){
    if (computerChoice === userChoice) {
        pElement.innerHTML = "It's a tie. ";
    } else if (computerChoice === choices[0]){
        if(userChoice === choices[1]){
            pElement.innerHTML = "The player wins!" 
            winCount++;
        } else {
            pElement.innerHTML = "The computer wins!"
        }
    } else if (computerChoice === choices[1]) {
        if(userChoice === choices[0]) {
            pElement.innerHTML = "The computer wins!"
        } else {
            pElement.innerHTML = "The player wins!" 
            winCount++;
        }
    } else if (computerChoice === choices[2]) {
        if(userChoice === choices[1]){
            pElement.innerHTML = "The computer wins!"  
        }else{
            pElement.innerHTML = "The player wins!" 
            winCount++;
        }
    }
}
