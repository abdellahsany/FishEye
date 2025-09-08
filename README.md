## FishEye

<p align="center">  
  <img src="https://github.com/abdellahsany/FishEye/blob/master/assets/media/fisheye_welcome.png" alt="Page d’accueil FishEye" width="100%">  
</p>  

---

## Table des matières

* [Mission](#mission-fisheye)
* [Objectifs](#objectifs-fisheye)
* [Points forts de l’interface](#points-forts-de-linterface-fisheye)
* [Stacks techniques](#stacks-techniques-fisheye)
* [Fonctionnalités et bonnes pratiques](#fonctionnalités-et-bonnes-pratiques-fisheye)
* [Aspects techniques & automatisation](#aspects-techniques--accessibilite-automatisation-fisheye)
* [Points techniques spécifiques](#points-techniques-specifiques-fisheye)
* [Démo live](#démo-live-fisheye)

---

<a id="mission-fisheye"></a>
## 🎯 Mission

Moderniser une plateforme de photographes freelance initialement statique en une application web dynamique, interactive, et **entièrement accessible**. Le projet met l'accent sur l'expérience utilisateur et l'inclusion numérique.

---

<a id="objectifs-fisheye"></a>
## 🧭 Objectifs

* Offrir un espace élégant et professionnel pour présenter les portfolios des photographes
* Permettre aux visiteurs de **naviguer facilement**, d’**aimer**, et de **contacter** les photographes
* Garantir une expérience **clavier-first** et **accessible**
* Appliquer une architecture **modulaire, maintenable et conforme aux bonnes pratiques** modernes

---

<a id="points-forts-de-linterface-fisheye"></a>
## ✨ Points forts de l’interface 

* **Liste de photographes** filtrable par tags dynamiques
* **Pages individuelles** avec galeries interactives
* **Tri des médias** par popularité, date ou titre
* **Lightbox intuitive** avec navigation au clavier
* **Formulaire de contact en modale**, conforme aux standards d’accessibilité

---

<a id="stacks-techniques-fisheye"></a>
## 🛠️ Stacks techniques

| Outils         | Fonctions                                                       |
| ---------------------------- | ----------------------------------------------------------------------- |
| HTML5                        | Structure claire et sémantique des pages                                |
| CSS3 / Flexbox               | Mise en page responsive, alignements et layout dynamique                |
| JavaScript (ES6+)            | Interactions dynamiques, tri, lightbox, modale                          |
| ESLint                       | Vérification de style de code et erreurs                                |
| GitHub Pages                 | Hébergement et déploiement                                              |
| ARIA / WCAG 2.1              | Accessibilité et navigation clavier                                     |
| Webpack / Parcel (optionnel) | Bundling et gestion des assets                                          |
| Git / GitHub                 | Versionning et suivi des modifications                                  |
| Font Awesome (CDN)           | Icônes pour UI                                                          |
| Lightbox personnalisée       | Navigation interactive des médias                                       |
| Local Storage / JSON         | Stockage temporaire et gestion des likes                                |
| Media Queries                | Adaptation responsive selon les résolutions (desktop, tablette, mobile) |

---

<a id="fonctionnalités-et-bonnes-pratiques-fisheye"></a>
## ✅ Fonctionnalités et bonnes pratiques

* Architecture **modulaire** : fichiers séparés par logique (templates, données, composants)
* Navigation **sans rechargement de page**
* **Tri dynamique** des médias via menu déroulant
* **Système de likes** avec total en temps réel
* **Gestion des événements clavier/souris** avec accessibilité assurée

---

<a id="aspects-techniques--accessibilité-fisheye"></a>
## ⚙️ Aspects techniques & accessibilité 

* Respect des standards **WCAG 2.1 AA**
* **Navigation 100% clavier** (tabindex, rôles, aria-label)
* **Lightbox et modale** accessibles
* **Texte alternatif** pour tous les médias
* Tests réalisés avec **lecteurs d’écran**

---

<a id="points-techniques-specifiques-fisheye"></a>
## 🔍 Points techniques spécifiques

* **Lightbox personnalisée**
* Navigation clavier (flèches gauche/droite)
* Fermeture avec `Esc` ou bouton
* Bouclage automatique (retour au premier élément)
* **Formulaire en modale**
* Focus automatique à l'ouverture
* Validation front complète avec messages d'erreur
* Accessibilité via `role="dialog"` et `aria-labelledby`
* **Filtrage par tags**, entièrement clavier-compatible

---

## 🔗 Démo live <a id="démo-live-fisheye"></a>

<a href="https://abdellahsany.github.io/FishEye/" target="_blank">
  <img src="https://img.shields.io/badge/Démo_live-Cliquez_ici-0065FC?style=plastic&logo=github&logoColor=white&labelFont=DejaVu%20Sans&messageFont=DejaVu%20Sans&labelFontSize=12&messageFontSize=12" alt="Démo live" style="width:140px; height:18px; border-radius:10px;">
</a>  
