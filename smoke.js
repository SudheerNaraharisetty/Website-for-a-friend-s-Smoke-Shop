let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('smoke-animation');
}

function draw() {
    clear();

    if (random(1) < 0.1) {
        particles.push(new Particle());
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].display();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = height;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    display() {
        noStroke();
        fill(0, 255, 0, this.alpha);
        ellipse(this.x, this.y, 16);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

