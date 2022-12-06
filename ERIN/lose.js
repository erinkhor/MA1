class lose extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'lose' });
    }

preload() {
    // this.mapmade with Tiled in JSON format
    this.load.image("loseimg", "assets/lose.png")
}

create() {

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'loseimg').setOrigin(0,0);

    this.add.sprite(540,250, 'cloud').setScale(7).play('cloud');
    this.add.sprite(930,460, 'shock').setScale(7).play('shock');
    this.add.sprite(252,309, 'wizard2').setScale(5).play('wizard2');
    this.add.sprite(410,220, 'sprinkles').play('sprinkles');
    this.add.sprite(480,223, 'mochi').play('mochi');
    this.add.sprite(520,223, 'fire1').play('fire1');
    this.add.sprite(560,223, 'sandwich').play('sandwich');
    this.add.sprite(600,223, 'fire1').play('fire1');
    this.add.sprite(640,223, 'doughnut').play('doughnut');
    this.add.sprite(680,223, 'fire1').play('fire1');
    this.add.sprite(930,460, 'shock').setScale(7).play('shock');
    this.add.sprite(150,460, 'fire1').setScale(7).play('fire1');
    this.add.sprite(250,400, 'fire2').setScale(7).play('fire2');
    this.add.sprite(350,460, 'fire3').setScale(7).play('fire3');
    this.add.sprite(450,400, 'fire4').setScale(7).play('fire4');
    this.add.sprite(550,460, 'fire5').setScale(7).play('fire5');

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