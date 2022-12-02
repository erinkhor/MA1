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
    var boba = map.findObject("object",(obj) => obj.name === "boba")
    var cake = map.findObject("object",(obj) => obj.name === "cake")
    var dango = map.findObject("object",(obj) => obj.name === "dango")
    var doughnut = map.findObject("object",(obj) => obj.name === "doughnut")
    var mochi = map.findObject("object",(obj) => obj.name === "mochi")
    var sandwich = map.findObject("object",(obj) => obj.name === "sandwich")
    var fire1 = map.findObject("object",(obj) => obj.name === "fire1")
    var fire2 = map.findObject("object",(obj) => obj.name === "fire2")
    var fire3 = map.findObject("object",(obj) => obj.name === "fire3")
    var fire4 = map.findObject("object",(obj) => obj.name === "fire4")
    var fire5 = map.findObject("object",(obj) => obj.name === "fire5")
    var fire6= map.findObject("object",(obj) => obj.name === "fire6")
    var fire7 = map.findObject("object",(obj) => obj.name === "fire7")
    var fire8 = map.findObject("object",(obj) => obj.name === "fire8")
    
    
    this.player = this.physics.add.sprite(startPoint.x,startPoint.y,"sprinkles")
    this.boba = this.physics.add.sprite(boba.x, boba.y, 'boba').play('boba');
    this.cake = this.physics.add.sprite(cake.x, cake.y, 'cake').play('cake');
    this.dango = this.physics.add.sprite(dango.x, dango.y, 'dango').play('dango');
    this.doughnut = this.physics.add.sprite(doughnut.x, doughnut.y, 'doughnut').play('doughnut');
    this.mochi = this.physics.add.sprite(mochi.x, mochi.y, 'mochi').play('mochi');
    this.sandwich = this.physics.add.sprite(sandwich.x, sandwich.y, 'sandwich').play('sandwich');
    this.fire1 = this.physics.add.sprite(fire1.x, fire1.y, 'fire1').play('fire1');
    this.fire2 = this.physics.add.sprite(fire2.x, fire2.y, 'fire2').play('fire2');
    this.fire3 = this.physics.add.sprite(fire3.x, fire3.y, 'fire3').play('fire3');
    this.fire4 = this.physics.add.sprite(fire4.x, fire4.y, 'fire4').play('fire4');
    this.fire5 = this.physics.add.sprite(fire5.x, fire5.y, 'fire5').play('fire5');
    this.fire6 = this.physics.add.sprite(fire6.x, fire6.y, 'fire6').play('fire6');
    this.fire7 = this.physics.add.sprite(fire7.x, fire7.y, 'fire7').play('fire7');
    this.fire8 = this.physics.add.sprite(fire8.x, fire8.y, 'fire8').play('fire8');
    window.player = this.player

    this.physics.world.bounds.width =this.ground.width;
    this.physics.world.bounds.height =this.ground.height;

  //call to update inventory
  this.time.addEvent({
    delay: 500,
    callback: updateInventory,
    callbackScope: this,
    loop: false,
  });

    this.road.setCollisionByExclusion(-1,true)
    this.physics.add.collider(this.player,this.road)

    this.physics.add.overlap(this.player, this.boba, this.collectitem, null, this);
    this.physics.add.overlap(this.player, this.cake, this.collectitem, null, this);
    this.physics.add.overlap(this.player, this.dango, this.collectitem, null, this);
    this.physics.add.overlap(this.player, this.doughnut, this.collectitem, null, this);
    this.physics.add.overlap(this.player, this.mochi, this.collectitem, null, this);
    this.physics.add.overlap(this.player, this.sandwich, this.collectitem, null, this);

    this.physics.add.overlap(this.player, [this.fire1, this.fire2, this.fire3, this.fire4, this.fire5, this.fire6, this.fire7, this.fire8], this.collectfire, null, this);
    
    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);
      
      this.physics.add.collider(this.player,this.item)
      this.physics.add.collider(this.player,this.fire1)
      this.physics.add.collider(this.player,this.fire2)
      this.physics.add.collider(this.player,this.fire3)
      this.physics.add.collider(this.player,this.fire4)
      this.physics.add.collider(this.player,this.fire5)
      this.physics.add.collider(this.player,this.fire6)
      this.physics.add.collider(this.player,this.fire7)
      this.physics.add.collider(this.player,this.fire8)

    const debugGraphics = this.add.graphics().setAlpha(0,75);

    this.item.renderDebug(debugGraphics, {
    tileColor: null,
    collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
    faceColor: new Phaser.Display.Color(40, 39, 37, 255)
    });

    //start another scene in parallel
    this.scene.launch("showInventory");

  } /////////////////// end of create //////////////////////////////

  update() {

    if (this.player.x > 1169 && this.player.x < 1216 && this.player.y < 255 && this.player.y > 160) {
      console.log("Door")
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

  collectitem (player, item)
    {
      item.disableBody(true, true);
      window.food --
      updateInventory.call(this)
      if (window.food == 0){
        console.log("win")
        this.scene.stop("showInventory")
      this.scene.start("win");
      }
    }

  collectfire (player, fire)
    {
        fire.disableBody(true, true);
        this.cameras.main.shake(300)
        window.heart --
        updateInventory.call(this)
        if (window.heart == 0){
          console.log("lose")
        this.scene.stop("showInventory")
        this.scene.start("lose");
        }
    }

} //////////// end of class world ////////////////////////
