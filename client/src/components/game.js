import React from 'react';
import PropTypes from 'prop-types';

import {Board} from './board';

export function Game({game_id}) {
	// todo: get game status for real
	const game = {id: game_id, win_size: 4, board_size: 4};

	return <Board length={game.board_size} />;
}

Game.propTypes = {
	game_id: PropTypes.string.isRequired
};
