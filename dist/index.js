const navButtons = document.querySelectorAll('.bottom-nav-button');

const handleNavButton = (e) => {
  if (e.currentTarget.classList.contains('active')) return;

  navButtons.forEach((navButton) => {
    if (navButton.classList.contains('active')) {
      navButton.classList.remove('active');
    }
  });

  e.currentTarget.classList.add('active');
}


navButtons.forEach((navButton) => {
  navButton.addEventListener('click', handleNavButton);
  if (navButton.innerHTML.includes('Home')) {
    navButton.classList.add('active');
  }
});

