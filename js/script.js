const startButton = document.getElementById('start-button');
const difficultySelect = document.getElementById('difficulty');
const scoreDisplay = document.getElementById('score');

// Aggiunge un event listener al pulsante per generare la griglia
startButton.addEventListener('click', function () {
    const gridContainer = document.getElementById('grid-container');
    const difficulty = difficultySelect.value;

    let numCells, numCols;

    // Imposta il numero di celle e colonne in base alla difficoltà selezionata
    switch (difficulty) {
        case '1':
            numCells = 100;
            numCols = 10;
            console.log("Difficoltà 1 selezionata: 100 caselle, 10 colonne");
            break;
        case '2':
            numCells = 81;
            numCols = 9;
            console.log("Difficoltà 2 selezionata: 81 caselle, 9 colonne");
            break;
        case '3':
            numCells = 49;
            numCols = 7;
            console.log("Difficoltà 3 selezionata: 49 caselle, 7 colonne");
            break;
        default:
            numCells = 100;
            numCols = 10;
            console.log("Difficoltà predefinita: 100 caselle, 10 colonne");
    }

    // Genera 16 numeri casuali unici per le bombe
    const bombs = new Set();
    while (bombs.size < 16) {
        const bomb = Math.floor(Math.random() * numCells) + 1;
        bombs.add(bomb);
    }
    console.log("Bombe generate: ", [...bombs]);

    // Resetta il contenuto del contenitore della griglia e imposta il layout della griglia
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 50px)`;

    // Resetta il punteggio
    scoreDisplay.innerHTML = '';
    let score = 0;
    let gameEnded = false;

    // Crea le celle della griglia
    for (let i = 1; i <= numCells; i++) {
        const newCell = document.createElement('div');
        newCell.innerHTML = i;


        // Aggiunge un event listener a ogni cella per gestire il clic
        newCell.addEventListener('click', function () {
            if (gameEnded) return;

            // Se la cella contiene una bomba
            if (bombs.has(i)) {
                this.classList.add('bomb');
                this.innerHTML = '<i class="fas fa-bomb" style="color:black;"></i>'; // Aggiunge l'icona della bomba
                console.log(`Hai cliccato su una bomba! Cella: ${i}`);
                gameEnded = true;
                scoreDisplay.innerHTML = `Hai perso! Il tuo punteggio è: ${score}`;
            } else {
                this.classList.add('safe');
                this.style.pointerEvents = 'none'; // Disabilita ulteriori clic sulla cella
                console.log(`Cella sicura cliccata: ${i}`);
                score++;
                // Controlla se l'utente ha cliccato su tutte le celle sicure
                if (score === numCells - 16) {
                    gameEnded = true;
                    scoreDisplay.innerHTML = `Hai vinto! Il tuo punteggio è: ${score}`;
                }
            }
        });

        // Aggiunge la cella al contenitore della griglia
        gridContainer.append(newCell);
    }

    console.log(`Griglia generata con ${numCells} caselle e ${numCols} colonne.`);
});
