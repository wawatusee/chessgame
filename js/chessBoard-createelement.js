const  alphabet  =   [' ',  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  ' '];

function createChessBoard() {
    //Réfèrencons notre seule div créé pour réceptionner notre jeu d'échec(plateau)
    var chessBoard = document.getElementById('plateau');
    //Créons le contenu de l'échiquier(8 lignes dans chacune d'entre elles ont place 8 cases)
    for (let i = 8; i > 0; i--) {
        var newline = document.createElement("DIV");
        newline.id = "ligne" + i;
        newline.className = 'ligne';
        for (let j = 1; j < 9; j++) {
            // Création d'une div qui avec une classe case et un ID
            var newCase = document.createElement("DIV");
            newCase.className = "case";
            //A SUPPRIMER : ajoute l'id en contenu à la case créée
            newCase.id = alphabet[j] + i;
            //Une case sur 2 de couleur en se basant sur l'addition de i et j
            if ((i + j) % 2 < 1) {
                newCase.style.backgroundColor = "#cacaca";
            } else {
                newCase.style.backgroundColor = "rgb(49, 42, 42)";
            }
            //Plaçons la case dans la ligne
            newline.appendChild(newCase);
        }
        //La ligne créée est placée dans l'échiquier(div "plateau")
        chessBoard.appendChild(newline);
    }
}
