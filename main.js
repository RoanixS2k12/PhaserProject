requirejs.config({
  paths: {
    Phaser: 'lib/phaser/build/phaser',
    AssetManager: 'app/utils/AssetManager'
  }
});

/* Lauch app */
require([
  'app/modules/PhaserGame',
  'app/modules/states/BootState',
  'app/utils/AssetManager'
], function (PhaserGame, BootState, AssetManager) {

  /* Phaser Game initialization */
  PhaserGame.initialize(640, 480, Phaser.AUTO, 'phaser_viewport');
  /* Add states to the game */
  PhaserGame.addState('Boot', BootState);
  /* Start the game */
  PhaserGame.start('Boot');

});