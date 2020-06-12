var d = document.getElementById("dibujito");//draw id
var lienzo = d.getContext("2d");//draw Context
lienzo.fillStyle= "black";
lienzo.fillRect(0, 0, d.width, d.height);

function stars(color, xi, yi, xf, yf){
lienzo.beginPath();
lienzo.strokeStyle= color;
lienzo.moveTo(xi, yi);
lienzo.lineTo(xf, yf);
lienzo.stroke();
lienzo.closePath();
}
function star_lines(color, xi, yi, xf, yf){
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}
//para cancer
stars("white", 350, 390, 351, 391);//abajo izquierda
stars("white", 600, 400, 601, 401);//abajo derecha
stars("white", 450, 250, 451, 251);//arriba centro | Taurus
stars("white", 400, 170, 401, 171);//arriba diagonal
stars("white", 350, 90, 351, 91);//arriba MÁS diagonal

//para escorpio
stars("white", 353, 300, 354, 301);//1
stars("white", 328, 320, 329, 321);//2
stars("white", 309, 335, 310, 336);//3 puntitos diagonales
stars("white", 450, 400, 451, 401);//centro abajo
stars("white", 550, 390, 551, 391);//derecha abajo
stars("white", 565, 300, 566, 301);//arriba_1 diagonal
stars("white", 579, 230, 580, 231);//arriba_2 diagonal | Aries other star copy | AQUARIUS NEEDS THIS !!!!!!!!!!!!!!!!!!!!
stars("white", 584, 150, 585, 151);//arriba_3 diagonal
stars("white", 600, 130, 601, 131);//arriba un poquito diagonal
stars("white", 750, 60, 751, 61);//punto 1 largo
stars("white", 760, 100, 761, 101);//punto 2 largo
stars("white", 755, 140, 756, 141);//punto 3 largo

//para Aries
stars("white", 560, 130, 561, 131);//third star
stars("white", 600, 280, 601, 281); //Aries other star copy
stars("white", 606, 310, 607, 311);//Aries little line
stars("white", 590, 326, 591, 327);//Aries super little line

//para Tauro
stars("white", 200, 50, 201, 51); //first point
stars("white", 160, 150, 161, 151); //second point
stars("white", 290, 116, 291, 117); //nulka
stars("white", 380, 185, 381, 186); //center
stars("white", 500, 150, 501, 151); //arm | LEO FINAL POINT | SECOND TO AQUARIUS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//for Geminis (1 is down) (2 is up)
stars("white", 20, 400, 21, 401);//left arm (1)
stars("white", 50, 350, 51, 351);// center (1)
stars("white", 20, 330, 21, 331);//head (1)
stars("white", 150, 410, 151, 411);//between legs (1)
stars("white", 220, 450, 221, 451);//left leg (1)
stars("white", 300, 460, 301, 461);//+ extra left leg (1)
stars("white", 220, 375, 221, 376);//right leg (1)
stars("white", 300, 370, 301, 371);//+ extra right leg (1)

stars("white", 100, 320, 101, 321);//right arm (1 and left arm of 2)
stars("white", 140, 280, 141, 281);//center (2)
stars("white", 160, 220, 161, 221);//right arm (2)
stars("white", 115, 255, 116, 256);//head (2)
stars("white", 230, 280, 231, 281);//between legs (2)
stars("white", 270, 300, 271, 301);//left leg (2) | will conect with 1 puntito diagonal escorpio
stars("white", 270, 260, 271, 261);//right leg (2)
stars("white", 353, 265, 354, 266);//+ extra right leg (2)

//For leo
stars("white", 240, 450, 241, 451);//"left leg replica (1)"
stars("white", 530, 260, 531, 261);// 1 puntito diagonal replica
stars("white", 420, 200, 421, 201);//little bit up from center of Cancer | LIBRA NEEDS THIS
stars("white", 440, 100, 441, 101);//copy of TAURUS arm

//For Virgo
stars("white", 420, 350, 421, 351);//down center
stars("white", 470, 260, 471, 261);//front of middle
stars("white", 395, 170, 396, 171);//line up up
stars("white", 495, 240, 496, 241);//line right right
stars("white", 510, 200, 511, 201);//line SUPER right right
stars("white", 370, 410, 371, 411);//decending line
stars("white", 300, 440, 301, 441);//re decending line
stars("white", 310, 300, 311, 301);//line left left
stars("white", 240, 370, 241, 371);//line SUPER left left

//For Libra
stars("white", 610, 220, 611, 221);//triangle center
stars("white", 340, 220, 341, 221);//"rect after little bit..."
stars("white", 330, 200, 331, 201);//lil rect up
stars("white", 370, 360, 371, 361);//linea recta allá
stars("white", 370, 380, 371, 381);//abajito

//For Sagittarius
stars("white", 400, 170, 401, 171);//linea recta
stars("white", 480, 370, 481, 371);//linea abajo
stars("white", 410, 140, 411, 141);//mini 1
stars("white", 480, 130, 481, 131);//mini 2
stars("white", 255, 300, 256, 301);// point between lina larga
stars("white", 400, 70, 401, 71);// upper line
stars("white", 450, 80, 451, 81);//rect recto
stars("white", 400, 30, 401, 31);//SUPER UP
stars("white", 660, 180, 661, 181);//PARA ALLÁ!
stars("white", 610, 330, 611, 331);//centro triangle
stars("white", 650, 310, 651, 311);//"more"
stars("white", 460, 400, 461, 401);//más abajo

//For Capricorn
stars("white", 270, 105, 271, 106);//ala arriba

//For Aquarius
stars("white", 400, 110, 401, 111);//un poco más arriba
stars("white", 380, 100, 381, 101);//UN POQUITO MÁS AHHH
stars("white", 300, 150, 301, 151);//desciende
stars("white", 350, 160, 351, 161);//derecha
stars("white", 360, 240, 361, 241);//re desciende
stars("white", 300, 340, 301, 341);//re re desciende
stars("white", 440, 100, 441, 101);//hasta abajo
stars("white", 460, 210, 461, 211);//hasta el suelo

//For Pisces
stars("white", 50, 50, 51, 51);//1
stars("white", 100, 20, 101, 21);//2
stars("white", 100, 80, 101, 81);//3
stars("white", 70, 200, 71, 201);//4
stars("white", 50, 270, 51, 271);//5 abajo
stars("white", 35, 200, 36, 201);//6
stars("white", 80, 270, 81, 271);//7
stars("white", 120, 250, 121, 251);//8
stars("white", 160, 230, 161, 231);//9
stars("white", 200, 231, 201, 232);//10
stars("white", 330, 200, 331, 201);//11
stars("white", 455, 250, 456, 251);//b

  var signo= parseInt(prompt("Cuál es tu signo del Zodiaco? \n1 es Aries \n2 es Tauro \n3 es Géminis \n4 es Cancer \n5 es Leo \n6 es Virgo \n7 es Libra \n8 es Escorpio \n9 es Sagitario \n10Capricornio \n11 es Acuario \n12 es Piscis"));

  if (signo== 1){//Aries
    document.write("Aries");
    star_lines("grey", 400, 170, 560, 130);//1 line
    star_lines("grey", 560, 130, 600, 280);//2 line to down
    star_lines("grey", 600, 280, 606, 310);//3 little line
    star_lines("grey", 606, 310, 590, 326);//4 fucking little little line
  }
  else if (signo== 2){//Taurus
    document.write("Tauro");
      stars("white", 360, 170, 361, 171); //1
      stars("white", 365, 174, 366, 175); //2
      stars("white", 370, 177, 371, 179); //3
      stars("white", 360, 182, 361, 183); //4
      stars("white", 365, 183, 366, 184); //5
      stars("white", 370, 184, 370, 185); //6
      star_lines("grey", 200, 50, 290, 116); //first point to nulka
      star_lines("grey", 290, 116, 380, 185); //from nulka to center
      star_lines("grey", 160, 150, 380, 185); //second point to center
      star_lines("grey", 380, 185, 450, 250); //center to cancer center
      star_lines("grey", 450, 250, 579, 230); //cancer center to diagonal 2 escorpio
      star_lines("grey", 360, 170, 500, 150); //from 1 to arm
  }
  else if (signo== 3){//Géminis
    document.write("Géminis");
    star_lines("grey", 20, 400, 50, 350);//left arm to center (1)
    star_lines("grey", 50, 350, 20, 330);//center to head (1)
    star_lines("grey", 50, 350, 150, 410);//center to between legs (1)
    star_lines("grey", 150, 410, 220, 450);//between legs to left leg (1)
    star_lines("grey", 150, 410, 220, 375);//between legs to right leg (1)
    star_lines("grey", 220, 450, 300, 460);//+ extra left leg (1)
    star_lines("grey", 220, 375, 300, 370);//+ extra right leg (1)

    star_lines("grey", 50, 350, 100, 320);//right arm between left arm  (1, 2)
    star_lines("grey", 100, 320, 140, 280);//right arm between left arm  (1, 2) to center of (2)
    star_lines("grey", 140, 280, 115, 255);//center to head (2)
    star_lines("grey", 140, 280, 160, 220);//center to right arm (2)
    star_lines("grey", 140, 280, 230, 280);//center to between legs (2)
    star_lines("grey", 230, 280, 270, 300);//between legs to left leg (2)
    star_lines("grey", 270, 300, 353, 300);//+ left leg with 1 puntito diagonal escorpio (2)
    star_lines("grey", 230, 280, 270, 260);//between legs to right leg
    star_lines("grey", 270, 260, 353, 265);//right leg to + extra right leg (2)
  }
  else if (signo== 4){//Cancer
    document.write("Cancer");
    star_lines("grey", 344, 400, 450, 251);//left down to center
    star_lines("grey", 610, 410, 451, 251);//right down to center
    star_lines("grey", 451, 251, 401, 171);//center to up
    star_lines("grey", 401, 171, 351, 91);//up to SUPER UP
  }
else if (signo== 5){//Leo
  document.write("Leo");
    star_lines("grey", 450, 250, 309, 335);//center of cancer to 3 puntito diagonal of escorpio
    star_lines("grey", 309, 335, 240, 450);//3 puntito diagonal of escorpio to "left leg replica (1)"
    star_lines("grey", 240, 450, 350, 390);//"left leg replica (1)" to lef down of Cancer
    star_lines("grey", 350, 390, 565, 300);//lef down of Cancer to arriba_1 diagonal of Escorpio
    star_lines("grey", 565, 300, 530, 260)//arriba_1 diagonal of Escorpio to 1 puntito diagonal replica
    star_lines("grey", 530, 260, 450, 250);//1 puntito diagonal replica to center of Cancer
    star_lines("grey", 450, 250, 420, 200);//center of Cancer to a little bit up from center of Cancer
    star_lines("grey", 420, 200, 440, 100);//little bit up from center of Cancer to copy of TAURUS arm
    star_lines("grey", 440, 100, 500, 150);//copy of TAURUS arm to TAURUS arm
}
else if (signo== 6){//Virgo
  document.write("Virgo");
    star_lines("grey", 420, 200, 353, 265);//little bit up from center of Cancer to + extra right leg (2)
    star_lines("grey", 353, 265, 420, 350);//+ extra right leg (2) to down center
    star_lines("grey", 420, 350, 470, 260);//down center to front of middle
    star_lines("grey", 470, 260, 420, 200);//front of middle to little bit up from center of Cancer
    star_lines("grey", 420, 200, 395, 170);//little bit up from center of ... to line up up
    star_lines("grey", 470, 260, 495, 240);//front of middle to line right right
    star_lines("grey", 495, 240, 510, 200);//line right right to line SUPER right right
    star_lines("grey", 420, 350, 370, 410);// down center to decending line
    star_lines("grey", 370, 410, 350, 390);//decending line to abajo izquierda of cancer
    star_lines("grey", 350, 390, 300, 440);//abajo izquierda of cancer to re decending line
    star_lines("grey", 353, 265, 310, 300);//+ extra right leg (2) to line left left
    star_lines("grey", 310, 300, 240, 370);//line left left to line SUPER left left
}
else if (signo== 7){//Libra
  document.write("Libra");
    star_lines("grey", 500, 150, 565, 300);//TAURUS arm to 1 puntito diagonal escorpio
    star_lines("grey", 500, 150, 610, 220);//TUARUS arm to triangle center
    star_lines("grey", 565, 300, 610, 220);//1 puntito diagonal escorpio to triangle center
    star_lines("grey", 500, 150, 420, 200);//TAURUS arm to little bit up from center of Cancer
    star_lines("grey", 420, 200, 340, 220);//little bit up from center of Cancer to "rect after little bit..."
    star_lines("grey", 340, 220, 330, 200);//"rect after little bit..." to lil rect up
    star_lines("grey", 565, 300, 370, 360);//diagonal escorpio to linea recta allá
    star_lines("grey", 370, 360, 370, 380);//linea recta allá to abajito
}
else if (signo== 8){//Escorpio
  document.write("Escorpio");
    star_lines("grey", 353, 300, 328, 320);//1 to 2
    star_lines("grey", 328, 320, 309, 335);//2 to 3 puntitos diagonales
    star_lines("grey", 309, 335, 350, 390);//3 punti... to abajo izquierda of Cancer
    star_lines("grey", 350, 390, 450, 400);//abajo izquierda of Cancer to centro abajo
    star_lines("grey", 450, 400, 550, 390);//centro abajo to derecha abajo
    star_lines("grey", 550, 390, 565, 300);// derecha abajo to arriba_1 diagonal
    star_lines("grey", 565, 300, 579, 230);//arriba_1 diagonal to arriba_2 diagonal
    star_lines("grey", 579, 230, 584, 150);//arriba_2 diagonal to arriba_3 diagonal
    star_lines("grey", 584, 150, 600, 130);//arriba_3 diagonal to arriba un poquito diagonal
    star_lines("grey", 600, 130, 750, 60);//arriba un poquito diagonal to punto 1 largo
    star_lines("grey", 600, 130, 760, 100);//arriba un poquito diagonal to punto 2 largo
    star_lines("grey", 600, 130, 755, 140);//arriba un poquito diagonal to punto 3 largo
}
else if (signo== 9){//Sagitario
  document.write("Sagitario");
  star_lines("grey", 500, 150, 565, 300);//TAURUS arm to 1 puntito diagonal escorpio
  star_lines("grey", 500, 150, 610, 220);//TUARUS arm to triangle center
  star_lines("grey", 565, 300, 610, 220);//1 puntito diagonal escorpio to triangle center
  star_lines("grey", 500, 150, 400, 170);//TAURUS arm to linea recta
  star_lines("grey", 400, 170, 480, 370);//linea recta to linea abajo
  star_lines("grey", 480, 370, 565, 300);//linea abajo to retorno (1 puntito diagonal)

  star_lines("grey", 400, 170, 410, 140);//linea recta to mini 1
  star_lines("grey", 410, 140, 480, 130);//mini 1 to mini 2
  star_lines("grey", 480, 130, 500, 150);//mini 2 to TAURUS arm

  star_lines("grey", 410, 140, 290, 116);//mini 1 to nulka
  star_lines("grey", 290, 116, 160, 150);//nulka to second point (Taurus)
  star_lines("grey", 160, 150, 300, 370);//second point to + extra right leg (1)
  star_lines("grey", 300, 370, 370, 360);//SUPER left... to linea recta allá (Libra)
  star_lines("grey", 300, 370, 370, 410);//SUPER Left... to  decending line (Virgo)
  star_lines("grey", 480, 130, 470, 70);// from mini 2 to upper line
  star_lines("grey", 470, 70, 450, 80);//upper line to rect recto
  star_lines("grey", 450, 80, 400, 30);//SUPER UP
  star_lines("grey", 610, 220, 660, 180);//Triangle center to para ALLÁ!

  star_lines("grey", 480, 370, 610, 330);//linea abajo to center Triangle
  star_lines("grey", 565, 300, 610, 330);//1 puntito diagonal to center Triangle
  star_lines("grey", 610, 330, 650, 310);//center Triangle to "more"
  star_lines("grey", 480, 370, 460, 400);//linea abajo to más abajo
}
else if (signo== 10){//Capricornio
  document.write("Capricornio");
  star_lines("grey", 560, 130, 410, 140);// 1 (Aries) to mini 1
  star_lines("grey", 410, 140, 290, 116);//mini 1 to nulka
  star_lines("grey", 290, 116, 270, 105);//nulka to ala arriba
  star_lines("grey", 270, 105, 470, 260);//ala arriba to front of middle
  star_lines("grey", 470, 260, 560, 130);//frontof middle to 1 (Aries)
}
else if (signo== 11){//Acuario
  document.write("Aquario");
  star_lines("grey", 579, 230, 500, 150);//arriba 2 diagonal to taurus arm
  star_lines("grey", 500, 150, 440, 100);//Taurus arm to Leo
  star_lines("grey", 440, 100, 400, 110);//Leo to un poco más arriba
  star_lines("grey", 400, 110, 380, 100);//un poco más arriba to UN POQUITO MÁS AHHH
  star_lines("grey", 380, 100, 300, 150);//UN POQUITO MÁS AHHH to desciende
  star_lines("grey", 300, 150, 350, 160);//desciendde do derecha
  star_lines("grey", 350, 160, 360, 240);//derecha to re desciende
  star_lines("grey", 360, 240, 300, 340);//re dessciende to re re desciende

  star_lines("grey", 440, 100, 420, 150);//Leo to hasta abajo
  star_lines("grey", 420, 150, 460, 210);//hasta to hasta el suelo
}
else if (signo== 12){//Piscis
  document.write("Piscis");
  star_lines("grey", 50, 50, 100, 20);//1 to 2
  star_lines("grey", 50, 50, 100, 80);//2 to 3
  star_lines("grey", 100, 20, 100, 80);//2 to 3
  star_lines("grey", 100, 80, 70, 200);//3 to 4
  star_lines("grey", 70, 200, 50, 270);//4 to 5 abajo
  star_lines("grey", 50, 270, 35, 300);//5 to 6
  star_lines("grey", 35, 300, 80, 270);//6 to 7
  star_lines("grey", 80, 270, 120, 250);//7 to 8
  star_lines("grey", 120, 250, 160, 230);//8 to 9
  star_lines("grey", 160, 230, 200, 231);//9 to 10
  star_lines("grey", 200, 231, 330, 200);//10 to lil rect up (libra)
  star_lines("grey", 330, 200, 420, 200);//11 to un punto
  star_lines("grey", 420, 200, 460, 210);//un punto to hasta el suelo
  star_lines("grey", 420, 200, 430, 230);//un punto a center of cancer
  star_lines("grey", 460, 210, 480, 240);//un punto to hasta el suelo
  star_lines("grey", 430, 230, 455, 250);//center of cancer to b
  star_lines("grey", 455, 250, 480, 240);//b to hasta el el suelo
}
else {
  document.write("Espero que hayas disfrutado de las estrellas")
}
