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

  console

  PhaserGame.initialize(640, 480, Phaser.AUTO, 'phaser_viewport');
  PhaserGame.game.state.add('Boot', BootState);
  PhaserGame.game.state.start('Boot');

});