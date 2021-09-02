# Tic-Tac-Toe As A Service


## Instructions

This is the starter code for online multi-player Tic Tac Toe, where the board can be of arbitrary square size
(3x3, 10x10, etc), and where the win size can be arbitrary as well (3 in a row, 6 in a row, etc). We've set up a
 basic UI for drawing the board on the client side, so that you can focus on game play and client/server
interaction.

The starter code is purposefully enough boilerplate to short circuit some tooling setup, UI to work with, etc. It is otherwise half finished in some areas so please do not take any existing code as final and change code and behavior you feel necessary to accomplish the task.

The server code is at server/ and all client code can be found in the client/ folder. They run as seperate web services, the server on port 3001 and the client on port 3000.

Obviously there are a lot of places you can go with this to get to a nice end product, but since we've set a time
limit of around 2-3 hours, you should think of how to reduce the scope so you can get to a minimum viable product
within the time limit. For example, perhaps start with random moves made by the server as the second player, while still
thinking about how you could extend it to networked multi-player. Think about how you can start and store game information and where.
It doesn't necessarily need to be persistent to maintain games once you restart the server, although you can go that
route. How will you determine win state? How do you determine which players' turn it is? How do you make sure a player doesn't make a move out of turn or cheat?

You do not have to have a completely finished solution in the time allotted, but things we would like to see include:
- Client and server interaction for human player moves
- Detecting and notifying the player of the winner

We will do a retrospective after where questions include:
- What would you do differently? (implying you don't have to like all of it!)
- What is something that you liked how you approached/solved it?
- etc...

If you have questions, do not hesitate to reach out.

## Download and Turn In

Please do not fork this repo and instead download via this [link](https://github.com/alertmd/hiring-exercise-react/archive/refs/heads/master.zip). Please do not host your result publicly on github. To turn in your result, please zip your files (excluding your node modules if possible) and email to the appropriate person. You may need to upload it to DropBox or similar site to then email a link to bypass spam filters.

## Installation

Just put this code in any directory on your computer. Also install nodejs using the installers on
this [page](https://nodejs.org/download/). It comes with npm, the package manager, already installed in case you want
to use additional modules.


## Running

Use two terminal tabs to run the client and server from this project's root directory.

### Server
```
cd server
npm start
```

You should be able to hit http://127.0.0.1:3001 and will get a 404 that the specified endpoint does not exist. This is expected. There are a couple stubbed endpoints in the project already to illustrate direction but not be considered complete. They are stubs after all.

On changing server code, you will need to restart the server.

You may also want to bring up the documentation for [express.js](https://expressjs.com/).

### Client
```
cd client
npm start
```

It may automatically open a browser window, if not, open a browser pointed to http://127.0.0.1:3000. The client will automatically change through updates to code. Pay attention to the terminal in case of errors that cause the browser window to appear stuck.

You should see something like this, if everything is working.
![Welcome Screen](/docs/welcome.png?raw=true)

This is using the [create-react-app](https://github.com/facebookincubator/create-react-app/) project bootstrapper.

Note that the client currently renders RANDOM moves in the board view once clicking Start Game. This is just to have some boilerplate in place but it is up to you to appropriately render game state (and capture it through moves).
