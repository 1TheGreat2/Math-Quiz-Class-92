let currentPlayer = 1;
let player1Name = "";
let player2Name = "";
let player1Score = 0;
let player2Score = 0;
let num1, num2, correctAnswer;

function startGame() {
    player1Name = document.getElementById("player1Name").value;
    player2Name = document.getElementById("player2Name").value;
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
    document.getElementById("player1Score").innerText = `${player1Name} Score: 0`;
    document.getElementById("player2Score").innerText = `${player2Name} Score: 0`;
    nextTurn();
}

function nextTurn() {
    document.getElementById("turn").innerText = `Turn: ${currentPlayer === 1 ? player1Name : player2Name}`;
    document.getElementById("inputNumbers").style.display = "block";
    document.getElementById("question").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementById("answer").value = "";
    document.querySelector('button[onclick="submitAnswer()"]').style.display = "none";
}

function submitNumbers() {
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
    
    let question;
    if (operator === '+') {
        correctAnswer = num1 + num2;
        question = `${num1} + ${num2}`;
    } else if (operator === '-') {
        correctAnswer = num1 - num2;
        question = `${num1} - ${num2}`;
    } else if (operator === '*') {
        correctAnswer = num1 * num2;
        question = `${num1} * ${num2}`;
    } else {
        correctAnswer = num1 / num2;
        question = `${num1} / ${num2}`;
    }

    document.getElementById("inputNumbers").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("question").innerText = question;
    document.getElementById("answer").style.display = "block";
    document.querySelector('button[onclick="submitAnswer()"]').style.display = "block";
}

function submitAnswer() {
    let answer = parseInt(document.getElementById("answer").value);

    if (answer === correctAnswer) {
        if (currentPlayer === 1) {
            player1Score++;
            document.getElementById("player1Score").innerText = `${player1Name} Score: ${player1Score}`;
        } else {
            player2Score++;
            document.getElementById("player2Score").innerText = `${player2Name} Score: ${player2Score}`;
        }

        if (player1Score === 15 || player2Score === 15) {
            document.getElementById("result").innerText = `${currentPlayer === 1 ? player1Name : player2Name} wins!`;
        } else {
            nextTurn();
        }
    } else {
        if (currentPlayer === 1) {
            player1Score--;
            document.getElementById("player1Score").innerText = `${player1Name} Score: ${player1Score}`;
        } else {
            player2Score--;
            document.getElementById("player2Score").innerText = `${player2Name} Score: ${player2Score}`;
        }
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        nextTurn();
    }
}
