let width, height;
function setup() {
    createCanvas(700, 500);
}
function draw() {
    clear();
    width = displayWidth;
    height = displayHeight;
    push();
    noStroke();
    textSize(50);
    text(`Width: ${width}`, 50, 100);
    text(`Height: ${height}`, 50, 200);
    text(`Dimensions: ${width} x ${height}`, 50, 300);
    pop();
    text(`Designed by Saurabh Sagar`, 10, 480);
}