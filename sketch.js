// variaveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio= diametro / 2;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

// velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

// variaveis da raquete
let xRaquete = 5
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar()
  marcaPonto();
}
  function mostraBolinha(){
  circle (xBolinha,yBolinha,diametro);
  }

 function movimentoBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
 }

 function verificaColisaoBorda (){
  if (xBolinha > width ||xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha > height ||xBolinha - raio < 0) {
    velocidadeyBolinha *=-1;
}
 } 

 function mostraRaquete(x,y){
   rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
 }

 function movimentaMinhaRaquete(){
   if(keyIsDown(UP_ARROW)){
     yRaquete -= 10;
   }
   if(keyIsDown(DOWN_ARROW)){
     yRaquete += 10; 
  }
 }

  function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento &&  yBolinha - raio
      < yRaquete + raqueteAltura && yBolinha + raio >yRaquete){
  velocidadeXBolinha *= -1;
  }
}

 function colisaoMinhaRaquete (x,y){
   colidiu = collideRectCircle (x,y,raqueteComprimento,raqueteAltura,
                                xBolinha,yBolinha,raio)
   if (colidiu){
   velocidadeXBolinha *=-1;           
   }
 }

  function movimentoRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento
    /2 - 30;
    yRaqueteOponente += velocidadeYOponente
  }


 function incluiPlacar() {
   stroke(255)
   textAlign(CENTER);
   textSize(16);
   fill(255);
   text(meusPontos,278,26);
   text(pontosDoOponente, 321, 26);
 }

 function marcaPonto(){
   if (xBolinha > 580){
     pontosDoOponete += 1;
   }
 }