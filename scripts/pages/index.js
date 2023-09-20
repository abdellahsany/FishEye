/**
 * @function getPhotographers - Récupère les données du fichier json
 * @returns {Promise} - Retourne les données du fichier json
 */

async function getPhotographers() {
  const fetchJson = await fetch("data/photographers.json");
  return await fetchJson.json();
}


/**
 * @function displayDataPhotographers - Fonction asynchrone qui affiche les photographes sur la page d'accueil
 * @param {object} photographers - Objet contenant les données des photographes
 */

async function displayDataPhotographers(photographers) {
  console.log(photographers);
  const photographersContainer = document.querySelector(
    ".photographersContainer"
  );
  photographers.forEach((photographer) => {
    const photographersModel = photographersFactory(photographer);
    const photographersUserCardDOM =
      photographersModel.getPhotographersUserCardDOM();
    photographersContainer.appendChild(photographersUserCardDOM);
  });
}


/**
 * @function init - Fonction asynchrone qui initialise les fonctions
 */

async function init() {
  const { photographers } = await getPhotographers();
  displayDataPhotographers(photographers);
}

// Exécution de la fonction init
init();
