/*
*	Phaser main module
*	Singleton access to the main global var 'game' 
*/
define([
	'Phaser',
	], function(Phaser) {

	var instance = null;

	function PhaserGame(){
		if(instance !== null){
			throw new Error("Cannot instantiate more than one PhaserGame, use PhaserGame.getInstance()");
		} 
	}
	PhaserGame.prototype = {
		/*
		*	Initialize a new Phaser Game object
		 */
		initialize: function(w, h, renderer, element){
			this.game = new Phaser.Game(w, h, renderer, element);
		},
		/*
		*	Get the height of the Phaser Game
		 */
		height: function() {
			return this.game.height;
		},
		/*
		*	Get the width of the Phaser Game
		 */
		width: function() {
			return this.game.width;
		},
		/*
		*	Load an image into the Phaser Game
		 */
		loadImage: function(fileName, filePath) {
			this.game.load.image(fileName, filePath);
		},
		/*
		*	Add a sprite to the Phaser Game
		 */
		addSprite: function(x, y, textureFile) {
			return this.game.add.sprite(x, y, textureFile);
		},
		/*
		*	Add a state to the Phaser Game
		 */
		addState: function(stateName, state) {
			this.game.state.add(stateName, state);
		},
		/*
		*	Start a state from the Phase Game
		 */
		start: function(stateName) {
			this.game.state.start(stateName);
		}
	};
	PhaserGame.getInstance = function(){
		// summary:
		//      Gets an instance of the singleton. 
		if(instance === null){
			instance = new PhaserGame();
		}
		return instance;
	};

	return PhaserGame.getInstance();
});