class Shuriken{

	constructor(x,y){
		var options={
			isStatic:false,
			friction:1,
			density:1.2,
			restitution:0.5
			}
	this.x = x;
	this.y = y;
    this.width = 50;
    this.height = 50;
    this.image = loadImage("images/shuriken.png");
    this.smokeImage = loadImage("images/smoke.png");
    this.trajectory =[];
	this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
	World.add(world, this.body);

	}


	display(){
			var pos=this.body.position;		
			push()
			translate(pos.x,pos.y);
			fill(255,0,255)
			imageMode(CENTER);
			rectMode(CENTER)
			image(this.image, 0, 0, 50, 50)
			pop()

      // if pulled on the other side then no smoke is produced
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
	}
}
