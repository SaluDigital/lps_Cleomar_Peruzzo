(function () {
  'use strict';

  var WA_NUMBER = '5598989072316';
  var WA_TEXT = 'Olá! Vim pela página de alinhadores ClearCorrect da Peruzzo Odontologia e gostaria de agendar uma avaliação.';
  var waUrl = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_TEXT);

  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = waUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });

  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.marquee__track').forEach(function (track) {
    if (rm) return;
    var set = Array.prototype.slice.call(track.children);
    var k = Math.max(1, Math.ceil(window.innerWidth / track.scrollWidth));
    var i;
    for (i = 1; i < k; i++) set.forEach(function (c) { track.appendChild(c.cloneNode(true)); });
    Array.prototype.slice.call(track.children).forEach(function (c) {
      var d = c.cloneNode(true);
      d.setAttribute('aria-hidden', 'true');
      track.appendChild(d);
    });
    track.style.setProperty('--dur', Math.round(track.scrollWidth / 2 / 55) + 's');
  });

  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  items.forEach(function (el) { io.observe(el); });
})();
