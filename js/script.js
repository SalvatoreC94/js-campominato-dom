const startButton = document.getElementById('start-button');
const difficultySelect = document.getElementById('difficulty');

startButton.addEventListener('click', function () {
    const gridContainer = document.getElementById('grid-container');
    const difficulty = difficultySelect.value;

    let numCells, numCols;

    // Determina il numero di celle e colonne in base alla difficoltà selezionata
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

    }

    // Pulisce la griglia precedente
    gridContainer.innerHTML = '';
    // Imposta il numero di colonne della griglia
    gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 50px)`;

    // Crea le celle della griglia
    for (let i = 1; i <= numCells; i++) {
        const newCell = document.createElement('div');
        newCell.innerHTML = i;

        // Aggiunge un listener per il click sulla cella
        newCell.addEventListener('click', function () {
            this.classList.add('clicked');
            console.log(`Cella cliccata: ${this.innerHTML}`);
        });

        // Aggiunge la cella al contenitore della griglia
        gridContainer.append(newCell);
    }

    // Log della griglia generata
    console.log(`Griglia generata con ${numCells} caselle e ${numCols} colonne.`);
});
