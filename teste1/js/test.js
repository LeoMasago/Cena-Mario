var canvas = document.getElementById('exemplo');
var ctx = canvas.getContext("2d");
var grdlinear = ctx.createLinearGradient(185, 45, 185, 75);
var img = new Image();
var img2 = new Image();

ctx.fillStyle = '#ba5111';
ctx.beginPath();
ctx.fillRect(0,340,1000,160);
ctx.fill();
 
ctx.beginPath();
    for(var x = 80 ; x<= 1000; x=x+80){
        ctx.moveTo(x,340);
        ctx.lineTo(x,500);
        ctx.lineWidth = 4;
        ctx.stroke();
    }

//Parte de cima do cano
ctx.fillStyle = '#00a900';
ctx.beginPath();
ctx.fillRect(695,170,200,80);
ctx.fill();

//Parte de cima do cano - Sombreado
ctx.fillStyle = '#81d110';
ctx.beginPath();
ctx.fillRect(697,170,20,80);
ctx.fill();

//Parte de cima do cano - Contorno
ctx.fillStroke = 'black';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.strokeRect(695,170,200,80);
ctx.stroke();

//Parte de baixo do cano
ctx.fillStyle = '#00a900';
ctx.beginPath();
ctx.fillRect(725,248,140,90);
ctx.fill();

//Parte de baixo do cano - Sombreado
ctx.beginPath();
ctx.fillStyle = '#81d110';
ctx.fillRect(725,248,20,90);
ctx.fill();

//Parte de baixo do cano  - Contorno
ctx.fillStroke = 'black';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.strokeRect(725,250,140,90);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#81d110";
ctx.lineWidth = 5;
ctx.moveTo(697,174);
ctx.lineTo(893,174);
ctx.stroke();

ctx.beginPath();
    for(var x = 84; x<= 1000; x=x+80){
        ctx.strokeStyle = "#f9c5be";
        ctx.moveTo(x,342);
        ctx.lineTo(x,500);
        ctx.lineWidth = 3;
        ctx.stroke();
    }
//Sombra do chão
ctx.beginPath();
    for(var x = 44; x<= 1000; x=x+80){
        ctx.strokeStyle = "#f9c5be";
        ctx.moveTo(x,346);
        ctx.lineTo(x,342);
        ctx.lineWidth = 65;
        ctx.stroke();
    }

ctx.beginPath();
    for(var x = 45; x<= 1000; x=x+80){
        ctx.strokeStyle = "#f9c5be";
        ctx.moveTo(x,422);
        ctx.lineTo(x,426);
        ctx.lineWidth = 65;
        ctx.stroke();
    }

//Linha do Chao - 1
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(0,340);
ctx.lineTo(1000,340);
ctx.moveTo(0,420);
ctx.lineTo(1000,420);
ctx.stroke();
        
ctx.strokeStyle = "black";
ctx.lineWidth = 6;
ctx.beginPath();
ctx.strokeRect(3,3,994,494)
ctx.stroke();

//blocos 
ctx.fillStyle = '#bd5016';
ctx.beginPath();
ctx.fillRect(130,90,350,70);
ctx.fill();

ctx.fillStyle = '#f99830';
ctx.beginPath();
ctx.fillRect(340,90,70,70);
ctx.fill();

ctx.fillStyle="Black";
ctx.beginPath();
ctx.arc(139,100,4,0,2*3.14);
ctx.arc(189,100,4,0,2*3.14);
ctx.fill();

ctx.fillStyle="Black";
ctx.beginPath();
ctx.arc(139,150,4,0,2*3.14);
ctx.arc(189,150,4,0,2*3.14);
ctx.fill();

//"sombra" dos blocos
ctx.beginPath();
ctx.strokeStyle="#df906f";
ctx.moveTo(130,94);
ctx.lineTo(338,94);
ctx.moveTo(410,94);
ctx.lineTo(480,94);
ctx.lineWidth=4;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#e56b16";
ctx.moveTo(338,94);
ctx.lineTo(410,94);
ctx.moveTo(342,94);
ctx.lineTo(342,160);
ctx.lineWidth=4;
ctx.stroke();

ctx.beginPath();
    for(var y = 90; y<= 150; y=y+12){
        ctx.strokeStyle = "Black";
        ctx.moveTo(267,y);
        ctx.lineTo(198,y);
        ctx.lineWidth = 3;
        ctx.stroke();
    }

//Detalhes do 2° Cubo
ctx.beginPath();
ctx.strokeStyle="Black";
ctx.lineWidth=3;
ctx.moveTo(250,100);
ctx.lineTo(250,90);
ctx.moveTo(220,100);
ctx.lineTo(220,90);
ctx.moveTo(235,103);
ctx.lineTo(235,115);
ctx.moveTo(220,115);
ctx.lineTo(220,125);
ctx.moveTo(250,115);
ctx.lineTo(250,125);
ctx.moveTo(235,125);
ctx.lineTo(235,140);
ctx.moveTo(250,138);
ctx.lineTo(250,150);
ctx.moveTo(220,138);
ctx.lineTo(220,150);
ctx.moveTo(235,150);
ctx.lineTo(235,160);
ctx.stroke();

//Detalhes do 5° Cubo
ctx.beginPath();
ctx.strokeStyle="Black";
ctx.lineWidth=3;
ctx.moveTo(429,100);
ctx.lineTo(429,90);
ctx.moveTo(459,100);
ctx.lineTo(459,90);
ctx.moveTo(410,101);
ctx.lineTo(480,101);
ctx.moveTo(445,100);
ctx.lineTo(445,113);
ctx.moveTo(410,113);
ctx.lineTo(480,113);
ctx.moveTo(429,113);
ctx.lineTo(429,124);
ctx.moveTo(459,113);
ctx.lineTo(459,124); 
ctx.moveTo(410,124);
ctx.lineTo(480,124);
ctx.moveTo(445,124);
ctx.lineTo(445,135);
ctx.moveTo(410,135);
ctx.lineTo(480,135);
ctx.moveTo(429,135);
ctx.lineTo(429,146);
ctx.moveTo(459,135);
ctx.lineTo(459,146);
ctx.moveTo(410,147);
ctx.lineTo(480,147);
ctx.moveTo(445,147);
ctx.lineTo(445,158);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#490000";
ctx.arc(350,100,4,0,2*3.14);
ctx.arc(398,100,4,0,2*3.14);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#490000";
ctx.arc(398,150,4,0,2*3.14);
ctx.arc(350,150,4,0,2*3.14);
ctx.fill();

//linhas dos cubos 
ctx.beginPath();
    for(var x=129; x<=500; x=x+70){
        ctx.strokeStyle="black";
        ctx.moveTo(x,90);
        ctx.lineTo(x,160);
        ctx.lineWidth=3;
        ctx.stroke();
}

//linha de cima dos blocos
ctx.beginPath(); 
ctx.strokeStyle="black";
ctx.moveTo(481,90);
ctx.lineTo(127,90);
ctx.lineWidth=4;
ctx.stroke();
//linha de baixo dos blocos
ctx.beginPath();
ctx.strokeStyle="black";
ctx.moveTo(481,160);
ctx.lineTo(127,160);
ctx.lineWidth=4;
ctx.stroke();
ctx.fillStyle='black';
ctx.font="50px Times New Roman";
ctx.fillText("?" ,363,140,100);
ctx.stroke();
ctx.fillStyle='#bb4c16';
ctx.font="50px Times New Roman";
ctx.fillText("?" ,361,140,100);
ctx.stroke();

//Imagem Mario
img.onload=function(){
    const w = img.width,
        h = img.height;
        
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.globalAlpha = 1.0;
    ctx.fillText('Smoothing = FALSE', w * 5.5, 20);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 75, 248, 63, 90);
};
img.src= 'img/mario.png';

//Imagem Goomba
img2.onload=function(){
    const w = img.width,
        h = img.height;
    
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.fillText('Smoothing = FALSE', w * 5.5, 20);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img2, 500, 275, 70, 65);
};
img2.src= 'img/goomba.png';

//Moeda
ctx.beginPath();
ctx.fillStyle="#f6dc2d";
ctx.shadowColor = "#e6d223";
ctx.ellipse(302, 55, 15, 25, Math.PI / 1, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.ellipse(302, 55, 15, 25, Math.PI / 1, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#e7bb12";
ctx.lineWidth = 6;
ctx.moveTo(302,43);
ctx.lineTo(302,67);
ctx.stroke();

//Nuvem
ctx.fillStyle="#fcfcfc";
ctx.beginPath();
ctx.shadowBlur = 30;
ctx.shadowColor = "#A6DDF8";
ctx.globalAlpha = 0.6;
ctx.arc(655,70,30,0,2*3.14);
ctx.arc(755,70,30,0,2*3.14);
ctx.arc(706,70,30,0,2*3.14);
ctx.arc(686,95,30,0,2*3.14);
ctx.arc(686,50,30,0,2*3.14);
ctx.arc(736,50,30,0,2*3.14);
ctx.arc(736,95,30,0,2*3.14);
ctx.fill();
