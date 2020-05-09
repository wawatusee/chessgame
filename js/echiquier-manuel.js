function miseEnPlacePieces() {
    changeDePiece("A1", 6, "v");
};

function changeDePiece(place = "B3", figure, couleur) {
    var aCouleur = ["-32px", "0px", "-64px"];
    var couleurJouee = aCouleur[(couleur === "b" ? 0 : couleur === "n" ? 1 : 2)];
    var pieces = [
        ["tour ", "0px"],
        ["cavalier ", "192px"],
        ["fou ", "160px"],
        ["dame ", "128px"],
        ["roi ", "160px"],
        ["pion ", "160px"],
        ["vide", "0px"],
    ];
    var emplacement = document.getElementById(place);
    emplacement.style.backgroundPosition = `${pieces[figure][1]} ${couleurJouee}`;
    alert(`${pieces[figure][0]} en ${place}`);
}