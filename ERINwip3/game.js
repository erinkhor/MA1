var config = {
    type: Phaser.AUTO,
    width: 32 * 40,
    height: 32 * 20,
    
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColour: '#000000',
    pixelArt: true,
    scene: [preloadScene, room1, room2, Instruction1, main, world, world2, world3, win, showInventory, lose]
};
var game = new Phaser.Game(config);

window.food = 18
window.heart = 3