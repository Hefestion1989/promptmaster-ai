# PromptMaster AI

Aplicacion web para perfeccionar prompts con asistencia de IA. Toma ideas simples y las transforma en instrucciones mas claras, especificas y reutilizables para distintos modelos.

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

Experimental. La demo publica en Cloud Run queda en revision; el proyecto puede evaluarse desde el codigo y ejecutarse localmente.

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

2. Configura la API key de Gemini en un archivo `.env`:

```env
API_KEY=tu_clave_de_google_aistudio_aqui
```

3. Ejecuta la app:

```bash
npm run dev
```

Abre el enlace local que muestre Vite, normalmente `http://localhost:5173`.

## Seguridad

Nunca subas tu archivo `.env` a GitHub. Verifica antes de publicar cambios que no haya claves privadas en commits, capturas o logs.

## Relacion con el portfolio

PromptMaster AI es la version avanzada del taller de prompts. El mapa general esta en [`portfolio-proyectos`](https://github.com/Hefestion1989/portfolio-proyectos).
