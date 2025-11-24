# PromptMaster AI 🪄

Una aplicación web moderna y minimalista diseñada para perfeccionar prompts para Inteligencia Artificial. Utiliza **Gemini 2.5** para transformar ideas simples en instrucciones de ingeniería de prompts de nivel experto.

![UI Preview](https://via.placeholder.com/800x400.png?text=PromptMaster+UI+Preview)

## ✨ Características

- **Optimización Multi-Modelo:** Prompts específicos para ChatGPT, Gemini, Claude, Midjourney, DALL-E y Copilot.
- **UI "Obsidian & Teal":** Diseño oscuro, limpio y profesional.
- **Explicación de Cambios:** Entiende *por qué* la IA mejoró tu prompt.
- **Tips Personalizados:** Recibe consejos tácticos para el modelo seleccionado.

## 🚀 Cómo usar este código

Si descargaste este repositorio y quieres correrlo en tu máquina:

1.  **Instalar dependencias:**
    Abre una terminal en la carpeta y ejecuta:
    ```bash
    npm install
    ```

2.  **Configurar la API Key:**
    Esta app requiere una API Key de Google Gemini.
    *   Crea un archivo llamado `.env` en la raíz del proyecto.
    *   Agrega tu clave así:
        ```env
        API_KEY=tu_clave_de_google_aistudio_aqui
        ```

3.  **Correr la app:**
    ```bash
    npm run dev
    ```
    Abre el link que aparece (usualmente `http://localhost:5173`).

## ⚠️ Nota de Seguridad

Nunca subas tu archivo `.env` a GitHub. Este repositorio ya incluye un archivo `.gitignore` para prevenirlo, pero siempre verifica que tu clave no sea pública.

## 🛠️ Tecnologías

- React + Vite
- Tailwind CSS
- Google GenAI SDK
- Lucide Icons
