define([
	'app/modules/PhaserGame',
	'app/utils/AssetManager'
	], function (PhaserGame, AssetManager) {

		var BootState = function (game) {};

		BootState.prototype = {

			constructor: BootState,

			/*
			Preload assets for the boot state
			 */
			preload: function() {
				PhaserGame.loadImage('logo', AssetManager.get('logo.png'));
			},
			/*
			Create the boot scene with a simple logo
			 */
			create: function() {
				console.log('BootState created');
				this.logo = PhaserGame.addSprite(PhaserGame.width() / 2 - (382 / 2), PhaserGame.height() / 2 - (331 / 2) , 'logo');

			},
			update: function() {

			}
		};

		return BootState;
	});