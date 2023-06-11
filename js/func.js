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

function filterTable() {
  var input = document.getElementById("recherche");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("monTableau");
  var rows = table.getElementsByTagName("tr");

  // Parcourir toutes les lignes de la table et masquer celles qui ne correspondent pas à la recherche
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    var found = false;
    for (var j = 0; j < cells.length; j++) {
      var cellText = cells[j].textContent || cells[j].innerText;
      if (cellText.toUpperCase().indexOf(filter) > -1) {
        found = true;
        break;
      }
    }
    if (found) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}


function ajouter() {

  // Récupérer les valeurs saisies dans les champs du formulaire
  var type = document.querySelector('input[name="type"]:checked').value;
  var titre = document.getElementById("titre").value;
  var auteur = document.getElementById("auteur").value;
  var genre = document.getElementById("genre").value;

  if (type === "" || titre === "" || auteur === "" || genre === "") {
    alert("Veuillez remplir tous les champs du formulaire.");
    return false; // Empêcher le rechargement de la page
  }

  // Créer une nouvelle ligne dans le tableau
  var table = document.getElementById("monTableau");
  var tableBody = document.getElementById("bodyTableau");
  var newRow = tableBody.insertRow();

  // Ajouter les valeurs aux cellules de la nouvelle ligne
  var titreCell = newRow.insertCell();
  var auteurCell = newRow.insertCell();
  var genreCell = newRow.insertCell();
  var typeCell = newRow.insertCell();
  titreCell.innerHTML = titre;
  auteurCell.innerHTML = auteur;
  genreCell.innerHTML = genre;
  typeCell.innerHTML = type;

  // Réinitialiser les champs du formulaire
  document.getElementById("titre").value = "";
  document.getElementById("auteur").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("roman").checked = false;
  document.getElementById("manga").checked = false;
  document.getElementById("bd").checked = false;

  //empâcher rechargement de la page
  return false;
};