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
    // var x = clickBox
    console.log(clickBox)
    var winningBox = Math.floor((Math.random() * 3) + 1);
    // var winningBox = parseInt(winningBox)
    console.log(winningBox)
    if (clickBox === winningBox) {
        console.log('equal')
        document.getElementById("message").innerHTML = "Congratulations,you won!"
        trackWins += 1
        document.getElementById("wins").innerHTML = "WINS: " + trackWins
    } else {
        console.log('not equal')
        document.getElementById("message").innerHTML = losingMessages[Math.floor((Math.random() * 3))]
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
 







// var boxValue = event.target.textContent
// (box)
// var clickBox = box
// var boxChosen = parseInt(box)
// boxChosen = clickBox
// // var randomNumber = Math.floor((Math.random() * 3) + 1)
// function logBox() {
// var winningBox = randomNumber
// console.log(winningBox)
// }
// logBox()

// var winningBox = function() {
    // Math.floor((Math.random() * 3) + 1) 
    // console.log(winningBox)
// var randomBox = winningBox
// }












// if (clickBox === winningBox) {
    // // document.getElementById("message").innerHTML = "Congratulations, you won!"
    // trackWins += 1
// } else {
    // // document.getElementById("message").innerHTML = losingMessages[0]
    // trackLosses += 1
// }


// 
// 
// 
// // var trackWins = document.createElement("winsP")
// trackWins.textContent = trackWins
// 
// // var lossesText = document.getElementById("losses")
// lossesText.innerHTML = "LOSSES:"
// 
// // var trackLosses = document.createElement("lossesP")
// trackLosses.textContent = trackLosses
// 
// 
// 
// 
// document.createElement("winsP2")
// winsP2.textContent = "WINS:"
// document.body.appendChild(winsP2)
// document.getElementById("winsP2").innerHTML = trackWins
// 
// 
// document.createElement("winsP")
// winsP.textContent = "WINS:"
// document.getElementById("winsP").appendChild(winsP.textContent)
// document.createElement("winsP2")
// winsP2.textContent = "0"
// document.getElementById("winsP2").innerHTML = trackWins
// 
// 
// var lossesP = document.getElementById("losses")
// document.createElement("lossesP")
// lossesP.textContent = "LOSSES:"
// document.createElement("lossesP2")
// document.querySelector("lossesP").appendChild(lossesP2)
// document.getElementById("lossesP2").appendChild(trgtLosses)
// document.getElementById("trgtLosses").innerHTML = trackLosses


// if (ranBox = box2) {
    // document.getElementById("message").innerHTML = "Congratulations, you won!"
    // trackWins += 1
// } else {
    // document.getElementById("message").innerHTML = losingMessages
    // [random_interger]
    // trackLosses += 1
// }
// 
// if (ranBox = box3) {
    // document.getElementById("message").innerHTML = "Congratulations, you won!"
    // trackWins += 1
// } else {
    // document.getElementById("message").innerHTML = losingMessages
    // [random_interger]
    // trackLosses += 1
// }


// var trackWins = document.getElementById("wins")
// document.createElement("trackWins")
// trackWins.textContent = trackWins
// document.body.appendChild("trackWins")
// 
// var trackWins = document.getElementById("winsP")
// console.log
// document.body.appendChild("winsP")
// 
// var lossesP = document.getElementById("losses")
// lossesP.textContent = "LOSSES:"
// document.body.appendChild(lossesP)
// 
// var trackLosses = document.getElementById("lossesP")
// document.body.appendChild(trackLosses)


// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses




        // for (var i = 0; i < clickBox.length; i++) {
        // clickBox[i].onclick = clickHandler
        // }
        // var trgtBox1 = document.querySelector(".box-1")
        // 
        // function clickHandler(event) {
            // console.log(event.target.textContent)
        // }
        // for (var i = 0; i < trgtBox1.length; i++) {
            // var box1 = trgtBox1[i]
            // box1.onclick = clickHandler
        // }
        // var box1 = parseInt(box1, 1)
        // console.log(1)
        // 
        // 
        // var trgtBox2 = document.querySelector(".box-2")
        // function clickHandler(event) {
            // console.log(event.target.textContent)
        // }
        // for (var i = 0; i < trgtBox2.length; i++) {
            // var box2 = trgtBox2[i]
            // box2.onclick = clickHandler
        // }
        // var box2 = parseInt(box2, 2)
        // console.log(2)
        // 
        // 
        // var trgtBox3 = document.querySelector(".box-3")
        // function clickHandler(event) {
            // console.log(event.target.textContent)
        // }
        // for (var i = 0; i < trgtBox3.length; i++) {
            // var box3 = trgtBox3[i]
            // box3.onclick = clickHandler
        // }
        // var box3 = parseInt(box3, 3)
        // console.log(3);

        // var trgtBox1 = document.querySelector("box-1")
        // 
        // function clickHandler(event) {
            // console.log(event.target.textContent)
        // }
        // for (var i=0; i < trgtBox1.length; i++) {
            // var box1 = trgtBox1[i]
            // box1.onclick = clickHandler
        // }
        // var box1 = parseInt(box1, 1)
        // console.log(1)
        // 
        // 
        // var trgtBox2 = document.querySelector("box-2")
        // function clickHandler(event) {
            // console.log(event.target.textContent)
        // }
        // for (var i = 0; i < trgtBox2.length; i++) {
            // var box2 = trgtBox2[i]
            // box2.onclick = clickHandler
        // }
        // var box2 = parseInt(box2, 2)
        // console.log(2)
        // 
        // 
        // var trgtBox3 = document.querySelector("box-3")
        // function clickHandler(event) {
            // console.log(event.target.textContent)
        // }
        // for (var i = 0; i < trgtBox3.length; i++) {
            // var box3 = trgtBox3[i]
            // box3.onclick = clickHandler
        // }
        // var box3 = parseInt(box3, 3)
        // console.log(3);

        // var trgtBox = document.querySelector(".      box-1")
        // function clickHandler(event) {
            // console.log(event.target.textContent)
            // var trgtBox = parseInt(1)
        // }












        // var clickBox = [
            // targetBox1,
            // targetBox2,
            // targetBox3
        // ]

        // function clickHandler(event) {
            // console.log(event.target.textContent)
            // var clickBox = [
                // box1 = parseInt("1"),
                // box2 = parseInt("2"),
                // box3 = parseInt("3")
            // ]
        // }

// var targetBox1 = document.getElementById(".box-1")
// function clickHandler(event) {
    // console.log(event.target.textContent)
    // var box1 = parseInt("1")
// }
// var box1 = parseInt(box1, 1)
// console.log(1);
//  
// // var targetBox2 = document.getElementById(".box-2")
// function clickHandler(event) {
    // console.log(event.target.textContent)
    // var box2 = parseInt("2")
// }
// var box2 = parseInt(box2, 2)
// console.log(2);
//  
// // var targetBox3 = document.getElementById(".box-3")
// function clickHandler(event) {
    // console.log(event.target.textContent)
    // var box3 = parseInt("3")
// }
// 
// console.log(3);


        // bxs.forEach(function(box) {
            // box.onclick = clickHandler
        // })
        // 
        // var box1 = document.getElementById("box-1")
        // 
        // for (let i=0; i < box1.length; i++) {
            // var box1 = bxs[i]
            // box1.onclick = clickHandler
        // }
        // 
        // var box2 = document.getElementById("box-2")
        // 
        // for (let i=0; i < box2.length; i++) {
            // var box2 = bxs[i]
            // box2.onclick = clickHandler
        // }
        // 
        // var box3 = document.getElementById("box-3")
        // 
        // for (let i=0; i < box3.length; i++) {
            // var box3 = bxs[i]
            // box3.onclick = clickHandler
        // }

// var randomNumber
// var winningBox = randomNumber 
// 
// var boxValue = event.target.textContent
    // ('box')
    // var clickBox = box
    // var boxChosen = parseInt(box)
    // boxChosen = clickBox
    // var randomNumber = Math.floor((Math.random() * 3) + 1)
// function logBox() {
// var winningBox = randomNumber
// console.log(winningBox)
// }
// logBox()

// if (winningBox = targetBox2) {
    // document.getElementById("message").
        // // innerHTML = "Congratulations, you won!"
    // trackWins += 1
// } else {
    // document.getElementById("message").
        // innerHTML = losingMessages[1]
    // trackLosses += 1
// }
// 
// if (winningBox = targetBox3) {
    // document.getElementById("message").
        // // innerHTML = "Congratulations, you won!"
    // trackWins += 1
// } else {
    // document.getElementById("message").
        // innerHTML = losingMessages[2]
    // trackLosses += 1
// }


    // var winningBox = Math.floor((Math.random()* 3) + 1);
// var winningBox = parseInt(winningBox)
// var y = winningBox
// console.log(winningBox)
// 
