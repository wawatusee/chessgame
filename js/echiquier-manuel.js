function miseEnPlacePieces() {
    changeDePiece();
};

function changeDePiece(place = "A1", pieceFinale = "Reine Blanche") {
    var emplacement = document.getElementById(place);
    emplacement.style.backgroundColor = "yellow";
    emplacement.style.backgroundPosition = "1px 0";
    alert(`${pieceFinale} en ${place}`);
}