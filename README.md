# 📚 Bibliothèque Municipale - Application Web

![Version](https://img.shields.io/badge/version-0.0.0-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Une application web moderne de bibliothèque municipale développée avec React 19, TypeScript et Vite. Interface complète pour la recherche de livres, exploration de la base OpenLibrary et intégration Wikipedia avec routing avancé et tests complets. ( si il existe un probleme se référer au rendu moodle)

## 📋 Table des Matières

- [🎯 Aperçu](#-aperçu)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies](#️-technologies)
- [📋 Prérequis](#-prérequis)
- [🚀 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [💻 Utilisation](#-utilisation)
- [📁 Architecture](#-architecture)
- [🧪 Tests](#-tests)
- [📡 APIs](#-apis)
- [🎨 Personnalisation](#-personnalisation)
- [🚀 Déploiement](#-déploiement)
- [🤝 Contribution](#-contribution)
- [🔧 Résolution de Problèmes](#-résolution-de-problèmes)
- [📄 Licence](#-licence)

## 🎯 Aperçu

Cette application offre une interface moderne et intuitive pour :

- **Rechercher** des livres dans la base de données OpenLibrary (1,7M+ livres)
- **Explorer** les détails enrichis avec informations Wikipedia
- **Naviguer** facilement entre les différentes sections
- **Basculer** automatiquement entre thèmes clair/sombre
- **Suivre** les changements récents en temps réel

### 🖼️ Captures d'écran

```
Dans le dossier captures -captures
```

## ✨ Fonctionnalités

### 🔍 Recherche Complète

- **Barre de recherche globale** : Accessible depuis le header sur toutes les pages
- **Recherche avancée** : Filtrage par titre, auteur, sujet, année, ISBN, lieu
- **Résultats enrichis** : Couvertures, métadonnées, liens vers détails
- **Navigation intelligente** : URLs propres avec paramètres de recherche

### 🎨 Interface Utilisateur

- **Design responsive** : Compatible mobile, tablette, desktop
- **Thème adaptatif** : Bascule automatique sombre/clair selon l'heure (20h-6h)
- **Bascule manuelle** : Bouton Sun/Moon dans le header
- **Navigation fluide** : Routing client-side avec React Router DOM 7.6.2
- **Feedback utilisateur** : États de chargement, erreurs, succès

### 📖 Données Enrichies

- **OpenLibrary** : 1,7M+ livres, auteurs, couvertures, métadonnées
- **Wikipedia** : Articles, extraits, images pour contexte culturel
- **Couvertures multiples** : Small (S), Medium (M), Large (L)
- **Changements temps réel** : Flux des dernières modifications (refresh 30s)

### ⚡ Performance et Qualité

- **Build ultra-rapide** : Vite 6.3.5 avec HMR instantané
- **TypeScript strict** : Typage complet pour la robustesse
- **Tests complets** : Vitest + Testing Library (composants, pages, APIs)
- **Linting avancé** : ESLint avec règles React/TypeScript
- **Code splitting** : Chargement optimisé des ressources

## 🛠️ Technologies

### Frontend Core

| Technologie          | Version | Description                                 |
| -------------------- | ------- | ------------------------------------------- |
| **React**            | 19.1.0  | Framework UI avec dernières fonctionnalités |
| **TypeScript**       | 5.8.3   | Typage statique et IntelliSense             |
| **Vite**             | 6.3.5   | Build tool ultra-rapide avec HMR            |
| **React Router DOM** | 7.6.2   | Routing client-side moderne                 |

### UI/UX

| Technologie          | Version | Description                       |
| -------------------- | ------- | --------------------------------- |
| **Lucide React**     | 0.513.0 | Icônes modernes et accessibles    |
| **CSS-in-JS**        | Native  | Styling inline pour la simplicité |
| **CSS Grid/Flexbox** | Native  | Layout responsive moderne         |

### Développement et Tests

| Technologie           | Version | Description                    |
| --------------------- | ------- | ------------------------------ |
| **Vitest**            | 3.2.3   | Framework de test ultra-rapide |
| **Testing Library**   | 16.3.0  | Tests composants React         |
| **Jest DOM**          | 6.6.3   | Matchers DOM pour tests        |
| **ESLint**            | 9.25.0  | Linting avec règles React/TS   |
| **TypeScript ESLint** | 8.30.1  | Linting TypeScript avancé      |

## 📋 Prérequis

### Environnement Système

- **Système d'exploitation** : Windows 10+, macOS 10.15+, Linux Ubuntu 18.04+
- **Node.js** : Version 18.0.0 ou supérieure (LTS recommandée)
- **npm** : Version 8.0.0+ (inclus avec Node.js) ou **yarn** 1.22.0+
- **Git** : Version 2.30.0+ pour le clonage du repository

### Vérification des Prérequis

```bash
# Vérifier Node.js
node --version  # Doit afficher v18.0.0+

# Vérifier npm
npm --version   # Doit afficher 8.0.0+

# Vérifier Git
git --version   # Doit afficher 2.30.0+
```

### Navigateurs Supportés

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🚀 Installation

### 1. Clonage du Repository

```bash
# Cloner le projet
git clone https://github.com/Reuss77/3webProj.git

# Se déplacer dans le dossier
cd openlibrary-app

# Vérifier le contenu
ls -la
```

### 2. Installation des Dépendances

```bash
# Avec npm (recommandé)
npm install

# OU avec yarn
yarn install

# Vérifier l'installation
npm list --depth=0
```

### 3. Vérification de l'Installation

```bash
# Vérifier que tous les packages sont installés
npm ls

# Vérifier la configuration TypeScript
npx tsc --noEmit

# Vérifier ESLint
npm run lint
```

### 4. Premier Lancement

```bash
# Démarrer le serveur de développement
npm run dev

# L'application sera accessible sur http://localhost:5173
```

Si le port 5173 est occupé, Vite choisira automatiquement le port suivant disponible.

## ⚙️ Configuration

### Configuration Vite (vite.config.ts)

Le fichier vite.config.ts configure le serveur de développement sur le port 5173 avec accès réseau activé et ouverture automatique du navigateur. Pour la production, il génère des source maps, optimise pour les navigateurs modernes (target: esnext), et configure des alias pour les imports absolus avec "@" pointant vers "./src". Le plugin React est activé pour le support JSX et Fast Refresh.

### Configuration TypeScript (tsconfig.json)

Le fichier tsconfig.json configure TypeScript pour cibler ES2020 avec support des dernières fonctionnalités JavaScript et DOM. Il active le mode strict avec toutes les vérifications avancées (variables non utilisées, paramètres non utilisés, cas fallthrough). La résolution des modules est configurée pour le bundler moderne avec support des extensions TypeScript et isolation des modules. Le JSX utilise la transformation React automatique, et des alias de chemin permettent l'import absolu avec "@/" pointant vers "./src/".

### Fichier setupTests.ts

Le fichier src/setupTests.ts configure l'environnement de test global en important Jest DOM pour les matchers spécialisés. Il inclut un mock pour window.matchMedia nécessaire aux tests de thème, simulant les media queries avec tous les event listeners requis. Cette configuration permet aux tests de fonctionner correctement dans l'environnement jsdom sans navigateur réel.

## 💻 Utilisation

### Scripts Disponibles

| Commande             | Description                       | Usage                   |
| -------------------- | --------------------------------- | ----------------------- |
| `npm run dev`        | Serveur de développement avec HMR | Développement quotidien |
| `npm run build`      | Build de production optimisé      | Avant déploiement       |
| `npm run preview`    | Prévisualisation du build local   | Test du build           |
| `npm run lint`       | Vérification ESLint               | Avant commit            |
| `npm run test`       | Lancement des tests               | CI/CD                   |
| `npm run test:watch` | Tests en mode watch               | Développement TDD       |

### Démarrage Rapide

#### 1. Lancer en mode développement

```bash
npm run dev
```

- Ouvre automatiquement http://localhost:5173
- Hot Module Replacement activé
- Source maps disponibles pour le débogage

#### 2. Première utilisation

1. **Page d'accueil** (`/`) : Voir les changements récents OpenLibrary
2. **Recherche simple** : Utiliser la barre de recherche du header
3. **Recherche avancée** : Aller sur `/advanced` pour les filtres
4. **Détails livre** : Cliquer sur un résultat pour voir `/book/:id`

#### 3. Navigation

- **Header permanent** : Logo, titre, barre de recherche, bouton thème
- **Routes principales** :
  - `/` - Accueil avec changements récents
  - `/advanced` - Page de recherche avancée
  - `/search?q=terme` - Résultats de recherche
  - `/book/OL123W` - Détails d'un livre spécifique
  - `/favoris - Livres en favoris

### Exemples d'Utilisation

#### Recherche Simple via Header

L'exemple de recherche dans le header montre une fonction handleHeaderSearch qui prend une query string, la valide en enlevant les espaces, puis utilise navigate de React Router pour rediriger vers la page de résultats avec l'URL /search et le paramètre q encodé. Cette approche maintient l'URL propre et permet le partage de liens de recherche.

#### Recherche Avancée avec Routing

L'exemple de recherche avancée montre un composant AdvancedSearchPage qui utilise le hook useNavigate de React Router. La fonction handleSearch construit les paramètres URL avec URLSearchParams en ajoutant conditionnellement chaque champ (query, author, subject, year). Elle redirige ensuite vers /search avec tous les paramètres encodés dans l'URL, permettant ainsi la sauvegarde et le partage des recherches avancées.

#### Intégration Complète

L'exemple d'intégration complète montre comment structurer l'App principale avec BrowserRouter qui englobe tout l'arbre de composants, le Layout qui fournit la structure commune (header, footer), et AppRoutes qui gère le routing. Cette architecture garantit que le layout persiste lors de la navigation et que toutes les routes sont correctement configurées.

#### Livres aimés

Zone de livres favoris pour retrouver rapidement

## 📁 Architecture

### Structure Complète du Projet

```
openlibrary-app/
├── 📁 public/                     # Assets statiques
│   ├── 🖼️ vite.svg              # Favicon Vite
│   └── 📄 index.html             # Template HTML principal
├── 📁 src/                       # Code source principal
│   ├── 📁 api/                   # Clients API et services
│   │   ├── 📄 openLibrary.ts     # API OpenLibrary (recherche, détails, changements)
│   │   └── 📄 wikipediaAPI.ts    # API Wikipedia (informations enrichies)
│   ├── 📁 components/            # Composants React réutilisables
│   │   ├── 📄 AdvancedSearch.tsx # Formulaire recherche avancée
│   │   ├── 📄 AdvancedSearchResults.tsx # Affichage résultats filtres
│   │   ├── 📄 BookCard.tsx       # Carte livre individuelle
│   │   ├── 📄 Layout.tsx         # Layout principal avec header/footer
│   │   ├── 📄 SearchBar.tsx      # Barre de recherche globale
│   │   ├── 📄 ThemeToggle.tsx    # Bouton basculement thème
│   │   └── 📁 __tests__/         # Tests composants
│   │       └── 📄 BookCard.test.tsx
│   ├── 📁 pages/                 # Pages/Vues principales
│   │   ├── 📄 Home.tsx           # Page accueil + changements récents
│   │   ├── 📄 AdvancedSearchPage.tsx # Page recherche avancée
│   │   ├── 📄 BookDetails.tsx    # Page détails livre individuel
│   │   ├── 📄 SearchResults.tsx  # Page résultats recherche
│   │   └── 📁 __tests__/         # Tests pages
│   │       ├── 📄 BookDetails.test.tsx
│   │       └── 📄 SearchResults.test.tsx
│   ├── 📁 routes/                # Configuration routing
│   │   └── 📄 AppRoutes.tsx      # Définition routes React Router
│   ├── 📁 assets/                # Resources statiques
│   │   └── 🖼️ logo.png          # Logo bibliothèque municipale
│   ├── 📁 types/                 # Définitions TypeScript
│   │   └── 📄 interfaces.ts      # Interfaces API et composants
│   ├── 📄 App.tsx                # Composant racine
│   ├── 📄 main.tsx               # Point d'entrée React
│   └── 📄 setupTests.ts          # Configuration globale tests
├── 📄 package.json               # Dépendances et scripts npm
├── 📄 package-lock.json          # Lock file dépendances
├── 📄 tsconfig.json              # Configuration TypeScript
├── 📄 tsconfig.node.json         # Config TypeScript pour Node.js
├── 📄 vite.config.ts             # Configuration Vite
├── 📄 eslint.config.js           # Configuration ESLint
├── 📄 .gitignore                 # Fichiers ignorés par Git
└── 📄 README.md                  # Documentation (ce fichier)
```

### Architecture des Composants

#### 🏗️ Layout Principal

```typescript
// Layout.tsx - Structure globale
Layout
├── Header
│   ├── Logo + Titre
│   ├── SearchBar (recherche globale)
│   └── ThemeToggle (bouton thème)
├── Main
│   └── {children} (contenu des pages)
└── Footer
    └── Copyright
```

#### 🔀 Configuration du Routing

Le fichier AppRoutes.tsx importe Routes et Route de React Router DOM pour définir quatre routes principales : la route racine ("/") qui affiche le composant Home, "/advanced" pour AdvancedSearchPage, "/book/:id" pour BookDetails avec paramètre dynamique id, et "/search" pour SearchResults. Cette configuration centralisée facilite la maintenance et l'ajout de nouvelles routes.

#### 🎯 Flux de Données

```
User Input → Component → API Call → State Update → UI Re-render
     ↓           ↓           ↓            ↓            ↓
   Search    SearchBar   openLibrary   useState    Results
```

### Composants Clés Expliqués

#### 📄 openLibrary.ts

Ce fichier contient toutes les fonctions pour interagir avec l'API OpenLibrary. Il inclut des interfaces TypeScript pour les données (RecentChange, Author, Cover, BookDetails, SearchResult), des fonctions de recherche simple et avancée, la récupération de détails de livres avec gestion des auteurs et couvertures, et le suivi des changements récents avec gestion d'erreur complète.

#### 📄 AdvancedSearch.tsx

Composant formulaire React avec état local pour tous les champs de recherche (titre, auteur, sujet, année, ISBN, lieu). Il gère la soumission avec validation et appelle la fonction onSearch fournie en prop. Le design utilise une grille CSS responsive avec des inputs stylés et un bouton de soumission.

#### 📄 ThemeToggle.tsx

Composant intelligent qui gère la détection automatique du thème selon l'heure (20h-6h pour le mode sombre) et les préférences système. Il utilise les icônes Lucide React (Sun/Moon) et modifie l'attribut data-theme du document pour activer les variables CSS correspondantes.

#### 📄 Home.tsx

Page d'accueil qui affiche les changements récents d'OpenLibrary avec rafraîchissement automatique toutes les 30 secondes. Elle gère les états de chargement, d'erreur et de succès, avec un bouton de rafraîchissement manuel et un formatage des dates et informations.

## 🧪 Tests

### Configuration Complète des Tests

Test des différentes fonctionnalités

#### Setup Global (setupTests.ts)

Le fichier de setup configure l'environnement de test global avec Jest DOM pour les matchers spécialisés, des mocks pour window.matchMedia nécessaires aux tests de thème, un mock global pour fetch utilisé dans les tests d'API, et le nettoyage automatique des mocks après chaque test.

#### Configuration Vitest

La configuration Vitest est intégrée dans vite.config.ts avec les options test. Elle active les globals pour éviter les imports répétitifs, utilise l'environnement jsdom pour simuler le DOM, configure setupFiles vers le fichier setupTests.ts, active le support CSS, et configure la génération de coverage avec le provider v8. Les rapports incluent text, json et html avec exclusion des dossiers non pertinents comme node_modules, dist et les fichiers de test et configuration.

### Stratégies de Test Avancées

#### 1. Tests de Composants

Le fichier **BookCard.test.tsx** teste l'affichage du composant BookCard avec des données mock réalistes. Il vérifie que le titre et l'auteur s'affichent correctement, que la couverture a le bon src, que le lien de navigation fonctionne, et gère les cas où la couverture est absente. Le composant est rendu avec MemoryRouter pour gérer le routing.

#### 2. Tests de Pages avec APIs

Le fichier **BookDetails.test.tsx** teste la page de détails avec mocking complet des APIs OpenLibrary et Wikipedia. Il vérifie le chargement et l'affichage des détails du livre, l'intégration des informations Wikipedia, la gestion des erreurs d'API, et le fonctionnement du bouton de changement de thème avec vérification de l'attribut data-theme.

#### 3. Tests de Recherche

Le fichier **SearchResults.test.tsx** teste la page de résultats avec mocking de fetchSearchResults. Il utilise une fonction utilitaire renderWithRouter pour éviter la duplication, teste l'affichage des résultats, les messages de chargement avec gestion asynchrone, les cas sans résultats, et la gestion d'erreur avec messages appropriés.

### Scripts de Test Avancés

#### Coverage des Tests

```bash
# Coverage complet avec rapport HTML
npm run test -- --coverage --reporter=html

# Coverage avec seuils minimums
npm run test -- --coverage --reporter=text --reporter=lcov

# Tests avec watch sur fichiers spécifiques
npm run test:watch -- BookCard

# Tests en mode verbose pour débogage
npm run test -- --reporter=verbose
```

#### Bonnes Pratiques Utilisées

- **MemoryRouter** pour tester les composants avec routing sans navigateur
- **Mock des APIs** pour isolation complète des tests des services externes
- **États d'erreur** avec coverage des cas d'échec et messages d'erreur
- **États de chargement** avec gestion asynchrone et waitFor
- **Fonctions utilitaires** comme renderWithRouter pour réduire la duplication
- **Données mock réalistes** qui reflètent la structure des vraies APIs

## 📡 APIs

### OpenLibrary API Documentation

#### Endpoints Principaux

| Endpoint              | Description         | Paramètres                      | Rate Limit  |
| --------------------- | ------------------- | ------------------------------- | ----------- |
| `/search.json`        | Recherche de livres | q, title, author, subject, year | 100 req/min |
| `/works/{id}.json`    | Détails d'un livre  | id (ex: OL123W)                 | 100 req/min |
| `/recentchanges.json` | Changements récents | limit, offset                   | 10 req/min  |
| `/authors/{id}.json`  | Détails d'un auteur | id (ex: OL123A)                 | 100 req/min |

#### Paramètres de Recherche Avancée

L'interface SearchParams définit tous les paramètres acceptés par l'API OpenLibrary pour la recherche avancée. Elle inclut q pour la recherche générale, title pour le titre exact ou partiel, author pour le nom de l'auteur, subject pour le sujet/catégorie, first_publish_year pour l'année de première publication, publisher pour l'éditeur, isbn pour le numéro ISBN, place pour le lieu de publication, et limit/offset pour la pagination avec un maximum de 100 résultats par requête.

#### Exemples d'Utilisation API

Les exemples d'utilisation montrent trois patterns principaux. La recherche simple utilise searchBooks avec une query string et affiche le nombre de résultats trouvés. La recherche avancée combine plusieurs paramètres comme title, author, subject et year avec searchBooksAdvanced. La récupération de détails complets combine fetchBookDetails avec enrichissement Wikipedia via fetchWikiInfo, retournant un objet unifié avec toutes les informations disponibles.

### Wikipedia API Documentation

L'API Wikipedia française est configurée avec les paramètres optimaux pour récupérer les extraits d'introduction en texte brut et les miniatures de 300 pixels. La configuration CORS avec origin: '\*' permet les requêtes depuis le navigateur. Le fichier **wikipediaAPI.ts** gère la construction des URLs, les appels API et la gestion d'erreur avec retry automatique.

### Optimisation et Cache

Un système de cache simple en mémoire avec TTL de 5 minutes évite les appels redondants. Les fonctions incluent une gestion d'erreur robuste avec retry et délais progressifs. Toutes les APIs retournent des erreurs explicites pour faciliter le débogage et l'affichage utilisateur.

## 🎨 Personnalisation

### Système de Thème CSS Variables

#### Variables CSS Globales

Le système de thème utilise des variables CSS personnalisées définies dans :root pour le thème clair et [data-theme="dark"] pour le thème sombre. Les variables couvrent les couleurs principales (primary, primary-dark, primary-light), les couleurs de fond (background, background-secondary, background-tertiary), les couleurs de texte (text, text-secondary, text-muted), les ombres (shadow-sm, shadow-md), les bordures (border-radius, border-color), et les espacements. Cette approche permet une bascule instantanée entre thèmes sans rechargement.

#### Hook de Thème Personnalisé

Le hook useTheme gère trois états de thème : 'light', 'dark' et 'auto'. Il utilise useState pour le thème sélectionné et resolvedTheme pour le thème effectif. L'effet detectTheme vérifie l'heure (mode sombre entre 20h et 6h) et les préférences système (prefers-color-scheme). Le hook écoute les changements de préférences système avec addEventListener et met à jour l'attribut data-theme du document automatiquement.

### Configuration de l'Identité Visuelle

#### Branding Centralisé

Le fichier config/branding.ts centralise toute la configuration de l'identité visuelle. Il contient les informations de l'organisation (nom complet, nom court, description, site web, email), la configuration du logo (src, alt, dimensions), les couleurs de marque (brand primary et secondary), et peut inclure les liens sociaux. Cette approche facilite la personnalisation pour d'autres bibliothèques en modifiant simplement un fichier de configuration central.

Le **Layout.tsx** utilise cette configuration pour afficher le logo, le titre et maintenir la cohérence visuelle. Le système est facilement personnalisable pour d'autres bibliothèques en modifiant simplement le fichier de configuration.

## 🚀 Déploiement

### Build de Production

```bash
# Build optimisé pour la production
npm run build

# Vérifier la taille des bundles
npx vite-bundle-analyzer dist

# Prévisualiser le build localement
npm run preview
```

La configuration de build optimise automatiquement le code avec minification, tree-shaking, et code splitting. Les assets sont hashés pour le cache busting et les source maps sont générées pour le débogage production.

### Déploiement sur Netlify

#### Configuration netlify.toml

Le fichier netlify.toml configure Netlify pour publier le dossier dist avec la commande npm run build et Node.js version 18. Il inclut des redirections SPA qui redirigent toutes les routes vers index.html avec status 200 pour gérer le routing client-side. Les headers de sécurité incluent X-Frame-Options DENY, X-Content-Type-Options nosniff, et X-XSS-Protection. Les assets statiques dans /assets/ ont un cache long terme avec Cache-Control public, max-age d'un an et immutable.

#### Déploiement CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login et déploiement
netlify login
netlify init
netlify deploy --prod --dir=dist
```

### Déploiement sur Vercel

#### Configuration vercel.json

Le fichier vercel.json configure le déploiement avec la version 2 de l'API Vercel, spécifie npm run build comme commande de build et dist comme dossier de sortie. Il détecte automatiquement le framework Vite. Les rewrites redirigent toutes les routes vers index.html pour gérer le routing client-side SPA. Les headers configurent un cache long terme pour les assets statiques avec Cache-Control public et max-age d'un an. La variable d'environnement NODE_VERSION est fixée à 18.

#### Déploiement CLI

```bash
# Installer et déployer
npm install -g vercel
vercel login
vercel --prod
```

### Déploiement sur GitHub Pages

#### Workflow GitHub Actions

Le fichier .github/workflows/deploy.yml configure le déploiement automatique sur GitHub Pages. Il se déclenche sur les push vers la branche main et exécute un job build-and-deploy sur ubuntu-latest. Les étapes incluent le checkout du code, setup de Node.js 18 avec cache npm, installation des dépendances avec npm ci, exécution des tests, build de production, et déploiement vers GitHub Pages avec peaceiris/actions-gh-pages. Le déploiement utilise GITHUB_TOKEN et publie le dossier dist seulement si la branche est main.

### Variables d'Environnement

#### Configuration .env

Le fichier .env.example documente toutes les variables d'environnement nécessaires avec leurs valeurs par défaut. Il inclut VITE*OPENLIBRARY_API_BASE et VITE_WIKIPEDIA_API_BASE pour les URLs d'API, VITE_APP_TITLE pour le titre de l'application, et des feature flags comme VITE_ENABLE_ANALYTICS et VITE_ENABLE_CACHE. Les variables Vite doivent être préfixées par VITE* pour être accessible côté client. Le code valide la présence des variables requises au démarrage.

Le code valide la présence des variables requises au démarrage et utilise des valeurs par défaut appropriées. Cette configuration facilite le déploiement dans différents environnements.

## 🤝 Contribution

### Guidelines de Contribution

#### 1. Setup Environnement

```bash
# Fork et clone
git clone https://github.com/votre-username/openlibrary-app.git
cd openlibrary-app

# Installation et vérification
npm install
npm run dev
npm run test
npm run lint
```

#### 2. Standards de Code

##### Conventions de Nommage

- **Fichiers composants** : PascalCase (BookCard.tsx, AdvancedSearchPage.tsx)
- **Fichiers services** : camelCase (openLibrary.ts, wikipediaAPI.ts)
- **Variables/fonctions** : camelCase (bookDetails, fetchBookData)
- **Constantes** : SCREAMING_SNAKE_CASE (CACHE_DURATION, API_BASE_URL)

##### Structure des Composants

Chaque composant doit inclure une documentation JSDoc complète, des interfaces TypeScript pour les props, une gestion d'erreur appropriée, et des tests unitaires couvrant les cas principaux et d'erreur.

##### Tests Obligatoires

Tous les nouveaux composants nécessitent des tests couvrant le rendu de base, la gestion des props requises, les interactions utilisateur, et les cas d'erreur. Les tests doivent utiliser Testing Library et les mocks appropriés.

#### 3. Workflow Git

##### Branches

- `main` - Production stable
- `develop` - Développement en cours
- `feature/nom-feature` - Nouvelles fonctionnalités
- `fix/nom-bug` - Corrections de bugs
- `refactor/nom-refactor` - Refactoring

##### Messages de Commit

```bash
# Format: type(scope): description courte
feat(search): ajoute filtres par date publication
fix(api): corrige gestion erreur Wikipedia
docs(readme): met à jour instructions installation
style(layout): améliore responsive header
refactor(hooks): simplifie useTheme hook
test(components): ajoute tests BookCard
chore(deps): met à jour dépendances
```

##### Pull Request Process

Chaque PR doit inclure une description claire des changements, les tests appropriés, la mise à jour de la documentation si nécessaire, et passer la review d'au moins un mainteneur.

### Review Process

Les critères de review incluent la fonctionnalité (code fonctionne comme attendu), les tests (coverage maintenue), la performance (pas de régression), l'accessibilité (standards WCAG), le TypeScript (typage correct), et la documentation (JSDoc et README mis à jour).

## 🔧 Résolution de Problèmes

### Problèmes Courants

#### 1. Erreurs d'Installation

```bash
# Solutions par ordre de préférence:

# Nettoyer le cache npm
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Utiliser la version exacte de Node.js
nvm use 18
npm install

# Installer avec legacy peer deps
npm install --legacy-peer-deps

# Vérifier l'espace disque
df -h
```

#### 2. Problèmes de Développement

```bash
# HMR ne fonctionne pas
npm run dev -- --force

# Tests échouent
npm run test -- --reporter=verbose
npm run test -- BookCard.test.tsx

# Build échoue
npm run build -- --logLevel info
npx vite-bundle-analyzer dist
```

#### 3. Debugging Avancé

##### Configuration VS Code

Le fichier .vscode/settings.json configure VS Code pour préférer les imports relatifs, active la correction automatique ESLint et l'organisation des imports à la sauvegarde. Il configure Emmet pour supporter TypeScript avec la syntaxe JSX (typescriptreact). Ces paramètres améliorent l'expérience de développement avec auto-formatting et suggestions intelligentes.

##### Outils de Debug

- **React Developer Tools** : Extension navigateur obligatoire
- **Vite Debug** : `DEBUG=vite:* npm run dev`
- **Network Debug** : Intercepter les requêtes fetch en développement

### Performance Optimization

#### Bundle Analysis

```bash
# Analyser la taille des bundles
npm run build
npx vite-bundle-analyzer dist

# Identifier les gros imports
npx webpack-bundle-analyzer dist/assets/*.js
```

#### Optimisation Mémoire

Le hook useMemoryCheck peut détecter les fuites de mémoire en développement en monitorant l'utilisation du heap JavaScript toutes les 5 secondes avec performance.memory.

## 📄 Licence

### MIT License

Ce projet est distribué sous licence MIT, une licence open source permissive qui autorise l'utilisation, la modification, la distribution et la commercialisation du logiciel. La seule obligation est de conserver l'avis de copyright et la licence dans toutes les copies.

La licence MIT garantit que le logiciel est fourni "tel quel" sans garantie d'aucune sorte. Les auteurs ne peuvent être tenus responsables des dommages résultant de l'utilisation du logiciel.

---

## 📞 Support et Contact

### Ressources d'Aide


- **Documentation** : [docs.bibliotheque-municipale.fr](https://docs.bibliotheque-municipale.fr)
- **Issues GitHub** : [https://github.com/Reuss77/3webProj.git]
- **Discussions** : [github.com/Reuss77/3webProj/discussions](https://github.com/Reuss773webProj/discussions)


### Contact

- **Email** : contact@bibliotheque-municipale.fr
- **Phone** : +33 1 23 45 67 89
- **Discord** : [discord.gg/bibliotheque](https://discord.gg/bibliotheque)

### Roadmap

Les fonctionnalités prévues incluent un système de favoris, l'historique des recherches, l'export en PDF/CSV, un cache intelligent, le support PWA, et l'internationalisation. Les améliorations techniques planifiées comprennent la pagination, le lazy loading, les service workers, et les error boundaries React.

---

<div align="center">

**[⬆ Retour en haut](#-bibliothèque-municipale---application-web)**

_Développé avec ❤️ pour la communauté des lecteurs_

![Stars](https://img.shields.io/github/stars/username/openlibrary-app?style=social)
![Forks](https://img.shields.io/github/forks/username/openlibrary-app?style=social)
![Issues](https://img.shields.io/github/issues/username/openlibrary-app)
![PRs](https://img.shields.io/github/issues-pr/username/openlibrary-app)

</div>
