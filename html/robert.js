// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    // Get the user's guess
    const userGuess = document.getElementById("guessInput").value;

    // Check if the guess is correct, too high, or too low
    if (userGuess == randomNumber) {
        displayMessage("Congratulations! You guessed the correct number.");
    } else if (userGuess < 1 || userGuess > 10) {
        displayMessage("Please enter a number between 1 and 10.");
    } else {
        const message = userGuess < randomNumber ? "Too low. Try again!" : "Too high. Try again!";
        displayMessage(message);
    }
}

function displayMessage(message) {
    // Display the message to the user
    document.getElementById("message").textContent = message;
}
