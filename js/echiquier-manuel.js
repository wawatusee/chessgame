function miseEnPlacePieces() {
    changeDePiece();
};

function changeDePiece(place = "A1", pieceFinale = "Reine Blanche") {
    var emplacement = document.getElementById(place);
    emplacement.style.backgroundColor = "black";
    emplacement.style.backgroundImage.position.x = "128 px";
    alert(`${pieceFinale} en ${place}`);
}