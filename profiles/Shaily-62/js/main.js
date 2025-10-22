// Interactive endorse button
const endorseBtn = document.getElementById('endorseBtn');
const card = document.querySelector('.card');
const orbs = document.querySelectorAll('.orb');
const techIcons = document.querySelectorAll('.tech-icon');

card.addEventListener('mousemove', e => {
  const { width, height, left, top } = card.getBoundingClientRect();
  const x = e.clientX - left - width/2;
  const y = e.clientY - top - height/2;

  techIcons.forEach((icon, i) => {
    const factor = (i+1)*12;
    icon.style.transform = `translate(${x/factor}px, ${y/factor}px)`;
  });
});

card.addEventListener('mouseleave', () => {
  techIcons.forEach(icon => icon.style.transform = `translate(0px,0px)`);
});

endorseBtn.addEventListener('click', () => {
  endorseBtn.innerHTML = '✅ Endorsed';
  endorseBtn.disabled = true;
  endorseBtn.style.background = 'linear-gradient(135deg, #358653ff, #065322ff)';

  setTimeout(() => {
    endorseBtn.innerHTML = '<i class="fa-solid fa-star"></i> Endorse';
    endorseBtn.disabled = false;
    endorseBtn.style.background = 'linear-gradient(135deg, #38bdf8, #3b82f6)';
  }, 3000);
});