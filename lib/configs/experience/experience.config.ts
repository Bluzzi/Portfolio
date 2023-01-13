import { ExperienceBase } from "./experience.type";
import { populateExperience } from "./experience.util";
import { date } from "$lib/utils/date";

const experienceBase: ExperienceBase[] = [
  {
    type: "pro",
    date: {
      start: date(11, 7, 2022),
      end: null
    },
    company: "Essential Tooth Box",
    title: "Développement full-stack d'un site e-commerce",
    link: null,
    description: [
      "Mise en place d'un système de synchronisation des produits et commandes entre Shopify et PrestaShop avec le backend",
      "Écriture et lecture de fichier Excel et Google Sheet via des scripts développés",
      "Création d'un site internet pour l'espace distributeur utilisant ReactJS et NextJS",
      "Création d'un site internet e-commerce utilisant ReactJS et NextJS",
      "Développement d'une API REST avec le framework KoaJS et la BDD MongoDB",
      "Élaboration d'un système de génération de fichier OpenAPI pour générer le support de l'API pour le frontend",
      "Mise en place d'un package de composants pour notre design système avec ReactJS, Storybook et Tailwind"
    ],
    skills: ["NodeJS", "TypeScript", "ReactJS", "NextJS", "Tailwind", "Storybook", "KoaJS", "MongoDB", "OpenAPI"]
  },
  {
    type: "pro",
    date: {
      start: date(1, 5, 2022),
      end: date(30, 6, 2022)
    },
    company: "Poissonnerie Dugas",
    title: "Développement full-stack d'un site de gestion de commande",
    link: null,
    description: [
      "Conception et développement d'un site internet permettant de prendre et gérer des commandes à l'aide de ReactJS et NextJS",
      "Mise en place d'une API REST utilisant le framework NestJS et la BDD PostgreSQL"
    ],
    skills: ["NodeJS", "ReactJS", "NextJS", "TypeScript", "Tailwind", "NestJS", "PostgreSQL", "Docker"]
  },
  {
    type: "open-source",
    date: {
      start: date(11, 4, 2021),
      end: null
    },
    company: "Royaume",
    title: "...",
    link: "https://github.com/Virtual-Royaume",
    description: [],
    skills: []
  },
  {
    type: "pro",
    date: {
      start: date(1, 9, 2018),
      end: date(30, 4, 2022)
    },
    company: "Symphonia",
    title: "Développement full-stack et gestion de serveur",
    link: null,
    description: [
      "Création de plugin via le software PocketMine-MP",
      "Mise en place d'un serveur socket (TCP) pour synchroniser les serveurs",
      "Développement d'un backend (API REST) utilisant le framework NestJS et la BDD PostgreSQL",
      "Construction d'un panel proposant divers outils de gestion à l'aide de ReactJS et NextJS",
      "Gestion et maintenance des serveurs sur Ubuntu"
    ],
    skills: ["NodeJS", "TypeScript", "PHP", "PostgreSQL", "NestJS", "ReactJS", "NextJS", "SCSS", "Socket (TCP)", "Docker", "Ubuntu"]
  }
];

export const experiences = populateExperience(experienceBase);