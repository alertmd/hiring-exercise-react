import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Game} from './components/game';

export function App () {
	const [start_enabled, setStartEnabled] = useState(false);

	async function startGame(board_size) {
		// See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
		const res = await fetch(
			'http://localhost:3001/api/game',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					// post body here
					board_size: board_size || 3,
					win_size: board_size || 3
				})
			}
		).then(res => res.json());

		// Redirect to router that knows how to render the game
		window.location.href= `/game/${res.game.id}`;
	}

	function toggleStartEnabled() {
		setStartEnabled(!start_enabled);
	}

	function navigateToFindGame() {
		// window.location.href = ...
		alert('not implemented');
	}

	return (
		<BrowserRouter>
			<div className="app">
				<Route
					path='/'
					exact
					render={() => {
						return (
							<div className="welcome-wrapper">
								<div className="welcome-header">
									<div>Tic-Tac-Toe</div>
									<div className="aas">as a service<span> </span></div>
								</div>

								<div className={`welcome-buttons-wrapper${start_enabled ? ' loading' : ''}`}>
									<div className="welcome-button start" onClick={toggleStartEnabled}>
										<div className="shake-target">
											Start Game
										</div>
									</div>

									<div className={`start-game-buttons-wrapper${start_enabled ? ' show' : ''}`}>
										<div className="start-game-button" onClick={() => startGame(3)}>
											<div className="shake-target">3x3</div>
										</div>
										<div className="start-game-button" onClick={() => startGame(4)}>
											<div className="shake-target">4x4</div>
										</div>
										<div className="start-game-button" onClick={() => startGame(5)}>
											<div className="shake-target">5x5</div>
										</div>
										<div className="start-game-button" onClick={() => startGame(10)}>
											<div className="shake-target">10x10</div>
										</div>
									</div>

									<div className="welcome-button find" onClick={navigateToFindGame}>
										Find Game
									</div>
								</div>
							</div>
						);
					}}
				/>

				<Route
					path='/game/:game_id'
					render={(props) => {
						//contains game_id
						const params = props.match.params;

						return (
							<>
								<div className="app-header">
									<span>Tic-Tac-Toe</span>
								</div>
								<Game  {...params}/>
							</>
						);
					}}
				/>
			</div>
		</BrowserRouter>
	);
}
