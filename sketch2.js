var font;
var vehicles = [];

function preload() {
    font = loadFont('AvenirNextLTPro-Demi.otf');
}

//CODE IDEA:
// MAKE THE WORD LOVE AND FILL IT WITH HEARTS

function setup() {
    createCanvas(1500, 1000);
    //setting a grey background
    background(51);
    //textFont(font);
    //textSize(192);
    //color the text white:
    //fill(255);
    //noStroke();
    //text('sol solecito', 250, 400);

    var points = font.textToPoints('paz total', 250, 400, 192);
    //console.log(points);
    
    for (let i=0; i < points.length ; i++ ) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
        stroke(255);
        strokeWeight(8);
        point(pt.x, pt.y);

    }

}

function draw() {
    background(51);
    for(var i=0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviours();
        v.update();
        v.show();
    }

}