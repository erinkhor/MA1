class Instruction1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Instruction1' });
    }

preload() {
    // this.mapmade with Tiled in JSON format
    this.load.image("Instruction1img", "assets/Instruction1.png")
}

create() {
    
    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'Instruction1img').setOrigin(0,0);

    this.add.sprite(400,412, 'fire1').play('fire1');
    this.add.sprite(440,412, 'fire1').play('fire1');
    this.add.sprite(480,412, 'fire1').play('fire1');
    this.add.sprite(550,412, 'sprinkles').play('sprinkles');
    this.add.sprite(865,420, 'mochi').play('mochi');
    this.add.sprite(900,420, 'dango').play('dango');
    this.add.sprite(930,420, 'boba').play('boba');
    this.add.sprite(965,420, 'sandwich').play('sandwich');
    this.add.sprite(1005,420, 'cake').play('cake');
    this.add.sprite(1040,420, 'doughnut').play('doughnut');


    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    this.input.on('pointerdown', function (pointer) {
        this.scene.start("world");
        }, this);

    spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto world");
        this.scene.start("world");
        }, this );

}

} // end of class