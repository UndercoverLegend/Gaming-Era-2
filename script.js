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
