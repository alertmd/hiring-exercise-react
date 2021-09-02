
import Game from './../services/game';

export default function(app) {
	app.post('/api/game', function(req, res) {
		//start a game? track it?
		const game = new Game(
			req.body.board_size,
			req.body.win_size
		);

		res.send({
			game: game.toJSON()
		});
	});

	app.get('/api/game/:game_id', function(req, res) {
		res.send({
			board_size: 4,
			win_size: 4,
			board: 'somedatastructure',
			etc: true
		});
	});
}
