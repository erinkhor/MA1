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
    scene: [preloadScene, main, world, world2]
};
var game = new Phaser.Game(config);