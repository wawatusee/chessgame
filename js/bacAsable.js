function miseEnPlacePieces() {
    changeDePiece("C4", 4, "w");
};

function changeDePiece(place = "B3", figure, couleur) {
    var aCouleur = ["-32px", "0px", "blanc", "noir"];
    var couleurJouee = aCouleur[(couleur === "w" ? 0 : 1)];
    var pieces = [
        ["tour blanche", "0px", "-32px"],
        ["cavalier blanc", "192px", "-32px"],
        ["fou blanc", "160px", "-32px"],
        ["dame blanche", "128px", "-32px"],
        ["roi blanc", "160px", "-32px"],
        ["pion blanc", "160px", "-32px"],
        ["vide", "0px", "-64px"],
    ];
    var emplacement = document.getElementById(place);
    emplacement.style.backgroundPosition = `${pieces[figure][1]} ${couleurJouee}`;
    alert(`${pieces[figure][0]} en ${place}`);
}