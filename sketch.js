function setup() {
  createCanvas(windowWidth, windowHeight);
  
}
function draw() {
  var r=0
  background(100) ;
  r = mouseX;
 for(let i=0; i<8;i++) {
    stroke(255,0,0)
    ellipse(i*100+50,50,100+mouseX/16) ;
stroke(0,0,255)
    rect(i*100,0,100+mouseX/16)
stroke(255,255,0)
    ellipse(i*100+100,100,50)
     noFill(0)
    stroke(0)
   }
   
   ellipse(50,150,100) ;
  noFill(0)
 for(let i =0; i<16 ;i++){
  stroke(255,0,0)
  ellipse(i*100+50,150,100+mouseX/16)
  stroke(0,0,255)
  rect(i*100,100,100+mouseX/16)
  stroke(255,255,0)
  ellipse(i*100+100,200,50)
  noFill(0)
  stroke(0)
} 
for(let i =0; i<16 ;i++){
  stroke(255,0,0)
  ellipse(i*100+50,250,100+mouseX/16)
  stroke(0,0,255)
  rect(i*100,200,100+mouseX/16)
  stroke(255,255,0)
  ellipse(i*100+100,300,50)
  noFill(0)
  stroke(0)
}

  for(let i =0; i<16 ;i++){
    stroke(255,0,0)
    ellipse(i*100+50,350,100+mouseX/16)
    stroke(0,0,255)
    rect(i*100,300,100+mouseX/16)
    stroke(255,255,0)
    ellipse(i*100+100,400,50)
    noFill(0)
    stroke(0)
  
  } 
 for(let i =0; i<16 ;i++){
  stroke(255,0,0)
  ellipse(i*100+50,450,100+mouseX/16)
  stroke(0,0,255)
  rect(i*100,400,100+mouseX/16)
  stroke(255,255,0)
  ellipse(i*100+100,500,50)
  noFill(0)
  stroke(0)
}
for(let i =0; i<16 ;i++){
  stroke(255,0,0)
  ellipse(i*100+50,550,100+mouseX/16)
  stroke(0,0,255)
  rect(i*100,500,100+mouseX/16)
  stroke(255,255,0)
  ellipse(i*100+100,600,50)
  noFill(0)
  stroke(0)
}
for(let i =0; i<16 ;i++){
  stroke(255,0,0)
    ellipse(i*100+50,650,100+mouseX/16)
    stroke(0,0,255)
    rect(i*100,600,100+mouseX/16)
    stroke(255,255,0)
    ellipse(i*100+100,700,50)
    noFill(0)
    stroke(0)
  }
  for(let i =0; i<16 ;i++){
    stroke(255,0,0)
    ellipse(i*100+50,750,100+mouseX/16)
    stroke(0,0,255)
    rect(i*100,700,100+mouseX/16)
    stroke(255,255,0)
    ellipse(i*100+100,800,50)
    noFill(0)
    stroke(0)
  }
}