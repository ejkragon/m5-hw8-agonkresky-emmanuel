// Create an Array of at least 3 losing messages
var losingMessages = [
    'Sorry, not this one',
    'El Wrong-O',
    'Try Again!',
]

// Create variables to count wins and losses
var trackWins = 0
var trackLosses = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var trgtMessage = document.getElementById("message")
var trgtWins = document.getElementById("wins")
var trgtLosses = document.getElementById("losses")

// target all .box elements and attach a click event listener to each one using a loop

var clickBox = document.querySelectorAll(".boxes > .row > div.box")

// from Lee's slack msg:
// // [line above] to target all of your boxes to then loop through and attach handlers

// clickBox.addEventListener("click")
function boxclickHandler(event) {
    var clickBox = parseInt(box.textContent)
    console.log(clickBox)
    var winningBox = Math.floor((Math.random() * 3) + 1);
    console.log(winningBox)
    if (clickBox === winningBox) {
        console.log('equal')
        document.getElementById("message").innerHTML = "Congratulations,you won!"
        trackWins += 1
        document.getElementById("wins").innerHTML = "WINS: " + trackWins
    } else {
        console.log('not equal')
        document.getElementById("message").innerHTML = losingMessages[Math.floor((Math.random() * 3))] 
        // why don't i need the +1 above?
        trackLosses += 1
        document.getElementById("losses").innerHTML = "LOSSES: " + trackLosses
    }
}

for (var i = 0; i < clickBox.length; i++) {
    var box = clickBox[i]
    box.onclick = boxclickHandler
}



// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable



// create a random number between 1-3 and store it to a variable
// This number will represent the winning box



// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
 