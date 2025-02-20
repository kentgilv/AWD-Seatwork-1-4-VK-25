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

function sortByLevel() {
    const scoreList = document.getElementById('leaderboard');
    scoreList.innerHTML = '';

    // Sort high scores in descending order
    highScores.sort((a, b) => b.level - a.level);

    // Display top 5 scores
    highScores.slice(0, 5).forEach(level => {
        const li = document.createElement('li');
        li.textContent = `${level.name}: ${level.level} ${level.score}`;
        scoreList.appendChild(li);
    });
}

function sortByName() {
    const scoreList = document.getElementById('leaderboard');
    scoreList.innerHTML = '';

    // Sort high scores in descending order
    highScores.sort((a, b) => { return ('' + a.name).localeCompare(b.name)});

    // Display top 5 scores
    highScores.slice(0, 5).forEach(name => {
        const li = document.createElement('li');
        li.textContent = `${name.name}: ${name.level} ${name.score}`;
        scoreList.appendChild(li);
    });
}

function addScore() {
    const name = document.getElementById('in-gameName').value;
    const level = document.getElementById('level').value;
    const score = document.getElementById('score').value;

    if (name && score) {
        highScores.push({ name: name, level: parseInt(level), score: parseInt(score) });
        // Clear input fields
        document.getElementById('in-gameName').value = '';
        document.getElementById('level').value = '';
        document.getElementById('score').value = '';
        save();
    } else {
        alert("Please enter both name and score!");
    }
    MediaStreamTrackEvent
}

function save() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function load() {
    highScores = JSON.parse(localStorage.getItem("highScores"));
}

function clearScores() {
    highScores = [];
    save();
    displayScores();
}