// 3D Tilt and Glowing Cursor Effect Logic
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Glowing position update
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);

    // 3D Tilt degree calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
});

// Contact Form Handler Example
const form = document.getElementById('mainForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
    form.reset();
  });
}