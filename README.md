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

*  modif couleur damier dans js avec modulo

* gestion du dom pour créer des lignes à la volée (chessBoard-createelement.html, associé au js et css du même nom)

* Associer l'affichage de l'échiquier au code de la classe. Fichier bacasable.html avec js et css du même nom. L'affichage est lié à la constante echiquier(tableau des cases) et peut être rafraichit grace à la fonction afficheEchiquierHtml()

modification
A faire
--------------------------------------------------------------------------------------------
* Trouver façon plus élègante d'afficher les pièces au début(pour l'instant la fonction createChessbord appelle afficheEchiquierHtml())

* todo*Essai propriéte draggable sur les pieces avec envoi et réception de données avec le JS d'andré

* todo*Classes case noire et blanche pour pouvoir changer d'habillage facilement

* todo*sélecteur de sprite pour avoir des choix de figures différentes