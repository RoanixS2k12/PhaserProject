define([
	'Phaser',
	'app/modules/PhaserGame',
	'app/utils/AssetManager'
	], function (Phaser, PhaserGame, AssetManager) {

		var BootState = function (game) {};

		BootState.prototype = {

			constructor: BootState,

			preload: function() {
				PhaserGame.loadImage('logo', AssetManager.get('logo.png'));
			},
			create: function() {
				console.log('BootState created');
				this.logo = PhaserGame.addSprite(PhaserGame.width() / 2 - (382 / 2), PhaserGame.height() / 2 - (331 / 2) , 'logo');

			},
			update: function() {

			}
		};

		return BootState;
	});