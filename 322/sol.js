function draw() {
let canva = document.getElementById('drawRound')
let ctx = canva.getContext('2d')
let pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "green";

ctx.arc(150, 150, 75, 0, pi, false);
ctx.stroke();
}
