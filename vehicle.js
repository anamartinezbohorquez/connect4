function Vehicle(x, y) {
    this.position = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
    this.size = 8;
    this.maxspeed = 100;
    this.maxforce = 1;

}


// Attaching function to objects
Vehicle.prototype.behaviours = function() {
    // var seek = this.seek(this.target);
    var arrive = this.arrive(this.target);

    // mouse
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);



    arrive.mult(1);
    flee.mult(5)

    // Seek function returns the steering force
    this.applyForce(arrive);
    //
    this.applyForce(flee);
}


// IDEA : there are going to be multiple forces that play and we could add them into the acceleration, 
// the aceleration accumulates all the forces, every single frame of animation, needs to start to 0
Vehicle.prototype.applyForce = function(force) {
    this.acceleration.add(force);
}

Vehicle.prototype.update = function() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    // clear the acceleration
    this.acceleration.mult(0);
}

// Function to render the object 'vehicle'
Vehicle.prototype.show = function() {
    stroke(random(0, 255), random(0, 255), random(0, 255));
    fill(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(8);
    //point(this.position.x, this.position.y);
    polygong = new polygon(this.position.x, this.position.y, this.size, 3)
}


Vehicle.prototype.arrive = function(target){
    var desired = p5.Vector.sub(target, this.position);
    // what is the desired magnitud?
    var speed = 1;
    distance = desired.mag();

    if (distance < 300 ) {
        speed = map(distance, 0, 100, 0, this.maxspeed );
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);

    return steer;
}

Vehicle.prototype.flee = function(target){
    var desired = p5.Vector.sub(target, this.position);
    var distance = desired.mag();
    if (distance < 70) {
        desired.setMag(this.maxspeed);
        desired.mult(-1);
        var steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxforce);
        return steer;
    } else {
        return createVector(0, 0);
    }
}