# PromptMaster AI

Aplicacion web para perfeccionar prompts con asistencia de IA. Toma ideas simples y las transforma en instrucciones mas claras, especificas y reutilizables para distintos modelos.

**Demo publica:** [hefestion1989.github.io/promptmaster-ai](https://hefestion1989.github.io/promptmaster-ai/)

## Proposito

PromptMaster AI es la version mas completa del taller de prompts: usa React, Vite y Gemini para generar mejoras, explicar cambios y ofrecer consejos tacticos segun el modelo elegido.

Esta pensado como producto personal y pieza de portfolio para explorar interfaces de IA aplicadas a escritura, comunicacion con modelos y productividad creativa.

Para una version estatica, offline y sin API key, mira [`Prompts Workshop`](https://github.com/Hefestion1989/Prompts).

## Caracteristicas

- Optimizacion multi-modelo para ChatGPT, Gemini, Claude, Midjourney, DALL-E y Copilot.
- Mejora guiada de prompts a partir de objetivo, tono, audiencia y formato esperado.
- Explicacion de cambios para entender que se mejoro y por que.
- Interfaz oscura, minimalista y orientada al uso rapido.

## Estado del proyecto

Experimental. La demo se publica automaticamente en GitHub Pages desde la rama `main`. Para generar prompts, cada visitante ingresa su propia API key de Gemini.

El repositorio debe usar **Settings > Pages > Source: GitHub Actions**. A partir de ahi, cada cambio integrado en `main` se valida y despliega mediante el workflow incluido.

## Tecnologias

- React + Vite
- Tailwind CSS
- Google GenAI SDK
- Lucide Icons

## Uso local

1. Instala dependencias:

```bash
npm install
```

2. Ejecuta la app:

```bash
npm run dev
```

Abre el enlace local que muestre Vite, normalmente `http://localhost:5173`.

Para validar una modificacion antes de publicarla:

```bash
npm run check
```

## Seguridad

La aplicacion pide la API key al abrirse y la conserva solo en memoria durante esa pestana. No la incorpora al bundle, no usa archivos `.env` y no la guarda en el almacenamiento del navegador.

El navegador envia la clave directamente a Google Gemini. Si el proyecto necesitara publicar una clave propia, deberia hacerlo mediante un backend que mantenga el secreto fuera del cliente.

## Relacion con el portfolio

PromptMaster AI es la version avanzada del taller de prompts. El mapa general esta en [`portfolio-proyectos`](https://github.com/Hefestion1989/portfolio-proyectos).
