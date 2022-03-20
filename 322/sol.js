function draw() {
let canva = document.getElementById('curve')
let ctx = canva.getContext('2d')

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle="green";
ctx.moveTo(75, 75);
ctx.quadraticCurveTo(100, 150, 300, 50);
ctx.stroke(); 
}
