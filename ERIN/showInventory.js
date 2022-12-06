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
        
    }
}