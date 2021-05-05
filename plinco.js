class Circle{
    constructor(x,y){
        var options ={
            isStatic : true
        }
        this.radius = 7;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,7,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(pos.x,pos.y,7);
        pop();
    }
}