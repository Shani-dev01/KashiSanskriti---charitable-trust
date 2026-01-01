document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('menu-button');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    menu.classList.toggle('hidden');
  });
});
