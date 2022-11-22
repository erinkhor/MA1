class world3 extends Phaser.Scene {

    constructor() {
        super({ key: 'world3'});

        //put global variable here
    }

    Init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {
         // Step 1, load JSON
        this.load.tilemapTiledJSON("Map3", "assets/Map3_ERIN.tmj")
        // Step 2 : Preload any images here
        this.load.image("misc_atlasimg", "assets/misc_atlas.png")
        this.load.image("RuralJapanimg", "assets/RuralJapan_Shadows_32x 32.png")
    }

    create() {
        console.log('*** world3 scene');

        //Step 3 - Create the map from main
        let map = this.make.tilemap( {key: "Map3"})

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
        var blue = map.findObject("object",(obj) => obj.name === "blue")
        var green = map.findObject("object",(obj) => obj.name === "green")
        var orange = map.findObject("object",(obj) => obj.name === "orange")
        var purple = map.findObject("object",(obj) => obj.name === "purple")
        var red = map.findObject("object",(obj) => obj.name === "red")
        var yellow = map.findObject("object",(obj) => obj.name === "yellow")


        this.player = this.physics.add.sprite(startPoint.x,startPoint.y,"sprinkles")
        this.boba = this.physics.add.sprite(boba.x, boba.y, 'boba').play('boba');
        this.cake = this.physics.add.sprite(cake.x, cake.y, 'cake').play('cake');
        this.dango = this.physics.add.sprite(dango.x, dango.y, 'dango').play('dango');
        this.doughnut = this.physics.add.sprite(doughnut.x, doughnut.y, 'doughnut').play('doughnut');
        this.mochi = this.physics.add.sprite(mochi.x, mochi.y, 'mochi').play('mochi');
        this.sandwich = this.physics.add.sprite(sandwich.x, sandwich.y, 'sandwich').play('sandwich');
        // this.red = this.physics.add.sprite(red.x, red.y, 'red').play('red');
        this.orange = this.physics.add.sprite(orange.x, orange.y, 'orange').play('orange');
        // this.yellow = this.physics.add.sprite(yellow.x, yellow.y, 'yellow').play('yellow');
        this.green = this.physics.add.sprite(green.x, green.y, 'green').play('green');
        this.blue = this.physics.add.sprite(blue.x, blue.y, 'blue').play('blue');
        // this.purple = this.physics.add.sprite(purple.x, purple.y, 'purple').play('purple');
        window.player = this.player
        // this.player.setcolliderWorldBounds(true);

        this.physics.world.bounds.width =this.ground.width;
        this.physics.world.bounds.height =this.ground.height;

        // What will collider with what layers
        //this.physics.add.collider(mapLayer, this.player);
        this.road.setCollisionByExclusion(-1,true)
        this.physics.add.collider(this.player,this.road)

        this.physics.add.overlap(this.player, this.boba, this.collectitem, null, this);
        this.physics.add.overlap(this.player, this.cake, this.collectitem, null, this);
        this.physics.add.overlap(this.player, this.dango, this.collectitem, null, this);
        this.physics.add.overlap(this.player, this.doughnut, this.collectitem, null, this);
        this.physics.add.overlap(this.player, this.mochi, this.collectitem, null, this);
        this.physics.add.overlap(this.player, this.sandwich, this.collectitem, null, this);

        this.physics.add.overlap(this.player, this.red, this.collectpoop, null, this);
        this.physics.add.overlap(this.player, this.orange, this.collectpoop, null, this);
        this.physics.add.overlap(this.player, this.yellow, this.collectpoop, null, this);
        this.physics.add.overlap(this.player, this.green, this.collectpoop, null, this);
        this.physics.add.overlap(this.player, this.blue, this.collectpoop, null, this);
        this.physics.add.overlap(this.player, this.purple, this.collectpoop, null, this);

        // create the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();

        // camera follow player
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);
          
        this.physics.add.collider(this.player,this.item)
        this.physics.add.collider(this.player,this.poop)

        const debugGraphics = this.add.graphics().setAlpha(0,75);
    
        this.item.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
        faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        });

    } /////////////////// end of create //////////////////////////////

    update() {

        if (this.player.x > 1164 && this.player.y < 256 && this.player.y > 224) {
            console.log("Door")
            this.win();
        }
        
        if (this.player.x < 115 && this.player.y < 288 && this.player.y > 256) {
            console.log("Door2 exit")
            this.world2();

        }

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-200);
            this.player.anims.play("right", true); // walk left
        } 
        else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(200);
            this.player.anims.play("left", true);
        } 
        else if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-200);
            this.player.anims.play("back", true);
            //console.log('up');
        } 
        else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(200);
            this.player.anims.play("front", true);
            //console.log('down');
        } else {
            this.player.anims.stop();
            this.player.body.setVelocity(0, 0);
        }
    } /////////////////// end of update //////////////////////////////

    //Function to jump to world
    win(player, tile) {
        console.log("win function");
        this.scene.start("win")
    }

    world2(player, tile) {
        console.log("world2 function");
        this.scene.start("world2")
    }

    collectitem (player, item)
    {
      item.disableBody(true, true);
    }

    collectpoop (player, poop)
    {
        poop.disableBody(true, true);
        this.cameras.main.shake(300)
    }

} //////////// end of class world ////////////////////////
