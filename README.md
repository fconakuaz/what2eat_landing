<h1 align="center"><strong>🍎What2Eat</strong></h1>
<h3 align="center"><strong>Página de producto (landingpage)</strong></h3>

<br />
<div align="center">
<a style="font-size: 18px" href="https://what2eat-landing.vercel.app/">Demo</a>
<span> · </span>
<a style="font-size: 18px" href="https://github.com/fconakuaz/what2eat_landing">Repositorio en Git</a>
 
</div>

<br>

<img src="public/thumbW.webp" alt="What2Eat Screenshot">
 
<br>

Página de producto de **What2Eat** es una aplicación web diseñada para ayudarte a crear menús diarios personalizados utilizando **inteligencia artificial**. Basada en los ingredientes que tienes disponibles y tus preferencias alimenticias, What2Eat te permite optimizar tu alimentación, ahorrar tiempo y reducir desperdicios.

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

Astro busca archivos .astro o .md en el directorio src/pages/. Cada página se expone como una ruta basada en el nombre del archivo.

El directorio src/components/ se usa para almacenar componentes de Astro, React, Vue, Svelte o Preact.

Cualquier recurso estático, como imágenes, puede colocarse en el directorio public/ si no requiere transformación, o en assets/ si necesita ser importado directamente.

<br>

### Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Command             | Action                                              |
| :------------------ | :-------------------------------------------------- |
| `npm install`       | Instala dependencias                                |
| `npm run dev`       | Inicia el servidor local en localhost:4321          |
| `npm run build`     | Construye la versión de producción en ./dist        |
| `npm run preview`   | Previsualiza el sitio antes de desplegarlo          |
| `npm run check`     | Verifica el proyecto en busca de errores            |
| `npm run fix`       | Ejecuta Eslint y formatea el código con Prettier    |
| `npm run astro ...` | Ejecuta comandos CLI como astro add o astro preview |

<br>

### Deploy

#### Desplegar en producción (manual)

Puedes crear una versión optimizada para producción con:

```shell
npm run build
```

Una vez generado, tu sitio estará listo para desplegarse. Todos los archivos generados se encuentran en la carpeta dist, que puedes subir al servicio de hosting de tu preferencia.

**Creado por [Francisco Nakú Acosta Zárate](#)**
