// Create an Array of at least 3 losing messages
var losingMessages = [
    'Sorry, not this one',
    'El Wrong-O',
    'Try Again!',
]

// Create variables to count wins and losses
var numWins = "wins"
var numLosses = "losses"

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var message = document.getElementById("message")
var wins = document.getElementById("wins")
var losses = document.getElementById("losses")

// target all .box elements and attach a click event listener to each one using a loop
var bxs = document.querySelectorAll('.boxes > box')

function clickHandler(event) {
    console.log(event.target.textContent)
}

for (let i=0; i < bxs.length; i++) {
    var box = bxs[i]
    box.onclick = clickHandler
}



// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
bxs.forEach(function(box) {
    box.onclick = clickHandler
})

var box1 = document.getElementById("box-1")

for (let i=0; i < box1.length; i++) {
    var box1 = bxs[i]
    box1.onclick = clickHandler
}

var box2 = document.getElementById("box-2")

for (let i=0; i < box2.length; i++) {
    var box2 = bxs[i]
    box2.onclick = clickHandler
}

var box3 = document.getElementById("box-3")

for (let i=0; i < box3.length; i++) {
    var box3 = bxs[i]
    box3.onclick = clickHandler
}


// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

var ranNum = math.floor(math.random() * 4);

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
 
var winsP = document.createElement('p')
winsP.textContent = "WINS:"
document.querySelector('#wins').appendChild(newP)

var lossesP = document.createElement('p')
winsP.textContent = "LOSSES:"
document.querySelector('#loses').appendChild(newP)

if (ranNum = box1) {
    document.getElementById("message").innerHTML = "Congratulations, you won! Care to see if you can do it again?"
    wins = wins += 1
} else {
    document.getElementById("message").innerHTML = losingMessages[ranNum]
    losses = losses += 1
}


// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses