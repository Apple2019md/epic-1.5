class ComputerBase{
    constructor(x, y, width, height){
    
    var options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.w = width;
    this.image = loadImage("base2.png");
    this.h = height;
    World.add(world, this.body);
   
    }
    display(){
    let pos = this.body.position; 


     push();
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
}