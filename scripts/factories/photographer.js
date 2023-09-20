/**
 * @function photographersFactory - Factory qui affiche le portrait, le nom, la ville, le pays, la phrase d'accroche et le prix du photographe
 * @param {object} data - Objet qui représente les données d'un photographe
 * @returns
 */

function photographersFactory(data) {
  console.log(data);
  const { id, city, country, tagline, price, name, portrait } = data;
  const image = `assets/photographers/${portrait}`;

  function getPhotographersUserCardDOM() {
    const div = document.createElement("div");
    div.innerHTML = `
    
  <a href="photographer.html?id=${id}" class="photographersNone">
    <img class="photographersImage" src=${image}>
    <h2 class="photographersName">${name}</h2>
    <p class="photographersCityCountry">${city}, ${country}</p>
    <p class="photographersTagline">${tagline}</p>
    <p class="photographersPrice">${price}€/jour</p>
  </a>
            `;
    div.setAttribute("class", "photographers");
    return div;
  }
  return { image, getPhotographersUserCardDOM };
}

/**
 * @function bannerFactory - Factory qui permet de créer un ensemble d'éléments HTML par le biais du DOM en rapport à chaque portrait
 * @param {object} data - Objet qui représente les données d'un photographe
 * @returns
 */
function bannerFactory(data) {
  const { name, city, country, tagline, portrait } = data;
  const image = `assets/photographers/${portrait}`;

  function getBannerUserCardDOM() {
    const div = document.createElement("div");
    div.innerHTML = `
       
       <div class="bannerBody">
       <div class="bannerNameCityCountryTagline">
       <h1>${name}</h1>
       <p>${city}, ${country}</p>
       <div>${tagline}</div>
       </div>
       <div class="bannerImage">
       <img src="${image}">
       </div>
           
       `;
    div.setAttribute("class", "media");
    return div;
  }
  return { getBannerUserCardDOM };
}

/**
 * @function mediaFactory - Factory qui permet de créer un ensemble d'éléments HTML par le biais du DOM en rapport à chaque média
 * @param {object} data - Objet qui représente les medias d'un photographe
 * @returns
 */

function mediaFactory(data) {
  const { title, image, video, likes } = data;

  const logo = {
    heart_red: "assets/icons/heart_red.svg",
    heart_white: "assets/icons/heart_white.svg",
  };

  function getMediaUserCardDOM() {
    const div = document.createElement("div");
    let mediaVideoImage;

    if (video) {
      mediaVideoImage = `
          <video class="mediaVideoImage" controls src="assets/media/${video}" type="video/mp4"></video>
        <div class="mediaContainerTiltle">
          <div class="mediaTitle">
            <p class="mediaTitle">${title}</p>
          </div>
          <div class="mediaContainerLikes">
            <span id="likeCount">${likes}</span>
            <button id="likeButton">
              <img class="heartButton" src="${logo.heart_white}">
          </div>
        </div>
      `;
    } else {
      mediaVideoImage = `
          <img class="mediaVideoImage" src="assets/media/${image}" alt="${title}">
        <div class="mediaContainerTiltle">
          <div class="mediaTitle">
            <p class="mediaTitle">${title}</p>  
          </div>
          <div class="mediaContainerLikes">
            <span id="likeCount">${likes}</span>
            <button id="likeButton">
              <img class="heartButton" src="${logo.heart_white}">
          </div>
        </div>
      `;
    }
    
    div.innerHTML = `
      ${mediaVideoImage}
    `;
    div.setAttribute("class", "media");

    return div;
  }

  return { getMediaUserCardDOM };
}
