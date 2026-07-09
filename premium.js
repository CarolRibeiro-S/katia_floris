/* ============================================================
   CAMADA PREMIUM — Katia Floris (JS aditivo)
   - Header encolhe ao rolar
   - Partículas douradas flutuando no hero
   ============================================================ */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header encolhe ao rolar
  var bar = document.querySelector('.topbar');
  if (bar) {
    var onScroll = function () {
      bar.classList.toggle('kf-shrunk', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Partículas douradas no hero
  if (!reduce) {
    var hero = document.querySelector('.hero');
    if (hero) {
      if (getComputedStyle(hero).position === 'static') {
        hero.style.position = 'relative';
      }
      var box = document.createElement('div');
      box.className = 'kf-particles';
      for (var i = 0; i < 14; i++) {
        var s = document.createElement('span');
        s.style.left = (Math.random() * 100) + '%';
        s.style.bottom = (Math.random() * 40) + '%';
        var dur = 6 + Math.random() * 9;
        s.style.animationDuration = dur + 's';
        s.style.animationDelay = (-Math.random() * dur) + 's';
        s.style.setProperty('--s', (0.5 + Math.random() * 1.2).toFixed(2));
        box.appendChild(s);
      }
      hero.insertBefore(box, hero.firstChild);
    }
  }
})();
