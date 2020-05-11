const  echiquier  =   [  
    [' * ',  ' A ',  ' B ',  ' C ',  ' D ',  ' E ',  ' F ',  ' G ',  ' H ',  ' * '],   
    [' 1 ',  'BT1',  'BC1',  'BF1',  'BD1',  'BR1',  'BF2',  'BC2',  'BT2',  ' 1 '],   
    [' 2 ',  'BP1',  'BP2',  'BP3',  'BP4',  'BP5',  'BP6',  'BP7',  'BP8',  ' 2 '],   
    [' 3 ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' 3 '],   
    [' 4 ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' 4 '],   
    [' 5 ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' - ',  ' 5 '],   
    [' 6 ',  ' - ',  ' - ',  ' - ',  'NP4',  ' - ',  ' - ',  ' - ',  ' - ',  ' 6 '],   
    [' 7 ',  'NP1',  'NP2',  'NP3',  ' - ',  'NP5',  'NP6',  'NP7',  'NP8',  ' 7 '],   
    [' 8 ',  'NT1',  'NC1',  'NF1',  'ND1',  'NR1',  'NF2',  'NC2',  'NT2',  ' 8 '],   
    [' * ',  ' A ',  ' B ',  ' C ',  ' D ',  ' E ',  ' F ',  ' G ',  ' H ',  ' * ']
];

function miseEnPlacePieces() {
    afficheEchiquierHtml();
};

function changeDePiece(place = "B3", figure, couleur) {
    var aCouleur = ["-32px", "0px", "-64px"];
    var couleurJouee = aCouleur[(couleur === "B" ? 0 : couleur === "N" ? 1 : 2)];
    var pieces = [
        ["tour ", "0px"],
        ["cavalier ", "192px"],
        ["fou ", "160px"],
        ["dame ", "128px"],
        ["roi ", "96px"],
        ["pion ", "64px"],
        ["vide", "0px"],
    ];
    var emplacement = document.getElementById(place);
    emplacement.style.backgroundPosition = `${pieces[figure][1]} ${couleurJouee}`;
    /*alert(`${pieces[figure][0]} en ${place}`);*/
} 
const  alphabet  =   [' ',  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  ' '];

function  afficheEchiquierHtml()  {   // Parse chaque case de notre echiquier
    for  (let  i  =  1;  i  <  9;  i++)  { 
        for (let j = 1; j < 9; j++) {
            var ligne = i;
            var colonne = alphabet[j];
            var place = (`${colonne}${ligne}`);
            var couleur = echiquier[i][j][0];
            var piece = 1;
            switch (echiquier[i][j][1]) {
                case 'P':
                    piece = 5;
                    break;
                case 'T':
                    piece = 0;
                    break;
                case 'C':
                    piece = 1;
                    break;
                case 'F':
                    piece = 2;
                    break;
                case 'D':
                    piece = 3;
                    break;
                case 'R':
                    piece = 4;
                    break;
                default:
                    piece = 6;
                    break;
            }
            changeDePiece(place, piece, couleur);
        }     
    }
}