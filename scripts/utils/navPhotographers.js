// Montre la liste des photographes
function showList() {
  const list = document.querySelector(".navSearch");
  list.style.display = "block";
  list.style.color = "blue";
}

// Cache la liste des photographes
function hideList() {
  const list = document.querySelector(".navSearch");
  list.style.display = "none";
}

// Cache le menu déroulant
function hideTextMenu() {
  const textMenu = document.querySelector(".navSelect");
  textMenu.style.display = "none";
}

// Montre le menu déroulant
function showTextMenu() {
  const textMenu = document.querySelector(".navSelect");
  textMenu.setAttribute("style", "display: flex");
}

// Affiche ou cache la liste des photographes et le menu déroulant en fonction de leur état actuel
function toggleList() {
  const list = document.querySelector(".navSearch");
  const currentDisplay = list.style.display;
  const isListVisible = currentDisplay === "block";

  if (isListVisible) {
    hideList();
    showTextMenu();
  } else {
    showList();
    hideTextMenu();
  }
}

// Tri des médias par titre
function sortArrayByTitle(array) {
  console.log(array, "array111");
  return array.sort((a, b) => a.title.localeCompare(b.title));
}

// Tri des médias par popularité
function sortArrayByLikes(array) {
  return array.sort((a, b) => b.likes - a.likes);
}

// Tri des médias par date
function sortArrayByDate(array) {
  return array.sort((a, b) => a.date - b.date);
}

// Récupère la fonction de tri en fonction du texte cliqué
function getSortFunction(value) {
  const sortFunctions = {
    Titre: sortArrayByTitle,
    Popularité: sortArrayByLikes,
    Date: sortArrayByDate,
  };

  return sortFunctions[value];
}

// Fonction qui change le texte du menu déroulant et trie les médias en fonction du texte cliqué
function changeTextMenu(array, callback, id) {
  const menu = document.querySelector(".navSearch");
  const textMenu = document.querySelector(".navSelect p");

  menu.addEventListener("click", (e) => {
    const mediaContainer = document.querySelector(".mediaContainer");
    mediaContainer.innerHTML = "";

    const clickedElement = e.target;
    const dataValue = clickedElement.dataset.value;
    console.log(dataValue, "dataValue");

    if (clickedElement.tagName === "LI") {
      const text = clickedElement.textContent;
      textMenu.textContent = text;

      const sortFunction = getSortFunction(dataValue);
      console.log(sortFunction, "sortFunction");
      sortFunction(array);

      callback(array, id);
    }
  });
}

// Exectution des fonctions au clic sur le menu déroulant et la liste des photographes
function navMedia(array, callback, id) {
  const menu = document.querySelector(".navSelect");
  const search = document.querySelector(".navSearch");
  menu.addEventListener("click", function () {
    toggleList();
  });
  search.addEventListener("click", function () {
    toggleList();
  });

  changeTextMenu(array, callback, id);
}






