function toggleMenu() {
    var menuContainer = document.getElementById('menu-container');
    var menuToggle = document.querySelector('.menu-toggle');
  
    menuContainer.classList.toggle('open');
    menuToggle.classList.toggle('open');
  }