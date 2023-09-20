/**
 * @function getMedia - Récupère les données du fichier json
 * @returns {Promise} - Retourne les données du fichier json
 */

async function getMedia() {
  const fetchJson = await fetch("data/photographers.json");
  return await fetchJson.json();
}

/**
 * @function displayDataBanner -  Fonction asynchrone qui affiche la banner du photographe
 * @param {object} photographers  - Objet contenant les données du photographe
 * @param {object} id  - Objet contenant l'id du photographe
 */

async function displayDataBanner(photographers, id) {
  const bannerId = photographers.find((item) => item.id === Number(id));
  const bannerContainer = document.querySelector(".bannerContainer");
  photographers.forEach((photographers) => {
    if (photographers.id === Number(id)) {
      const bannerModel = bannerFactory(photographers);
      const bannerUserCardDOM = bannerModel.getBannerUserCardDOM();
      bannerContainer.appendChild(bannerUserCardDOM);
    }
  });
}

/**
 * @function displayDataMedia - Fonction asynchrone qui affiche les médias du photographe
 * @param {object} media - Objet contenant les données des médias
 * @param {object} id - Objet contenant l'id du photographe
 */

async function displayDataMedia(media, id) {
  const mediaContainer = document.querySelector(".mediaContainer");
  media.forEach((media) => {
    if (media.photographerId === Number(id)) {
      const mediaModel = mediaFactory(media);
      const mediaUserCardDOM = mediaModel.getMediaUserCardDOM();
      mediaContainer.appendChild(mediaUserCardDOM);
    }
  });
}

/**
 * @function init - Fonction asynchrone qui initialise les fonctions
 */
async function init() {
  const textMenu = document.querySelector(".navSelect p").textContent;

  const url = window.location.search;
  const urlSearchParams = new URLSearchParams(url);
  const id = urlSearchParams.get("id");
  const { media, photographers } = await getMedia();
  await displayDataMedia(media, id);
  await displayDataBanner(photographers, id);
  lightbox();
  // Pour changer le texte du menu déroulant et trier les médias
  navMedia(media, displayDataMedia, id);

  // Récupère le photographe en fonction de l'id
  const objectId = photographers.find((item) => item.id === Number(id));

  // Pour afficher le nombre de likes et le prix total
  likes(objectId.price);
}

// Exécution de la fonction init
init();
