var config = {
    type: Phaser.AUTO,
    width: 32 * 40,
    height: 32 * 20,
    
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    // scale: {
        //mode: Phaser.Scale.FIT,
        //autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    backgroundColour: '#000000',
    pixelArt: true,
    scene: [preloadScene, Instruction1, main, world, world2, world3, win]
};
var game = new Phaser.Game(config);