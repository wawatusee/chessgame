function buildChessBoard() {
  var cases = []
  var lettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  for (var i = 1; i < 9; i++) {
    for (var j = 0; j < 8; j++) {
      cases.push([lettres[j] + i])
      console.log(lettres[j] + i)
    }
  }
  return cases
}
var echiquier = buildChessBoard()
console.log(echiquier)
/**Fonction prend en parametre le nom d'une piece et sa destination(place la piece dans le tableau echiquier) **/
function movePiece(piece, destination) {
  echiquier[destination][1] = piece
}
movePiece('wp1', 1)
console.log(echiquier)
