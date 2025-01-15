# 🍎 What2Eat

🌟 _Tu asistente inteligente para planificar comidas personalizadas_. 🌟

**What2Eat** es una aplicación web diseñada para ayudarte a crear menús diarios personalizados utilizando **inteligencia artificial**. Basada en los ingredientes que tienes disponibles y tus preferencias alimenticias, What2Eat te permite optimizar tu alimentación, ahorrar tiempo y reducir desperdicios.

- ✅ **Generación de menús inteligentes** con IA.
- ✅ **Compatibilidad con Google Fit** para ajustar tus menús según tu actividad física.
- ✅ **Personalización** para dietas especiales: vegetariana, sin gluten, alta en proteínas, etc.
- ✅ **Gestión eficiente de inventarios**: usa lo que tienes en tu despensa antes de que caduque.
- ✅ **Interfaz fácil de usar**, rápida y optimizada.
- ✅ **Multilingüe**, con soporte para varios idiomas.

<br>

<img src="public/thumbW.webp" alt="What2Eat Screenshot">
 
<br>

<details open>
<summary>Índice</summary>

- [Demo](#demo)
- [Características principales](#características-principales)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Comandos](#comandos)
- [Configuración](#configuración)
- [Despliegue](#despliegue)
- [Preguntas frecuentes](#preguntas-frecuentes)
- [Contribuciones](#contribuciones)
- [Agradecimientos](#agradecimientos)
- [Licencia](#licencia)

</details>

<br>

## Demo

https://what2eat-three.vercel.app/

<br>

## Características principales

- **Menús personalizados:** Genera comidas adaptadas a tus gustos y necesidades.
- **Conexión con Google Fit:** Ajusta las calorías y nutrientes de tus menús según tu actividad física.
- **Gestión de inventarios:** Aprovecha al máximo los ingredientes que tienes antes de que caduquen.
- **Sostenibilidad:** Reduce desperdicios y fomenta un estilo de vida más consciente.
- **Fácil integración:** Interfaz moderna, rápida y accesible.

---

## Estructura del proyecto

```plaintext
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── MenuGenerator.astro
│   │   ├── GoogleFitIntegration.astro
│   │   └── ...
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── ...
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   └── utils/
├── package.json
├── astro.config.ts
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:4321`        |
| `npm run build`     | Build your production site to `./dist/`            |
| `npm run preview`   | Preview your build locally, before deploying       |
| `npm run check`     | Check your project for errors                      |
| `npm run fix`       | Run Eslint and format codes with Prettier          |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Example'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # If the blog will be enabled
    postsPerPage: 6 # Number of posts per page

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post
    relatedPostsCount: 4 # Number of related posts to display

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.
