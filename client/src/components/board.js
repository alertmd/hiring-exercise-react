import React from 'react';
import PropTypes from 'prop-types';

import {BoardSpace} from './board-space';

export function Board({length}) {
	function handleSpaceClick() {
		console.log('I have been clicked!');
	}

	function generateRandBoardValue() {
		const rand = Math.random() * 3;

		if (rand < 1) {
			return 'X';
		} else if (rand < 2) {
			return 'O';
		} else return ' ';
	}

	function getBoardSpaceClass(row, col, length) {
		const classes = [];

		if (row === 0) {
			classes.push('first_row');
		} else if (row === length - 1) {
			classes.push('last_row');
		}

		if (col === 0) {
			classes.push('first_col');
		} else if(col === length - 1) {
			classes.push('last_col');
		}

		return classes.join(' ');
	}

	function buildBoard() {
		const rows = [];

		for(let row = 0; row < length; row++) {
			const cols = []

			for(let col = 0; col < length; col++) {
				cols.push(
					<BoardSpace
						key={`${row}_${col}`}
						value={generateRandBoardValue()}
						onClick={handleSpaceClick}
						className={getBoardSpaceClass(row, col, length)}
					/>
				);
			}

			rows.push(<div key={row} className="board_row">{cols}</div>);
		}

		return rows;
	}

	return (
		<div className="board_wrap">
			{buildBoard()}
		</div>
	);
}

Board.propTypes = {
	length: PropTypes.number.isRequired
};
