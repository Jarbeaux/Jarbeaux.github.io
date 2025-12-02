$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
      //  toggleGrid();


    // TODO 2 - Create Platforms
      // createPlatform(0,635,1400,200,"brown")
      // createPlatform(600,515,50,10)
      // createPlatform(740,395,50,10)
      // createPlatform(575,285,50,10)
      // createPlatform(950,395,50,10)
      // createPlatform(0,550,200,10,"blue")
      // createPlatform(200,185,1000,10,"blue")
      // createPlatform(1350,515,50,5)
      // createPlatform(1275,395,50,5)
      // createPlatform(1275,285,50,5)
      // createPlatform(195,185,10,375,"blue")
      // createPlatform(10,285,100,10,"blue")
      // createPlatform(95,395,100,10,"blue")
      // createCollectable("diamond",955,355,0.5,0.5)
      // createCollectable("diamond",580,245,0.5,0.5)
      // createCollectable("diamond",100,500,0.5,0.5)
      
      // createCannon("left",10,1000)
      // createCannon("left",140,1000)
      // createCannon("left",240,1000)
      // createCannon("left",360,1000)
      // createCannon("left",470,1000)
      // createCannon("top",358,1500)
      // createCannon("top",558,1500)
      // createCannon("top",758,1500)
      // createCannon("top",958,1500)
      // createCannon("top",1158,1500)
    //12/1/25 platforming torture part 2
for (let i = 0; i < 200; i++) {
  const x = 100 + i * 1;
  const y = 739 - i;
  createPlatform(x, y, 2, y);
}
createPlatform(300,539,100,539)
createPlatform(400,700,1000,700,"red")
createPlatform(600,475,75,10)
createPlatform(863.5,450,75,100)
createPlatform(863.5,675,75,200)
createPlatform(1063.5,610,75,10)
createPlatform(1163.5,510,75,10)
createPlatform(1300,450,200,350)
createPlatform(600,350,75,10)
createPlatform(425,275,75,10)
createPlatform(0,200,225,10)         
// cannons pt 2

createCannon("top",1059,750)
createCannon("top",859,750)  
createCannon("top",609,750)
  // collectables
createCollectable("database",80,160) 
createCollectable("database",880,635)
createCollectable("database",1330,410)    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
