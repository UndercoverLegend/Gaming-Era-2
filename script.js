function loadGame(gameUrl) {
    if (!gameUrl) {
        console.error("No game URL provided!");
        return;
    }
    console.log("Opening game in new tab:", gameUrl); // Debugging log
    window.open(gameUrl, "_blank"); // Opens the game in a new tab
}
