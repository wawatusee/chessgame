function addLine() {
    // crée un nouvel élément div
    var newline = document.createElement("ul");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode('Et ici une ligne qui contiendra mes cases');
    // ajoute le nœud texte au nouveau ul créé
    newline.appendChild(newContent);
    newline.id = "ligne";
    newline.style.position = "relative";
    newline.style.backgroundColor = "green";
    // ajoute le nouvel élément créé et son contenu dans le DOM
    var chessBoard = document.getElementById('plateau');
    document.body.appendChild(newline, chessBoard);
}