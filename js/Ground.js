class Ground {


    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      // pos = this.body.position;
    }

    // Changing the position
    changeGrPosition(x,y){  
      this.body.position.x = x;
      this.body.position.y = y;
    }

    display(){
      myColor = "blue";
      var pos = this.body.position;
      rectMode(CENTER);
      fill(myColor);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };