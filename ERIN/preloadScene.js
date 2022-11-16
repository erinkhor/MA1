class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

preload() {
    // this.mapmade with Tiled in JSON format
    this.load.tilemapTiledJSON('Map1', 'assets/Map1_ERIN.tmj');
    this.load.image("misc_atlasimg", "assets/misc_atlas.png")
    this.load.image("RuralJapanimg", "assets/RuralJapan_Shadows_32x 32.png")
    // this.playeranimations
    // sprinkles is 64x64 9 frames per animation
    this.load.spritesheet('sprinkles', 'assets/sprinkles.png', {frameWidth: 64, frameHeight: 64});

}

create() {

    this.add.text(10, 10, 'This is preload Scene', { font: '24px Courier', fill: '#FFFF00' });
    this.add.text(10, 34, 'Click or space to continue', { font: '24px Courier', fill: '#FFFF00' });

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    this.input.on('pointerdown', function (pointer) {
        this.scene.start("world");
        }, this);

    spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto world");
        this.scene.start("world");
        }, this );

        this.anims.create({
          key:'left',
          frames:this.anims.generateFrameNumbers('sprinkles',
          { start:0, end:5 }),
          frameRate:20,
          repeat:-1
      });
  
      this.anims.create({
          key:'back',
          frames:this.anims.generateFrameNumbers('sprinkles',
          { start:6, end:8 }),
          frameRate:20,
          repeat:-1
      });
  
      this.anims.create({
          key:'front',
          frames:this.anims.generateFrameNumbers('sprinkles',
          { start:9, end:11 }),
          frameRate:20,
          repeat:-1
      });
  
      this.anims.create({
          key:'right',
          frames:this.anims.generateFrameNumbers('sprinkles',
          { start:12, end:17 }),
          frameRate:20,
          repeat:-1
      });

}

} // end of class