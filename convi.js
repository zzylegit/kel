/* BOTÃO ENTRAR */

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    // toca música se existir
    const music = document.getElementById("music");

    if (music) {
        music.play();
    }

});

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const stars = [];

for(let i=0;i<150;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        s:Math.random()*2+0.5
    });
}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    stars.forEach(star=>{

        ctx.beginPath();
        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
        ctx.fill();

        star.y+=star.s;

        if(star.y>canvas.height){
            star.y=-5;
            star.x=Math.random()*canvas.width;
        }

    });

    requestAnimationFrame(animate);
}

animate();
const elements = document.querySelectorAll('.gift-card, .info-card, h1, h2, p');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
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