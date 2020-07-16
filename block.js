class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibilty = 255
        this.color = color;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<2){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.visibilty = this.visibilty - 5;
          pop();
        }
      }
    }
    function score(){
      if(this.Visiblity<0 && this.Visiblity>-105){
        score = score + 2;
      }
    }
    