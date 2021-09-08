class PlayerArrow {
        constructor(x,y,width,height){
            var options={
                friction:1.0,
                density:1.0,
                isStatic:true
            }
            this.width=width;
            this.height=height;
            this.body=Bodies.rectangle(x,y,width,height,options);
            this.image=loadImage("./assets/arrow.png");
            World.add(world,this.body);
        }
        display() {
            var pos = this.body.position;
            var angle = this.body.angle;

            push();
            translate(pos.x,pos.y);
            rotate (angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }

        shoot() {
            //console.log("shooting");
            var vel = p5.Vector.fromAngle(playerArcher.angle-300);
            vel.mult(60);
            Matter.Body.setStatic(this.body,false);
            Matter.Body.setVelocity(this.body, {x:vel.x,y:vel.y});
        }




        
}