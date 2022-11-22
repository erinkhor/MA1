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
    this.load.image("MainMenu1img", "assets/MainMenu1.png")
    this.load.image("Instruction1img", "assets/Instruction1.png")
    this.load.image("winimg", "assets/win.png")
    this.load.audio("bubblegum", "assets/bubblegum.mp3");
    // this.playeranimations
    // sprinkles is 64x64 9 frames per animation
    this.load.spritesheet('sprinkles', 'assets/sprinkles.png', {frameWidth: 64, frameHeight: 64});
    this.load.spritesheet("boba", "assets/boba.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("cake", "assets/cake.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("dango", "assets/dango.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("doughnut", "assets/doughnut.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("mochi", "assets/mochi.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("sandwich", "assets/sandwich.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("blue", "assets/blue.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("green", "assets/green.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("orange", "assets/orange.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("purple", "assets/purple.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("red", "assets/red.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("yellow", "assets/yellow.png",{frameWidth:32, frameHeight:32})
}

create() {

  console.log("*** preload scene");
    
  // this.bgMusic = this.sound.add("bgMusic", {loop: true}).setVolume(0.5)
  // this.bgMusic.stop();

  // this.bgMusic.play();

  // Add image and detect spacebar keypress
  this.add.image(0, 0, 'MainMenu1img').setOrigin(0,0);

  this.add.text(450, 520, 'Click or space to continue', { font: '24px Courier', fill: '#ffffff' });

  var spaceDown = this.input.keyboard.addKey('SPACE');
        
  this.input.on('pointerdown', function (pointer) {
      this.scene.start("Instruction1");
      }, this);

      spaceDown.on('down', function(){
      console.log("Spacebar pressed, goto Instruction1");
      this.scene.start("Instruction1");
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
    
        this.anims.create({
         key:'boba',
         frames:this.anims.generateFrameNumbers('boba',
         { start:0, end:1 }),
         frameRate:10,
         repeat:-1
       });

      this.anims.create({
        key:'cake',
        frames:this.anims.generateFrameNumbers('cake',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

      this.anims.create({
        key:'dango',
        frames:this.anims.generateFrameNumbers('dango',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

      this.anims.create({
        key:'doughnut',
        frames:this.anims.generateFrameNumbers('doughnut',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

      this.anims.create({
        key:'mochi',
        frames:this.anims.generateFrameNumbers('mochi',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

      this.anims.create({
        key:'sandwich',
        frames:this.anims.generateFrameNumbers('sandwich',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

      this.anims.create({
        key:'blue',
        frames:this.anims.generateFrameNumbers('blue',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

      this.anims.create({
        key:'green',
        frames:this.anims.generateFrameNumbers('green',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

      this.anims.create({
        key:'orange',
        frames:this.anims.generateFrameNumbers('orange',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

      this.anims.create({
        key:'purple',
        frames:this.anims.generateFrameNumbers('purple',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

      this.anims.create({
        key:'red',
        frames:this.anims.generateFrameNumbers('red',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

      this.anims.create({
        key:'yellow',
        frames:this.anims.generateFrameNumbers('yellow',
        { start:0, end:1 }),
        frameRate:10,
        repeat:-1
      });

}

} // end of class