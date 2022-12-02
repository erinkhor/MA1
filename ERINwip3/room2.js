class room2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'room2' });
    }

preload() {
    // this.mapmade with Tiled in JSON format
    this.load.image("room2img", "assets/room2.png")
}

create() {
    
    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'room2img').setOrigin(0,0);

    this.add.sprite(930,460, 'shock').setScale(7).play('shock');
    this.add.sprite(150,460, 'fire1').setScale(7).play('fire1');
    this.add.sprite(250,400, 'fire2').setScale(7).play('fire2');
    this.add.sprite(350,460, 'fire3').setScale(7).play('fire3');
    this.add.sprite(450,400, 'fire4').setScale(7).play('fire4');
    this.add.sprite(550,460, 'fire5').setScale(7).play('fire5');
    this.add.sprite(210,300, 'fire6').play('fire6');
    this.add.sprite(240,300, 'cake').play('cake');
    this.add.sprite(270,300, 'fire7').play('fire7');
    this.add.sprite(350,300, 'fire8').play('fire8');
    this.add.sprite(380,300, 'dango').play('dango');
    this.add.sprite(410,300, 'fire8').play('fire8');

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    this.input.on('pointerdown', function (pointer) {
        this.scene.start("Instruction1");
        }, this);

    spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto Instruction1");
        this.scene.start("Instruction1");
        }, this );

}

} // end of class