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