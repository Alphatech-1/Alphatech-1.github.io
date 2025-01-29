const vuttonSi = document.getElementById('yes');
const vuttonNo = document.getElementById('no');

const zomosNobios = () => {
  alert('Prometo hacerte feliz <3');
  alert('Nuestra boda sera mañana');
  alert('Te dedico la siguiente cancion uwu');
  location.href = 'https://www.youtube.com/watch?v=tC0OSKCNsBc&ab_channel=LIZMINELLI';
};

const ebitarKCRompaMyBobo = () => {
  vuttonNo.style.position = 'absolute';
  vuttonNo.style.top = (Math.random() * window.innerHeight + 'px');
  vuttonNo.style.left = (Math.random() * window.innerWidth + 'px');
};

vuttonSi.addEventListener('click', zomosNobios);
vuttonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const size = Math.floor(Math.random() * 60) + 80;
  const position = Math.random() * window.innerHeight;
  const animationDuration = Math.random() * 4 + 9;

  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${position}px`;
  heart.style.animationDuration = `${animationDuration}s`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, animationDuration * 1000);
}

function startHearts() {
  setInterval(createHeart, 500);
}

startHearts();