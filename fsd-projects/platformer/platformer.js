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
      toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(0,635,1400,200,"brown")
      createPlatform(600,515,50,10)
      createPlatform(740,395,50,10)
      createPlatform(575,285,50,10)
      createPlatform(950,395,50,10)
      createPlatform(0,550,200,10,"blue")
      createPlatform(200,185,1000,10,"blue")
      createPlatform(1350,515,50,5)
      createPlatform(1275,395,50,5)
      createPlatform(1275,285,50,5)
      createPlatform(195,185,10,375,"blue")
      createPlatform(10,285,100,10,"blue")
      createPlatform(95,395,100,10,"blue")
      createCollectable("diamond",955,355,0.5,0.5)
      createCollectable("diamond",580,245,0.5,0.5)
      createCollectable("diamond",100,500,0.5,0.5)
      
      createCannon("left",10,1000)
      // createCannon("left",140,1000)
      createCannon("left",240,1000)
      createCannon("left",360,1000)
      createCannon("left",470,1000)
      createCannon("top",358,1500)
      createCannon("top",558,1500)
      createCannon("top",758,1500)
      createCannon("top",958,1500)
      createCannon("top",1158,1500)
    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
