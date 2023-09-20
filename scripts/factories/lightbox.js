const showLightbox = (previous, element, next, close) => {
  const lightboxSection = document.createElement("section");
  lightboxSection.className = "lightboxSection";

  const lightboxContainer = document.createElement("div");
  lightboxContainer.className = "lightboxContainer";

  const lightboxMedia = document.createElement("div");
  lightboxMedia.className = "lightboxMedia";

  const closeButton = document.createElement("img");
  closeButton.className = "lightboxClose";
  closeButton.src = "assets/icons/close_primaryColor.svg";
  closeButton.alt = "close";
  closeButton.addEventListener("click", close);

  const previousButton = document.createElement("img");
  previousButton.className = "lightboxArrowLeft";
  previousButton.src = "assets/icons/arrow_primaryColor.svg";
  previousButton.alt = "arrow-left";
  previousButton.addEventListener("click", previous);

  const nextButton = document.createElement("img");
  nextButton.className = "lightboxArrowRight";
  nextButton.src = "assets/icons/arrow_primaryColor.svg";
  nextButton.alt = "arrow-right";
  nextButton.addEventListener("click", next);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      previous();
    }
    if (e.key === "ArrowRight") {
      next();
    }
    if (e.key === "Escape") {
      close();
    }
  });

  const mediaContainer = document.createElement("div");
  mediaContainer.className = "lightboxMediaContainer";

  const mediaElement = element.src.includes("jpg")
    ? document.createElement("img")
    : document.createElement("video");
  mediaElement.className = "lightboxElement";
  mediaElement.src = element.src;
  mediaElement.alt = element.alt;

  if (element.src.includes("mp4")) {
    mediaElement.setAttribute("controls", "true");
    mediaElement.setAttribute("type", "video/mp4");
  }

  const title = document.createElement("p");
  title.textContent = element.alt;
  title.className = "lightboxTitle";

  mediaContainer.appendChild(mediaElement);
  lightboxMedia.appendChild(closeButton);
  lightboxMedia.appendChild(previousButton);
  lightboxMedia.appendChild(mediaContainer);
  lightboxMedia.appendChild(nextButton);
  lightboxMedia.appendChild(title);

  lightboxContainer.appendChild(lightboxMedia);
  lightboxSection.appendChild(lightboxContainer);

  document.body.appendChild(lightboxSection);

  mediaElement.focus();
};

const lightbox = () => {
  const mediaContainer = document.querySelector(".mediaContainer");
  const mediaDom = mediaContainer.querySelectorAll(".mediaVideoImage");
  const medias = Array.from(mediaDom);

  let currentIndex = 0;

  const previousMedia = () => {
    currentIndex = currentIndex === 0 ? medias.length - 1 : currentIndex - 1;
    updateMedia(currentIndex);
  };

  const nextMedia = () => {
    currentIndex = currentIndex === medias.length - 1 ? 0 : currentIndex + 1;
    updateMedia(currentIndex);
  };

  const closeLightbox = () => {
    const lightboxSection = document.querySelector(".lightboxSection");
    document.body.removeChild(lightboxSection);
  };

  const updateMedia = (index) => {
    const mediaElement = medias[index];
    const mediaContainer = document.querySelector(".lightboxMediaContainer");
    mediaContainer.innerHTML = "";

    if (mediaElement.src.includes("jpg")) {
      const image = document.createElement("img");
      image.className = "lightboxElement";
      image.src = mediaElement.src;
      image.alt = mediaElement.alt;
      mediaContainer.appendChild(image);
    } else {
      const video = document.createElement("video");
      video.className = "lightboxElement";
      video.src = mediaElement.src;
      video.alt = mediaElement.alt;
      video.setAttribute("controls", "true");
      video.setAttribute("type", "video/mp4");
      mediaContainer.appendChild(video);
    }

    const title = document.querySelector(".lightboxTitle");
    title.textContent = mediaElement.alt;
  };

  medias.forEach((media, index) => {
    media.addEventListener("click", () => {
      currentIndex = index;
      showLightbox(previousMedia, media, nextMedia, closeLightbox);
    });
  });
};

lightbox();


