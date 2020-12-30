var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var gameState="PLAY";
//var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var turn =0;
var particle;

function setup() {
  createCanvas(800, 740);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  textSize(20)
  text("Score : "+score,20,30);
  ground.display();

    push();
    stroke("yellow");   
    strokeWeight(4);
    line(0,430,800,430);
    pop();

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));

     score++;
   }*/

   mousePressed();
 particle.display();
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   //Texts
   for (var a=20; a<340; a=a+80){
    text(500,a,530);
   }

   for (var b=340; b<580; b=b+80){
    text(100, b, 530);
  }

  for (var c=580; c<780; c=c+80){
    text(200,c,530);
  }
}

function mousePressed(){
if (gameState!=="END"){
turn++;
particle=new Particle(mouseX,10,10,10);
}
/*if (keyCode===32){
  gameState="FALLING";
  Matter.Body.setStatic(particle.body, false);
}*/
}