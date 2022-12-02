class room1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'room1' });
    }

preload() {
    // this.mapmade with Tiled in JSON format
    this.load.image("room1img", "assets/room1.png")
}

create() {
    
    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'room1img').setOrigin(0,0);

    this.add.sprite(540,250, 'wizard').setScale(7).play('wizard');
    this.add.sprite(930,460, 'drooling').setScale(7).play('drooling');
    this.add.sprite(210,300, 'fire1').play('fire1');
    this.add.sprite(240,300, 'cake').play('cake');
    this.add.sprite(270,300, 'fire2').play('fire2');
    this.add.sprite(350,300, 'fire3').play('fire3');
    this.add.sprite(380,300, 'dango').play('dango');
    this.add.sprite(410,300, 'fire4').play('fire4');

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    this.input.on('pointerdown', function (pointer) {
        this.scene.start("room2");
        }, this);

    spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto room2");
        this.scene.start("room2");
        }, this );

}

} // end of class