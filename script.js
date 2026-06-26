const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('[data-animate]').forEach((section) => observer.observe(section));

const hairEffect = document.querySelector('.hair-effect');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const max = document.body.scrollHeight - window.innerHeight;
  const progress = Math.min(scrollY / max, 1);

  if (hairEffect && window.innerWidth > 1024) {
    const scale = 1 + progress * 0.5;
    const opacity = 0.65 + progress * 0.25;
    hairEffect.style.transform = `scale(${scale}) translateY(${progress * 12}px)`;
    hairEffect.style.opacity = `${opacity}`;
  }
});

/* ==========================================================================
   Hamburger Mobile Menu Interaction
   ========================================================================== */
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const navLinks = document.querySelectorAll('.nav-menu a');

function toggleMenu() {
  const isOpen = hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isOpen);
  
  // Prevent background scrolling when menu is active
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);
}

if (menuOverlay) {
  menuOverlay.addEventListener('click', closeMenu);
}

// Close mobile menu when clicking any link
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
