# chessgame
CF2M_JS
=======
Création d'un jeu d'échec
=========================
Fait
-------------------------------------------------------------------------------------------
creation d'un tableau figurant la position de chaque piece ok(tableau-echiquier-kieran.js abandonné pour tableau-echiquier-andre.js)

* creation d'un sprite unique avec toutes les pièces ok(chess-pieces.png créé avec https://www.piskelapp.com)

* gestion d'un sprites pour créer toutes les pieces ok(echiquier-manuel.html)

* gestion du dom pour créer des lignes à la volée ok (ligne-echiquier-createelement.html)

* structurer le projet(ranger css ds css, js ds js, etc)

* creer function changeDePiece pour remplir les cases ok (3 arguments, 1case de destination:String, figure :Number de 0 à 6, couleur : String(b ou n))

* appliquer les styles utilisés dans echiquier-manuel.html en js ok Utilisé pour changement de pièce dans la fonction changeDePiece(), propriété : ".style.backgroundPosition "

* importer et parser le tablau de tableau-echiquier-andre.js pour alimenter les lignes et les cases ok fonction afficheEchiquierHtml() dans echiquier-manuel.js

*accessoire* modif couleur damier dans bacasable.css

* gestion du dom pour créer des lignes à la volée (chessBoard-createelement.html, associé au js et css du même nom)

modification
A faire
--------------------------------------------------------------------------------------------
* Associer chessBoard-createelement.html au code de la classe, avec appel de la fonction afficherEchiquier

* todo*Essai propriéte draggable sur les pieces avec envoi et réception de données avec le JS d'andré

* todo*Classes case noire et blanche pour pouvoir changer d'habillage facilement

* todo*sélecteur de sprite pour avoir des choix de figures différentes