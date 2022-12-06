class win extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'win' });
    }

preload() {
    // this.mapmade with Tiled in JSON format
    this.load.image("winimg", "assets/win.png")
}

create() {

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'winimg').setOrigin(0,0);

    this.add.sprite(540,250, 'cloud').setScale(7).play('cloud');
    this.add.sprite(930,460, 'drooling').setScale(7).play('drooling');
    this.add.sprite(252,309, 'wizard2').setScale(5).play('wizard2');
    this.add.sprite(410,220, 'sprinkles').play('sprinkles');
    this.add.sprite(480,223, 'mochi').play('mochi');
    this.add.sprite(520,223, 'dango').play('dango');
    this.add.sprite(560,223, 'sandwich').play('sandwich');
    this.add.sprite(600,223, 'cake').play('cake');
    this.add.sprite(640,223, 'doughnut').play('doughnut');
    this.add.sprite(680,223, 'boba').play('boba');

    this.add.text(820, 60, 'Click or space to replay', { font: '24px Courier', fill: '#ffffff' });
    this.add.text(50, 580, 'BG MUSIC: Bubblegum K.K. - Qumu', { font: '18px Courier', fill: '#ffffff' });
    this.add.text(50, 600, 'GAME BY: Erin.K', { font: '18px Courier', fill: '#ffffff' });

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    this.input.on('pointerdown', function (pointer) {
        this.scene.start("preloadScene");
        }, this);

    spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto preloadScene");
        window.bgMusic.stop()
        this.scene.start("preloadScene");
        }, this );

}

} // end of class