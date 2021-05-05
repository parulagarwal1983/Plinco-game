class Particles{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.x = x;
        this.y = y;
        this.radius = 7;
        this.body = Bodies.circle(this.x,this.y,7,options);
        this.color = rgb(random(0,250),random(0,250),random(0,250));
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);      
        ellipse(pos.x,pos.y,7);
        pop();
    }
}