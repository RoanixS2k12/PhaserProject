/*
*	Phaser main module
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
		initialize: function(w, h, renderer, element){
			this.game = new Phaser.Game(w, h, renderer, element);
		},
		game : function(file) {
			return this.game;
		},
		height: function() {
			return this.game.height;
		},
		width: function() {
			return this.game.width;
		},
		loadImage: function(fileName, filePath) {
			this.game.load.image(fileName, filePath);
		},
		addSprite: function(x, y, textureFile) {
			return this.game.add.sprite(x, y, textureFile);
		}
	};
	PhaserGame.getInstance = function(){
		// summary:
		//      Gets an instance of the singleton. It is better to use 
		if(instance === null){
			instance = new PhaserGame();
		}
		return instance;
	};

	return PhaserGame.getInstance();
});