// Fonction qui permet de récupérer les éléments du DOM
function likesDom() {
  const containerLikes = document.querySelectorAll(".mediaContainerLikes");

  const numberLikes = document.querySelectorAll("#likeCount");
  const likeButton = document.querySelectorAll("#likeButton");
  const allLikes = document.querySelector("#info-like-price");

  return {
    containerLikes,
    numberLikes,
    likeButton,
    allLikes,
  };
}

// Fonction qui permet d'incrémenter  les likes
function likesIncrement(heart, price) {
  heart.textContent = parseInt(heart.textContent) + 1;
  totalLikes(price);
}

// Fonction qui permet de décrémenter les likes
function likesDecrement(heart, price) {
  heart.textContent = parseInt(heart.textContent) - 1;
  totalLikes(price);
}

// Fonction qui permet de gérer les likes
function likes(price) {
  const { containerLikes } = likesDom();
  containerLikes.forEach((containerLike) => {
    containerLike.addEventListener("click", (e) => {
      if (e.target.src.includes("heart_white")) {
        likesIncrement(containerLike.childNodes[1], price);
        e.target.src = "assets/icons/heart_red.svg";
      } else {
        likesDecrement(containerLike.childNodes[1], price);
        e.target.src = "assets/icons/heart_white.svg";
      }
    });
  });
  totalLikes(price);
}

// Fonction qui permet de gérer le total des likes
function totalLikes(price) {
  // Style du container des likes et du prix
  const designContainer = {
    position: "fixed",
    "border-radius": "5px 5px 0px 0px",
    bottom: "0",
    right: "35px",
    display: "flex",
    gap: "30px",
    padding: "15px",
    "background-color": "#DB8876",
    "font-size": "24px",
    color: "black",
    "z-index": "2",
  };

  const { numberLikes } = likesDom();
  // Conversion de la NodeList en Array pour pouvoir utiliser la méthode reduce
  const likesArray = [...numberLikes];

  // Calcul du total des likes avec la méthode reduce et affichage du résultat dans le DOM
  const totalLikes = likesArray
    .map((numberLike) => parseInt(numberLike.textContent))
    .reduce((a, b) => a + b, 0);

  // Création du container des likes et du prix
  const containerLikes = document.querySelector("#info-like-price");
  containerLikes.innerHTML = `
    <div>${totalLikes}</div>
        <img src="assets/icons/heart_black.svg" aria-label="Total likes photographers" aria-hidden="true"></img>
    </div>
    <div>${price} € / jour</div>
    `;

  document.querySelector("#main").appendChild(containerLikes);

  const allLikes = document.querySelector("#info-like-price");

  // Application du style du container des likes et du prix
  Object.assign(allLikes.style, designContainer);
}
