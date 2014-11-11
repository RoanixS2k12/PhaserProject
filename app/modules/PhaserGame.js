/*
*	Phaser main module
*/


define([
  'Phaser',
], function (Phaser) {

  var PhaserGame = function (w, h, element) {
    return new Phaser.Game(w, h, Phaser.AUTO, element);
  };

  return PhaserGame;
});