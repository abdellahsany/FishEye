// VARIABLES RELATIFS AU MODAL FORMULAIRE (MEDIA) :
const modalContainer = document.getElementById("modalContainer");
const modalFond = document.querySelector(".modalFond");
const main = document.getElementById("main");
const first = document.querySelector("#first");
first.addEventListener("change", checkOutFirst);
const last = document.querySelector("#last");
last.addEventListener("change", checkOutLast);
const email = document.querySelector("#email");
email.addEventListener("change", checkOutEmail);
const message = document.querySelector("#message");
message.addEventListener("change", checkOutMessage);

// VARIABLES RELATIFS AUX MESSAGES D'ERREURS DU MODAL FORMULAIRE (MEDIA) :
const firstError = document.querySelector("#firstError");
const lastError = document.querySelector("#lastError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

// FONCTION TEST PRÉNOM (MEDIA):
function checkOutFirst() {
    if (!first.value) {
        firstError.innerHTML = "Veuillez renseigner votre prénom";
        firstError.style.display = "block";
        return false;
    } else if (first.value.length < 2) {
        firstError.innerHTML = "Veuillez renseigner au moins deux caractères pour votre prénom";
        firstError.style.display = "block";
        return false;
    } else {
        firstError.style.display = "none";
        return true;
    }
}

// FONCTION TEST NOM (MEDIA):
function checkOutLast() {
    if (!last.value) {
        //si champs vide erreur
        lastError.innerHTML = "Veuillez renseigner votre nom";
        lastError.style.display = "block";
        return false;
    } else if (last.value.length < 2) {
        lastError.innerHTML = "Veuillez renseigner au moins deux caractères pour votre nom";
        lastError.style.display = "block";
        return false;
    } else {
        lastError.style.display = "none";
        return true;
    }
}

// VARIABLE RELATIF AU TEST CARACTÈRES SPÉCIAUX ET LETTRES AVANT ET APRÈS L'AROBASE (MEDIA) :
let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// FONCTION TEST EMAIL (MEDIA) :
function checkOutEmail() {
    if (!email.value) {
        emailError.innerHTML = "Veuillez renseigner votre adresse email";
        emailError.style.display = "block";
        return false;
    } else if (regex.exec(email.value) == null) {
        emailError.innerHTML = "Veuillez renseigner une adresse email valide";
        emailError.style.display = "block";
        return false;
    } else {
        emailError.style.display = "none";
        return true;
    }
}

// FONCTION TEST MESSAGE (MEDIA) :
function checkOutMessage() {
    if (!message.value) {
        messageError.innerHTML = "Merci de rédiger votre message";
        messageError.style.display = "block";
        return false;
    } else {
        messageError.style.display = "none";
        return true;
    }
}

// FONCTIONS RELATIFS À L'OUVERTURE ET FERMETURE DU MODAL FORMULAIRE (MEDIA) :
function displayModal() {
    main.setAttribute("aria-hidden", true);
    modalContainer.setAttribute("aria-hidden", false);
    modalContainer.style.display = "block";
    modalFond.style.display = "block";
    first.focus();
    initializeFields();
}

function closeModal() {
    modalContainer.style.display = "none";
    modalFond.style.display = "none";

    initializeFields();
}

// VARIABLE ET FONCTION RELATIFS À LA VALIDATION DU MODAL FORMULAIRE (MEDIA) :
let envoyer = document.getElementById("envoyer");
envoyer.addEventListener("click", displayForm);

function displayForm(e) {
    if (
        checkOutFirst() &&
        checkOutLast() &&
        checkOutEmail() &&
        checkOutMessage()
    ) {
        const formData = {
            first: first.value,
            last: last.value,
            email: email.value,
            message: message.value,
        };
        console.log(formData);
        closeModal();
        document.getElementById("modalForm").reset();
        initializeFields();

    } else {
        e.preventDefault();
    }
}

window.addEventListener("keyup", (e) => {
    closeModalClavier(e);
});

// FONCTION POUR FERMER LA FENÊTRE DU MODAL FORMULAIRE (MEDIA) :
function closeModalClavier(e) {
    if ((modalContainer.style.display = "block" && e.key === "Escape")) {
        closeModal();
    }
}

// FONCTION INITIALISATION (MEDIA) :
function initializeFields() {
    first.value = null;
    last.value = null;
    email.value = null;
    message.value = null;
    firstError.style.display = "none";
    lastError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
}