function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.visibility = 'visible';
  }

  // Close the popup
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.visibility = 'hidden';
  }

// Code JavaScript pour afficher/cacher le menu déroulant
function toggleDropdown() {
  var dropdown = document.querySelector('.dropdown');
  var currentTop = parseInt(dropdown.style.top, 10);
  if (currentTop < 0) {
    dropdown.style.top = '0';
  } else {
    dropdown.style.top = '-200px';
  }
}