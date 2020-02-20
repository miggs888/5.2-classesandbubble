let bubble; 

function setup() {
    createCanvas(600, 400);
    // bubble = new Bubble();
}

function draw() {
    background(0);
    bubble = new Bubble();
    for (let i = 0; i < 1; i++) {
        bubble.move();
        bubble.show();
        bubble.fill();
    }
}

class Bubble {
    constructor() {
        this.x = random(width); 
        this.y = random(height)
        this.r = random(5, 15);
        this.h = random(5, 15);
        this.f = random(1, 255);
    }
    fill() {
        this.f;
    }
    move() {
        this.x = this.x + random(-5, 5); 
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(this.f);
        strokeWeight(random(1, 50));
        fill(this.f);
        ellipse(this.x, this.y, this.r, this.h);
    }
}