let frites = [];
let t;
let tFinal;
let tIssou;
let rempli;
let taille;
let objectif;

function setup() {
  createCanvas(600, 850);
  
  //thomas
  imageMode(CENTER);
  imageGobelet = loadImage("Gobelet.png");
  imageDevant = loadImage("Devant.png");
  imageFinie = loadImage("Frites.png");
  gobelet = new container();
  
  logo = new gobeletDevant();
  
  rempli = 10;
  taille = 1000;
  dimTaille = 100;
  objectif = 10;
  
  imageCroustillant = loadImage("motif_Croustillant.png");
  imageFondant = loadImage("motif_Fondant.png");
  
  for (i=0; i<100; i++){
    frites[i] = new frite(i);
  }
}

function draw() {
  background('#EBAB7B');
  
  affichage();
  
  t = int(millis()/1000+1);
  
  if (rempli == objectif){
    strokeWeight(3);
    stroke(255)
    fill(0,0,0,0);
    circle(width/2,height/2,taille);
    taille=taille+dimTaille;//taille+15;
    if (dimTaille > 1) {
      dimTaille = dimTaille -0.2;
    }
    noStroke();
    image(imageFinie, width/2, height/2-100, imageFinie.width, imageFinie.height);
    
    if (keyIsPressed && key == "Enter"){
      rempli=0;
      taille=0;
      dimTaille = 20;
    }
  }
  
  else {
    gobelet.afficher();
    gobelet.bouger();
  
    genererFrites();
  
    logo.dessiner();
    logo.bouger();
    
    
    gobelet.selectionner(true);
    logo.selectionner(true);
  }
}

function genererFrites(){
    for (i=0;i<frites.length;i++){
      if (frites[i].y > -200){
        frites[i].afficher();
        frites[i].suivre();
        if (keyIsPressed == false && rempli != objectif){
          frites[i].tomber();
        }
      }
      
      if (keyIsPressed && rempli != objectif){
        frites[i].tomber();
      }     
  }
}

function mousePressed(){
  gobelet.tempX = mouseX - gobelet.x;
  gobelet.tempY = mouseY - gobelet.y;   
  logo.tempX = mouseX - logo.x;
  logo.tempY = mouseY - logo.y;
}