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

}

} // end of class