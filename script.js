// PARTICULAS
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 1
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    ctx.fill();
  });

  move();
}

function move() {
  particles.forEach(p => {
    p.y += p.d;

    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(draw, 30);

// MAPA
const modal = document.getElementById("mapModal");
const mapCard = document.getElementById("mapCard");
const close = document.getElementById("closeModal");

mapCard.onclick = () => modal.style.display = "flex";
close.onclick = () => modal.style.display = "none";

// SOM (opcional simples)
const btn = document.getElementById("soundBtn");

btn.onclick = () => {
  btn.innerText = btn.innerText === "🔊 SOM" ? "🔇 OFF" : "🔊 SOM";
};