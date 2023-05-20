// quadrille object declaration
// Quadrille.CELL_LENGTH is a constant defining the quadrille
  // cell length default is: 100
  let tablero;
  let caer;
  let ficha;
  let turno = 1;
  let tileDisplay;// (all) quadrille cell contours
  let colorDisplay;// quadrille color cell

  function setup() {
    //Configuraciones de las piezas "Objeto literal"
    ficha = {position:{x:0,y:0}, pieza:color('red')}
    frameRate(60)
    createCanvas(8* Quadrille.CELL_LENGTH, 8 * Quadrille.CELL_LENGTH);
    // quadrille object initialization

    circulo = ({ cell: cell, cellLength: cellLength }) => {
      noStroke();
      fill(cell);
      ellipseMode(CORNER);
      ellipse(0, 0, cellLength, cellLength);
    }

    caer = createQuadrille(7,1);
    tablero = createQuadrille(7, 6);
  }

  function draw() {
    background('blue');
    // to display the quadrille a call to drawQuadrille is needed

    let params = {x:50,
                  y:150,
                  outlineWeight:5,
                  outline:'grey',
                  colorDisplay: circulo,
                 }

    drawQuadrille(caer,{x:50,y:10,outlineWeight:5,outline:'grey',
                       colorDisplay: circulo });
    drawQuadrille(tablero,params);

    caer.fill(0,ficha.position.x,ficha.pieza)
    controlador()
  }

  function keyPressed(){
    if(key === 'd'){
      if(ficha.position.x + 1<7){
        caer.clear(0)
        ficha.position.x += 1
        }
    }

    if(key === 'a'){
      if(ficha.position.x -1 >-1){
        caer.clear(0)
        ficha.position.x -= 1
      }
    }
    if(key === ' '){
      if(tablero.isEmpty(0,ficha.position.x)){
        caer.clear(0)
        dro()
        siguiente(turno)
        turno+=1
        ganador()
      }
    }
  }
  function controlador(){
    if(ficha.position.x < 0){
      ficha.position.x = 0
    }
    if(ficha.position.x > 6){
      ficha.position.x = 6
    }
  }
  function dro(){
    columna = ficha.position.x
    for(let fil = 0;fil <6;fil++){
      if(tablero.isEmpty(fil,columna)){
        tablero.fill(fil,columna,ficha.pieza)
        ficha.position.y=fil
        if(fil>0){
          tablero.clear(fil-1,columna)
        }
      }
    }
  }
  function siguiente(turno){
    if (turno%2 === 0){
      ficha.pieza = color('red')
    }else{
      ficha.pieza = color('yellow')
    }
  }
  function ganador(){

  fila=ficha.position.y
  colum=ficha.position.x

  tipo=tablero.read(fila,colum).levels[1]
  console.log(tablero.read(fila,colum+1)==null)



  l=0
  for(i=1;i<4;i++){

   if(tablero.read(fila+i,colum)!=null)
    if(tablero.read(fila+i,colum).levels[1]==tipo){
      l+=1

    }
    if(tablero.read(fila-i,colum)!=null)
    if(tablero.read(fila-i,colum).levels[1]==tipo){
      l+=1
    }


    if(l>2)
       console.log("ganador")

     }
  l=0

  for(i=1;i<4;i++){

  if(tablero.read(fila,colum+i)!=null)
  if(tablero.read(fila,colum+i).levels[1]==tipo){


    l+=1
    }
    if(tablero.read(fila,colum-i)!=null)
    if(tablero.read(fila,colum-i).levels[1]==tipo){

      l+=1

    }


    if(l>2)
      console.log("ganador")

     }

   l=0
  for(i=1;i<4;i++){

 if(tablero.read(fila+i,colum+i)!=null)
  if(tablero.read(fila+i,colum+i).levels[1]==tipo){
      l+=1
    }
    if(tablero.read(fila-i,colum-i)!=null)
    if(tablero.read(fila-i,colum-i).levels[1]==tipo){
      l+=1
    }
    if(l>2)
      console.log("ganador")

     }


  l=0
for(i=1;i<4;i++){

    if(tablero.read(fila+i,colum-i)!=null)
    if(tablero.read(fila+i,colum-i).levels[1]==tipo){
      l+=1
    }
  if(tablero.read(fila-i,colum+i)!=null)
    if(tablero.read(fila-i,colum+i).levels[1]==tipo){
      l+=1
    }

    if(l>2)
      console.log("ganador")


}

}