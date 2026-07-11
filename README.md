# Kuarahy Tech — Sitio Web

Landing page oficial de **Kuarahy Tech**, estudio de desarrollo web y soluciones digitales en Paraguay.

## Sobre el proyecto

Sitio de una sola página que presenta el estudio: servicios, productos SaaS propios, casos y contacto. Construido con Astro + Tailwind, con el contenido de cada sección extraído a archivos de datos tipados para poder editarlo sin tocar el markup.

## Secciones

- **Inicio** — hero de presentación
- **Servicios** — desarrollo web/apps, automatización de procesos
- **Productos** — Cobranza360 y Cuadre (productos SaaS propios del área financiera)
- **Casos** — trabajos y clientes destacados
- **Nosotros** — sobre el equipo
- **FAQ** — preguntas frecuentes
- **Contacto** — enlace directo a WhatsApp

## Stack técnico

- [Astro](https://astro.build) (sitio estático, componentes `.astro`)
- [Tailwind CSS v4](https://tailwindcss.com) (tokens de marca vía `@theme` en `src/styles/global.css`)
- TypeScript para la interactividad (loader, tema, nav, reveals) sin frameworks de UI
- Fuentes: Outfit y Silkscreen (self-hosted, formato woff2)

## Estructura

```
├── src/
│   ├── components/   # Header, Hero, Servicios, Productos, Casos, Nosotros, Faq, Contacto, Footer, Button
│   ├── data/          # contenido editable: servicios.ts, productos.ts, casos.ts, nosotros.ts, faq.ts, site.ts
│   ├── layouts/        # BaseLayout.astro
│   ├── pages/          # index.astro
│   ├── scripts/        # loader, theme, nav, reveal, pixel sun (TS)
│   └── styles/          # global.css (tokens de marca + fuentes)
├── public/
│   ├── fonts/
│   └── img/
└── astro.config.mjs
```

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Luego abrir `http://localhost:4321`.

Para generar el build de producción:

```bash
npm run build
npm run preview
```

## Editar contenido

El texto de cada sección vive en `src/data/`: para cambiar un servicio, producto SaaS, caso de éxito, valor o pregunta frecuente, alcanza con editar el archivo `.ts` correspondiente, sin tocar los componentes `.astro`.

## Contacto

[WhatsApp](https://wa.me/595985895895)
