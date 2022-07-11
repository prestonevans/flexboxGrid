const hamburgerMenu = document.querySelector('.mobile-nav');

hamburgerMenu.addEventListener('click', () => {
  const mobileMenu = document.querySelector('aside');

  mobileMenu.classList.toggle('show-mobile-menu');
  if (hamburgerMenu.innerHTML === '<i class="fa-solid fa-x"></i>') {
    hamburgerMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    return;
  }
  hamburgerMenu.innerHTML = '<i class="fa-solid fa-x"></i>';
});
