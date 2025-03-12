function filterGames(category) {
    let games = document.querySelectorAll(".game");
    games.forEach(game => {
        if (category === 'all' || game.dataset.category === category) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}
