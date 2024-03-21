let a=0;
let arm=300


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(252, 164, 214);
  strokeWeight(0);
  fill(134, 195, 209);


  //x, y, w, h, radius
  rect(245,370,100,200,5);
  ellipse(290,300,200,200);
  
  //x1,y1,x2,y2
  line();
  
  //x1,y1,x2,y2,x3,y3
  fill(134, 195, 209);

  rect(220,560,30,30);
  rect(340,560,30,30);
    
  strokeWeight(2)
  ellipse(300,152,100,100);
  ellipse(200,190,100,100);
  ellipse(400,200, 100, 100);
   
  fill(145, 17, 26);
  ellipse(290,300,35,35);
  
  fill(15,15,15);
  ellipse(300,152,50,50);
  ellipse(200,190,50,50);
  ellipse(400,200,50,50);
  
  strokeWeight(3)
  stroke(45, 63, 84);
  line(245,400,150,arm);
  line(345,400,450,arm);
  arm=arm +1
   console.log(arm);
  if (arm==500)
    {
      arm = 300
    }
  
  strokeWeight(0)
  fill(207, 185, 23);
  ellipse(575,45,150,150);
  
  
  rotate(radians(45));
  rect(100,0,40);
  
  
  
  
  
  
  
}