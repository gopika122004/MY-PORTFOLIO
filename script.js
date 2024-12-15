// Sparkle effect script
const sparklesContainer = document.querySelector('.sparkles');

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.top = Math.random() * 100 + '%';
  sparkle.style.animationDelay = Math.random() * 2 + 's';
  sparklesContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

setInterval(createSparkle, 150);

// Form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for reaching out!');
  form.reset();
});
