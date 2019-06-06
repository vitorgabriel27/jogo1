var yo, xo, a=0,b=3,c;
var x = 100;
var y = 100;
var naTela = true;
function setup() {
  createCanvas(500, 500);
  yo = -random(500); 
  xo = 10
}

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;
  fill('white')
  ellipse(x, y, 50, 50);
  
  if(naTela){
    xo += 10;
  }else{
    yo = random(500); 
    xo = 10;
    naTela = true;
  }
  
  if(xo > width) {
	naTela = false;
  }
  if(dist(x,y,xo,yo)< 25+40){
    x=100;
    y=100;
    b--
    if(b <= 0){
    b = 3
    }
  }
  fill('red');
  rect(xo,yo,80,40);
  if(y > 500){
    x=100;
    y=100; 
    a++
  }
  textSize(20)
  fill('white')
  text("Vidas:"+ b,10,30)
  text("Nivel:"+ a,200,30)
  
}