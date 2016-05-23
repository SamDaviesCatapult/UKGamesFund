var React = require("react");
var ReactDOM = require("react-dom");

/////
var GameList = require("./components/GameList.jsx");
var GameStore = require("./stores/GameStore");
var _game = [];
var getGameCallback = function(game){
    _game = game;
    render();
};

GameStore.onChange(getGameCallback);


function render(){
    ReactDOM.render(<GameList game={_game} />, document.getElementById("container"));    
}