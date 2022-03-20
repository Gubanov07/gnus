function draw() {
let canva = document.getElementById('drawRound')
let ctx = canva.getContext('2d')
let pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "green";

 ctx.arc(100, 100, 75, 0, pi/2, true);
ctx.stroke();
}
