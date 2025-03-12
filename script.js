function filterGames(category) {
    console.log("Filtering games:", category); // Debugging log

    let games = document.querySelectorAll('.game'); // Select all game elements

    games.forEach(game => {
        if (category === 'all' || game.classList.contains(category)) {
            game.style.display = 'block'; // Show matching games
        } else {
            game.style.display = 'none'; // Hide non-matching games
        }
    });
}
function loadGame(gameUrl) {
    console.log("Loading game:", gameUrl); // Debugging log
    window.location.href = gameUrl; // Opens the game in the current tab
}
function searchGames() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let games = document.querySelectorAll(".game");

    games.forEach(game => {
        let title = game.querySelector("h3").innerText.toLowerCase();
        if (title.includes(input)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}
