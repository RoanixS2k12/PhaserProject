requirejs.config({
  paths: {
    Phaser: 'lib/phaser/build/phaser'
  }
});

/* Lauch app */
require([
  'app/modules/PhaserGame',
], function (PhaserGame, BootState, PreloadState, StageOneState) {

  var game = new PhaserGame(640, 480, Phaser.AUTO, 'phaser_viewport');

});