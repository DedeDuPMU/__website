// app.js

// === Theme Toggle ===
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
  });
}

// === Canvas FX (éclairs façon Sasuke) ===
const canvas = document.getElementById('fx');
const ctx = canvas.getContext('2d');
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(138,124,255,0.6)';
    ctx.fill();
  }
}

const particles = Array.from({ length: 120 }, () => new Particle());

function animate() {
  ctx.clearRect(0, 0, w, h);
  for (let p of particles) {
    p.update();
    p.draw();
  }
  requestAnimationFrame(animate);
}
animate();

// === VRChat Widget Demo Data ===
const vrList = document.querySelector('.vr-list');
if (vrList) {
  const contacts = [
    { name: 'VoidPaying/Skraog', status: 'Gay BestFriend', tag: 'Ami' },
    { name: 'UselessGodess', status: '"I Put socks and i say no homo"', tag: 'Ami' },
    { name: 'Phexx_Raigen', status: 'Muscle Man', tag: 'Ami' }
  ];

  contacts.forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="vr-tag">${c.tag}</span>
      <div class="vr-item">
        <strong>${c.name}</strong><br>
        <small>${c.status}</small>
      </div>
    `;
    vrList.appendChild(li);
  });
}