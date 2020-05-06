const echiquier = [
    ['   ', ' A ', ' B ', ' C ', ' D ', ' E ', ' F ', ' G ', ' H ', '   '],
    [' 1 ', 'BT1', 'BC1', 'BF1', 'BD1', 'BR1', 'BF2', 'BC2', 'BT2', ' 1 '],
    [' 2 ', 'BP1', 'BP2', 'BP3', 'BP4', 'BP5', 'BP6', 'BP7', 'BP8', ' 2 '],
    [' 3 ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', ' 3 '],
    [' 4 ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', ' 4 '],
    [' 5 ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', ' 5 '],
    [' 6 ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', ' 6 '],
    [' 7 ', 'NP1', 'NP2', 'NP3', 'NP4', 'NP5', 'NP6', 'NP7', 'NP8', ' 7 '],
    [' 8 ', 'NT1', 'NC1', 'NF1', 'ND1', 'NR1', 'NF2', 'NC2', 'NT2', ' 8 '],
    ['   ', ' A ', ' B ', ' C ', ' D ', ' E ', ' F ', ' G ', ' H ', '   ']
]

function convertisseur(lettre) {
    const alphabet = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' '];
    indexLettre = alphabet.indexOf(lettre);
    if (indexLettre >= 1 && indexLettre <= 8) {
        return indexLettre;
    }
    console.log('Lettre non autorisée');
}

function deplacementPiece(X, Y, nouveauX, nouveauY) {
    echiquier[nouveauX][nouveauY] = echiquier[X][Y];
    echiquier[X][Y] = '   ';
}