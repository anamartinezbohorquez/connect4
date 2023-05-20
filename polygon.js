function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let i=0; i<TWO_PI; i += angle) {
      let sx = x + cos(i) * radius;
      let sy = y + sin(i) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }