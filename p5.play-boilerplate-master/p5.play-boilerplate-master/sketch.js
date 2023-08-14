var fundo;

//grupo
var tiros;
var tirosC;
var tirosZ;

//player
var cleitinho;

//ajudante
var ze_do_morro;


//inimigos: atiradores 
var ze_da_manga;
var cleitinha;

//inimigos: normais
var jorginho;
var cleitao;

var Pontos;
 var vidas
function preload()
{
  fundo = loadImage("garena.webp");


}

function setup() 
{

  //limites da tela: quanto mais para esquerda, perto do 0 | qunato mais para a direita mais perto do 800
  createCanvas(800,400);
  
  Pontos = 0;
  
  cleitinho = createSprite(40, 200, 50, 50);
  cleitinho.shapeColor = '#ff0000';


  //aparecer aos pouquinhos, o jogo tem final

  //ATIRADORES (movem no eixo Y)
  //ze_da_manga (x= 800 y= 100)
  ze_da_manga = createSprite(780,20,30,30);
  ze_da_manga.shapeColor = "#008b8b";


  //cleitinha; (x= 800 y= 270)
  cleitinha = createSprite(780,150,30,30);
  cleitinha.shapeColor = "#00ced1";



  //NORAMIS QUE MEXEM NO EIXO X
  //jorginho;(x= 800 y= 300)
  jorginho = createSprite(800,270,30,30);
  jorginho.shapeColor = "#ffc40c";


  //cleitao;(x= 800 y= 400)
  cleitao = createSprite(800,360,40,40)
  cleitao.shapeColor = '#ffd700';
 

  tiros = new Group();
  tirosC = new Group();
  tirosZ = new Group ();


}

function draw() 
{

  background(fundo);  

  Text

  //programação condicional (SE)
  //se apertar tecla d quero que o personagem semova para cima
  if(keyDown("w"))
  {
    cleitinho.y -= 5;
  }

  if(keyDown("s"))
  {
    cleitinho.y += 5;
  }

  Tiro_Proag();
  Tiro_Ze();
  Tiro_Cleitinha();

  //Movimento dos inimigos normais
  jorginho.velocityX = -5;
  cleitao.velocityX  = -4

  if(jorginho.x <0)
  {
    jorginho.x = 800;
  }

  if(cleitao.x <0)
  {
    cleitao.x = 800;
  }


  //atingir inimigos com os tiro do protag
  if(tiros.isTouching(ze_da_manga))
  {
    //aumentar os pontos
    pontos += 1;    
    ze_da_manga.destroy();
    tirosZ.setVelocityEach(0)
  }

  //cleitinha;
  if(tiros.isTouching(cleitinha))
  {
    //aumentar os pontos
    pontos += 1;
    cleitinha.destroy();
    tirosC.setVelocityEach(0)
  }

  //jorginho

  if(tiros.isTouching(jorginho))
  {
    //aumentar os pontos

    jorginho.destroy();
  }

  if(pontos === 4)
{
  text("Parabéns voCê conseguiu ", width/2, height/2);
}

  //tiros dos 2 inimigos acertarem o jogador
  if(tirosC.isTouching(cleitinho))
  {
    //aumentar os pontos
    textSize(30);
    text('Game Over', 400,200);
     cleitinho.destroy();
     
  }
  
  if(tirosZ.isTouching(cleitinho))
  {
    //aumentar os pontos
    textSize(30)
    text('Game Over', 400,200);
     cleitinho.destroy();
  }




  //2 inimigos normais acertarem o jogador
  
  if(jorginho.isTouching(cleitinho))
  {
        //aumentar os pontos
        textSize(30)
        text('Game Over', 400,200);
        cleitinho.destroy();
  }

  if(cleitao. isTouching(cleitinho))
  {
        //aumentar os pontos
        textSize(30)
        text('Game Over', 400,200);
        cleitinho.destroy();
  }
  

  drawSprites();
}


function Tiro_Proag()
{
  //soltar as balas quando apertar espaço
  if(keyWentDown("space"))
  {
  var tiro = createSprite (40,cleitinho.y-10,20,10);
  tiro.velocityX = 20;
  tiros.add(tiro);
  //800/20 = tempo de vida (40)
  tiro.lifetime = 40;

  }
}


function Tiro_Ze()
{
 if(frameCount %60 === 0)
 {
  var tiroZ = createSprite(780,20,30,30);
  tiroZ.shapeColor = "#008b8b"
  tiroZ.velocityX = -3;
   tirosZ.add(tiroZ);
   // 800/3 = tempo de vida = 267
  tiroZ.lifetime=267
}


}


function Tiro_Cleitinha()
{
  if(frameCount %200 === 0)
 {
  var tiroC = createSprite(780,150,30,30);
  tiroC.shapeColor = "#00ced1";
  tiroC.velocityX = -25;
  tirosC.add(tiroC);
  // 800 / 25 = tempo de vida = 32
  tiroC.lifetime = 32;
  
 }



}