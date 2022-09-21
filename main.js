var choices = ['rock', 'paper', 'scissor'];
var userText = document.querySelector('.userText');
var computerText = document.querySelector('.computerText');
var pElement = document.querySelector('.text');
var buttons = document.querySelectorAll('button');
var imgLeft = document.querySelector('.left');
    var imgRight = document.querySelector('.right');
var playAgain = document.querySelector('.play-again')

var userChoice = '';
var computerChoice = '';
var winCount = 0;


// buttons.forEach((button, index) => {
//     this.addEventListener('click', function() {
//         userChoice = choices[index];
//         userText.textContent = "Your choice is: " + userChoice;
//         computerChoose();
//         compareChoice();  
//         this.classList.add('button-clicked')
//         imgLeft.src = `./images/${userChoice}.jpg`
//         imgRight.src = `./images/${computerChoice}.jpg`
//         imgLeft.classList.add('show-animation')
//         imgRight.classList.add('show-animation')
//         playAgain.textContent = 'Play Again'
//         playAgain.classList.add('show-play-again')
//         this.click.disabled = true;
//     })

// })

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        userChoice = choices[i];
        userText.textContent = "Your choice is: " + userChoice;
        computerChoose();
        compareChoice();  
        this.classList.add('button-clicked')
        imgLeft.src = `./images/${userChoice}.jpg`
        imgRight.src = `./images/${computerChoice}.jpg`
        imgLeft.classList.add('show-animation')
        imgRight.classList.add('show-animation')
        playAgain.textContent = 'Play Again'
        playAgain.classList.add('show-play-again')
        buttons[i].disabled = true;
        buttons.forEach((button) => {
            button.disabled = true;
        })
    })
}

playAgain.addEventListener('click', function () {
    imgLeft.classList.remove('show-animation');
    imgRight.classList.remove('show-animation');
    userText.textContent = '';
    computerText.textContent = '';
    pElement.textContent = '';
    playAgain.textContent = '';
    playAgain.classList.remove('show-play-again');
    imgLeft.src = './images/random1.gif';
    imgRight.src = './images/random2.gif';
    buttons.forEach((button) => {
        button.classList.remove('button-clicked');
        button.disabled = false;
    })


})

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
