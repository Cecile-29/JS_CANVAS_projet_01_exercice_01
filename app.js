// var maison = document.getElementById('house').getContext('2d');
var maison = document.getElementById('house');
var ctx = maison.getContext('2d');
ctx.fillStyle = '#D7823E';
ctx.beginPath();
ctx.moveTo(150, 20);
ctx.lineTo(20, 110);
ctx.lineTo(280, 110);
ctx.lineTo(150, 20);
ctx.fill(); // Remplissage du dernier chemin tracé
ctx.stroke();
// murs maison
ctx.fillStyle = '#a1d8e6';
ctx.fillRect(20, 110, 260, 170);
ctx.stroke();
// porte
ctx.fillStyle = '#c9c9c9';
ctx.beginPath();
ctx.moveTo(130, 280);
ctx.lineTo(130, 220);
ctx.lineTo(170, 220);
ctx.lineTo(170, 280);
ctx.fill();
ctx.stroke();
// fenêtre droite
ctx.fillStyle = '#c9c9c9';
ctx.beginPath();
ctx.moveTo(50, 130);
ctx.lineTo(50, 170);
ctx.lineTo(90, 170);
ctx.lineTo(90, 130);
ctx.lineTo(50, 130);
ctx.fill();
ctx.stroke();
// fenêtre gauche
ctx.fillStyle = '#c9c9c9';
ctx.beginPath();
ctx.moveTo(250, 130);
ctx.lineTo(250, 170);
ctx.lineTo(210, 170);
ctx.lineTo(210, 130);
ctx.lineTo(250, 130);
ctx.fill();
ctx.stroke();
