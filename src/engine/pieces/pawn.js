import Piece from './piece';
import player from '../player';
import Square from '../square';

// pawn is a child of piece

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = []
        if (this.player === player.WHITE) {
            if (location.row < 1) {
                moves.push(Square.at(location.row + 1, location.col))
            } else {

            } moves.push(Square.at(location.row + 1, location.col))
        }

    if (this.player === player.BLACK) {
        if(location.row >= 6) {
            moves.push(Square.at(location.row - 1, location.col))
            
        } else {
            moves.push(Square.at(location.row - 1, location.col));
        }
    }
    return moves;
    
}
}
