class showInventory extends Phaser.Scene {

    constructor() {
        super({
            key: 'showInventory',
            active: false
        });
    }

    // incoming data from other scene
    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {}

    create() {

        this.scene.bringToTop(showInventory)

        // Setup heart and food but visible to false
        this.heart1 = this.add.image (70,50,'heart').setScale(1.5).setScrollFactor(0).setVisible(false)
        this.heart2 = this.add.image (120,50,'heart').setScale(1.5).setScrollFactor(0).setVisible(false)
        this.heart3 = this.add.image (170,50,'heart').setScale(1.5).setScrollFactor(0).setVisible(false)

        // this.boba = this.add.image (70,100,'boba').setScrollFactor(0).setVisible(false)
        // this.cake = this.add.image (250,50,'cake').setScrollFactor(0).setVisible(false)
        // this.dango = this.add.image (300,50,'dango').setScrollFactor(0).setVisible(false)
        // this.sandwich = this.add.image (350,50,'sandwich').setScrollFactor(0).setVisible(false)
        // this.mochi = this.add.image (400,50,'mochi').setScrollFactor(0).setVisible(false)
        // this.doughnut = this.add.image (450,50,'doughnut').setScrollFactor(0).setVisible(false)
        // Recv an event, call the method
        this.events.on('inventory', this.updateScreen, this)
    }

    update() {
    }

    updateScreen(data) {
         console.log('Received event inventory', data)

         switch ( data.heart ) {

            case 3: 
                this.heart1.setVisible(true)
                this.heart2.setVisible(true)
                this.heart3.setVisible(true)
                break;

            case 2:
                this.heart1.setVisible(true)
                this.heart2.setVisible(true)
                this.heart3.setVisible(false)
                break;

            case 1:
                this.heart1.setVisible(true)
                this.heart2.setVisible(false)
                this.heart3.setVisible(false)
                break;
             
            case 0:
                this.heart1.setVisible(false)
                this.heart2.setVisible(false)
                this.heart3.setVisible(false)
                break;    

            default:
            break;
        }

        // switch ( data.food ) {

        //     case 6:
        //         this.boba.setVisible(true)
        //         this.cake.setVisible(true)
        //         this.dango.setVisible(true)
        //         this.sandwich.setVisible(true)
        //         this.mochi.setVisible(true)
        //         this.doughnut.setVisible(true)
        //         break;
            
        //     case 5:
        //         this.boba.setVisible(true)
        //         this.cake.setVisible(true)
        //         this.dango.setVisible(true)
        //         this.sandwich.setVisible(true)
        //         this.mochi.setVisible(true)
        //         this.doughnut.setVisible(false)
        //         break;
                
        //     case 4:
        //         this.boba.setVisible(true)
        //         this.cake.setVisible(true)
        //         this.dango.setVisible(true)
        //         this.sandwich.setVisible(true)
        //         this.mochi.setVisible(false)
        //         this.doughnut.setVisible(false)
        //         break;

        //     case 3:
        //         this.boba.setVisible(true)
        //         this.cake.setVisible(true)
        //         this.dango.setVisible(true)
        //         this.sandwich.setVisible(false)
        //         this.mochi.setVisible(false)
        //         this.doughnut.setVisible(false)
        //         break;    

        //     case 2:
        //         this.boba.setVisible(true)
        //         this.cake.setVisible(true)
        //         this.dango.setVisible(false)
        //         this.sandwich.setVisible(false)
        //         this.mochi.setVisible(false)
        //         this.doughnut.setVisible(false)
        //         break;    

        //     case 1:
        //         this.boba.setVisible(true)
        //         this.cake.setVisible(false)
        //         this.dango.setVisible(false)
        //         this.sandwich.setVisible(false)
        //         this.mochi.setVisible(false)
        //         this.doughnut.setVisible(false)
        //         break;  
                
        //         default: 
        //         break;
        // }
        
    }
}