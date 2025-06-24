# *FishEye*

<p align="center">
  <img src="https://github.com/abdellahsany/FishEye/assets/106497263/8f13bdff-bafd-4fcf-9f03-b291cdf7a213" alt="Page d’accueil FishEye" height="100%" width="100%">
</p>

---

## 📑 Table des matières

* [Mission](#mission)
* [Objectif](#objectif)
* [Points forts de l’interface](#points-forts-de-linterface)
* [Stacks techniques](#stacks-techniques)
* [Fonctionnalités et bonnes pratiques techniques](#fonctionnalites-et-bonnes-pratiques-techniques)
* [Aspects techniques et accessibilité](#aspects-techniques-et-accessibilite)
* [Points techniques spécifiques](#points-techniques-specifiques)
* [Accès au projet par clic](#acces-au-projet-par-clic)
* [Accès au projet par QR](#acces-au-projet-par-qr)

---

## 🎯 Mission <a name="mission"></a>

Moderniser une plateforme de photographes freelance initialement statique en une application web dynamique, interactive, et **entièrement accessible**. Ce projet met l'accent sur l'expérience utilisateur et l'inclusion numérique.

---

## 🧭 Objectif <a name="objectif"></a>

* Offrir un espace élégant et professionnel pour présenter les portfolios des photographes,
* Permettre aux visiteurs de **naviguer facilement**, d’**aimer**, et de **contacter** les photographes,
* Garantir une expérience **clavier-first** et **accessible**,
* Appliquer une architecture **modulaire, maintenable et conforme aux bonnes pratiques** modernes.

---

## ✨ Points forts de l’interface <a name="points-forts-de-linterface"></a>

* **Liste de photographes** filtrable par tags dynamiques,
* **Pages individuelles** avec galeries interactives,
* **Tri des médias** par popularité, date ou titre,
* **Lightbox intuitive** avec navigation au clavier,
* **Formulaire de contact en modale**, conforme aux standards d’accessibilité.

---

## ⚙️ Stacks techniques <a name="stacks-techniques"></a>

* [![HTML](https://img.shields.io/badge/HTML5-HyperText%20Markup%20Language-orange)](https://developer.mozilla.org/fr/docs/Learn/HTML) : HTML sémantique et structuré
* [![CSS](https://img.shields.io/badge/CSS3-Cascading%20Style%20Sheets-blue)](https://developer.mozilla.org/fr/docs/Web/CSS) : Mise en forme et responsivité de base
* [![JavaScript](https://img.shields.io/badge/JavaScript-JavaScript-yellow)](https://www.javascript.com/) : Logique fonctionnelle (ES6+)
* [![ESLint](https://img.shields.io/badge/ESLint-Analyse%20statique-purple)](https://eslint.org/) : Analyse de code avec règles par défaut
* [![VSCode](https://img.shields.io/badge/VSCode-Visual%20Studio%20Code-blueviolet)](https://code.visualstudio.com/) : Environnement de développement
* [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Déploiement-181717?logo=github)](https://pages.github.com/) : Hébergement du site statique

---

## ✅ Fonctionnalités et bonnes pratiques techniques <a name="fonctionnalites-et-bonnes-pratiques-techniques"></a>

* Architecture **composée de modules clairs** : data, templates, composants,
* **Gestion des événements** clavier/souris avec `KeyboardEvent.key` et `addEventListener`,
* **Tri dynamique** des médias via menu déroulant,
* **Système de likes** localisé par média avec totalisation globale dynamique,
* Navigation **sans rechargement de page** (Single Page Logic),
* **Logs console** du formulaire simulant un envoi côté client.

---

## ♿ Aspects techniques et accessibilité <a name="aspects-techniques-et-accessibilite"></a>

* Respect strict des recommandations **WCAG 2.1 AA**,
* Validation via **AChecker** sans "known issues",
* **Textes alternatifs** pour chaque média image ou vidéo,
* Navigation **100% clavier compatible** (tabindex, `aria-*`, role),
* Utilisation d’**éléments HTML sémantiques** (`<main>`, `<section>`, `<article>`, etc.),
* Tests avec **lecteurs d’écran** pour améliorer l’expérience malvoyants.

---

## 🧩 Points techniques spécifiques <a name="points-techniques-specifiques"></a>

* **Lightbox personnalisée** :

  * Ouverture au clic clavier ou souris,
  * Fermeture avec touche `Esc` ou bouton,
  * Navigation circulaire avec flèches gauche/droite.
* **Formulaire modale** :

  * Focus automatique sur champ prénom,
  * Validation front complète,
  * Accessibilité via `role="dialog"` et `aria-labelledby`.
* **Filtrage dynamique** par étiquettes avec activation clavier.

---

## 🔗 Accès au projet par clic <a name="acces-au-projet-par-clic"></a>

<a href="https://abdellahsany.github.io/FishEye/">
  <img src="https://github.com/abdellahsany/Kasa/blob/main/src/assets/images/Picture%20(47).png" alt="Cliquez ici" height="55px" width="55px"/>
</a>

---

## 📲 Accès au projet par QR <a name="acces-au-projet-par-qr"></a>

<p align="left">
  <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://abdellahsany.github.io/FishEye/&amp;size=150x150" alt="QR code pour accéder au projet FishEye" height="55px" width="55px">
</p>
