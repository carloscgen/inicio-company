# Landing institucional - BRAND_NAME

Landing page en React + Vite + TypeScript + Tailwind v4 + shadcn/ui para una empresa de software a medida orientada a negocios reales.

## Requisitos

- Node.js 20+
- npm 10+

## Instalación y ejecución

```bash
npm install
npm run dev
```

### Otros comandos útiles

```bash
npm run build
npm run preview
npm run lint
```

## Configuración rápida de marca

Editá [src/config/brand.ts](src/config/brand.ts):

```ts
export const brandConfig = {
  name: "BRAND_NAME",
  location: "Mallorca / Online",
  email: "hola@brand.com",
} as const
```

Ese objeto se usa en toda la web (header, hero, CTA y footer), así que al cambiarlo se actualiza todo.

## Estructura principal

```txt
src/
  App.tsx
  index.css
  config/
    brand.ts
  data/
    site-content.ts
  components/
    Header.tsx
    Hero.tsx
    Positioning.tsx
    Services.tsx
    Sectors.tsx
    Process.tsx
    Projects.tsx
    About.tsx
    CTA.tsx
    Footer.tsx
```

## Personalización de contenido

Los textos y listas editables están centralizados en [src/data/site-content.ts](src/data/site-content.ts):

- navegación
- servicios
- sectores
- pasos del proceso
- proyectos placeholder
- highlights y stack

Esto permite iterar rápido sin tocar la estructura visual.
