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
    this.load.image("room1", "assets/room1.png")
    this.load.image("room2", "assets/room2.png")
    this.load.image("Instruction1img", "assets/Instruction1.png")
    this.load.image("winimg", "assets/win.png")
    this.load.image("loseimg", "assets/lose.png")
    this.load.audio("bubblegum", "assets/bubblegum.mp3");
    // this.playeranimations
    this.load.spritesheet('sprinkles', 'assets/sprinkles.png', {frameWidth: 64, frameHeight: 64});
    this.load.spritesheet("boba", "assets/boba.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("cake", "assets/cake.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("dango", "assets/dango.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("doughnut", "assets/doughnut.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("mochi", "assets/mochi.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("sandwich", "assets/sandwich.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("fire1", "assets/fire1.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("fire2", "assets/fire2.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("fire3", "assets/fire3.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("fire4", "assets/fire4.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("fire5", "assets/fire5.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("fire6", "assets/fire6.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("fire7", "assets/fire7.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("fire8", "assets/fire8.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("wizard", "assets/wizard.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("drooling", "assets/drooling.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("shock", "assets/shock.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("cloud", "assets/cloud.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("wizard2", "assets/wizard2.png",{frameWidth:32, frameHeight:32})
    this.load.spritesheet("heart", "assets/heart.png",{frameWidth:32, frameHeight:32})
}

create() {

  console.log("*** preload scene");

  //call to update inventory
  this.time.addEvent({
    delay: 500,
    callback: updateInventory,
    callbackScope: this,
    loop: false,
  });
    
  window.bgMusic = this.sound.add("bubblegum", {loop: true}).setVolume(0.05)
  window.bgMusic.stop();
  window.bgMusic.play();

  // Add image and detect spacebar keypress
  this.add.image(0, 0, 'MainMenu1img').setOrigin(0,0);

  this.add.text(450, 520, 'Click or space to continue', { font: '24px Courier', fill: '#ffffff' });

  var spaceDown = this.input.keyboard.addKey('SPACE');
        
  this.input.on('pointerdown', function (pointer) {
      this.scene.start("room1");
      }, this);

      spaceDown.on('down', function(){
      console.log("Spacebar pressed, goto room1");
      this.scene.start("room1");
      }, this );

      var key1 = this.input.keyboard.addKey(49);
      var key2 = this.input.keyboard.addKey(50);
      var key3 = this.input.keyboard.addKey(51);
      var key4 = this.input.keyboard.addKey(52);
      var key5 = this.input.keyboard.addKey(53);
      var key6 = this.input.keyboard.addKey(54);
      var key7 = this.input.keyboard.addKey(55);
      var key8 = this.input.keyboard.addKey(56);

      key1.on('down', function(){
        this.scene.stop("preloadscene");
        this.scene.start("room1");
      }, this );

      key2.on('down', function(){
        this.scene.stop("preloadscene");
        this.scene.start("room2");
      }, this );

      key3.on('down', function(){
        this.scene.stop("preloadscene");
        this.scene.start("Instruction1");
      }, this );

      key4.on('down', function(){
        this.scene.stop("preloadscene");
        this.scene.start("world");
      }, this );

      key5.on('down', function(){
        this.scene.stop("preloadscene");
        this.scene.start("world2");
      }, this );

      key6.on('down', function(){
        this.scene.stop("preloadscene");
        this.scene.start("world3");
      }, this );

      key7.on('down', function(){
        this.scene.stop("preloadscene");
        this.scene.start("win");
      }, this );

      key8.on('down', function(){
        this.scene.stop("preloadscene");
        this.scene.start("lose");
      }, this );


        this.anims.create({
          key:'left',
          frames:this.anims.generateFrameNumbers('sprinkles',
          { start:0, end:5 }),
          frameRate:10,
          repeat:-1
        });
  
        this.anims.create({
          key:'back',
          frames:this.anims.generateFrameNumbers('sprinkles',
          { start:6, end:8 }),
          frameRate:10,
          repeat:-1
        });
  
        this.anims.create({
          key:'front',
          frames:this.anims.generateFrameNumbers('sprinkles',
          { start:9, end:11 }),
          frameRate:10,
          repeat:-1
        });
  
        this.anims.create({
          key:'right',
          frames:this.anims.generateFrameNumbers('sprinkles',
          { start:12, end:17 }),
          frameRate:10,
          repeat:-1
        });
    
        this.anims.create({
         key:'boba',
         frames:this.anims.generateFrameNumbers('boba',
         { start:0, end:1 }),
         frameRate:5,
         repeat:-1
       });

      this.anims.create({
        key:'cake',
        frames:this.anims.generateFrameNumbers('cake',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'dango',
        frames:this.anims.generateFrameNumbers('dango',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'doughnut',
        frames:this.anims.generateFrameNumbers('doughnut',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'mochi',
        frames:this.anims.generateFrameNumbers('mochi',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'sandwich',
        frames:this.anims.generateFrameNumbers('sandwich',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'fire1',
        frames:this.anims.generateFrameNumbers('fire1',
        { start:0, end:3 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'fire2',
        frames:this.anims.generateFrameNumbers('fire2',
        { start:0, end:3 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'fire3',
        frames:this.anims.generateFrameNumbers('fire3',
        { start:0, end:3 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'fire4',
        frames:this.anims.generateFrameNumbers('fire4',
        { start:0, end:3 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'fire5',
        frames:this.anims.generateFrameNumbers('fire5',
        { start:0, end:3 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'fire5',
        frames:this.anims.generateFrameNumbers('fire5',
        { start:0, end:3 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'fire6',
        frames:this.anims.generateFrameNumbers('fire6',
        { start:0, end:3 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'fire7',
        frames:this.anims.generateFrameNumbers('fire7',
        { start:0, end:3 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'fire8',
        frames:this.anims.generateFrameNumbers('fire8',
        { start:0, end:3 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'wizard',
        frames:this.anims.generateFrameNumbers('wizard',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'drooling',
        frames:this.anims.generateFrameNumbers('drooling',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'shock',
        frames:this.anims.generateFrameNumbers('shock',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'sprinkles',
        frames:this.anims.generateFrameNumbers('sprinkles',
        { start:0, end:5 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'cloud',
        frames:this.anims.generateFrameNumbers('cloud',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
      });

      this.anims.create({
        key:'wizard2',
        frames:this.anims.generateFrameNumbers('wizard2',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
      });
}

} // end of class