import uuid from 'uuid';

export default class Game {
	constructor(board_size, win_size) {
		this.id = uuid.v4();

		this.board_size = board_size || 5;
		this.win_size = win_size || 4;

		this.board = this.getEmptyBoard();
	}

	getEmptyBoard() {
		return 'somedatastructure';
	}

	toJSON() {
		return {
			id: this.id,
			//opts
			board_size: this.board_size,
			win_size: this.win_size,
			//state
			board: this.board
		}
	}
}
