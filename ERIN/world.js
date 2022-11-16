class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("Map1", "assets/Map1_ERIN.tmj")
    // Step 2 : Preload any images here
    this.load.image("misc_atlasimg", "assets/misc_atlas.png")
    this.load.image("RuralJapanimg", "assets/RuralJapan_Shadows_32x 32.png")
    this.load.spritesheet("sprinkles", "assets/sprinkles.png",{frameWidth:64, frameHeight:64})
  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap( {key: "Map1"})

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let buildingTiles = map.addTilesetImage("RuralJapan", "RuralJapanimg");
    let streetTiles = map.addTilesetImage("misc_atlas", "misc_atlasimg");

    // Step 5  create an array of tiles
    let tilesArray = [buildingTiles, streetTiles];

    // Step 6  Load in layers by layers
    this.ground = map.createLayer("ground", tilesArray, 0, 0)
    this.road = map.createLayer("road", tilesArray, 0, 0)
    this.item = map.createLayer("item", tilesArray, 0, 0)
    this.building = map.createLayer("building", tilesArray, 0, 0)


    // Add main player here with physics.add.sprite
    var startPoint = map.findObject("object",(obj) => obj.name === "start")
    this.player = this.physics.add.sprite(startPoint.x,startPoint.y,"sprinkles")
    window.player = this.player
    // this.player.setcolliderWorldBounds(true);

    this.physics.world.bounds.width =this.ground.width;
    this.physics.world.bounds.height =this.ground.height;

    // Add time event / movement here
    // this.timedEvent = this.timedEvent.addEvent({
    //   delay: 1000,
    //   callback: this.delayOneSec,
    //   callbackScope: this,
    //   loop: false
    // })

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider with what layers
    //this.physics.add.collider(mapLayer, this.player);
    this.road.setCollisionByExclusion(-1,true)
    this.physics.add.collider(this.player,this.road)
    
    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);
      
      this.physics.add.collider(this.player,this.item)

    const debugGraphics = this.add.graphics().setAlpha(0,75);

    this.item.renderDebug(debugGraphics, {
    tileColor: null,
    collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
    faceColor: new Phaser.Display.Color(40, 39, 37, 255)
    });
 
  } /////////////////// end of create //////////////////////////////

  update() {

    if (this.player.x > 1183 && this.player.x < 1216 && this.player.y <224) {
      console.log("Door1")
      this.world2();
    }

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.anims.play("right", true); // walk left
    } 
    else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.anims.play("left", true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-200);
      this.player.anims.play("back", true);
      //console.log('up');
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(200);
      this.player.anims.play("front", true);
      //console.log('down');
    } else {
      this.player.anims.stop();
      this.player.body.setVelocity(0, 0);
    }
  } /////////////////// end of update //////////////////////////////

  // Function to jump to room1
  world2(player, tile) {
    console.log("world2 function");
    this.scene.start("world2")
  }

} //////////// end of class world ////////////////////////
