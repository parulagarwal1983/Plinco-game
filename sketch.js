const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,600,width,20);

  for(var d = 0;d <= width;d = d + 80){
    divisions.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
  }

  for(var p = 0; p <= width; p = p + 20){
    plinkos.push(new Circle(p,35));
  }

  for(var p = 10; p <= width; p = p + 20){
    plinkos.push(new Circle(p,65));
  }

  for(var p = 0; p <= width; p = p + 20){
    plinkos.push(new Circle(p,95));
  }

  for(var p = 10; p <= width; p = p + 20){
    plinkos.push(new Circle(p,125));
  }
}

function draw() {
  background("black");  

  for(var d = 0 ; d < divisions.length; d++){
    divisions[d].display();
  }

  for(var p = 0 ; p < plinkos.length ; p++){
    plinkos[p].display();
  }

  if(frameCount % 30 ===0){
    particles.push(new Particles(random(110,130),10));
  }

  for(var b = 0; b < particles.length ; b++){
    particles[b].display();
  }

  ground.display();
  
  drawSprites();
}