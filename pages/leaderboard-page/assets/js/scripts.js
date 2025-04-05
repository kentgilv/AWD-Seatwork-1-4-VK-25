// Load leaderboard data from localStorage
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

// Function to display leaderboard data
function displayLeaderboard() {
const table = document.getElementById('leaderboardTable');
table.innerHTML = '';  // Clear existing table rows
leaderboard.forEach(player => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${player.name}</td>
    <td>${player.level}</td>
    <td>${player.score}</td>
    `;
    table.appendChild(row);
});
}

// Function to add new player
document.getElementById('playerForm').addEventListener('submit', function(event) {
event.preventDefault();

const name = document.getElementById('name').value;
const level = document.getElementById('level').value;
const score = document.getElementById('score').value;

const newPlayer = { name, level: parseInt(level), score: parseInt(score) };
leaderboard.push(newPlayer);

// Save to localStorage
localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

// Clear the form inputs
document.getElementById('name').value = '';
document.getElementById('level').value = '';
document.getElementById('score').value = '';

displayLeaderboard();
});

// Function to sort leaderboard data
function sortLeaderboard(criteria) {
if (criteria === 'name') {
    leaderboard.sort((a, b) => a.name.localeCompare(b.name));
} else if (criteria === 'level') {
    leaderboard.sort((a, b) =>  b.level - a.level);
} else if (criteria === 'score') {
    leaderboard.sort((a, b) => b.score - a.score); // Sort descending by score
}
displayLeaderboard();
}

// Initial display of leaderboard
displayLeaderboard();























// let highScores = [];
// function displayScores() {
//     const scoreList = document.getElementById('leaderboard');
//     scoreList.innerHTML = '';

//     // Sort high scores in descending order
//     highScores.sort((a, b) => b.score - a.score);

//     // Display top 5 scores
//     highScores.slice(0, 5).forEach(score => {
//         const li = document.createElement('li');
//         li.textContent = `${score.name}: ${score.level} ${score.score}`;
//         scoreList.appendChild(li);
//     });
// }

// function sortByLevel() {
//     const scoreList = document.getElementById('leaderboard');
//     scoreList.innerHTML = '';

//     // Sort high scores in descending order
//     highScores.sort((a, b) => b.level - a.level);

//     // Display top 5 scores
//     highScores.slice(0, 5).forEach(level => {
//         const li = document.createElement('li');
//         li.textContent = `${level.name}: ${level.level} ${level.score}`;
//         scoreList.appendChild(li);
//     });
// }

// function sortByName() {
//     const scoreList = document.getElementById('leaderboard');
//     scoreList.innerHTML = '';

//     // Sort high scores in descending order
//     highScores.sort((a, b) => { return ('' + a.name).localeCompare(b.name)});

//     // Display top 5 scores
//     highScores.slice(0, 5).forEach(name => {
//         const li = document.createElement('li');
//         li.textContent = `${name.name}: ${name.level} ${name.score}`;
//         scoreList.appendChild(li);
//     });
// }

// function addScore() {
//     const name = document.getElementById('in-gameName').value;
//     const level = document.getElementById('level').value;
//     const score = document.getElementById('score').value;

//     if (name && score) {
//         highScores.push({ name: name, level: parseInt(level), score: parseInt(score) });
//         // Clear input fields
//         document.getElementById('in-gameName').value = '';
//         document.getElementById('level').value = '';
//         document.getElementById('score').value = '';
//         save();
//     } else {
//         alert("Please enter both name and score!");
//     }
//     MediaStreamTrackEvent
// }

// function save() {
//     localStorage.setItem("highScores", JSON.stringify(highScores));
// }

// function load() {
//     highScores = JSON.parse(localStorage.getItem("highScores"));
// }

// function clearScores() {
//     highScores = [];
//     save();
//     displayScores();
// }