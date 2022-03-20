function draw() {
let canva = document.getElementById('curve')
let ctx = canva.getContext('2d')

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle="green";
ctx.moveTo(100, 150);
ctx.bezierCurveTo(150, 50, 340, 10, 400, 200);
ctx.stroke();
}
