function setup() {
    createCanvas(600, 400);
    bubble = new Bubble();
}

function draw() {
    background(0);
    for (let i = 0; i < 25; i++) {
        bubble.move();
        bubble.show();
        bubble.fill();
    }
}

class Bubble {
    constructor() {
        this.x = 300; 
        this.y = 200;
        this.r = random(10, 200);
        this.h = random(10, 200);
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
        stroke(255);
        strokeWeight(4);
        fill(this.f);
        ellipse(this.x, this.y, this.r, this.h);
    }
}