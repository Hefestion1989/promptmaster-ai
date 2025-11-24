import { GoogleGenAI, Type } from "@google/genai";
import { TargetModel, OptimizationResult } from "../types";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

const GENERATION_CONFIG = {
  responseMimeType: "application/json",
  responseSchema: {
    type: Type.OBJECT,
    properties: {
      optimizedPrompt: {
        type: Type.STRING,
        description: "The rewritten, highly optimized prompt ready to be used."
      },
      explanation: {
        type: Type.STRING,
        description: "A brief explanation of why changes were made (in Spanish)."
      },
      tips: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "List of 3 short tips for this specific model (in Spanish)."
      }
    },
    required: ["optimizedPrompt", "explanation", "tips"]
  }
};

export const optimizePrompt = async (
  inputPrompt: string,
  targetModel: TargetModel
): Promise<OptimizationResult> => {
  if (!apiKey) {
    throw new Error("API Key no encontrada. Por favor configura process.env.API_KEY.");
  }

  const model = "gemini-2.5-flash"; 

  const systemInstruction = `
    Eres un Ingeniero de Prompts Experto (Prompt Engineer) especializado en LLMs y Modelos de Difusión.
    Tu objetivo es transformar la idea del usuario en el MEJOR prompt posible para el modelo: "${targetModel}".

    ### ESTRATEGIA POR TIPO DE MODELO:

    1. **MODELOS DE IMAGEN (Midjourney, DALL-E, Stable Diffusion):**
       - El prompt final DEBE ser en **INGLÉS**.
       - **Midjourney:** Usa estructura [Sujeto] + [Estilo/Entorno] + [Iluminación/Color] + [Parámetros]. Incluye parámetros como --v 6.0 --ar 16:9 --stylize 250 si es apropiado. Sé descriptivo y artístico.
       - **DALL-E 3:** Prefiere oraciones descriptivas naturales y detalladas sobre "palabras clave". Describe la escena como si se la contaras a un ilustrador.

    2. **MODELOS DE CÓDIGO (Copilot, Codex, Otras Apps de Dev):**
       - Mantén el idioma del usuario (o inglés si es técnico standard).
       - Estructura el prompt para incluir: [Rol: Experto Senior] + [Contexto del problema] + [Requisitos Funcionales] + [Restricciones (ej. TypeScript, sin librerías externas)] + [Formato de salida esperado].
       - Pide explícitamente manejo de errores y comentarios.

    3. **MODELOS DE TEXTO/LÓGICA (Gemini, ChatGPT, Claude):**
       - Usa técnicas como "Chain of Thought" (Pide que piense paso a paso).
       - Asigna una **Persona** fuerte (ej. "Actúa como un físico teórico ganador del Nobel").
       - Define claramente el formato de salida (Tabla, Markdown, Lista JSON).

    ### SALIDA REQUERIDA:
    Genera un JSON con:
    - "optimizedPrompt": El prompt final perfecto.
    - "explanation": Por qué mejoraste el prompt (en Español).
    - "tips": 3 consejos breves para usar este modelo específico (en Español).
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        {
          role: "user",
          parts: [{ text: `Idea original del usuario: "${inputPrompt}"` }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
        ...GENERATION_CONFIG
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text from Gemini");

    return JSON.parse(text) as OptimizationResult;

  } catch (error) {
    console.error("Error optimizing prompt:", error);
    throw new Error("Hubo un error al optimizar tu prompt. Por favor intenta de nuevo.");
  }
};