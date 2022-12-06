////////////////////////////////////////////////////////
//
// access this function using updateInventory.call(this)
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
    function updateInventory() {
    console.log("*** updateInventory()")
    // Emit events showInventory
    this.inventory = {}
    this.inventory.heart = window.heart
    this.inventory.food = window.food
  
    console.log('*** updateInventory() Emit event', this.inventory)
    this.invEvent = (event, data) =>  { this.scene.get('showInventory').events.emit(event, data); }
    this.invEvent("inventory", this.inventory);
  //}
  
////////////////////////////////////////////////////////
//
// access this function using guardCaught
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
  function globalFunctions(player,guard) {
      console.log("*** globalFunctions");
  
      // Shake screen
    this.cameras.main.shake(300);
  
      window.fire--
      guard.disableBody(false, true);
      //this.updateInventory()
      updateInventory.call(this)
  
    if (window.heart == 0){
      this.scene.start("lose");
      this.loseSnd.play();
    }

    window.food--
    guard.disableBody(false, true);
    //this.updateInventory()
    updateInventory.call(this)

  if (window.food == 0){
    this.scene.start("win");
    this.loseSnd.play();
  }
  }
}