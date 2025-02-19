let highScores = [];
function displayScores() {
    const scoreList = document.getElementById('leaderboard');
    scoreList.innerHTML = '';

    // Sort high scores in descending order
    highScores.sort((a, b) => b.score - a.score);

    // Display top 5 scores
    highScores.slice(0, 5).forEach(score => {
        const li = document.createElement('li');
        li.textContent = `${score.name}: ${score.level} ${score.score}`;
        scoreList.appendChild(li);
    });
}

function addScore() {
    const name = document.getElementById('in-gameName').value;
    const level = document.getElementById('level').value;
    const score = document.getElementById('score').value;

    if (name && score) {
        highScores.push({ name: name, level: parseInt(level), score: parseInt(score) });
        displayScores();

        // Clear input fields
        document.getElementById('in-gameName').value = '';
        document.getElementById('level').value = '';
        document.getElementById('score').value = '';
    } else {
        alert("Please enter both name and score!");
    }
}

// Display the initial high scores (if any)
displayScores();