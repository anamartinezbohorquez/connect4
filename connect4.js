let tablero;
  let caer;
  let ficha;
  let turno = 1;
  let tileDisplay;// (all) quadrille cell contours
  let colorDisplay;// quadrille color cell
  let synth ;



  function preload() {
  // loads a previously exported piece
  
    ConfigJSON=loadJSON('configo.json');
}


   function setup() {
    //Configuraciones de las piezas "Objeto literal"
    ficha = {position:{x:0,y:0},
             pieza:color('red'),
             colores:{j1:'red',j2:'yellow',Fondo:'blue',Borde:'white'},
             n:4,
             import: function (jsonPiece) {
      this.pieza=color(jsonPiece.color1)
      this.colores.j1 = jsonPiece.color1;
      this.colores.j2 =jsonPiece.color2;
      this.colores.Fondo=jsonPiece.color3;
      this.colores.Borde=jsonPiece.color4;
      this.n=jsonPiece.n
              
    }
            
            
            }
    
    if(ConfigJSON!=null)
    ficha.import(ConfigJSON)
    
    frameRate(60)
    createCanvas(ficha.n*2* Quadrille.CELL_LENGTH, 2*ficha.n * Quadrille.CELL_LENGTH);
    // quadrille object initialization
   
    circulo = ({ cell: cell, cellLength: cellLength }) => {
      noStroke();
      fill(cell);
      ellipseMode(CORNER);
      ellipse(0, 0, cellLength, cellLength);
    }

  Tone.Transport.scheduleRepeat((time) => {
    playMelody(time);
  }, '8n');


  Tone.Transport.start();
   
    caer = createQuadrille(ficha.n+3,1);
    tablero = createQuadrille(ficha.n+3, ficha.n+2);
  }

  function draw() {
   
    background(ficha.colores.Fondo);
    // to display the quadrille a call to drawQuadrille is needed

    let params = {x:50,
                  y:150,
                  outlineWeight:5,
                 
                  outline:ficha.colores.Borde,
                  colorDisplay: circulo,
                 }

       drawQuadrille(caer,{x:50,y:10,outlineWeight:5,outline:ficha.colores.Borde,
                       colorDisplay: circulo });
    drawQuadrille(tablero,params);
   

    caer.fill(0,ficha.position.x,ficha.pieza)
    controlador()
  }

  function keyPressed(){
    if(key === 'd'  || key == "ArrowRight"){
      if(ficha.position.x + 1<ficha.n+3){
        caer.clear(0)
        ficha.position.x += 1
        }
    }

    if(key === 'a'  || key == "ArrowLeft"){
      if(ficha.position.x -1 >-1){
        caer.clear(0)
        ficha.position.x -= 1
      }
    }
    if(key === ' '  || key == "ArrowDown" || key == "s"){
      if(tablero.isEmpty(0,ficha.position.x)){
        caer.clear(0)
        dro()
        siguiente(turno)
        turno+=1
        setTimeout(ganador,50)

    }
  }
}
  function controlador(){
    if(ficha.position.x < 0){
      ficha.position.x = 0
    }
    if(ficha.position.x > ficha.n+2){
      ficha.position.x = ficha.n+2
    }
  }
  function dro(){
    let columna = ficha.position.x
    for(let fil = 0;fil <ficha.n+2;fil++){
      if(tablero.isEmpty(fil,columna)){
        ficha.position.y=fil
        tablero.fill(fil,columna,ficha.pieza)
        if(fil>0){
          tablero.clear(fil-1,columna);
        }
      }
    }
  }
  function siguiente(turno){
    if (turno%2 === 0){
      ficha.pieza = color(ficha.colores.j1);
      synth.triggerAttackRelease("C4", "8n");
    }else{
      ficha.pieza = color(ficha.colores.j2)
      synth.triggerAttackRelease("G4", "8n");
    }
  }



function mArray(a1,a2){
for (let i = 0; i < a1.length; i++) {
    if(a1[i]!=a2[i])
        return false
}
    return true

}


function ganador() {
  fila = ficha.position.y;
  colum = ficha.position.x;
  tipo = tablero.read(fila, colum).levels;  
  let l1 = 0,
    l2 = 0,
    l3 = 0,
    l4 = 0;
  for (i = 1; i < ficha.n; i++) {
    if (tablero.read(fila + i, colum) != null)
      if (mArray(tablero.read(fila + i, colum).levels, tipo)) l1 += 1;

    if (tablero.read(fila - i, colum) != null)
      if (mArray(tablero.read(fila - i, colum).levels, tipo)) l1 += 1;

    if (tablero.read(fila, colum + i) != null)
      if (mArray(tablero.read(fila, colum + i).levels, tipo)) l2 += 1;

    if (tablero.read(fila, colum - i) != null)
      if (mArray(tablero.read(fila, colum - i).levels, tipo)) l2 += 1;

    if (tablero.read(fila + i, colum + i) != null)
      if (mArray(tablero.read(fila + i, colum + i).levels, tipo)) l3 += 1;

    if (tablero.read(fila - i, colum - i) != null)
      if (mArray(tablero.read(fila - i, colum - i).levels, tipo)) l3 += 1;

    if (tablero.read(fila + i, colum - i) != null)
      if (mArray(tablero.read(fila + i, colum - i).levels, tipo)) l4 += 1;

    if (tablero.read(fila - i, colum + i) != null)
      if (mArray(tablero.read(fila - i, colum + i).levels, tipo)) l4 += 1;

    if (l1 > ficha.n-2 || l2 > ficha.n-2 || l3 > ficha.n-2 || l4 > ficha.n-2) {
      // Player wins
         turno%2==0 ? window.alert("Ganó el Jugador 1"):console.log("Ganó el Jugador 2")
      tablero = createQuadrille(ficha.n+3,ficha.n+2);
      break;
    }
  }
}

const notes = ['A3', 'D4', 'E4', 'F5', 'D5', 'E4', 'C4', 'D4', 'A3', 'A3'];
let index = 0;

function playMelody(time) {
  let note = notes[index % notes.length];
  synth.triggerAttackRelease(note, '8n', time);
  index++;
}
