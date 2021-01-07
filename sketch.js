const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box ,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(200,380,400,20)
   box=new Box(200,100,40,40)
   box2=new Box(180,50,40,40)
}

function draw(){
    background(0);
    Engine.update(engine);
   ground.display()
   box.display()
   box2.display()

}